# jquery-scrollToTop-ease-theory

滚动至顶部的jquery插件，手工写缓冲算法，适合新手学习缓冲动画


##Doc

$("#btn").scrolltotop(options);

options = {
    startshow:100,  
    speed:20
}

###startshow
  滚动条滚动至哪个位置之后显示回顶按钮-$('#btn'),默认滚动100像素后出现

###speed
   以毫秒为单位滚动动画的帧数间隔，默认20毫秒为一帧
