---
date: '2020-10-21'
title: 'Algorithm and data structures: Two Sum'
banner: './images/banner.jpg'
imageAltText: 'stack of stones in forest'
bannerCredit: 'Photo by Sean Stratton'
bannerLink: 'https://unsplash.com/photos/ObpCE_X3j6U'
# see src/pages/index.js for default keywords
keywords: algorithms,data structures,puzzles,fun
excerpt: Given an array of integers and an integer target, return indices of the two numbers such that they add up to target.
---

>If you’re thinking without writing, you only think you’re thinking - [Leslie Lamport](https://en.wikipedia.org/wiki/Leslie_Lamport)

I'm writing this post in an attempt to build intuition for solving algorithm and data structure coding problems. Hopefully you get something from it.

## Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Solution

```javascript
var twoSum = function(nums, target) {
    var result = [];
    for(let i = 0; i < nums.length; i++){
        // j = i + 1 to keep time less than O(n^2)
        // we don't need to keep checking from the start of the array of integers
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }        
        }
    }
    return []
};
```

### Test case

```meta
input = [15, 11, 7, 2]
target = 9

// for loops
i = 0, j = 1
input[0] + input[1] = 26

i = 0, j = 2
input[0] + input[2] = 22

i = 0, j = 3
input[0] + input[3] = 17

i = 1, j = 2
input[1] + input[2] = 18

i = 1, j = 3
input[1] + input[3] = 13

i = 2, j = 3
input[2] + input[3] = 9

return [2, 3]
```


## Related

- [Algorithms and data structures: Binary search tree inorder traversal](/blog/algorithm-data-structures-problem-binary-search-tree-inorder-traversal)
- [Algorithms and data structures: Fuel station](/blog/algorithm-data-structures-problem-fuel-station/)
