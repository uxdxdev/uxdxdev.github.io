---
date: '2019-01-30'
title: 'Hashtables, HashSets, and HashMaps in Java'
category: coding, java
---

> Why is overriding the Object.equals() and Object.hashcode() methods important when using Hashtables, HashSets, and HashMaps in Java?

When using `Hashtable`, `Hashset`, or `HashMap` in Java `equals()` and/or
`hashcode()` are called during a comparison depending on the context and data structure used.

For example using a `Hashset` to store students. We want to leverage the functionality of a `Hashset` to only allow unique objects to be stored, no duplicates.

```java
import java.util.HashSet;

class Student {
  private String id;
  private String name;
  private String email;
  private int age;

  public Student(String id, String name, String email, int age){
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }

  @Override
  public String toString() {
    return "HashCode " + this.hashCode() + " Student{" +
        "id='" + id + '\'' +
        ", name='" + name + '\'' +
        ", email='" + email + '\'' +
        ", age=" + age +
        '}';
  }
}

public class Main {
  public static void main(String args[]) {
    Student student1 = new Student("111", "Donald", "donaldtrump@gmail.com", 60);
    Student student2 = new Student("111", "Donald", "donaldtrump@gmail.com", 60);
    Student student3 = new Student("888", "Peter", "peterpan@gmail.com", 12);

    HashSet<Student> setStudents = new HashSet<Student>();

    setStudents.add(student1);
    setStudents.add(student2);
    setStudents.add(student3);

    setStudents.forEach(student -> System.out.println(student));
  }
}
```

We can see here that we have two identical `Student` objects, Donald, in terms of their
contents. We do not want to store both of these objects, only one is required.
But if we print out the contents of the set.

The output to the console is:

```text
HashCode 1580066828 Student{id='111', name='Donald', email='donaldtrump@gmail.com', age=60}
HashCode 1625635731 Student{id='111', name='Donald', email='donaldtrump@gmail.com', age=60}
HashCode 491044090 Student{id='888', name='Peter', email='peterpan@gmail.com', age=12}
```

You can see that Donald was added to the set twice even though they have exactly
the same contents. The reason this happens is because a `HashSet` stores objects
into buckets.

...

![Cat](https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif)
