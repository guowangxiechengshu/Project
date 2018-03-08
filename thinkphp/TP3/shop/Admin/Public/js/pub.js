$(function(){
	$(".f-nav .u-li .u-a").hover(function(){
		$(this).removeClass("line");
	},function(){
		$(this).addClass("line");
	});
});

$(function(){
	$(".conn_box1 .div_box").eq(4).css("background","none");
});

$(function(){
	$(".u_img img").hover(function(){
		$(this).css("opacity","0.7");
	},function(){
		$(this).css("opacity","1");
	});
});




$(function(){
	$("#img_hover img").hover(function(){
		$(this).css("opacity","0.7");
	},function(){
		$(this).css("opacity","1");
	});
});


$(function(){
	$(".cbl_ul li").hover(function(){
		var num=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".con_box3 .conn_box3Right").eq(num).css("display","block").siblings(".con_box3 .conn_box3Right").css("display","none");
	});
});
$(function(){
	$(".footer_bottom dl").eq(0).css("marginLeft","20px");
});

$(function(){
	$(".attr_ul_li .open").click(function(){
		var num=$(this).parent().parent().index();
		var text=$(".attr_ul_li").eq(num).find(".open").text();
		if(text=="+展开"){
			
			$(".attr_ul_li").eq(num).addClass("current");
			$(".attr_ul_li").eq(num).find(".open").text("—收起");
		}else{
			$(".attr_ul_li").eq(num).removeClass("current");
			$(".attr_ul_li").eq(num).find(".open").text("+展开");
		}
		
	});
});

$(function(){
	var lis=$(".pub_lb4_ul li").length;
	for(i=0;i<lis;i++){
		$(".pub_lb4_ul li").eq(i).addClass("li"+i);
	}
});


// class切换(current)
$(function(){
	$('.j-currentLi li').hover(function() {
		$(this).addClass('current').siblings().removeClass('current');
	});
});

$(function(){
	var lis=$("body #top_3").length;
	for(j=0;j<$("body #top_3").length;j++){

		for(i=0;i<$("body #top_3").eq(j).find("li .u-dn01").length;i++){

			$("body #top_3").eq(j).find("li .u-dn01").eq(i).addClass("paihang_"+i);

		}
	}
});

/*搜索框*/
$(document).ready(function(){
	$("TEXTAREA,input[focucmsg]") .each (function(){
		$(this).val($(this).attr("focucmsg"));
		$(this).val($(this).attr("focucmsg")).css("color","#979393");
		$(this).focus(function(){
			if($(this).val() == $(this).attr("focucmsg")){
				$(this).val('');
				$(this).val('').css("color","#6b6969");
			}
		});
		$(this).blur(function(){
			if(!$(this).val()){
				$(this).val($(this).attr("focucmsg"));
				$(this).val($(this).attr("focucmsg")).css("color","#979393");
			}
		});
	});
});


$(function(){
	var guanzhu=$(".u_btns #dp_guanzhu").text();
	$(".u_btns #dp_guanzhu").click(function(){
		if(guanzhu=="关注"){
			$(this).text("已关注");
		}else{
			$(this).text("已关注");
		}
	});
	
});

/*banner*/
$(function(){
	var w=0,len=4;
	$(".banner .num a").hover(function(){
		w=$(".banner .num a").index(this);
		show(w);
	});
	function show(i){
		$(".banner .num a").removeClass("cur").eq(i).addClass("cur");
		$(".banner ul li").eq(i).stop(true,true).fadeIn(500).siblings("li").fadeOut(500);
	};
	$(".banner").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime=setInterval(function(){
		   show(w);
		   w++;
		   if(w==len){w=0;}
		},3000);
	});
	var myTime=setInterval(function(){
	   show(w);
	   w++;
	   if(w==len){w=0;}
	},3000);
})


$(function(){
	/****加入购物车弹框*****/	
$('.goshop-btn .btn-add,.goshop-btn .gs-btn').click(function(){
		$(this).parents('.goshop-btn').find('.cart_info_b').show();
	})

$('.cart-hide').click(function(){
		$('.cart_info_b').hide();
	})
});

$(function(){
	/*订单*/
$('.shopcart-addr .addrul li').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
	})
});

$(function(){
	/*****使用新地址*****/
	$('.newaddr .addr-on').click(function(){
			$(this).parent('.newaddr').find('.addr-de').show();
			$(this).hide();
		})
		$('.newaddr .close-addr').click(function(){
				$(this).parents('.addr-de').hide();
				$(this).parents('.newaddr').find('.addr-on').show();
			})
	});
