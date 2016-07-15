// XML news reader

$(function() {
    // define news link
    var news = [{
        title: 'VR 黑客 马拉松 48小时开发VR游戏',
        description: '在5月7日和8日两天，一场名为Cocos VR的黑客马拉松活动在北京热血开赛，这是国内首届48小时Cocos VR黑客松活动，参赛团队需要使用Cocos 3D游戏引擎在48小时内开发属于自己的一款VR体验。 ',
        link: 'http://www.0791quanquan.com/news_keji/topic_1313342/'
    }, {
        title: '使用Unity开发虚拟现实应用',
        description: 'VR应用开发技术培训，专业团队教授使用Unity和HTC Vive开发虚拟现实应用。两天时间，快速入门最新黑科技。',
        link: 'http://www.moduovr.com/article/3528.html'
    }, {
        title: '参加西雅图VR Hackathon是一种什么体验',
        description: '西雅图地区第三届 VR Hackathon 上周末圆满结束。此次Hackathon比赛亮点颇多，有30多支队伍超过百人参加。此次活动的一大亮点是VR硬件与各种识别技术，如Amazon Alexa语音识别，LeapMotion手势识别的结合应用。这些应用激发了各种新鲜又不失发展潜力的方向。',
        link: 'https://rockq.org/topic/107/%E5%8F%82%E5%8A%A0%E8%A5%BF%E9%9B%85%E5%9B%BEvr-hackathon%E6%98%AF%E4%B8%80%E7%A7%8D%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C'
    }];
    // init OWL slider
    $(document).ready(function() {
        $("#owl-slide-news").owlCarousel({

            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            navigationText: ["&#xf053;", "&#xf054;"]
        });

        news.forEach(function(val, index) {
            //insert the data in the slider
            $titleHTML = '<h3 class="opensuse-blue strong-title">' + val.title + '</h3>';
            $linkHTML = '<a href="' + val.link + '" target="_blank">' + $titleHTML + '</a>';
            $descriptionHTML = '<p class="opensuse-blue">' + val.description + '</p>';
            $newsSlider = '<div class="row">' + '<div class="col-sm-8 col-sm-offset-2 text-center">' + $linkHTML + $descriptionHTML + '</div>' + '</div>';

            // add the items to the OWL carousel
            var owl = $('#owl-slide-news');

            owl.data('owlCarousel').addItem($newsSlider);
        });
    });
});
