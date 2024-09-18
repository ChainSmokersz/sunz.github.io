---
lang: zh-CN
title: String
description: String
contributors: true
tags:
  - VuePress
  - Algolia

prev:
  text: GC
  link: /java/GC.md
---
# String
[[toc]]

# 一、 String 为什么是不可变的?
String类中使用了==final==修饰字符数组的，所以是不可以变的。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/041cf380f6a4a09fa03822ff57b07442.png)
<br></br>
# 二、StringBuffer和StringBuilder区别
## 2.1 相同点
二者都是继承了==AbstractStringBuilder==，在AbstractStringBuilder中我们可以发现没有用**final**修饰字符数组，所以二者都是可变的。源码如下：

```java
abstract class AbstractStringBuilder implements Appendable, CharSequence {
    /**
     * The value is used for character storage.
     */
    char[] value;

    /**
     * The count is the number of characters used.
     */
    int count;

    /**
     * This no-arg constructor is necessary for serialization of subclasses.
     */
    AbstractStringBuilder() {
    }

    /**
     * Creates an AbstractStringBuilder of the specified capacity.
     */
    AbstractStringBuilder(int capacity) {
        value = new char[capacity];
    }
```
## 2.2 不同点
### 线程安全性
String 中的对象是不可变的，也就可以理解为常量，线程安全。

AbstractStringBuilder 是 StringBuilder 与 StringBuffer 的公共父类，定义了一些字符串的基本操作，如 expandCapacity、append、insert、indexOf 等公共方法。StringBuffer 对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。

```java
@Override
    public synchronized StringBuffer append(char c) {
        toStringCache = null;
        super.append(c);
        return this;
    }

    @Override
    public synchronized StringBuffer append(int i) {
        toStringCache = null;
        super.append(i);
        return this;
    }
```

StringBuilder 并没有对方法进行加同步锁，所以是非线程安全的。
```java
@Override
    public StringBuilder append(char c) {
        super.append(c);
        return this;
    }

    @Override
    public StringBuilder append(int i) {
        super.append(i);
        return this;
    }
```

<br></br>


# 三、性能
每次对 String 类型进行改变的时候，并不是直接对对象本身进行操作而是会生成一个新的 String 对象，然后将指针指向新的 String 对象。
StringBuffer和StringBuilder每次都会对对象本身进行操作，而不是生成新的对象并改变对象引用。虽然在相同情况下使用 StringBuilder 相比使用 StringBuffer 仅能获得 10%~15% 左右的性能提升，但却要冒多线程不安全的风险。

<br></br>


# 四、总结
操作少量的数据: 适用 String
单线程操作字符串缓冲区下操作大量数据: 适用 StringBuilder
多线程操作字符串缓冲区下操作大量数据: 适用 StringBuffer