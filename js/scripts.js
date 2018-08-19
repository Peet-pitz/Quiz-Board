$(document).ready(function(){
$("form#quiz").submit(function(event){
var q1= $("input:radio[name=q1]:checked").val();
var q2= $("input:radio[name=q2]:checked").val();
var q3= $("input:radio[name=q3]:checked").val();
var result=parseInt(q1)+parseInt(q2)+parseInt(q3);
$("#result").text("You got "+result);

$(".quiz").hide();
$(".answer").show();
event.preventDefault();
});
});