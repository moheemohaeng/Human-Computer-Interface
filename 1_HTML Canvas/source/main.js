var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
////////////////////////


///////////메인화면
function screen1(){

    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width, canvas.height);
 /////////////////////////////////////////////   

function drwaBezierCurve() {
    context.strokeStyle = "white";
    context.fillStyle = "white";
    context.beginPath();
    context.moveTo(endPoints[0].x, endPoints[0].y);
    context.bezierCurveTo(controlPoints[0].x, controlPoints[0].y,
        controlPoints[1].x, controlPoints[1].y,
        endPoints[1].x, endPoints[1].y);
    context.stroke();
}
    
///////////////////////////////////////////////////////////////////////////////

var titlebackground = document.getElementById("canvas"),
    context = canvas.getContext("2d");
var lingrad = context.createLinearGradient(0, 0, 720, 80);
lingrad.addColorStop(0, "#9106F9");
lingrad.addColorStop(0.9, "#4493F8");
context.fillStyle = lingrad;
context.fillRect(0, 0, 720, 80);


var nexontitle = document.getElementById("canvas"), 
    nexontitle = canvas.getContext("2d");
nexontitle.font = "bold 30px Helvetica";
nexontitle.fillStyle = "white";
nexontitle.fillText("NEXON PLAY", 260, 50);


var titleicon1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.lineWidth = 2;
context.strokeStyle = "white";
context.strokeRect(20, 20, 40, 40);



var titleicon1_1 = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    endPoints = [ { x: 60, y: 20}, { x: 20, y: 40}],
    controlPoints = [ { x: 60, y: 80}, { x: 30, y: 10}];

drwaBezierCurve();


var titleicon2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.lineWidth = 2;
context.strokeStyle = "white";
context.strokeRect(660, 20, 40, 40);


var purplepoint1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.arc(700, 20, 4, 0, Math.PI*2);
context.closePath();
context.fillStyle = "purple";
context.fill();



////////////////////////////////////////



var nickname1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "35pt Arial";
context.fillStyle = "white";
context.fillText("낑엥낑엥", 30, 170);
context.globalCompositeOperation = "destination-over";



/////////////////////////////



var playstr = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "11pt Arial";
context.fillStyle = "white";
context.fillText("플레이", 60, 275);


var pointstr = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "11pt Arial";
context.fillStyle = "white";
context.fillText("포인트", 60, 292);


var point = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "25pt Arial";
context.fillStyle = "white";
context.fillText("1,366", 250, 292);


var playstr = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "11pt Arial";
context.fillStyle = "white";
context.fillText("넥슨", 400, 275);


var pointstr = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "11pt Arial";
context.fillStyle = "white";
context.fillText("캐시", 400, 292);


var cash = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "25pt Arial";
context.fillStyle = "white";
context.fillText("55", 620, 292);


var cash = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "25pt Arial";
context.fillStyle = "white";
context.fillText("55", 620, 292);



//////////////////////////



var otpstr = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 11pt Arial";
context.fillStyle = "white";
context.fillText("넥슨OTP", 80, 430);


var pointshopstr = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 11pt Arial";
context.fillStyle = "white";
context.fillText("포인트상점", 240, 430);


var pointsavestr = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 11pt Arial";
context.fillStyle = "white";
context.fillText("포인트적립", 425, 430);



var cabinetstr = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 11pt Arial";
context.fillStyle = "white";
context.fillText("보관함", 600, 430);



/////////////////////////



var myfavoritegame = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "18pt Arial";
context.fillStyle = "black";
context.fillText("내가 즐겨하는 게임", 30, 510);


var maplestr = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 20pt Arial";
context.fillStyle = "black";
context.fillText("메이플스토리", 30, 550);


var myfavoritegame = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "18pt Arial";
context.fillStyle = "black";
context.fillText("3주 연속 접속! 다음주에 또 만나요~", 30, 590);



/////////////////////////



var background1 = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    image = new Image();
context.globalAlpha = 0.8;
image.src = "예티큐티.jpg";
image.onload = function(e) {
    context.drawImage(image, 0, 80, 720, 370);
};


