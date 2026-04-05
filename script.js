function playVideo(src){
  document.getElementById("popup").style.display="flex";
  document.getElementById("player").src = src;
}

function closeVideo(){
  let p = document.getElementById("player");
  p.pause();
  p.src="";
  document.getElementById("popup").style.display="none";
}
