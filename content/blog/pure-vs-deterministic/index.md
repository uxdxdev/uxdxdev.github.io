---
date: '2020-03-01'
title: 'Deterministic vs. Pure functions'
banner: './images/banner.jpg'
imageAltText: 'dog laying on back'
bannerCredit: 'Photo by Michael Oxendine'
bannerLink: 'https://unsplash.com/photos/t7wwffh6x8E'
# see src/pages/index.js for default keywords
keywords: nodejs,pure,deterministic,functions
---

> All pure functions are deterministic, but not all deterministic functions are pure. Pure functions are easier to reason about and test, you should aim for pure functions.

<!-- end -->

Pure functions are deterministic AND they have no side effects. Deterministic functions may have side effects. Both types of functions return the same output every time they are invoked with the same inputs between invocations. 

You should aim for Pure functions, they are easier to reason about and test.

### Deterministic

> In computer science, a deterministic algorithm is an algorithm which, given a particular input, will always produce the same output, with the underlying machine always passing through the same sequence of states. Deterministic algorithms are by far the most studied and familiar kind of algorithm, as well as one of the most practical, since they can be run on real machines efficiently.
> 
> https://en.wikipedia.org/wiki/Deterministic_algorithm

```javascript
let variableX = 0;
const deterministicFunction = (a, b) => {
    variableX += a + b // side effect
    return a + b
}
deterministicFunction(5, 7) // 12
```
This function will return the same output for inputs `5` and `7` no matter how many times we invoke it. It will also increment `variableX` outside of the functions scope, which is known as a side effect. This is a deterministic function, but its not pure because it generates a side effect by updating `variableX`.

### Pure

> In computer programming, a pure function is a function that has the following properties:
> - Its return value is the same for the same arguments (no variation with local static variables, non-local variables, mutable reference arguments or input streams from I/O devices).
> - Its evaluation has no side effects (no mutation of local static variables, non-local variables, mutable reference arguments or I/O streams).
> 
> https://en.wikipedia.org/wiki/Pure_function

```javascript
const pureFunction = (a, b) => {
    // no side effects
    return a + b
}
pureFunction(5, 7) // 12
```
This deterministic function will return the same output for inputs `5` and `7` no matter how many times we invoke it, and you'll notice that it does not generate any side effects when invoked. This is known as a pure function.

Another way to think about pure functions is that they can be replaced by the value the function produces, without affecting the overall programs behaviour. This is known as [Referential transparency](https://en.wikipedia.org/wiki/Referential_transparency). Deterministic functions can have side effects that could affect the overall programs behaviour.

### Not deterministic or pure

```javascript
let variableX = 0;
const hardToTestFunction = (a, b) => {
    variableX += a + b // side effect
    return a + b * variableX // relies on state outside of function scope
}
hardToTestFunction(5, 7) // 89
hardToTestFunction(5, 7) // 173
```
When the result of a function is not strictly determined by the inputs, it is non-deterministic, and therefore not pure. In the example above, the result returned by the function is affected by the value of `variableX` and this will change with each new invocation.

# Testing



## Conclusion



## References

