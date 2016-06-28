$(document).ready(function(){
  document.querySelector('.fotorama').setAttribute('style','display:block');
  document.querySelector('.nextplugin').setAttribute('style','display:none');
  document.querySelector('.lastplugin').setAttribute('style','display:none');

  document.querySelector('.button1').addEventListener('click', function(){
    document.querySelector('.fotorama').setAttribute('style','display:block');
    document.querySelector('.nextplugin').setAttribute('style','display:none');
    document.querySelector('.lastplugin').setAttribute('style','display:none');
  });

  document.querySelector('.button2').addEventListener('click', function(){
      document.querySelector('.fotorama').setAttribute('style','display:none');
      document.querySelector('.nextplugin').setAttribute('style','display:block');
      document.querySelector('.lastplugin').setAttribute('style','display:none');
  });

  document.querySelector('.button3').addEventListener('click', function(){
      document.querySelector('.fotorama').setAttribute('style','display:none');
      document.querySelector('.nextplugin').setAttribute('style','display:none');
      document.querySelector('.lastplugin').setAttribute('style','display:block');
  });

  $('#sparkle').sparkle({
    color: "#ff00e6",
    count: 3000,
    overlap: 0,
    speed: 100,
    minSize: 10,
    maxSize: 100,
    direction: "both"
  });

});
