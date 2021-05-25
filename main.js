canvas  = document.getElementById('MYCANVAS');
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;
background_image = "racing.jpg";

function add(){
background_image_tag = new Image();
background_image_tag.onload = uploadBackground;
background_image_tag.src = background_image;

car1_image_tag = new Image();
car1_image_tag.onload = uploadCar1;
car1_image_tag.src = car1_image;
}