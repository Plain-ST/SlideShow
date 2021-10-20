const mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
let count = 1;
let url;
let images = document.images;
let timeID;
let flg = 0;
function left(){
  thumbnailsElement.children[count-1].classList.remove('selected');
  count = (count==1) ? 19 : (count-1);
  url = images[count].src;
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src', url);
}
function right() {
  thumbnailsElement.children[count-1].classList.remove('selected');
  count = (count==19) ? 1 : (count+1);
  url = images[count].src;
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src', url);
}
function play(){
  if(!flg){
    flg = 1;
    slidePlay();
  }
}
function slidePlay(){
  timeID = setTimeout(function(){
    right();
    slidePlay();
  },1000);
}
function stop(){
  clearTimeout(timeID);
  flg = 0;
}
function reset(){
  stop();
  thumbnailsElement.children[count-1].classList.remove('selected');
  count = 1;
  url = images[count].src;
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src', url);
}
function imgClick(num){
  stop();
  thumbnailsElement.children[count-1].classList.remove('selected');
  count = num;
  url = images[count].src;
  thumbnailsElement.children[count-1].classList.add('selected');
  mainElement.setAttribute('src', url);
}
