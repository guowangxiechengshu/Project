//--------------------//
//---FUNCTION START---//
//--------------------//
$(function() {
/************************辅助功能 START***************************/

	for(i=2;i<6;i++){
		$('.j-child-on'+i).each(function() {
			var chird=$(this).children();
			for(var j=0; j<chird.length; j++){
				if((j+1)%i==0){
					chird.eq(j).addClass('on');
				}
			}
		});
	}

	/*获取li的个数，给与附加样式，并以数字循环输出*/
	$('.j-li-num').each(function(i,e){
		var liNum=$(this).children('li');
		var li_leng=liNum.length;
		for(var j=0; j<li_leng; j++){
			var li_class=liNum.eq(j).attr("class");
			if(li_class==null){li_class=""}
			j2=j+1;
			var li_str="li-"+j2+" ";
			var li_newclass=li_str + li_class;
			liNum.eq(j).attr("class",li_newclass);
			li_newclass="";
		}
	});
	$('.j-i-cnnum').each(function(i,e){
		var liNum=$(this).children('li');
		var li_leng=liNum.length;
		for(var j=0; j<li_leng; j++){
			j2=j+1;
			liNum.find('i').eq(j).html(j2);
		}
	});
	$('.j-dd-num').each(function(i,e){
		var liNum=$(this).children('dd');
		var li_leng=liNum.length;
		for(var j=0; j<li_leng; j++){
			var li_class=liNum.eq(j).attr("class");
			if(li_class==null){li_class=""}
			j2=j+1;
			for(i=0;i<li_leng/5;i++){
				if(j2>5){j2=j2-5}//永远在1~6之间
			}
			var li_str="dd-"+j2+" ";
			var li_newclass=li_str + li_class;
			liNum.eq(j).attr("class",li_newclass);
			li_newclass="";
		}
	});
	$('.j-child-num').each(function(i,e){
			var liNum=$(this).children();
			var li_leng=liNum.length;
			for(var j=0; j<li_leng; j++){
				var li_class=liNum.eq(j).attr("class");
				if(li_class==null){li_class=""}
				j2=j+1;
				for(i=0;i<li_leng/5;i++){
					if(j2>5){j2=j2-5}//永远在1~6之间
				}
				var li_str="child-"+j2+" ";
				var li_newclass=li_str + li_class;
				liNum.eq(j).attr("class",li_newclass);
				li_newclass="";
			}
		});
	for(k=2;k<10;k++){/*用于分类的对齐*/
		$('.j-child-row'+k).each(function(index, element) {
				var fa = $(this).width();
				$(this).children().width(fa/k);
			});
		}
	$('.j-child-hover').children().hover(function(){
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).removeClass('hover');
	});
	$('.j-li-hover li').hover(function(){
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).removeClass('hover');
	});
	$('.j-child-hover').each(function(index, element) {
		$(this).children().hover(function(){
			$(this).addClass('hover');
			}).mouseleave(function(){
			$(this).removeClass('hover');
		});
    });
	$('.j-li-hover2 li').hover(function(){
		$(this).siblings().removeClass('hover');
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).siblings().removeClass('hover');
	});
	$('.j-dd-hover dd').hover(function(){
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).removeClass('hover');
	});
	$('.j-h4-hover h4').hover(function(){
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).removeClass('hover');
	});
	
	$('.j-photo img').hover(function() {
			$(this).stop().fadeTo("slow",0.6);
		},function(){
			$(this).stop().fadeTo("slow",1);
		});
	
	$('.j-hideai a').hover(function(){
			$(this).addClass('hover').find('i').show();
		},function(){
			$(this).removeClass('hover').find('i').hide();
		});
	$('.j-hidebar').hover(function(){
			$(this).addClass('hover').find('.hidebar,i').show();
		},function(){
			$(this).removeClass('hover').find('.hidebar,i').hide();
		});
	$('.j-hidebar-slide').hover(function(){
			$(this).addClass('hover').find('.hidebar').stop(true,false).slideDown(200);
		},function(){
			$(this).removeClass('hover').find('.hidebar').stop(true,false).slideUp(200);
		});
	$('.j-hidebar-fade').hover(function(){
			$(this).addClass('hover').find('.hidebar').stop(true,true).fadeIn(300);
		},function(){
			$(this).removeClass('hover').find('.hidebar').stop(true,false).fadeOut(300);
		});
	$('.j-showbtn').hover(function(){
		$(this).find('.focus-btn').show();
		},function(){
			$(this).find('.focus-btn').hide();
		})
	$('.j-firstA').children('a:first').addClass('first');
	$('.j-firstLi').children('li:first').addClass('first');
	$('.j-lastLi').children('li:last').addClass('last');
	
	
	 
