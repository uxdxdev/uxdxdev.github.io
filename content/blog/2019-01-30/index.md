---
date: '2019-01-30'
title: 'Java Object equals() and hashcode() methods'
category: Java, Code, Collections
---

I was recently asked this question in an interview:

> Why is overriding the equals() and hashcode() methods on your class important when using Collections?

At first I didn't really understand the question, I was thinking more along the
lines of how it might be done as opposed to why you would actually do it. I
struggled to find the answer they were looking for. I continued to ask more
questions hoping to narrow down what the interviewer was looking for exactly. I
didn't provide a solid answer to the question but I talked through what I was
thinking and came close, I think.

In hindsight, and with some additional Googling, I can see
that the question was very simple, it was my lack of experience with the
context that was the problem. Curious to know the answer to the question I did
some searching.

So it turns out the reason why you would override the `equals()` and
`hashCode()` methods in your class is when using the Java Collections API for
things like `Hashtable`, `Hashset`, or `HashMap`. Both of
these methods are called depending on the context and data structure used.

# Hashtables, HashSets, and HashMaps

To understand why its critical to override these methods its important to
understand how these collections work at a high level. For example using Set to
store `Student` objects. We want to leverage the functionality of a Set to only allow unique objects to be stored, no duplicates.

```java
Student student1 = new Student("111", "Donald", "donaldtrump@gmail.com", 60);
Student student2 = new Student("111", "Donald", "donaldtrump@gmail.com", 60);
Student student3 = new Student("888", "Peter", "peterpan@gmail.com", 12);

Set<Student> setStudents = new HashSet<Student>();

setStudents.add(student1);
setStudents.add(student2);
setStudents.add(student3);
```

We can see here that we have two identical `Student` objects in terms of there
contents. We do not want to store both of these objects, only one is required.
Using the example as it is without overriding `equals()` or `hashCode()` in the
`Student` the results of a print:

```java
setStudents.forEach(student -> System.out.println(student));
```

Would be something like (remember to override the `toString()` method to control
your print output):

```
Student 111 Donald donaldtrump@gmail.com 60
Student 111 Donald donaldtrump@gmail.com 60
Student 888 Peter peterpan@gmail.com 12
```

Wait what? why is there two entries for Donald? I'm using a HashSet only one Object should have been stored.

![Cat](https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif)
