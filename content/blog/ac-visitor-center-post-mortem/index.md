---
date: '2020-02-01'
title: 'Side project: AC Visitor Center'
banner: './images/banner.jpg'
imageAltText: 'baby skunk standing on table'
bannerCredit: 'Photo by Steve Johnson'
bannerLink: 'https://unsplash.com/photos/wqhId9KS-do'
# see src/pages/index.js for default keywords
keywords: nodejs,react,firebase,videogames,saas
---

> AC Visitor Center is a queue manager using ReactJS and Firebase created to solve a problem I had in a video game. It allows for a secret code to be securely exposed to the first person in a queue.

<!-- end -->

In this post I'm going to describe the AC Visitor Center project. The idea for this little side project came from playing a video game, I won't mention the game here but it involves islands, turnips, and traders. I will talk about the UI/UX design and the features of Firebase that I used which include hosting, real-time database, firestore database, and analytics. I'll also talk about some interesting problems I had to solve along the way.

## Mechanics

Your island in the video game has a shop where turnips can be sold at a different price each day, excluding Sundays when you can only buy turnips. Owners of an island can allow remote players to visit their island using a secret code where they can then sell their turnips. Each island has a limit of 8 live connections from visitors which means a total of 9 people on an island, 8 visitors and the owner.

As visitors arrive and leave the island there is a delay of ~60 seconds each time to watch a cut scene of their arrival progress. This can become very frustrating for players when there are alot of visitors trying to arrive and leave the island constantly. Even with a limit of 8 visitors this means alot of delay for all players involved.

How can we reduce this delay caused by cut scenes so that we can get on with selling our turnips?

## Queues

![people queuing at an ice-cream truck](./images/queue.jpg)
[Photo by Florencia Viadana](https://unsplash.com/photos/mixpzw_FlcA)

Using a queue enables the owner to limit the number of people on the island at any one time, and also to control the number of visitors arriving. This will reduce the number of interruptions from visitors arriving and leaving making the experience alot nicer for all players involved. There are some other issues with this video game mechanic that cannot be solved with a simple queue, but I won't go into those.

The type of queue we need to use here is a FIFO (First In First Out) queue, if I joined the queue first I'll be the first to get my ice-cream.

## Overview

The web application will function similar to a visitor center, a place for people to arrive and relax while they wait to visit an island. The visitor center has two types of users, the **owner** of the island, and the **visitor** trying to get to the island. Each user type has different requirements of the visitor center and the waiting queue.

The visitor center itself must be running in a browser to operate correctly, by fetching realtime data for status updates. This means the visitor center itself has a status of open or closed, and the waiting queue may be locked or unlocked. The visitor center must also provide a code to each visitor so they can successfully use it to create a connection and visit the island.

## Planning

Each user type has different requirements of the visitor center, some of which are listed below as user stories.

As a **visitor**:

- I want to know more about the island before I join the queue so that I'm not wasting my time (required)
- I want to join the queue so that I can get the secret code (required)
- I want to get the latest code when it is updated so that I can visit the island successfully (required)
- I want to leave the queue so that other visitors can get the secret code more quickly (nice to have)

As an **owner**:

- I want to provide information to users about the island so that they don't waste their time waiting in the queue (required)
- I want to remove the first visitor in the queue so that the next visitor can get the secret code (required)
- I want to remove all visitors in the queue so that the waiting list can be cleared (required)
- I want to lock the queue so that visitors can't join the queue unless I allow it (required)
- I want to display the secret code to only the first visitor in the queue so that I can control who connects to my island to visit (required)
- I want to send a message to users in the queue so that I can update them with useful information (nice to have)

## Design

Using the user stories outlined above I roughly sketched the UI for each user type. The dotted line is the mobile devices visible screen area. On the left is the view the owner of the visitor center will see. On the right is the view the visitor will see, on the far right is the dialog popup.

![sketch of ui design](./images/ui_01.png)
_Sketches of the visitor center mobile UI design for both user types owner and visitor._

On the left is the owners view. Owners can edit the title and summary of the visitor center. They can also edit the secret code that will be displayed to visitors in a popup dialog. The waiting list is also immediately displayed for owners which provides functionality to clear the entire list, or lock it to prevent more visitors joining.

Ont the right is the visitors view. The title and summary of the visitor center is visible at the top of the page, but not editable. Below this is an input for the visitors username in order to join the queue. They can also leave the queue if they no longer want to wait. Once a user has joined the queue the waiting list is displayed which will update in real-time. When a visitor is first in the queue a dialog popup will be displayed with the secret code. This dialog can be dismissed by the visitor by clicking the close button.

Not shown here is the UI design of the messaging feature listed in the user stories. With this very simple design we could start building out the project.

## Implementation

Implementing this project was surprisingly challenging. At first it seemed very straight forward using ReactJS and Google Firebase but as the project progressed there were a few considerations that forced me to make some design changes along the way.

### Exponential database read requests

After releasing the project to Beta users to get feedback and weed out some of the bugs I noticed in the Firebase analytics dashboard that the number of read requests being made to the Firestore database was growing very quickly. For the number of users that were active on the site this did not feel right to me so I dug a little deeper.

Listeners are used to watch for real-time changes to the queue data stored in Firestore, the queue is rendered as the waiting list in the UI sketches above. For the queue to operate correctly the client application needs to be open in both the owner and visitors browser. When a visitor joins or leaves the queue all users will see the updated queue. With Firebase each change to the data being listened to in a Firestore database causes a new read request, websockets are used provide these real-time updates.

![spike in firstore read requests](./images/firestore_read_spikes.png)
_Firestore database read requests, day of the month along the X axis, number of read requests on the Y axis. Number of requests move from an exponential to linear trend._

The first iteration of the project allowed all users that opened the app to see the queue. This meant that every instance of the client application loaded in a browser would result in firstly a read to get the full list of visitors currently waiting and then a read each time the queue was updated in some way, either someone joined, left, or was removed by the owner. This meant a huge number of read requests per user as the queue was being updated in real-time. You can see on days 1 to 3 the number of requests is on an exponential trend.

To fix this issue I updated the design so that the waiting list was only visible to visitors when they joined the queue, owners would still see the queue at all times, and visitors that were not in the queue would not see the queue which meant no real-time updates. This small change resulted in a remarkable reduction in read requests with minimal impact to the user experience. Instead of seeing the full waiting list a visitor would only see the number of people waiting in the queue at that time, a snapshot, which only required a single read. Notice on days 4 and 5 the number of read requests changes to a linear trend. The read requests caused by the real-time updates were only being made by visitors currently in the queue.

Seeing this behaviour highlighted the issues that can occur with realtime updates if your design does not consider them in the beginning, think For each new user running the application in their browser the reads grew exponentially. This would have been a very expensive design at scale.

### Firebase security rules

Using Google Firebase and Firestore requires implementing some security rules that are used to restrict access to data.

## References