/*订单详细评级*/
$(function(){
	var oTable=$('.dp-star');
	for(var j=0;j<oTable.length;j++){
		oTable.eq(j).attr('id','dp-star'+j);
		dpStar('dp-star'+j);
	}
	function dpStar(obj){
		var oStar = document.getElementById(obj);
		var aLi = oStar.getElementsByTagName("li");
		var oUl = oStar.getElementsByTagName("ul")[0];
		var oSpan = oStar.getElementsByTagName("span")[1];
		var oP = oStar.getElementsByTagName("p")[0];
		var i = iScore = iStar = 0;
		var aMsg = ["很不满意|很不满意","不满意|不满意","一般|一般","满意|满意","非常满意|非常满意"]
		for (i = 1; i <= aLi.length; i++) {
			aLi[i - 1].index = i;
			//鼠标移过显示分数
			aLi[i - 1].onmouseover = function () {
			fnPoint(this.index);
			};
			//鼠标离开后恢复上次评分
			aLi[i - 1].onmouseout = function () {
			fnPoint();
			//关闭浮动层
			oP.style.display = "none"
			};
			//点击后进行评分处理
			aLi[i - 1].onclick = function () {
			iStar = this.index;
			oP.style.display = "none";
			oSpan.innerHTML = "<strong>" + (this.index) + " 分</strong> (" + aMsg[this.index - 1].match(/\|(.+)/)[1] + ")"
			}
		}
		//评分处理
		function fnPoint(iArg) {
			//分数赋值
			iScore = iArg || iStar;
			for (i = 0; i < aLi.length; i++) aLi[i].className = i < iScore ? "on" : "";
		}
	}
});

/*个人中心*/
$(function() {
	$(".livalbody-ulval-ul .fialshe-ul-love").each(function(index, element) {
        var geshubalimghghj=$(this).find("ul li").length;
		if(geshubalimghghj<4){
			geshubalimghghj=4-geshubalimghghj;	
			for(var geshussdtj=0;geshussdtj<geshubalimghghj;geshussdtj++){
				$(this).find("ul").append("<li></li>");	
			}
		}
    });
	$('.quandongyivalimg .fialshe-ul-love').each(function(index, element) {
		$(this).parents(".quandongyivalimg").find(".valimtaobao b").addClass("indexb"+index);
        $(this).find("ul").carouFredSel({
			responsive: true,
			direction :	"left",
			width: '100%',
			pagination:'.valimtaobao .indexb'+index,
			auto:{
				play:true,
				pauseOnHover:true,
				timeoutDuration:3000
				},
			pause:3000,
			scroll:4,
			items: {
				visible: {
					min: 4,
					max: 4
				}
			}
		});
    });
	$(".vaomimh-linm ul").carouFredSel({
		responsive: true,
		direction :	"top",
		width: '281px',
		pagination:'.lanvalimgs .valimtaobao b',
		auto:{
			play:true,
			pauseOnHover:true,
			timeoutDuration:3000
			},
		pause:3000,
		scroll:1,
		items: {
			visible: {
				min: 1,
				max: 1
			}
		}
	});
});

$(function() {
	var geshubalimg=$('.neibuul-val ul li').length;
	if(geshubalimg<5){
		geshubalimg=5-geshubalimg;	
		for(var geshutj=0;geshutj<geshubalimg;geshutj++){
			$('.neibuul-val ul').append("<li></li>");	
		}
	}
	$('.neibuul-val ul').carouFredSel({
		responsive: true,
		direction :	"left",
		width: '100%',
		pagination:'.caropage b',
		auto:{
			play:true,
			pauseOnHover:true,
			timeoutDuration:3000
			},
		pause:3000,
		scroll: 5,
		items: {
			visible: {
				min: 5,
				max: 5
			}
		}
	});
});

/*产品详细*/
$(function(){
	$(".j-anchor li").click(function(){
		$(this).addClass('current').siblings().removeClass('current')
	})
});

/*商品选颜色*/
$(function(){
	$(".item").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
	});
});

$(function(){
	$(".xzbb a").click(function(){
		$(this).addClass("xz_a").siblings().removeClass("xz_a");
	});
});


