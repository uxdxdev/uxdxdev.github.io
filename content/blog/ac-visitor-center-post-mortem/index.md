---
date: '2020-02-01'
title: 'AC Visitor Center'
banner: './images/banner.jpg'
imageAltText: 'baby skunk standing on table'
bannerCredit: 'Photo by Bryan Padron'
bannerLink: 'https://unsplash.com/photos/Tm-EWw4403w'
keywords: saas,firebase,nodejs,reactjs,ui,uxdesign,usability
---

> AC Visitor Center is a queue manager using ReactJS and Firebase created to solve a problem I had in a video game. It allows for a secret code to be securely exposed to the first person in the queue.

<!-- end -->

In this post I'm going to describe the AC Visitor Center project. The idea for this little side project came from playing a video game, I won't mention the game here but it involves islands, turnips, and traders. I will talk about the UI/UX design, the features of Firebase that I used which include hosting, real-time database, firestore database, cloud functions, and analytics. I'll also talk about some interesting problems I had to solve along the way. 

## The problem

Your island has a shop where turnips can be sold at a different price depending on the date and time each day. Owners of islands can allow remote players to visit their island to sell their turnips. Each island can have a 8 visitors at a time, but with each new visitor comes an increase in the number of game-play interruptions. As visitors come and go there is a delay of ~60 seconds each time to watch them arrive or leave. This can become very frustrating for players when visitors want to quickly arrive, sell their turnips, then leave. Alot of traffic means alot of delay. The solution to this problem is using a queue. 


## Conclusion

## References