/************************辅助功能 END***************************/

/************************自定义功能 START***************************/

	$('.nav-ul li').each(function(index, element) {
        var navspan = $(this).find('span');
		for(i=0;i<navspan.length;i++){
			navspan.eq(i).addClass('span'+i);
			}
			navspan.eq(2).html(navspan.eq(0).html());
		$(this).find('.span2').hide();
    });
	$('.nav-ul li').hover(function(){
		$(this).addClass('hover');
		$(this).find('.span0').stop(true,true).hide(400);
		$(this).find('.span2').stop(true,true).show(400);
		},function(){
			$(this).removeClass('hover');
			$(this).find('.span0').stop(true,true).show(400);
			$(this).find('.span2').stop(true,true).hide(400);
			})
/*横向导航 START*
	$('.f-nav .u-li').each(function(index, element) {
		if($(this).find('ul').html()){$(this).addClass('j-li');}
        $(this).hover(function(){
			$(this).addClass('hover').siblings().stop(true,false).removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		},function(){
			$(this).removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		});
    });
	$('.f-uNav').each(function(index, element) {
		var ulwidth = 0;
		var uli = $(this).find('li');
		for(i=0;i<uli.length;i++){
			if(uli.length==1){
				ulwidth = 70;
				ulleft = $(this).parent('.u-li').width()/2-ulwidth/2;
				$(this).width(ulwidth);
				$(this).css({'left':ulleft});
				}
			uliwidth = uli.eq(i).width();
			ulwidth = ulwidth + uliwidth + 10;
			
			ulleft = $(this).parent('.u-li').width()/2-ulwidth/2;
			$(this).width(ulwidth);
			$(this).css({'left':ulleft});
			}
			if(!$(this).parents('.u-li').hasClass('current')){
				$(this).css({'opacity':1}).hide();
			}else{
				$(this).parents('.nav-box').find('.nav-sbg').stop(true,false).show();
				}
		});
	
	$('.f-nav li.u-li').each(function(index, element) {
        $(this).hover(function(){
			if($(this).hasClass('j-li')){
				$(this).siblings().find('.f-uNav').hide();
				$(this).find('.f-uNav').stop(true,false).slideDown(100,'swing'); //当前子导航显示
				$(this).parents('.nav-box').find('.nav-sbg').stop(true,false).show();
			}else{
				$(this).siblings().find('.f-uNav').hide();
				$(this).parents('.nav-box').find('.nav-sbg').stop(true,false).hide();
				}
		},function(){
			if(!$(this).hasClass('current')){
				$(this).find('.f-uNav').stop(true,false).slideUp(200,'swing'); //当前主导航添加样式：current,其他的删除样式：current
				if($(this).parents('.m-nav').find('.current').hasClass('j-li')){
					$(this).parents('.nav-box').find('.nav-sbg').stop(true,false).show();
					$(this).parents('.m-nav').find('.current').find('.f-uNav').stop(true,false).show();
				}else{
					$(this).parents('.nav-box').find('.nav-sbg').stop(true,false).hide();
					}
			}
		});
    });
	$('.f-uNav li').each(function(index, element) {
        $(this).hover(function(){
			$(this).addClass('hover').siblings().removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		},function(){
			$(this).removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		});
    });
/**横向导航 END**/

