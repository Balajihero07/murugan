
function fun(){
var name = document.getElementById('name').value;
var username=document.getElementById('username').value;
if(name==="")
    alert("please enter the form");
else
  alert(name+" successfully signup the page ");
}
function funpassword(){
  var x=document.getElementById("password");
  if(x.type==="password")
{
  x.type="text";
}
else
  {
     x.type="password";
  }
}