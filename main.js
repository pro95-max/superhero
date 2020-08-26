canvas=new fabric.Canvas('myCanvas');
playerx=10;
playery=10;
playerh=150;
playerw=140;
player_object="";
function upload_player(){
    fabric.Image.fromURL("final_output",function(Img){
player_object=Img;
player_object.scaleToWidth(playerw);
player_object.scaleToHeight(playerh);
player_object.set({
    top:playery,
    left:playerx
    
});
canvas.add(player_object);
    });
}
window.addEventListener("keydown",function_kdown);
function function_kdown(e){
keyval= e.keyCode;
if(e.shiftkey==true&&keyval==80){
    console.log(shiftm)
 playerh-playerh-10;
 playery=playerw-10
 document.getElementById("currentwidth").innerHTML=playerw;   
 document.getElementById("currentheight").innerHTML=playerh;  
}
if(e.shiftkey==true&&keyval==77){
    console.log(shiftp)
    playerh-playerh+10;
    playery=playerw+10
    document.getElementById("currentwidth").innerHTML=playerw;   
    document.getElementById("currentheight").innerHTML=playerh;  
   }
}