var water_images = ["windsurfing.png", "kitesurfing.png", "kayaking.png", "sailing.png"];
var index = 0;

function image_next() {
    "use strict";
    index = index + 1;
    if (index > 3) {
        index = 0;
        //to loop the images when you run through all of the images
    }
    var pic = water_images[index];
    var water_pic = document.getElementById('windsurfing');
    water_pic.src = 'images/' + pic;
}

function image_previous() {
    "use strict";
    index = index - 1;
    if (index < 0) {
        index = 3;
        //to loop the images when you get to the end
    }
    var pic = water_images[index];
    var water_pic = document.getElementById('windsurfing');
    water_pic.src = 'images/' + pic;
}

window.onload = function get_date() {
    "use strict";
    var d = new Date();
    var day = d.getDate();
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var month = monthNames[d.getMonth()];
    var year = d.getFullYear();
    var text =  document.createTextNode(day + " " + month + " " + year);
    var position = document.getElementById('date');
    position.appendChild(text);
    //adapted from Professor Paling's lecture code
};