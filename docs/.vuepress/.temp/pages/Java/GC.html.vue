<template><div><h1 id="经典垃圾收集器" tabindex="-1"><a class="header-anchor" href="#经典垃圾收集器"><span>经典垃圾收集器</span></a></h1>
<p><strong>如果说收集算法是内存回收的方法论，那垃圾收集器就是内存回收的实践者。</strong></p>
<p>《Java虚拟机规范》中对垃圾收集器的实现并没有做出任何的规定，因此不同的厂商、不同版本的虚拟机所包含的垃圾收集器可能会有所不同。
在我们了解这些收集器之前，我们需要明确一点：<strong>我们会对比各个收集器的特性，但并非是挑选一个最好的收集器，而是根据具体应用场景选择适合自己的垃圾收集器。</strong> 因为直到现在还没有最好的收集器出现，更加不存在“万能”的收集器。
<br></p>
<h1 id="一、jdk默认收集器" tabindex="-1"><a class="header-anchor" href="#一、jdk默认收集器"><span>一、JDK默认收集器</span></a></h1>
<blockquote>
<p><strong>JDK默认垃圾收集器（使用：java -XX:+PrintCommandLineFlags -version 命令查看）。</strong></p>
</blockquote>
<ul>
<li>
<p><strong>JDK 8：Parallel Scavenge（新生代）+ Parallel Old（老年代）</strong>
<img src="https://i-blog.csdnimg.cn/blog_migrate/ef2a5baf35d256b96d7ad8f61e1dd065.png" alt="在这里插入图片描述"></p>
</li>
<li>
<p><strong>JDK 9 ~ JDK20: G1</strong>
<img src="https://i-blog.csdnimg.cn/blog_migrate/54d9a352a8516ca55112f0e8d4c786f3.png" alt="以jdk17为例"></p>
</li>
</ul>
<h1 id="二、经典垃圾收集器" tabindex="-1"><a class="header-anchor" href="#二、经典垃圾收集器"><span>二、经典垃圾收集器</span></a></h1>
<p>现在的商业虚拟机采用分代收集算法，它根据对象存活周期将内存划分为几块，不同块采用适当的收集算法。一般将堆分为新生代和老年代。</p>
<ul>
<li><strong>新生代使用: 复制算法</strong></li>
<li><strong>老年代使用: 标记 - 清除 或者 标记 - 整理 算法</strong></li>
</ul>
<p><strong>各款经典收集器之间的关系如图</strong>
<img src="https://i-blog.csdnimg.cn/blog_migrate/1c387495a6adf894d7b4a39e8c70e678.png" alt="在这里插入图片描述">
七种作用于不同分代的收集器，如果两个收集器之间存在连线，就说明它们可以搭配使用，图中收集器所处的区域，则表示它是属于新生代收集器抑或是老年代收集器。</p>
<ul>
<li>单线程与多线程: 单线程指的是垃圾收集器只使用一个线程进行收集，而多线程使用多个线程；</li>
<li>串行与并行: 串行指的是垃圾收集器与用户程序交替执行，这意味着在执行垃圾收集的时候需要停顿用户程序；并形指的是垃圾收集器和用户程序同时执行。除了 CMS 和 G1 之外，其它垃圾收集器都是以串行的方式执行。</li>
</ul>
<h2 id="_2-1-serial-收集器" tabindex="-1"><a class="header-anchor" href="#_2-1-serial-收集器"><span>2.1 Serial 收集器</span></a></h2>
<p>Serial（串行）收集器是最基本、历史最悠久的垃圾收集器了。大家只看名字就能够猜到，这个收集器是一个单线程工作的收集器，但它的 <strong>单线程</strong> 的意义并不仅仅是说明它只会使用一个处理器或一条收集线程去完成垃圾收集工作，更重要的是强调在它进行垃圾收集时，必须暂停其他所有工作线程（ <strong>Stop The World</strong>），直到它收集结束。</p>
<p><strong>新生代采用标记-复制算法，老年代采用标记-整理算法。</strong>
<img src="https://i-blog.csdnimg.cn/blog_migrate/0fec3c27e7f0613a2a89e8c5662b0ea1.png" alt="在这里插入图片描述">
对于 <strong>Stop The World</strong>带给用户的恶劣体验，HotSpot 虚拟机开发团队为消除或者降低用户线程因垃圾收集而导致停顿的努力一直持续进行着。（但是仍然没有办法彻底消除，探索更优秀垃圾收集器的工作仍在继续。）
但Serial是HotSpot 虚拟机运行在Server模式下的默认新生代收集器，因为它<strong>简单而高效（与其他收集器的单线程相比）</strong> 同时对于内存资源受限的环境，它是所有收集器里额外内存消耗最小的；Serial 收集器由于没有线程交互的开销自然可以获得最高的单线程收集效率。</p>
<h2 id="_2-2-parnew-收集器" tabindex="-1"><a class="header-anchor" href="#_2-2-parnew-收集器"><span>2.2 ParNew 收集器</span></a></h2>
<p>ParNew 收集器实质上是 Serial 收集器的多线程并行版本，除了同时使用多条线程进行垃圾收集之外，其余的行为包括 Serial 收集器可用的所有控制参数（例如：-XX：SurvivorRatio、-XX： PretenureSizeThreshold、-XX：HandlePromotionFailure 等）、收集算法、Stop The World、对象分配规则、回收策略等都与 Serial 收集器完全一致。</p>
<p><strong>新生代采用标记-复制算法，老年代采用标记-整理算法。</strong>
<img src="https://i-blog.csdnimg.cn/blog_migrate/269cbcc7f5d415425e79a0e39906e3e9.png" alt="在这里插入图片描述">
它是许多运行在 Server 模式下的虚拟机的首要选择，其中有一个与功能、性能无关但其实很重要的原因是：<strong>除了 Serial 收集器外，只有它能与 CMS 收集器（后面会介绍到）配合工作。</strong></p>
<h2 id="_2-3-parallel-scavenge-收集器" tabindex="-1"><a class="header-anchor" href="#_2-3-parallel-scavenge-收集器"><span>2.3 Parallel Scavenge 收集器</span></a></h2>
<p>Parallel Scavenge和ParNew同样是基于标记-复制算法实现的多线程收集器，<strong>但是它有什么特别之处呢？</strong>
Parallel Scavenge 收集器的特点是它的关注点与其他收集器不同，CMS 等收集器的关注点是尽可能地缩短垃圾收集时用户线程的停顿时间，而 Parallel Scavenge 收集器的目标则是达到一个可控制的吞吐量。 所谓吞吐量就是处理器用于运行用户代码的时间与处理器总消耗时间的比值，即：
$$吞吐量 = \frac{运行用户代码的时间}{运行用户代码的时间+运行垃圾收集时间}$$
停顿时间越短就越适合需要与用户交互或需要保证服务响应质量的程序，良好的响应速度能提升用户体验；而高吞吐量则可以最高效率地利用处理器资源，尽快完成程序的运算任务，主要适合在后台运算而不需要太多交互的分析任务。
Parallel Scavenge 收集器提供了两个参数用于精确控制吞吐量，分别是控制最大垃圾收集停顿时间的-XX：MaxGCPauseMillis 参数以及直接设置吞吐量大小的-XX：GCTimeRatio 参数。
Parallel Scavenge还提供了一个-XX：+UseAdaptiveSizePolicy参数。这是一个开关参数，当这个参数激活后，新生代大小（-Xmn）、Eden 与 Survivor 区的比例（-XX：SurvivorRatio）、晋升老年代对象大小（-XX：PretenureSizeThreshold）等细节参数就不需要人工去指定了，它会根据当前系统动态去调整最合适的停顿时间或者最大吞吐时间。</p>
<p><strong>新生代采用标记-复制算法，老年代采用标记-整理算法。</strong>
<img src="https://i-blog.csdnimg.cn/blog_migrate/e9d06e50fe7360220a430b85aa53e673.png" alt="在这里插入图片描述"></p>
<h2 id="_2-4-serial-old-收集器" tabindex="-1"><a class="header-anchor" href="#_2-4-serial-old-收集器"><span>2.4 Serial Old 收集器</span></a></h2>
<p><strong>Serial Old 是 Serial 收集器的老年代版本</strong>，主要有两大用处，如下：</p>
<ul>
<li>在 JDK 5 以及之前的版本中与 ParallelScavenge 收集器搭配使用</li>
<li>作为 CMS 收集器发生失败时的后备预案，在并发收集发生 Concurrent Mode Failure 时使用
<img src="https://i-blog.csdnimg.cn/blog_migrate/6ef548ed92aa523cf0a57b3894a01535.png" alt="在这里插入图片描述"></li>
</ul>
<h2 id="_2-5-parallel-old-收集器" tabindex="-1"><a class="header-anchor" href="#_2-5-parallel-old-收集器"><span>2.5 Parallel Old 收集器</span></a></h2>
<p><strong>Parallel Old 是 Parallel Scavenge 收集器的老年代版本</strong>，支持多线程并发收集，基于标记-整理算法实现。在注重吞吐量或者处理器资源较为稀缺的场合，都可以优先考虑 ParallelScavenge 加 Parallel Old 收集器这个组合。<img src="https://i-blog.csdnimg.cn/blog_migrate/da085586c5f6be280ad47c65b88647c5.png" alt="在这里插入图片描述"></p>
<h2 id="_2-6-cms-收集器" tabindex="-1"><a class="header-anchor" href="#_2-6-cms-收集器"><span>2.6 CMS 收集器</span></a></h2>
<p><strong>CMS（Concurrent Mark Sweep）收集器是一种以获取最短回收停顿时间为目标的收集器。</strong></p>
<p>从名字（包含<strong>Mark Sweep</strong>）上就可以看出 CMS 收集器是基于<strong>标记-清除算法</strong>实现的，它的运作过程相对于前面几种收集器来说要更复杂一些，整个过程分为四个步骤，包括：</p>
<ul>
<li><strong>初始标记（CMS initial mark）</strong>：初始标记仅仅只是标记一下 GC Roots 能直接关联到的对象，速度很快</li>
<li><strong>并发标记（CMS concurrent mark）</strong>：从 GC Roots 的直接关联对象开始遍历整个对象图的过程，这个过程耗时较长但是不需要停顿用户线程，可以与垃圾收集线程一起并发运行</li>
<li><strong>重新标记（CMS remark）</strong>：为了修正并发标记期间，因用户程序继续运作而导致标记产生变动的那一部分对象的标记记录，停顿时间比初始标记阶段时间稍长但远比并发标记时间短</li>
<li><strong>并发清除（CMS concurrent sweep）</strong>：清理删除掉标记阶段判断的已经死亡的对象，由于不需要移动存活对象，所以这个阶段也是可以与用户线程同时并发的。
<img src="https://i-blog.csdnimg.cn/blog_migrate/e8c7d51b5a000aadeb72500175fe0f11.png" alt="在这里插入图片描述">从它的名字就可以看出它是一款优秀的垃圾收集器，主要优点：<strong>并发收集、低停顿。</strong> 但是它有下面三个明显的缺点：</li>
<li>对 CPU 资源敏感；</li>
<li>无法处理浮动垃圾；</li>
<li>它使用的回收算法-“标记-清除”算法会导致收集结束时会有大量空间碎片产生。
<strong>从 JDK9 开始，CMS 收集器已被弃用。</strong></li>
</ul>
<h2 id="_2-7-garbage-first-g1-收集器" tabindex="-1"><a class="header-anchor" href="#_2-7-garbage-first-g1-收集器"><span>2.7 Garbage First（G1） 收集器</span></a></h2>
<p><strong>G1 (Garbage-First) 是一款面向服务器的垃圾收集器,主要针对配备多颗处理器及大容量内存的机器. 以极高概率满足 GC 停顿时间要求的同时,还具备高吞吐量性能特征.</strong></p>
<p>被视为 JDK1.7 中 HotSpot 虚拟机的一个重要进化特征。它具备以下特点：</p>
<ul>
<li><strong>并行与并发</strong>：G1 能充分利用 CPU、多核环境下的硬件优势，使用多个 CPU（CPU 或者 CPU 核心）来缩短 Stop-The-World 停顿时间。部分其他收集器原本需要停顿 Java 线程执行的 GC 动作，G1 收集器仍然可以通过并发的方式让 java 程序继续执行。</li>
<li><strong>分代收集</strong>：虽然 G1 可以不需要其他收集器配合就能独立管理整个 GC 堆，但是还是保留了分代的概念。</li>
<li><strong>空间整合</strong>：与 CMS 的“标记-清除”算法不同，G1 从整体来看是基于“标记-整理”算法实现的收集器；从局部上来看是基于“标记-复制”算法实现的。</li>
<li><strong>可预测的停顿</strong>：这是 G1 相对于 CMS 的另一个大优势，降低停顿时间是 G1 和 CMS 共同的关注点，但 G1 除了追求低停顿外，还能建立可预测的停顿时间模型，能让使用者明确指定在一个长度为 M 毫秒的时间片段内，消耗在垃圾收集上的时间不得超过 N 毫秒。</li>
</ul>
<p>G1 收集器的运作大致分为以下几个步骤：</p>
<ul>
<li><strong>初始标记</strong></li>
<li><strong>并发标记</strong></li>
<li><strong>最终标记</strong></li>
<li><strong>筛选回收</strong></li>
</ul>
<p><img src="https://i-blog.csdnimg.cn/blog_migrate/a3e674162abfca3ade06ee6ecf089465.png" alt="在这里插入图片描述">
<strong>G1 收集器在后台维护了一个优先列表，每次根据允许的收集时间，优先选择回收价值最大的 Region(这也就是它的名字 Garbage-First 的由来)</strong> 。这种使用 Region 划分内存空间以及有优先级的区域回收方式，保证了 G1 收集器在有限时间内可以尽可能高的收集效率（把内存化整为零）。</p>
<p><strong>从 JDK9 开始，G1 垃圾收集器成为了默认的垃圾收集器。</strong></p>
<h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h1>
<ul>
<li>《深入理解 Java 虚拟机：JVM 高级特性与最佳实践（第三版》</li>
<li><a href="https://javaguide.cn/" target="_blank" rel="noopener noreferrer">https://javaguide.cn/</a></li>
</ul>
</div></template>


