---
date: '2020-02-01'
title: 'AC Visitor Center'
banner: './images/banner.jpg'
imageAltText: 'baby skunk standing on table'
bannerCredit: 'Photo by Steve Johnson'
bannerLink: 'https://unsplash.com/photos/wqhId9KS-do'
# see src/pages/index.js for default keywords
keywords: nodejs,react,firebase,videogames,saas
---

> AC Visitor Center is a queue manager using ReactJS and Firebase created to solve a problem I had in a video game. It allows for a secret code to be securely exposed to the first person in the queue.

<!-- end -->

In this post I'm going to describe the AC Visitor Center project. The idea for this little side project came from playing a video game, I won't mention the game here but it involves islands, turnips, and traders. I will talk about the UI/UX design, the features of Firebase that I used which include hosting, real-time database, firestore database, and analytics. I'll also talk about some interesting problems I had to solve along the way. 


## Mechanics

Your island has a shop where turnips can be sold at a different price each day, excluding Sundays when you can only buy turnips. Owners of islands can allow remote players to visit their island using a code to sell their turnips. Each island has a limit on the number of visitors allowed on the island at a time, but with each new visitor comes an increase in the number of game-play interruptions.

As visitors come and go there is a delay of ~60 seconds each time to watch a cut scene of them arriving or leaving. This can become very frustrating for players when there are alot of visitors trying to arrive and leave the island constantly. Alot of traffic means alot of delay for all players. 

## Queues

![people queuing at an ice-cream truck](./images/queue.jpg)
[Photo by Florencia Viadana](https://unsplash.com/photos/mixpzw_FlcA)

Using a queue enables the owner of the island to limit the number of people on the island at any one time, and also to control the number of visitors arriving. This will reduce the number of interruptions from visitors arriving and leaving making the experience alot nicer for all players involved. There are some other issues with this video game mechanic that cannot be solved with a simple queue, but I won't go into those.

## Design

The visitor center has two types of users, the owner of the island, and the visitor trying to get to the island. Each user type has different requirements of the visitor center and the queue inside. The queue itself must be running in a browser to operate correctly by fetching realtime data of the queues status. This means the queue itself has a status of running or stopped, which is conveyed by the visitor center being open or closed. The visitor center must provide a code to each visitor so they can successfully connect and visit the island.

As a visitor:
- I want to join the queue so that I get to visit the island
- I want to leave the queue if I no longer want to wait
- I want to get the secret code to visit the island
- I want to know more about the island before I join the queue

As an owner:
- I want to provide some information to users about the island and why they should visit
- I want to remove the first visitor in the queue to allow the next visitor to get the code
- I want to remove all visitors in the queue to start a fresh
- I want to lock the queue to prevent more visitors joining
- I want to display the secret code to only the first visitor in the queue to allow them to connect to the island

![sketch of ui design](./images/ui_01.png)



## Conclusion

## References