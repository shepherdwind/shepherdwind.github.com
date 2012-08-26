<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="./style/default.css" />
    <link rel="stylesheet" type="text/css" href="./style/article.css" />
    <title>%title%</title>
  </head>
  <body>
    <header>
    <div class="header-wrap">
      <ul class="main-nav">
        <li><a href="./index.html">Home</a></li>
        <li class="blog"><a href="http://shepherdwind.com">Blog</a></li>
        <li><a href="./plum/">Plum</a></li>
        <li><a href="http://joycss.org">joycss</a></li>
      </ul>
      <h2>%title%</h2>
    </div>
    </header>
    <div class="content">
      <div class="content-nav" id="J_nav">
        <div class="box-hd">目录导航
        </div>
      </div>
      <div class="content-main">
        %content%
      </div>
      <script src="http://a.tbcdn.cn/??s/kissy/1.2.0/kissy-min.js"></script>
      <script src="./js/article.js" type="text/javascript"></script>
      <div id="disqus_thread"></div>
      <script type="text/javascript">
        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
      var disqus_shortname = 'shepherdwind'; // required: replace example with your forum shortname

      /* * * DON'T EDIT BELOW THIS LINE * * */
      (function() {
       var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
       dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
       (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
       })();
     </script>
     <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
     <a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>

   </div>
   <script src="js/prettify/prettify.js" type="text/javascript"></script>
   <script type="text/javascript">prettyPrint();</script>
  </body>
</html>