/*产品详细*/
$(function(){
	// 图片上下滚动
    var count = $("#imageMenu li").length - 3; /* 显示 4 个 li标签内容 */
    var interval = $("#imageMenu li:first").width();
    var curIndex = 0;

    $('.scrollbutton').click(function () {
        if ($(this).hasClass('disabled')) return false;

        if ($(this).hasClass('smallImgUp'))--curIndex;
        else ++curIndex;

        $('.scrollbutton').removeClass('disabled');
        if (curIndex == 0) $('.smallImgUp').addClass('disabled');
        if (curIndex == count - 1) $('.smallImgDown').addClass('disabled');

        $("#imageMenu ul").stop(false, true).animate({ "marginLeft": -curIndex * interval + "px" }, 600);
    });

    // 解决 ie6 select框 问题
    $.fn.decorateIframe = function (options) {
        if ($.browser.msie && $.browser.version < 7) {
            var opts = $.extend({}, $.fn.decorateIframe.defaults, options);
            $(this).each(function () {
                var $myThis = $(this);
                //创建一个IFRAME
                var divIframe = $("<iframe />");
                divIframe.attr("id", opts.iframeId);
                divIframe.css("position", "absolute");
                divIframe.css("display", "none");
                divIframe.css("display", "block");
                divIframe.css("z-index", opts.iframeZIndex);
                divIframe.css("border");
                divIframe.css("top", "0");
                divIframe.css("left", "0");
                if (opts.width == 0) {
                    divIframe.css("width", $myThis.width() + parseInt($myThis.css("padding")) * 2 + "px");
                }
                if (opts.height == 0) {
                    divIframe.css("height", $myThis.height() + parseInt($myThis.css("padding")) * 2 + "px");
                }
                divIframe.css("filter", "mask(color=#fff)");
                $myThis.append(divIframe);
            });
        }
    }
    $.fn.decorateIframe.defaults = {
        iframeId: "decorateIframe1",
        iframeZIndex: -1,
        width: 0,
        height: 0
    }
    //放大镜视窗
    $("#bigView").decorateIframe();

    //点击到中图
    var midChangeHandler = null;

    $("#imageMenu li img").bind("click", function () {
        if ($(this).attr("id") != "onlickImg") {
            midChange($(this).attr("src").replace("small", "mid"));
            $("#imageMenu li").removeAttr("id");
            $(this).parent().attr("id", "onlickImg");
        }
    }).bind("mouseover", function () {
        if ($(this).attr("id") != "onlickImg") {
            window.clearTimeout(midChangeHandler);
            midChange($(this).attr("src").replace("small", "mid"));
            $(this).parent().addClass('hover').siblings().removeClass('hover');
        }
    }).bind("mouseout", function () {
        if ($(this).attr("id") != "onlickImg") {
            $(this).removeAttr("style");
            midChangeHandler = window.setTimeout(function () {
                midChange($("#onlickImg img").attr("src").replace("small", "mid"));
            }, 1000);
        }
    });

    function midChange(src) {
        $("#midimg").attr("src", src).load(function () {
            changeViewImg();
        });
    }

    //大视窗看图
    function mouseover(e) {
        if ($("#winSelector").css("display") == "none") {
            $("#winSelector,#bigView").show();
        }

        $("#winSelector").css(fixedPosition(e));
        e.stopPropagation();
    }


    function mouseOut(e) {
        if ($("#winSelector").css("display") != "none") {
            $("#winSelector,#bigView").hide();
        }
        e.stopPropagation();
    }


    $("#midimg").mouseover(mouseover); //中图事件
    $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //选择器事件

    var $divWidth = $("#winSelector").width(); //选择器宽度
    var $divHeight = $("#winSelector").height(); //选择器高度
    var $imgWidth = $("#midimg").width(); //中图宽度
    var $imgHeight = $("#midimg").height(); //中图高度
    var $viewImgWidth = $viewImgHeight = $height = null; //IE加载后才能得到 大图宽度 大图高度 大图视窗高度

    function changeViewImg() {
        $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "big"));
    }
    changeViewImg();
    $("#bigView").scrollLeft(0).scrollTop(0);
    function fixedPosition(e) {
        if (e == null) {
            return;
        }
        var $imgLeft = $("#midimg").offset().left; //中图左边距
        var $imgTop = $("#midimg").offset().top; //中图上边距
        X = e.pageX - $imgLeft - $divWidth / 2; //selector顶点坐标 X
        Y = e.pageY - $imgTop - $divHeight / 2; //selector顶点坐标 Y
        X = X < 0 ? 0 : X;
        Y = Y < 0 ? 0 : Y;
        X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;
        Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;

        if ($viewImgWidth == null) {
            $viewImgWidth = $("#bigView img").outerWidth();
            $viewImgHeight = $("#bigView img").height();
            if ($viewImgWidth < 200 || $viewImgHeight < 200) {
                $viewImgWidth = $viewImgHeight = 800;
            }
            $height = $divHeight * $viewImgHeight / $imgHeight;
            $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);
            $("#bigView").height($height);
        }

        var scrollX = X * $viewImgWidth / $imgWidth;
        var scrollY = Y * $viewImgHeight / $imgHeight;
        $("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });
        $("#bigView").css({ "top": 0, "left": $(".frame").width() + 15 });

        return { left: X, top: Y };
    }

});



$(function(){
	$('.m-mProFocus').slide({
		direction: 'x',
		speed: 'slow',
		navCls: 'mPro-nav',
		contentCls: 'mPro-content',
		caption: true,   //是否带有标题
		evtype: 'mouse',
		effect:'scroll'   //'random', 'normal', 'fade', 'scroll', 'fold', 'slice', 'slide', 'shutter', 'grow'
	});
});




