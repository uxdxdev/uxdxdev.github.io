---
date: '2020-04-01'
title: 'Deterministic sorting'
banner: './images/banner.jpg'
imageAltText: 'blue whale'
bannerCredit: 'Photo by Todd Cravens'
bannerLink: 'https://unsplash.com/photos/lwACYK8ScmA'
# see src/pages/index.js for default keywords
keywords: nodejs,sorting
---

> When using Array.sort() make sure your comparator function is deterministic. It should always return the same value for the same inputs, even if the argument order changes.

<!-- end -->

In NodeJS version 11 the [v8 engine was updated to version 7.0](https://github.com/nodejs/node/pull/22754). One of the issues that was fixed in this release was a move to a [stable sorting algorithm](https://bugs.chromium.org/p/v8/issues/detail?id=90). You can read more about sorting in v8 [here](https://v8.dev/blog/array-sort).

> Previously, V8 used an unstable QuickSort for arrays with more than 10 elements. Now, we use the stable TimSort algorithm. 
> - Mathias Bynens https://twitter.com/mathias/status/1036626116654637057

This update changed the argument order of the `Array.sort()` comparator function. 

```javascript
// previously NodeJS 10
Array.sort((a, b) => {
    // compare a and b
})

// now NodeJS 12
Array.sort((b, a) => {
    // compare a and b
})
```
Notice `a` and `b` have switched, if you relied on the value of `a` being first in the argument order it is now second. I've recreated the bug I encountered below.

## Problem

```javascript
var numbersArray = [22, 34, 5, 104, 76]
var result = numbersArray.sort((a, b)=>{
    return a - b;
})
console.log(result);

[ 5, 22, 34, 76, 104 ]
```
If you are sorting a simple array of numbers then everything should be fine. You can use the `-` operator to provide a nice deterministic comparator function. But if your array elements are a little more complex and you are using a mix of JavaScript operators to resolve your sorting, you may be in trouble.

```javascript
var objectArray = [
    {id: 1, name: 'winston', age: 22},
    {id: 2, name: 'winston', age: 22},
    {id: 3, name: 'jess', age: 5},
    {id: 4, name: 'nick', age: 104},
    {id: 5, name: 'cece', age: 76}
    ]
var result = objectArray.sort((a, b) => {    
    // sort by name, if names are equal sort by age
    // else no change to sort order
    return a.name > b.name || (a.name === b.name && a.age > b.age) ? -1 : 1;
})
console.log(result);

// NodeJS 10
[ { id: 2, name: 'winston', age: 22 }, // ! ORDER CHANGED
  { id: 1, name: 'winston', age: 22 },
  { id: 4, name: 'nick', age: 104 },
  { id: 3, name: 'jess', age: 5 },
  { id: 5, name: 'cece', age: 76 } ]

// NodeJS 12
[ { id: 1, name: 'winston', age: 22 },
  { id: 2, name: 'winston', age: 22 },
  { id: 4, name: 'nick', age: 104 },
  { id: 3, name: 'jess', age: 5 },
  { id: 5, name: 'cece', age: 76 } ]
```

The example above shows a comparator function for sorting an array of objects. The intended result is as follows:

- Sort by name
- If names are equal, sort by age
- Else no change to sort order

We can see that in NodeJS 12 all is fine, the array is sorted as intended, and specifically when the `name` and `age` values are the same there is no change to the original order of the elements. Great!. But now if we look at the result when this code is run in NodeJS 10, we can see that when the `name` and `age` values are equal, the sort order is affected.

The bug here is that when the `name` values are equal the comparator function resolves with either `-1` or `1`, there is no resolution where `0` is returned. So we have a bug and its directly related to the argument order of this function.

## Solution

```javascript
var result = objectArray.sort((a, b) => {
    if(a.name === b.name){
        return a.age - b.age
    }
    return b.name.localeCompare(a.name);
})

// NodeJS 10 + NodeJS 12
[ { id: 1, name: 'winston', age: 22 },
  { id: 2, name: 'winston', age: 22 },
  { id: 4, name: 'nick', age: 104 },
  { id: 3, name: 'jess', age: 5 },
  { id: 5, name: 'cece', age: 76 } ]
```

A solution to fix this bug is to first check if the names are equal, then sort by age using the `-` operator. And if the names are not equal then using `localeCompare()` will provide the desired return values for our deterministic comparator function.

> The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.

## Conclusion

Working on this bug has reminded me that my code is only a small cog in the machine that is NodeJS and the JavaScript ecosystem. There are a lot of moving parts that get involved to run my code in the way that I expect. It is easy to forget those layers of complexity and to wonder why your code works on your computer, but not in production. 

In relation to developer experience, bugs that arise from changes to your development environment are always a little tricky to get to the root of. And testing for these changes is very important when designing a good developer experience. Developers may use environments that are very different to yours so it's important to define the boundaries as best you can, and to test those environments you support.

And the next time I'm working on a weird little bug I'll be quicker to look just a little deeper into the stack, after a quick walk of course.

![haunted computer](./images/inexplicable_2x.png)
[xkcd.com](https://xkcd.com/1316/)

## Related
- [Deterministic vs. Pure functions](/blog/deterministic-vs-pure-functions)

## References

- [MDN: Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [MDN: Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)
- [MDN: String.prototype.localeCompare()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
- [v8.dev "Getting things sorted in V8"](https://v8.dev/blog/array-sort)