/**纵向导航 START**/
	$('.f-nav .u-li').each(function(index, element) {
		if($(this).find('ul').html()){$(this).addClass('j-li');}else{}
        $(this).hover(function(){
			$(this).addClass('hover').siblings().removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		},function(){
			$(this).removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		});
    });
	$('.f-nav li.j-li').each(function(index, element) {
        $(this).hover(function(){
			$(this).siblings().find('.f-uNav').hide();
			$(this).find('.f-uNav').stop(true,false).slideDown(100,'swing'); //当前子导航显示
			//$(this).parents('.nav-box').find('.subnav-bg').show();
		},function(){
			$(this).find('.f-uNav').stop(true,false).slideUp(200,'swing'); //当前主导航添加样式：current,其他的删除样式：current
			//$(this).parents('.nav-box').find('.subnav-bg').hide();
		});
    });
	$('.f-uNav li').each(function(index, element) {
        $(this).hover(function(){
			$(this).addClass('hover').siblings().removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		},function(){
			$(this).removeClass('hover'); //当前主导航添加样式：current,其他的删除样式：current
		});
    });
/**纵向导航 END**/
		
/**TAB START**/
	
	$('.j-tab .tab-tt dt').hover(function(){
		var ind=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(this).parents('.j-tab').find('.tab-cn dd').eq(ind).show().siblings().hide();
	});
	$('.j-tab').each(function(index, element) {
        $(this).find('.tab-tt dt:first').addClass('current');
		$(this).find('.tab-cn dd').hide();
		$(this).find('.tab-cn dd:first').addClass('current').show();
		});
	
	$('.j-tab2 .tab-tt2 dt').hover(function(){
		var ind=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(this).parents('.j-tab2').find('.tab-cn2 dd').eq(ind).show().siblings().hide();
	});
	$('.j-tab2 .tab-tt2 dt:first').addClass('current');
	$('.j-tab2 .tab-cn2 dd').hide();
	$('.j-tab2 .tab-cn2 dd:first').addClass('current').show();
	
	$('.j-tab-fade .tab-tt dt').hover(function(){
		var ind=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$(this).parents('.j-tab-fade').find('.tab-cn dd').eq(ind).stop(true,false).animate({'opacity':1}).addClass('current').css({'z-index':5}).siblings().stop(true,false).animate({'opacity':0}).removeClass('current').css({'z-index':1});
	});
	$('.j-tab-fade .tab-tt dt:first').addClass('current');
	$('.j-tab-fade .tab-cn dd').css({'opacity':0}).css({'z-index':1});
	$('.j-tab-fade .tab-cn dd:first').addClass('current').animate({'opacity':1}).css({'z-index':5});
/**TAB END**/

/**leftmenu START**/
	$(".m-leftmenu h4").hover(function(){
		if(!$(this).hasClass("current")){
			$(this).siblings("ul").stop(true,false).slideUp("300");
			$(this).addClass("current").next("ul").stop(true,true).slideDown(300);
			$(this).siblings().removeClass("current");
		}
	});
/**leftmenu END**/
	
/**返回顶部 START**/
	$('.backtop').click(function () {
			$('body,html').animate({
				scrollTop: 0
			},{easing:"easeOutQuint",duration:1000});
			return false;
		});
/**返回顶部 END**/

	$(function(){
		clientDiv('.float-win','right',200);
		clientDiv('.bt-win','left',0);
	})
/*
	$('.bt-win').hoverIntent({
			over: show_btwin, 
			interval: 0,
			timeout: 500, 
			out: hide_btwin
		});
	function show_btwin(){ $(this).find('.area').show(200);}
	function hide_btwin(){ $(this).find('.area').hide(200);}	
	*/
	$('.float-win i').click(function(){
		$(this).parent('.float-win').hide().removeClass('float-win');
	})
	/*
	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('.float-win').fadeIn();
		} else {
			$('.float-win').fadeOut();
		}
	});*/
	var liNum=$('.all-nav .nav-1').children();
	var li_leng=liNum.length;
