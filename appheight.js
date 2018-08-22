var feet = document.querySelector('#feet');
var cm = document.querySelector('#cm');
document.querySelector('#calculator').addEventListener('submit',function(e){
    e.preventDefault();

    var x = feet.value*30.48
    cm.value=x ; 
})