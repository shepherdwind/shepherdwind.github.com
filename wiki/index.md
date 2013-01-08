%title wiki首页

=== 关于 ===

个人wiki，使用[[http://code.google.com/p/vimwiki/|vimwiki]]维护，托管于github上
。一直有使用vimwiki，但是都没有一套比较好的模板，最近发现github提供gh-pages的功
能，同时把github转到自己的域名上，感觉还不错，于是在博客之外，维护这么一个wiki。

主要存放一些个人总结的小东西，还有github上一些项目的文档。最近比较懒得写博文，不
过，已经不想再用WorldPress写了，后面如果再写博客，也都用[[http://daringfireball.net/projects/markdown/|markdown]]写吧。

=== github上托管的项目与文档 ===

github还是非常好用的工具，托管的一些项目已经不再维护了。这里统一放下文档，readme
和wiki page固然不错，但是，对于前端而且，那些毕竟太弱了。还不如自己写html来的爽
快。

==== 维护中的项目 ====

还在维护的项目基本通过gh-pages来管理自己的文档，此处只是简单的一个链接。
- css拼图工具[[joycss]] [[joycss.org]]
- [[http://git.shepherdwind.com/plum|Plum]] [[plum-doc]]基于node的服务器，主要用于demo开发
 
==== 其他项目 ====

- [[https://github.com/shepherdwind/vim|vimconfig]]据说github上最多的就是vim配置
  了，同步确实方便。支持win，mac，linux多系统，需要一些系统命令工具的依赖。
- [[https://github.com/shepherdwind/peersay/|peersay]]同伴提名测验平台，毕业设计
  作品，用于心理测验的小工具，毕业论文好了以后，就不再管了。
- [[https://github.com/shepherdwind/shepherdwind.github.com|wiki]]还有就是这个wiki
  本身了。
  
=== 博客文章 ===

- [[sku-search-algorithm|sku组合查找算法探索]]
- [[let-us-enjoy-css|joycss:让css开发更容易]]
- [[to-realize-a-compiler|如何实现一个编译器]]

=== 一些笔记 ===

* [[Psychology-share]]心理学分享
* ln命令使用`sudo ln ~/www/card /var/www/card -s`
* less mix集合[[less-mix]]
* git删除远程分支`git push origin :gh-pages`
* 网速限制(Limit bandwidth)的方案
  * for Mac [[http://macfidelity.de/2009/05/17/mac-limit-bandwidth-in-mac-os-x-using-ipfw/index.html|ipfw]]
  * for win [[http://www.netlimiter.com/|NetLimiter]]

=== [[vim-note|vim笔记]] ===

=== IE兼容性问题总结 ===

- vml在ie8中使用，会存在高度问题，最好固定高度
- VML使用activeX，与js无关，在js禁止的时候依然能够运行
- 在IE67中存在一个重绘的bug，如果元素位置变化，一个子绝对定位的子元素无法跟随
  移动，解决方案可以把绝对定位元素放置在高度变化元素的前面
- IE中相对定位将导致子元素的margin负值和相对定位元素位置异常诡异
- IE6 css选择器中使用注释，并且hack，导致相应的选择器无效
 
=== 一些想法 ===

* KISSY的map和filter方法应该支持对象的
* KISSY的each方法应该增加中途退出的功能
* 事件逻辑和属性分类管理stdclass.js

=== 第一版wiki遗留的 ===

2010年的东西了，本来用于[[http://efly.nenu.edu.cn|工作室]]培训使用的文档，后来懒
得维护了，还留下一些，值得继续使用的。

- [[binary-system-in-computer|二进制一些皮毛]]有一段时间研究了一些些
- [[special-symbols]]HTML特殊字符，其他特殊字符等等收集