/*
	liNum.eq(0).find('.nav-2').css('top',0);
	liNum.eq(1).find('.nav-2').css('top',-73);*/
	$('.all-nav').hover(function(){
			$(this).find('.nav-1').show();
			$(this).find('.open-link').addClass('link-hover');
		},function(){
			if($(this).hasClass('show-nav')){}else{
				$(this).find('.nav-1').hide();
				$(this).find('.open-link').removeClass('link-hover');
			}
		});
	$('.all-nav li').hover(function(){
			$(this).find('.nav-2').show();
		},function(){
			$(this).find('.nav-2').hide();
		});
		
	$('.winlink').hover(function(){
		$(this).addClass('hover');
		}).mouseleave(function(){
		$(this).removeClass('hover');
	});
	$('.win-bar').hover(function(){
		$(this).addClass('winhover');
		}).mouseleave(function(){
		$(this).removeClass('winhover');
	});
	$('.win-bar .shop').click(function(){
		if($('.win-bar').hasClass('open')){
			$('.win-bar').animate({'width':'40'}).removeClass('open');
			$('.shopbar').animate({'width':'0'});
			}else{
				$('.win-bar').animate({'width':'320'}).addClass('open');
				$('.shopbar').animate({'width':'280'});
				}
		})
	var win = ($.browser.msie) ? document : window;
	$(win).click(function(){
		if(!$('.win-bar').hasClass('winhover')){
			$('.win-bar').animate({'width':'40'}).removeClass('open');
			$('.shopbar').animate({'width':'0'});
			}
		})
	$('.win-bar,.win-bar .shopbar').css('height',$(window).height());
	$(window).resize(function(){
			$('.win-bar,.win-bar .shopbar').css('height',$(window).height());
		});
		
		
	$(".j-leftmenu h4").hover(function(){
		if(!$(this).hasClass("current")){
			$(this).siblings("ul").stop(true,false).slideUp("300");
			$(this).addClass("current").next("ul").stop(true,true).slideDown(300);
			$(this).siblings().removeClass("current");
		}
	});
/************************自定义功能 END***************************/

/************************调用函数部分 START***************************/
//clientDiv('.float-win','right',100);
$(".j-anchor").smartFloat();/*调用导航置顶*/
for(i=1;i<10;i++){//产品滚动
	$('.j-scroll-'+i).each(function(){
		$('.j-scroll-'+i).carouFredSel({
				responsive: true,
				direction :	"left",
				width:'100%',
				prev: '.j-prev-1',
				next: '.j-next-1',
				auto:{
					play:true,
					pauseOnHover:true,
					timeoutDuration:3000
					},
				pause:3000,
				scroll: 1,
				items: {
					visible: {
						min: i,
						max: i
					}
				}
			});
		
		});
	$('.j-hscroll-'+i).each(function(){
		$('.j-hscroll-'+i).carouFredSel({
				responsive: true,
				direction :	"up",
				height:'100%',
				prev: '.j-hprev-1',
				next: '.j-hnext-1',
				auto:{
					play:true,
					pauseOnHover:true,
					timeoutDuration:3000
					},
				pause:3000,
				scroll: 1,
				items: {
					visible: {
						min: i,
						max: i
					}
				}
			});
		
		});
	}

clientDiv('.win-bar','right',0);
/************************调用函数部分 END***************************/
});
//--------------------//
//----FUNCTION END----//
//--------------------//

/************************封装函数 START***************************/


//浮动窗口
function clientDiv(obj,clientPosition,num){
	
	if(navigator.userAgent.indexOf('MSIE 6.0')>0){
		$(obj).css({'position':'absolute'});
		var hh=jQuery(window).height();
		$(window).scroll(function(){
			if(num<0){
				var scrollHeight=$(this).scrollTop()+hh+num;
				}else{
				var scrollHeight=$(this).scrollTop()+num;
			}
			$(obj).css({'position':'absolute','top':scrollHeight});
		});
	}
}
/*导航置顶*/
$.fn.smartFloat = function() {
		var position = function(element) {
			var top = element.offset().top, pos = element.css("position");
			$(window).scroll(function() {
				var scrolls = $(this).scrollTop();
				if (scrolls > top) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度
					
					if (window.XMLHttpRequest) { //如果不是ie6
						element.css({
							position: "fixed",
							top: 0
						});
					} else { //如果是ie6
						element.css({
							position: "absolute",
							top: scrolls,
							left:'50%',
							marginLeft:'-500px'
						});	
					}
				}else {
					element.css({
						position: pos,
						top: top,
						left:'auto',
						marginLeft:0
						
					})
				}
			});
		};
		return $(this).each(function() {
			position($(this));						 
		});
	};
