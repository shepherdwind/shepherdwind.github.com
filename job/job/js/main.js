    $(document).ready(function(){
      var locked = false;
      var sublocked = false;
        $("#tabnab").idTabs(function(id,list,set){
          if(locked){
            locked = false;
            return false;
          }
          locked = true;
          var aa = list;
          var t= $(set).find("li");
          var h = [];
          var active;
          $("#showAll").text("展开全部");
          for(i in list){
            if(!$(list[i]).is(":hidden")){
              h.push(list[i]);
            }
          } 
          if(h.length === 1){
            if(h[0] === id){
              locked = false;
              return false;
            }
            $(h[0]).fadeOut(100,function(){
              $(id).fadeIn(200,function(){
                $.cookie("tab_now",id);
                locked = false;
              });
            });
          }else if(h.length === 0){
            var tab = $.cookie("tab_now") || id;
            active = $(set).find("a[href="+tab+"]");
            $(tab).fadeIn(150,function(){
              locked = false;
            });
          }else{
            for(i in h){
              if(h[i]!== id){
                $(h[i]).hide();
              }
            }
            $.cookie("tab_now",id);
            locked = false;
          }
          t.removeClass("ks-tab-trigger-active");
          active = active || this;
          $(active).parent().addClass("ks-tab-trigger-active");
          return false;
        });

        $("#subtab").idTabs(function(subId,subList,subSet){
            if(sublocked){
              sublocked = false;
              return false;
            }
            sublocked = true;
            var setlist = $(subSet).find("li");
            var h = [];
            for(i in subList){
              if(!$(subList[i]).is(":hidden")){
                h.push(subList[i]);
              }
            }
            if(h.length === 1){
              if(subId === h[0]){
                sublocked = false;
                return false;
              }
              $(h[0]).fadeOut(150,function(){
                $(subId).fadeIn(150,function(){
                  sublocked = false;
                });
              });
            }else if(h.length === 0){
              $(subId).fadeIn(150,function(){
                sublocked = false;
              });
            }else{
              for(i in h){
                if(subId !== h[i]){
                  $(h[i]).hide();
                }
              }
              sublocked = false;
            }
            setlist.removeClass("ks-subtab-trigger-active");
            $(this).parent().addClass("ks-subtab-trigger-active");
            return false;
          });

        $("#showAll").fadeIn().hover(function(){$(this).addClass("allShow-hover");},function(){$(this).removeClass("allShow-hover");}).click(function(){
          var text = $(this).text();
          if(text == '展开全部'){
            $(".ks-tab-panel,.ks-subtab-panel").each(function(){
              if($(this).is(":hidden")){
                $(this).fadeIn(150);
              }
            }); 
            $(this).text('收起');
          }else{
            $(".ks-tab-panel,.ks-subtab-panel").each(function(i){
              var href = $(".ks-tab-trigger-active").find("a").eq(0).attr("href");
              var hrefsub = $(".ks-subtab-trigger-active").find("a").eq(0).attr("href");
              var id = '#' + this.id;
              if(id === href || id === hrefsub){
                var n;
              }else{
                $(this).fadeOut(150);
              }
            });
            $(this).text("展开全部");
          }
        });

        $("a[rel=fancybox]").fancybox({
          'transitionIn' : 'elastic',
          'transitionOut' : 'elastic',
          'titlePosition' : 'over',
          'titleFormat' : function(title, currentArray, currentIndex, currentOpts) {return '<span id="fancybox-title-over">图片' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '<br />可以使用鼠标滚轮换图片</span>';} 
        });
    });