var pointcash = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "#AEADD8";
context.fillRect(40, 240, 650 ,80);


var centerbar = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(360, 250, 3, 60)


var redpoint1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.arc(350, 260, 5, 0, Math.PI*2);
context.closePath();
context.fillStyle = "red";
context.fill();




/////////////////////////



var menuicon1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(85, 350, 50, 50);


var menuicon2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(255, 350, 50, 50);


var menuicon3 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(435, 350, 50, 50);


var menuicon4 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(595, 350, 50, 50);


var menuicon1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(85, 350, 50, 50);


var menuicon2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(255, 350, 50, 50);


var menuicon3 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(435, 350, 50, 50);


var menuicon4 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "white";
context.fillRect(595, 350, 50, 50);


////////////////////////////


var redpoint2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.arc(665, 350, 5, 0, Math.PI*2);
context.closePath();
context.fillStyle = "red";
context.fill();



///////////////



var centerbox = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "#F8F8F8";
context.strokeStyle = "#EFEFEF";
context.fillRect(0, 650, 720, 280);
context.strokeRect(0, 650, 720, 280);


var centerline = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(45, 690);
context.lineWidth = 30;
context.lineCap = "round";
context.lineTo(180, 690);
context.strokeStyle = "black";
context.stroke();
context.closePath();


var centerbar = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(50, 740, 2, 190)


var user1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 15pt Arial";
context.fillStyle = "#000000";
context.fillText("asdfjkl3210", 85, 745);


var userbar1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(205, 728, 1.5, 20)


var usertime1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 12pt Arial";
context.fillStyle = "#000000";
context.fillText("2분전", 220, 743);


var user1talk = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 20pt Arial";
context.fillStyle = "black";
context.fillText("앱솔랩스 아처글러브 추옵 덱 66 올스텟 6% 경매...", 85, 790);


var user2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 15pt Arial";
context.fillStyle = "#000000";
context.fillText("알케이지", 85, 840);


var userbar2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "black";
context.fillRect(175, 823, 1.5, 20)


var usertime2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 12pt Arial";
context.fillStyle = "#000000";
context.fillText("13분전", 190, 838);


var user2talk = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 20pt Arial";
context.fillStyle = "black";
context.fillText("피스2번으로 마라벨+헤쿠는 킹정이지", 85, 885);


var blackpoint1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.arc(51, 740, 5, 0, Math.PI*2);
context.closePath();
context.fillStyle = "black";
context.fill();


var blackpoint2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.arc(51, 830, 5, 0, Math.PI*2);
context.closePath();
context.fillStyle = "black";
context.fill();



////////////////////////////



var myplaygame = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "18pt Arial";
context.fillStyle = "black";
context.fillText("내가 플레이한 게임", 30, 970);


var gameicon1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.arc(90, 1020, 30, 0, Math.PI*2);
context.closePath();
context.fillStyle = "#89CDE4";
context.fill();


var gameicon2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.arc(410, 1020, 30, 0, Math.PI*2);
context.closePath();
context.fillStyle = "#3BB64B";
context.fill();


var maplegame = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 17pt Arial";
context.fillStyle = "black";
context.fillText("메이플스토리", 140, 1010);


var mapletime = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "14pt Arial";
context.fillStyle = "black";
context.fillText("2021.04.06 21:06", 140, 1040);


var suddengame = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 17pt Arial";
context.fillStyle = "black";
context.fillText("서든어택", 460, 1010);


var suddentime = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "14pt Arial";
context.fillStyle = "black";
context.fillText("2021.03.11 17:05", 460, 1040);



//////////////////////



var submenu = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "#F8F8F8";
context.strokeStyle = "#EFEFEF";
context.fillRect(0, 1080, 720, 80);
context.strokeRect(0, 1080, 720, 80);


var submenuicon1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.lineWidth = 2;
context.strokeStyle = "black";
context.strokeRect(85, 1095, 50, 50);


var submenuicon2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.lineWidth = 2;
context.strokeStyle = "black";
context.strokeRect(255, 1095, 50, 50);


