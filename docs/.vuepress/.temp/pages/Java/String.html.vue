<template><div><h1 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>String</span></a></h1>
<nav class="table-of-contents"><ul><li><router-link to="#_2-1-相同点">2.1 相同点</router-link></li><li><router-link to="#_2-2-不同点">2.2 不同点</router-link><ul><li><router-link to="#线程安全性">线程安全性</router-link></li></ul></li></ul></nav>
<h1 id="一、-string-为什么是不可变的" tabindex="-1"><a class="header-anchor" href="#一、-string-为什么是不可变的"><span>一、 String 为什么是不可变的?</span></a></h1>
<p>String类中使用了==final==修饰字符数组的，所以是不可以变的。
<img src="https://i-blog.csdnimg.cn/blog_migrate/041cf380f6a4a09fa03822ff57b07442.png" alt="在这里插入图片描述">
<br></br></p>
<h1 id="二、stringbuffer和stringbuilder区别" tabindex="-1"><a class="header-anchor" href="#二、stringbuffer和stringbuilder区别"><span>二、StringBuffer和StringBuilder区别</span></a></h1>
<h2 id="_2-1-相同点" tabindex="-1"><a class="header-anchor" href="#_2-1-相同点"><span>2.1 相同点</span></a></h2>
<p>二者都是继承了==AbstractStringBuilder==，在AbstractStringBuilder中我们可以发现没有用<strong>final</strong>修饰字符数组，所以二者都是可变的。源码如下：</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Appendable</span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * The value is used for character storage.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * The count is the number of characters used.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token keyword">int</span> count<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * This no-arg constructor is necessary for serialization of subclasses.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token class-name">AbstractStringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * Creates an AbstractStringBuilder of the specified capacity.</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token class-name">AbstractStringBuilder</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        value <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-2-不同点" tabindex="-1"><a class="header-anchor" href="#_2-2-不同点"><span>2.2 不同点</span></a></h2>
<h3 id="线程安全性" tabindex="-1"><a class="header-anchor" href="#线程安全性"><span>线程安全性</span></a></h3>
<p>String 中的对象是不可变的，也就可以理解为常量，线程安全。</p>
<p>AbstractStringBuilder 是 StringBuilder 与 StringBuffer 的公共父类，定义了一些字符串的基本操作，如 expandCapacity、append、insert、indexOf 等公共方法。StringBuffer 对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token class-name">StringBuffer</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        toStringCache <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token class-name">StringBuffer</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        toStringCache <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>StringBuilder 并没有对方法进行加同步锁，所以是非线程安全的。</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">StringBuilder</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token annotation punctuation">@Override</span></span>
<span class="line">    <span class="token keyword">public</span> <span class="token class-name">StringBuilder</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br></br></p>
<h1 id="三、性能" tabindex="-1"><a class="header-anchor" href="#三、性能"><span>三、性能</span></a></h1>
<p>每次对 String 类型进行改变的时候，并不是直接对对象本身进行操作而是会生成一个新的 String 对象，然后将指针指向新的 String 对象。
StringBuffer和StringBuilder每次都会对对象本身进行操作，而不是生成新的对象并改变对象引用。虽然在相同情况下使用 StringBuilder 相比使用 StringBuffer 仅能获得 10%~15% 左右的性能提升，但却要冒多线程不安全的风险。</p>
<p><br></br></p>
<h1 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结"><span>四、总结</span></a></h1>
<p>操作少量的数据: 适用 String
单线程操作字符串缓冲区下操作大量数据: 适用 StringBuilder
多线程操作字符串缓冲区下操作大量数据: 适用 StringBuffer</p>
</div></template>


