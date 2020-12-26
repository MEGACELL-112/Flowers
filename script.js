// console.log(12);
// console.log("Hello World");
// console.log(50>1);
// console.log("501"+"501");
// console.log(501+501);
// console.log(typeof(501+501))
// console.log(typeof("Человек"));
// var bg = "red";
// console.log(bg);
// console.log("background:"+bg);
// // alert("Alert!!!");
// document.getElementById('tools').innerHTML = "Аксессуары";
// console.log(document.getElementsByClassName('menu')[0].children[2].children[0]);
// document.getElementsByClassName('menu')[0].children[2].children[0].innerHTML="Букет своими руками";
var distance=0;
document.getElementsByClassName('buttons')[0].children[1].onclick=function(){
distance=distance+window.innerWidth;
distance=distance%(window.innerWidth*document.getElementsByClassName('slider')[0].children.length);
console.log(distance);
document.getElementsByClassName('slider')[0].scroll({
	top: 0,
	left:distance,
	behavior: "smooth"
});
}
document.getElementsByClassName('buttons')[0].children[0].onclick=function(){
distance=distance-window.innerWidth;
console.log(distance);
document.getElementsByClassName('slider')[0].scroll({
	top: 0,
	left:distance,
	behavior: "smooth"
});
}