var submenuicon3 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.lineWidth = 2;
context.strokeStyle = "black";
context.strokeRect(435, 1095, 50, 50);


var submenuicon4 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.lineWidth = 2;
context.strokeStyle = "black";
context.strokeRect(595, 1095, 50, 50);


var webexplain1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "10pt Arial";
context.fillStyle = "black";
context.fillText("보관함 아이콘을 누르면 캐쉬충전으로 이동", 430, 950);


var webexplain2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "10pt Arial";
context.fillStyle = "black";
context.fillText("넥슨OTP 아이콘을 누르면 OTP입력으로 이동", 430, 970);
}
















//////////캐쉬충전화면
function screen2(){


    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width, canvas.height);
    context.globalCompositeOperation = "source-over"


    var drawingdagak = function(x, y, r, n, fillcolor, strokecolor){
        this.x = x;
        this.y = y;
        this.r = r;
        this.n = n;
        this.fillcolor = fillcolor;
        this.strokecolor = strokecolor;
    }
    
    drawingdagak.prototype.Drawing=function(){
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.beginPath();
        context.moveTo(this.x,this.y);
        context.lineWidth = 1;
        for(var i=0; i<=this.n; i++){
            context.lineTo(this.x + this.r*Math.cos((Math.PI*2)/this.n*i), 
            this.y + this.r*Math.sin((Math.PI*2)/this.n*i));
        }
        context.strokeStyle = this.strokecolor;
        context.stroke();
        context.fillStyle = this.fillcolor;
        context.fill();
        context.closePath();
    };
    
    var drawingsubbox = function(x, y, w, h, fillcolor){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fillcolor = fillcolor;
    }


    drawingsubbox.prototype.Drawing=function(){
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        context.fillStyle = this.fillcolor;
        context.fillRect(this.x, this.y, this.w, this.h)
    }
    


    
    
    
    var chargetitlebox = document.getElementById("canvas"),
    chargetitlebox = canvas.getContext("2d");
    chargetitlebox.fillStyle = "#5674CE";
    chargetitlebox.fillRect(0, 0, 720, 80);
    
    
    var arrow1 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(40, 20);
    context.lineWidth = 2;
    context.lineTo(20, 40);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
    
    
    var arrow2 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(20, 40);
    context.lineWidth = 2;
    context.lineTo(40, 60);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
    
    
    var arrow3 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(20, 40);
    context.lineWidth = 2;
    context.lineTo(60, 40);
    context.strokeStyle = "white";
    context.stroke();
    context.closePath();
    
    
    var moveexplain1 = document.getElementById("canvas"), 
        context = canvas.getContext("2d");
    context.font = "bold 10px Helvetica";
    context.fillStyle = "white";
    context.fillText("뒤로가기", 40, 70);
    
    
    var barcode1 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(260, 985);
    context.lineWidth = 2;
    context.lineTo(260, 1015);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    
    
    var chargetitletext2 = document.getElementById("canvas"), 
        context = canvas.getContext("2d");
    context.font = "bold 30px Helvetica";
    context.fillStyle = "white";
    context.fillText("넥슨캐시충전", 70, 50);
    
    
    
    ///////////////////////
    
    
    
    var cashtext = document.getElementById("canvas"), 
        context = canvas.getContext("2d");
    context.font = "bold 15pt Arial";
    context.fillStyle = "black";
    context.fillText("내 넥슨캐시", 25, 130);
    
    
    var cash = document.getElementById("canvas"), 
        context = canvas.getContext("2d");
    context.font = "50pt Arial";
    context.fillStyle = "black";
    context.fillText("55", 25, 200);
    
    
    var chargebox = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.strokeRect(520, 145, 170, 50);
    
    
    var chargemenutext = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "18pt Arial";
    context.fillStyle = "black";
    context.fillText("충전/사용내역", 530, 180);
    
    
    
    ////////////////////////
    
    
    
    var submenubox = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.fillStyle = "#EEEEEE";
    context.strokeStyle = "#D9D9D9";
    context.fillRect(0, 250, 720, 910);
    context.strokeRect(0, 250, 720, 910);
    
    
    var cashtext = document.getElementById("canvas"), 
        context = canvas.getContext("2d");
    context.font = "bold 15pt Arial";
    context.fillStyle = "black";
    context.fillText("충전수단 선택하기", 25, 320);
    
    
    var subbox1 = new drawingsubbox(25, 360, 210, 170, "white");
    subbox1.Drawing();

    var subbox2 = new drawingsubbox(255, 360, 210, 170, "white");
    subbox2.Drawing();

    var subbox3 = new drawingsubbox(485, 360, 210, 170, "white");
    subbox3.Drawing();

    var subbox4 = new drawingsubbox(25, 550, 210, 170, "white");
    subbox4.Drawing();

    var subbox5 = new drawingsubbox(255, 550, 210, 170, "white");
    subbox5.Drawing();

    var subbox6 = new drawingsubbox(485, 550, 210, 170, "white");
    subbox6.Drawing();

    var subbox7 = new drawingsubbox(25, 740, 210, 170, "white");
    subbox7.Drawing();

    var subbox8 = new drawingsubbox(25, 960, 650, 85, "white");
    subbox8.Drawing();
    
    
    
    var submenu1text = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "15pt Arial";
    context.fillStyle = "black";
    context.fillText("넥슨카드/넥슨핀", 60, 485);
    
    
    var submenu2text = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "15pt Arial";
    context.fillStyle = "black";
    context.fillText("토스", 340, 485);
    
    
    var submenu3text = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "15pt Arial";
    context.fillStyle = "black";
    context.fillText("문화상품권", 540, 485);
    
 
    var submenu4text = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "15pt Arial";
    context.fillStyle = "black";
    context.fillText("카카오페이", 80, 675);
    
 
    
    var submenu5text = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "15pt Arial";
    context.fillStyle = "black";
    context.fillText("가상계좌", 320, 675);
    
    
    
    var submenu6text = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "15pt Arial";
    context.fillStyle = "black";
    context.fillText("PAYCO", 558, 675);
