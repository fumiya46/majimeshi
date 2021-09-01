//drawer
$(function(){
    $('.drawer-icon').on('click', function(){
  
        $('.drawer-icon').toggleClass('is-active');
        $('.drawer-content').toggleClass('is-active');
    });
  
    $('.drawer-content a').on('click', function(){
  
        $('.drawer-icon').click();
    });
  
});
  
  //faq
  $(function(){
    $('.question').on('click',function() {
  
        $(this).next().slideToggle('is-open');
        $(this).toggleClass('is-open');
    });
  });
  
  //slider
  $(function() {
    $(document).on('ready', function() {
        $(".regular").slick({
          dots: true, 
          speed: 1500,
          arrows: false,
        });
    });
  });
  
  // #から始まるURLがクリックされた時
  $(function(){
    $('a[href^="#"]').click(function() {
      let header = $("header").innerHeight();
      // 移動速度を指定（ミリ秒）
      let speed = 700;
      // hrefで指定されたidを取得
      let id = $(this).attr("href");
      // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
      let target = $("#" == id ? "html" : id);
      // ページのトップを基準にターゲットの位置を取得
      let position = $(target).offset().top - header;
      // ターゲットの位置までspeedの速度で移動
      $("html, body").animate(
        {
          scrollTop: position
       },
        speed
      );
      return false;
    });
  });
  
    