addLoadEvent(movePrepare);
function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!="function")
    {
        window.onload=func;
    }
    else{
        window.onload=function () {
            oldonload();
            func();
        }
    }
}
function movePrepare() {
    var navList=document.getElementById("nav");
    var aList=navList.getElementsByTagName("a");
    var elem=document.getElementById("animation");
    var maun=document.getElementById("main");
    console.log("赵向阳");
    elem.style.left="0px";
    elem.style.distances=0;
    /*添加鼠标点击事件*/
    aList[0].onclick=function () {
        move("animation",0, 10);
        elem.style.distances=0;
    }
    aList[1].onclick=function () {
        move("animation",100, 10);
        elem.style.distances=100;
    }
    aList[2].onclick=function () {
        move("animation",200, 10);
        elem.style.distances=200;
    }
    aList[3].onclick=function () {
        move("animation",300, 10);
        elem.style.distances=300;
    }
    aList[4].onclick=function () {
        move("animation",400, 10);
        elem.style.distances=400;
    }
    /*添加鼠标悬浮事件*/
    aList[0].onmouseover=function () {
        move("animation",0, 10);
    }
    aList[1].onmouseover=function () {
        move("animation", 100, 10);
    }
    aList[2].onmouseover=function () {
        move("animation", 200, 10);
    }
    aList[3].onmouseover=function () {
        move("animation", 300, 10);
    }
    aList[4].onmouseover=function () {
        move("animation", 400, 10);
    }
    /*添加鼠标移出事件*/
    maun.onmouseout=function (ev) {
        move("animation", elem.style.distances, 10)
    }
}
/*移动函数*/
function move(id,aleft,time) {
    var elem=document.getElementById(id);
    if(elem.style.movement)
    {
        clearTimeout(elem.style.movement);
    }
    var a_left=parseInt(window.getComputedStyle(elem,null)["left"]);
    if(aleft==a_left)
    {
        return true;
    }
    if(a_left>aleft)
    {
        var  sade=Math.ceil((a_left-aleft)/10);
        a_left=a_left-sade;
    }
    if(a_left<aleft)
    {
        var sade=Math.ceil((aleft-a_left)/10);
        a_left=a_left+sade;
    }
    elem.style.left=a_left+"px";
    elem.style.movement=setTimeout("move('"+id+"',"+aleft+","+time+")",time);
}
