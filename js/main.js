/**
 * Created by lenovo on 2019/3/4.
 */
/*'use strict'*/

var main = {

    init: function () {
        this.header();
        this.scale();
    },
    //PC、手机端导航栏显示以及跳转
    header: function () {
        $('.fab-list-bullet').on('click', function () {
            $('.top-menu-mask').addClass('show');
            $('.top-menu').stop().addClass('active').animate({'top': '0', 'opacity': '1'}, 300);
        });
        $(".top-menu-mask, .top-menu a").click(function () {
            $(".top-menu-mask").removeClass('show');
            $(".top-menu").stop().removeClass("active").animate({"top": "-255px", "opacity": "0"}, 300);
        });
        $(".index-nav-frame-line").on("click", function () {
            $(".index-nav-frame-line a").addClass('active');
            $(".index-nav-frame-line").sibling("a").removeClass('active');
        });
        var urlstr = location.href;
        var urlstatus = false;
        $(".nav-tabs a").each(function () {
            if ((urlstr + '/').indexOf($(this).attr('href')) > -1 && $(this).attr('href') != '') {
                $(this).addClass('cur');
                urlstatus = true;
            } else {
                $(this).removeClass('cur');
            }
        });
        if (!urlstatus) {
            $(".nav-tabs a").eq(0).addClass('cur');
        }
        //$(".zoom-img").zoomify();
    },
    //查看图片的放大缩小
    scale:function(){
        $.fn.ImgZoomIn = function () {
            bgstr = '<div id="ImgZoomInBG" style=" background:#000000; filter:Alpha(Opacity=70); opacity:0.7; position:fixed; left:0; top:0; z-index:10000; width:100%; height:100%; display:none;"><iframe src="about:blank" frameborder="5px" scrolling="yes" style="width:100%; height:100%;"></iframe></div>';
            imgstr = '<img id="ImgZoomInImage" src="' + $(this).attr('src')+'" onclick=$(\'#ImgZoomInImage\').hide();$(\'#ImgZoomInBG\').hide(); style="cursor:pointer; display:none; position:absolute; z-index:10001;width:100%;" />';
            if ($('#ImgZoomInBG').length < 1) {
                $('body').append(bgstr);
            }
            if ($('#ImgZoomInImage').length < 1) {
                $('body').append(imgstr);
            }
            else {
                $('#ImgZoomInImage').attr('src', $(this).attr('src'));
            }
            $('#ImgZoomInImage').css('left', $(window).scrollLeft() + ($(window).width() - $('#ImgZoomInImage').width()) / 2);
            $('#ImgZoomInImage').css('top', $(window).scrollTop() + ($(window).height() - $('#ImgZoomInImage').height()) / 2);
            $('#ImgZoomInBG').show();
            $('#ImgZoomInImage').show();
        };
    }

};
$(function () {
    main.init();
});