7
    
    
    var submenu7text = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "15pt Arial";
    context.fillStyle = "black";
    context.fillText("삼성페이", 90, 865);
    
    
    var submenu1icon = new drawingdagak(130, 420, 25, 3, "#21E7CC", "#21E7CC");
    submenu1icon.Drawing();
    
    var submenu2icon = new drawingdagak(360, 420, 25, 4, "#0151FF", "#0151FF");
    submenu2icon.Drawing();
    
    var submenu3icon = new drawingdagak(590, 420, 25, 5, "#FFAA50", "#FFAA50");
    submenu3icon.Drawing();
    
    var submenu4icon = new drawingdagak(130, 610, 25, 6, "#F9E900", "#F9E900");
    submenu4icon.Drawing();
    
    var submenu5icon = new drawingdagak(360, 610, 25, 7, "#BE33F2", "#BE33F2");
    submenu5icon.Drawing();
    
    var submenu6icon = new drawingdagak(590, 610, 25, 8, "#F62828", "#F62828");
    submenu6icon.Drawing();
    
    var submenu7icon = new drawingdagak(130, 800, 25, 9, "#1D3692", "#1D3692");
    submenu7icon.Drawing();
    
    
    var chargecenterline = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.fillStyle = "#cccccc";
    context.fillRect(359, 1075, 2, 50);
    
    
    
    //////////////////////////////////////
    
    
    
    var barcode1 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(260, 985);
    context.lineWidth = 2;
    context.lineTo(260, 1015);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    
    
    var barcode2 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(255, 985);
    context.lineWidth = 2;
    context.lineTo(255, 1015);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    
    
    var barcode3 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(250, 985);
    context.lineWidth = 1;
    context.lineTo(250, 1015);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    
    
    var barcode4 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(245, 985);
    context.lineWidth = 3;
    context.lineTo(245, 1015);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    
    
    var barcode5 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(240, 985);
    context.lineWidth = 1;
    context.lineTo(240, 1015);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    
    
    var barcode6 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(235, 985);
    context.lineWidth = 2;
    context.lineTo(235, 1015);
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
    
    
    var chargetext = document.getElementById("canvas"), 
        context = canvas.getContext("2d");
    context.font = "25px Helvetica";
    context.fillStyle = "black";
    context.fillText("바코드로 충전하기", 280, 1010);
    
    
    
    ////////////////////////////
    
    
    
    var questionicon1 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.lineWidth = 1;
    context.beginPath();
    context.arc(100, 1100, 10, 0, Math.PI*2);
    context.closePath();
    context.stroke();
    
    
    var questionbox1 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "13pt Arial";
    context.fillStyle = "black";
    context.fillText("?", 95, 1105);
    
    
    var questiontext1 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "15pt Arial";
    context.fillStyle = "black";
    context.fillText("자주하는 질문", 130, 1108);
    
    
    var questionicon2 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.lineWidth = 1;
    context.beginPath();
    context.arc(470, 1100, 10, 0, Math.PI*2);
    context.closePath();
    context.stroke();
    
    
    var questionbox2 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "8pt Arial";
    context.fillStyle = "black";
    context.fillText("1:1", 463, 1104);
    
    
    var questiontext2 = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.font = "15pt Arial";
    context.fillStyle = "black";
    context.fillText("1:1 문의", 500, 1108);
    


    var webexplain3 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "10pt Arial";
