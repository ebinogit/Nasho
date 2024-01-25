//プレイヤー名
var name2=localStorage.getItem("name2");
var name3=localStorage.getItem("name3");
var name4 = localStorage.getItem("name4");
var name5 = localStorage.getItem("name5");

$(".name2").text(name2);
$(".name3").text(name3);
$(".name4").text(name4);
$(".name5").text(name5);

//社員数
var employee1=localStorage.getItem("employee1");
var employee2=localStorage.getItem("employee2");
var employee1 = localStorage.getItem("employee3");
var employee2 = localStorage.getItem("employee4");


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



$(document).ready(function () {
    // ボタンがクリックされたときの処理
    $('.button').click(function () {
        var buttonId = $(this).attr('id');
        // 対応するモーダルの内容を取得
        var modalContent = $('#' + buttonId + '-modal-content').html();
        // モーダルに内容を設定
        $('.modal').html(modalContent);
        // モーダルを表示
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('body').addClass('modal-active');
    });

    // モーダルの背景がクリックされたときの処理
    $('#modal-container').click(function () {
        $(this).addClass('out');
        $('body').removeClass('modal-active');
    });
});