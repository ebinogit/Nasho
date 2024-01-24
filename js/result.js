//プレイヤー名
var name1=localStorage.getItem("name1");
var name2=localStorage.getItem("name2");
$(".name1").text(name1);
$(".name2").text(name2);

//社員数
var employee1=localStorage.getItem("employee1");
var employee2=localStorage.getItem("employee2");

//得点計算
var a=parseInt($(".test").text());
var b=parseInt($(".test2").text());
var c=parseInt($(".test3").text());
var d=(a+b-c*3);

$(".score").text(d);
// alert(d);

const colors = [
    '#711c91',
    '#ea00d9',
    '#0abdc6',
    '#133e7c'
];

createSquare = () => {
    const section = document.querySelector('section');
    const square = document.createElement('span');

    const size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    square.style.background = colors[Math.floor(Math.random() * colors.length)];
    section.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 5000);
}

setInterval(createSquare, 150);