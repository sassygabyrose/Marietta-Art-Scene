var imgbox = document.getElementById('box');

var loadfile = function(event){
    imgbox.style.backgroundImage = "url(" +URL.createObjectURL(event.target.files[0])+ ")";
}