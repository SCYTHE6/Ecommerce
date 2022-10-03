var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var imageObj = new Image();

var x = 0;
var y = 0;
var width = 290;
var height = 297;

imageObj.onload = function() {
    context.drawImage(imageObj, x, y);
};

imageObj.src = 'C:/Github/Ecommerce/media/151969_original_3840x3840.jpg';