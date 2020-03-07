---
date: '2020-03-04'
title: 'What is Developer UX?'
category: ui,ux,developer,design
banner: './images/banner.jpg'
imageAltText: 'white tiger lying down'
bannerCredit: 'Photo by Smit Patel'
keywords: 'ui,ux,developer,design,usability'
---

> Developer UX is the user experience from a developers perspective when using a product. 

I'm sure you've heard of UX (User Experience) and from what I have seen and read online it mostly relates to the user experience of end-users when using a product or service. 

**But what about the developers building the products or services?**

In this post I'm going to talk about the UX from a developers perspective when using software libraries, UI components, and other developer tools. I'll cover different developers types with some good and bad examples of developer UX. And I've listed Jakob Nielson's 10 usability heuristics below because I believe they can used alot more to improve developer UX. 

## Developer Types

![Developer types](./images/devtypes.png)

As an example, I've highlighted three different types of developers. Application developers, framework developers, and library developers. Each type of developer might have specific tools that they use as they work. 

Let's say that an application developer uses UI components to build web applications, framework developers use testing libraries while building UI components, and library developers use command line tools to build testing libraries. Each of these developers will experience a variety of pain points.

## Bad UX / Good UX

So what's the difference between a good developer experience and a bad developer experience? These examples are contrived.

**Bad UX for an application developer**
```javascript
<Panel isNotBordered={true}>
  // confusing alignment props
  <PanelTitle isNotAlignedToSide="right">"Panel Title"</PanelTitle>
  // default pink background & not visible
  <PanelContent showPinkBackgroud={false} isNotVisible={false}>
    "This is the panel content."
  </PanelContent>
</Panel>
```
This is an example of a bad user experience for an application developer. The UI components they have to use to build their web application have badly defined props and terrible defaults. Using components like these would be very hard to reason about and maintain.

**Good UX for an application developer**
```javascript
// easy to use props
<Panel bordered={true} titleCentered={true} title="Panel Title">
  // sensible defaults
  <PanelContent>
    "This is the panel content."
  </PanelContent>
</Panel>
```
This example is a better user experience for an application developer. The UI components have clear well defined props and sensible defaults. I think developers would prefer to use and maintain this type of UI component.

**Bad UX for a framework developer**
```javascript
// bad function naming
test1st('verifies that the panel class is set to the root element', () => {  
  const panel = createFakeComponentWithSomeExtraStuffToMakeItWork(
    <Panel>
      <PanelBody>"Panel content"</PanelBody>
    </Panel>
  );
  // multiple stages to get component ready for testing
  const componentReadyForTesting = prepItemForTest(panel);
  
  expectToFindDiv3(componentReadyForTesting
    .find('div').first().hasClass('root')).toBeTruthy();
});
```
In this example a framework developer is building some UI components that need to be tested. The testing library they are using provides terrible function names. It also requires that the components be passed through some setup steps, and finally the expectation functions are not great.

**Good UX for a framework developer**

```javascript
test('verifies that the panel class is set to the root element', () => {
  const panel = mount(
    <Panel>
      <PanelBody>"Panel content"</PanelBody>
    </Panel>
  );
  expect(panel.find('div').first().hasClass('root')).toBeTruthy();
});
```

Compared to the example above this testing library provides a much better UX for a developer. Easy to understand testing function with minimal steps. The expectation is straight forward and generic enough to be used in many different context.

**Bad UX for a library developer**

![Bad terminal output](../what-is-dev-ux/images/badterminaloutput.png)

A developer building a library wants to run some tests on the command line. They run `npm test` and see this output. No feedback to the developer that tests are running, no indication of the number of tests being run, or if any have passed or failed. This would be a bad user experience for a developer.

**Good UX for a library developer**

![Good terminal output](../what-is-dev-ux/images/goodterminaloutput.png)

Now compare this console output to the bad UX above. A developer runs the tests, and the result shows the number of tests and a coverage summary. Of coarse this could be improved but it is a much better user experience for the developer.

The examples here highlight the differences in user experience from a developers perspective in a few scenarios. This is very different to the UX that an end-user would have using a web application or website.

## 10 Usability heuristics for user interface design

> Jakob Nielsen's 10 general principles for interaction design. They are called "heuristics" because they are broad rules of thumb and not specific usability guidelines. -- <cite>https://www.nngroup.com/articles/ten-usability-heuristics/</cite>

Jakob Nielsen's user interaction design heuristics can help when it comes to designing a good user experience for developers. Not all of the heuristics may be easily applied to UI components, library APIs, or command line output, but they could provide some guidance.

- Visibility of system status

The system should always keep users informed about what is going on, through appropriate feedback within reasonable time.

- Match between system and the real world

The system should speak the users' language, with words, phrases and concepts familiar to the user, rather than system-oriented terms. Follow real-world conventions, making information appear in a natural and logical order.

- User control and freedom

Users often choose system functions by mistake and will need a clearly marked "emergency exit" to leave the unwanted state without having to go through an extended dialogue. Support undo and redo.

- Consistency and standards
  
Users should not have to wonder whether different words, situations, or actions mean the same thing. Follow platform conventions.

- Error prevention

Even better than good error messages is a careful design which prevents a problem from occurring in the first place. Either eliminate error-prone conditions or check for them and present users with a confirmation option before they commit to the action.

- Recognition rather than recall

Minimize the user's memory load by making objects, actions, and options visible. The user should not have to remember information from one part of the dialogue to another. Instructions for use of the system should be visible or easily retrievable whenever appropriate.

- Flexibility and efficiency of use

Accelerators — unseen by the novice user — may often speed up the interaction for the expert user such that the system can cater to both inexperienced and experienced users. Allow users to tailor frequent actions.

- Aesthetic and minimalist design
  
Dialogues should not contain information which is irrelevant or rarely needed. Every extra unit of information in a dialogue competes with the relevant units of information and diminishes their relative visibility.

- Help users recognize, diagnose, and recover from errors

Error messages should be expressed in plain language (no codes), precisely indicate the problem, and constructively suggest a solution.

- Help and documentation

Even though it is better if the system can be used without documentation, it may be necessary to provide help and documentation. Any such information should be easy to search, focused on the user's task, list concrete steps to be carried out, and not be too large.

## Conclusion

In this post I talked about the user experience from a developers perspective. I've highlighted three different types of developers, application developer, framework developer, and library developer. A developer could be all three types in their role as a software engineer and I've used them to categorize the examples of good and bad user experiences they may encounter. I've also listed Jakob Nielson's 10 usability heuristics for interaction design at the end. 

I believe that Jakob Neilson's heuristics are already being applied to software libraries and tools to improve the user experience for developers, but it seems that only sometimes it is a conscious effort by the creators. By following the heuristics more closely we can greatly improve the usability of the things we build, and hopefully make developers like me a little happier. Thanks for reading!.