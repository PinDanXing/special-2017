// ;
(function() {
  window.onload = function() {

    // var lazyLoadImg = new LazyLoadImg({
    //     el: document.querySelector('#app'),
    //     mode: 'default', //默认模式，将显示原图，diy模式，将自定义剪切，默认剪切居中部分
    //     time: 300, // 设置一个检测时间间隔
    //     complete: true, //页面内所有数据图片加载完成后，是否自己销毁程序，true默认销毁，false不销毁
    //     position: { // 只要其中一个位置符合条件，都会触发加载机制
    //       top: -60, // 元素距离顶部
    //       right: 0, // 元素距离右边
    //       bottom: 0, // 元素距离下面
    //       left: 0 // 元素距离左边
    //     },
    //     before: function() { // 图片加载之前执行方法

    //     },
    //     success: function(el) { // 图片加载成功执行方法
    //       el.classList.add('loading-success')
    //     },
    //     error: function(el) { // 图片加载失败执行方法
    //       el.src = './build/img/browser.png'
    //     }
    //   })
    // lazyLoadImg.start() // 重新开启懒加载程序
    // lazyLoadImg.destroy() // 销毁图片懒加载程序

  }

  $(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#f5f5f5', '#ffffff'],
      anchors: ['floor1', 'floor2', 'floor3', 'floor4', 'floor5'],
      menu: '#menu',
      onLeave: function(index, nextIndex, direction) {

      },
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {},
      afterRender: function() {

      },
      afterResize: function() {

      },
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {

      },
      afterLoad: function(anchorLink, index) {

      }
    });

    var windHeight = $(window).height()
    if (windHeight < 600) {
      $("#menu").addClass("min")
    }

  });

 setInterval(function(){
  loopImgSide()
 },1500)

})();

function loopImgSide() {
  var box = $("#imgsideBox");
  var imgs = box.find(".imgside")
  var len = imgs.length
  var index = box.attr("data-index")
  imgs.addClass("hide");
  index++

  if(index == len){
    index = 0
  } 
  
  imgs.eq(index).removeClass("hide")
  box.attr("data-index", index)
}