/*导航置顶*/

// 滚动条滑动js
$(function($){
        // 占位符项目来填充列表的功能
        function populate(container, count, offset){
            var output = '';
            offset = isNaN(offset) ? 0 : offset;
            for(var i = 0; i<count; i++ ){
                output += '<li>'+(offset+i)+'</li>';
            }
            return $(output).appendTo(container);
        }

        // 填充列表项
        $('ul[data-items]').each(function(i,e){
            var items = parseInt($(e).data('items'), 10);
            populate(e, items);
        });
        // 主要调用部分
        $(document).on('activated',function(event){
            var $section = $(".scrollbox");
            var $frame = $section.find('.frame'),
                    $ul = $frame.find('ul').eq(0),
                    $scrollbar = $section.find('.scrollbar'),
                    $buttons = $section.find('.controlbar [data-action]');

            populate($ul, 10);
            // 控制
            $buttons.on('click',function(e){
                var action = $(this).data('action');
                switch(action){
                    case 'reset':
                        $frame.sly('toStart');
                        setTimeout(function(){
                            $ul.find('li').slice(10).remove();
                            $frame.sly('reload');
                        }, 200);
                        break;
                    default:
                        $frame.sly(action);
                }
            });
            $section.find(".slyWrap").each(function(i,e){
                var cont = $(this),
                        frame = cont.find(".sly"),
                        slidee = frame.find("ul"),
                        scrollbar = cont.find(".scrollbar"),
                        pagesbar = cont.find(".pages"),
                        options = frame.data("options"),
                        controls = cont.find(".controls"),
                        prevButton = controls.find(".prev"),
                        nextButton = controls.find(".next"),
                        prevPageButton = controls.find(".prevPage"),
                        nextPageButton = controls.find(".nextPage");

                options = $.extend({},options,{
                    scrollBar: scrollbar,
                    pagesBar: pagesbar,
                    prev: prevButton,
                    next: nextButton,
                    prevPage: prevPageButton,
                    nextPage: nextPageButton,
                    disabledClass: 'btn-disabled'
                });

                frame.sly( options );

                cont.find("button").click(function(){
                    var action = $(this).data('action'),
                            arg = $(this).data('arg');
                    switch(action){
                        case 'add':
                            slidee.append(slidee.children().slice(-1).clone().removeClass().text(function(i,text){
                                return text/1 + 1;
                            }));
                            frame.sly('reload');
                            break;
                        case 'remove':
                            slidee.find("li").slice(-1).remove();
                            frame.sly('reload');
                            break;
                        default:
                            frame.sly(action, arg);
                    }
                });
            });
        }).trigger('activated');
    });



// 设置为主页 
function SetHome(obj,vrl){ 
	try{ 
		obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl); 
	} 
	catch(e){ 
	if(window.netscape) { 
		try { 
		netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
		} 
	catch (e) { 
	alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。"); 
	} 
	var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch); 
	prefs.setCharPref('browser.startup.homepage',vrl); 
}else{ 
	alert("您的浏览器不支持，请按照下面步骤操作：1.打开浏览器设置。2.点击设置网页。3.输入："+vrl+"点击确定。"); 
} } } 
// 加入收藏 兼容360和IE6 
function shoucang(sTitle,sURL) 
{ 
try 
{window.external.addFavorite(sURL, sTitle); } 
catch (e) 
{ try { 
window.sidebar.addPanel(sTitle, sURL, ""); 
} 
catch (e) 
{ 
alert("加入收藏失败，请使用Ctrl+D进行添加"); 
} } } 



/************************封装函数 END***************************/