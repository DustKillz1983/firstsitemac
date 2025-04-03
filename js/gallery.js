/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Change the background image of the div with id "image" to the preview image's source
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
    
    // Change the text inside the div to the preview image's alt text
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    // Reset background image to its original state
    document.getElementById("image").style.backgroundImage = "url('')"; // You can set the actual default image URL if needed
    
    // Reset text to its original content
    document.getElementById("image").innerHTML = "Hover over an image to display it here.";