context.fillStyle = "black";
context.fillText("홈으로 돌아가려면 화살표 누르기", 430, 950);
    
}












//////////////넥슨OTP입력화면
function screen3(){

    var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");
    context.clearRect(0,0,canvas.width, canvas.height);
    context.globalCompositeOperation = "source-over"




    var otptitlebox = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "#0088EB";
context.fillRect(0, 0, 720, 80);


var arrow1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(40, 20);
context.lineWidth = 2;
context.lineTo(20, 40);
context.strokeStyle = "white";
context.stroke();
context.closePath();


var arrow2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(20, 40);
context.lineWidth = 2;
context.lineTo(40, 60);
context.strokeStyle = "white";
context.stroke();
context.closePath();


var arrow3 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(20, 40);
context.lineWidth = 2;
context.lineTo(60, 40);
context.strokeStyle = "white";
context.stroke();
context.closePath();


var moveexplain = document.getElementById("canvas"), 
    context = canvas.getContext("2d");
context.font = "bold 10px Helvetica";
context.fillStyle = "white";
context.fillText("뒤로가기", 40, 70);


var otptitletext2 = document.getElementById("canvas"), 
    context = canvas.getContext("2d");
context.font = "bold 30px Helvetica";
context.fillStyle = "white";
context.fillText("넥슨OTP", 70, 50);



////////////////////////////



var explain = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "15pt Arial";
context.fillStyle = "black";
context.fillText("PC화면의 인증번호 4자리를 입력해 주세요.", 150, 150);


var something = document.getElementById("canvas"),
    something = canvas.getContext("2d");
something.beginPath();
something.arc(670, 130, 20, 0, Math.PI*2);
something.strokeStyle = "black";
something.closePath();
something.stroke();


var somthingtext = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "20pt Arial";
context.fillStyle = "black";
context.fillText("i", 667, 139);


var numberbox1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "#F6F6F6";
context.strokeStyle = "#CBCBCB";
context.lineWidth = 1;
context.fillRect(160, 200, 90, 120);
context.strokeRect(160, 200, 90, 120);


var numberbar1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(185, 260);
context.lineWidth = 5;
context.lineTo(225, 260);
context.strokeStyle = "#BBBBBB";
context.stroke();
context.closePath();


var numberbox2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "#F6F6F6";
context.strokeStyle = "#CBCBCB";
context.lineWidth = 1;
context.fillRect(260, 200, 90, 120);
context.strokeRect(260, 200, 90, 120);


var numberbar2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(285, 260);
context.lineWidth = 5;
context.lineTo(325, 260);
context.strokeStyle = "#BBBBBB";
context.stroke();
context.closePath();


var numberbox3 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "#F6F6F6";
context.strokeStyle = "#CBCBCB";
context.lineWidth = 1;
context.fillRect(360, 200, 90, 120);
context.strokeRect(360, 200, 90, 120);


var numberbar3 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(385, 260);
context.lineWidth = 5;
context.lineTo(425, 260);
context.strokeStyle = "#BBBBBB";
context.stroke();
context.closePath();


var numberbox4 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "#F6F6F6";
context.strokeStyle = "#CBCBCB";
context.lineWidth = 1;
context.fillRect(460, 200, 90, 120);
context.strokeRect(460, 200, 90, 120);


var numberbar4 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(485, 260);
context.lineWidth = 5;
context.lineTo(525, 260);
context.strokeStyle = "#BBBBBB";
context.stroke();
context.closePath();



//////////////////////



var checkbar = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(230, 380);
context.lineWidth = 70;
context.lineCap = "round";
context.lineTo(480, 380);
context.strokeStyle = "#D4D4D4";
context.stroke();
context.closePath();


var checktext = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "28px Helvetica";
context.fillStyle = "white";
context.fillText("확인", 330, 390);


var myserialtext = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "23px Helvetica";
context.fillStyle = "black";
context.fillText("내 시리얼", 310, 480);


var serialnumber = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "35px Helvetica";
context.fillStyle = "black";
context.fillText("HUMA - NCOM - INTF", 190, 530);



////////////////////////



var myserialtext = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "23px Helvetica";
context.fillStyle = "black";
context.fillText("내 시리얼", 310, 480);


var crossline = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(30, 910);
context.lineWidth = 2;
context.lineTo(690, 910);
context.strokeStyle = "#E4E4E4";
context.stroke();
context.closePath();


var whywarningtext = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "bold 14pt Helvetica";
context.fillStyle = "black";
context.fillText("ㆍ혹시 게임인증이 안되나요?", 20, 950);


var whywarningexplain1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "14pt Helvetica";
context.fillStyle = "black";
context.fillText("내 시리얼번호가 변경되었을 수 있으니, 넥슨닷컴 > 보안센터 > 넥슨 OTP에", 40, 980);


var whywarningexplain1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "14pt Helvetica";
context.fillStyle = "black";
context.fillText("등록된 시리얼번호와 동일한지 체크해 보세요.", 40, 1005);







var homebox = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.fillStyle = "#F6F6F6";
context.strokeStyle = "#CBCBCB";
context.lineWidth = 1;
context.fillRect(0, 1070, 720, 90);
context.strokeRect(0, 1070, 720, 90);


var homebar1 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(40, 1115);
context.lineWidth = 60;
context.lineCap = "round";
context.lineTo(670, 1115);
context.strokeStyle = "black";
context.stroke();
context.closePath();


var homebar2 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(40, 1115);
context.lineWidth = 59;
context.lineCap = "round";
context.lineTo(670, 1115);
context.strokeStyle = "white";
context.stroke();
context.closePath();


var hometext = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "20pt Arial";
context.fillStyle = "black";
context.fillText("홈 화면에 추가", 280, 1125);


var webexplain4 = document.getElementById("canvas"),
    context = canvas.getContext("2d");
context.font = "10pt Arial";
context.fillStyle = "black";
context.fillText("홈으로 돌아가려면 화살표 누르기", 430, 950);


}




















































screen1();
var screen=1;

        //클릭이벤트
canvas.addEventListener("click", function(e) {
    if(screen==1){
        console.log(e.clientY);
        if(595<e.clientX && e.clientX<680 && 350 <e.clientY && e.clientY<430){
            screen = 2;
            context.clearRect(0,0,canvas.width,canvas.height);
            screen2();
        };
        if(100<e.clientX && e.clientX<190 && 350 <e.clientY && e.clientY<430){
            screen = 3;
            context.clearRect(0,0,canvas.width,canvas.height);
            screen3();
        };
    }else if(screen == 2 || screen ==3){
        if(30<e.clientX && e.clientX<100 && 20 <e.clientY && e.clientY<100){
            screen = 1;
            context.clearRect(0,0,canvas.width,canvas.height);
            screen1();
        };
    };
});









