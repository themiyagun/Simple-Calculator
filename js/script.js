function btnclick(x) {
   $("#display").val($("#display").val()+x);
}
function clr(y) {
    $("#display").val(y);
}

function calc() {
    clr(eval($("#display").val()));
}

function backspace() {
   var num = $("#display").val();
   var len = num.length-1;
   var newnum = num.substring(0,len);
   $("#display").val(newnum);
}
function root() {
   var x= Math.sqrt($("#display").val());
   $("#display").val(x);
}

function power() {
    var x= Math.pow($("#display").val(),2);
    $("#display").val(x);
}
function sin() {
    var x= Math.sin(($("#display").val())* Math.PI / 180);
    $("#display").val(x);
}
function cos() {
    var x= Math.cos(($("#display").val())* Math.PI / 180);
    $("#display").val(x);
}
function tan() {
    var x= Math.tan(($("#display").val())* Math.PI / 180);
    $("#display").val(x);
}