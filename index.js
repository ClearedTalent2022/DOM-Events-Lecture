// The window object represents the browser 
// tab that we are loading in
// We add this event listener so that we can make sure the window
// loaded before we
// start interacting with the HTML content on the 
// page with our JS code
window.addEventListener("load", function () {
    // Any code inside of this function will execute after
    // the window loads.
    // Now that we have loaded the window, we can select an individual
    // HTML element and interact with it (add an event listener etc...)

    let redHoverText = document.getElementById("redHoverText");

    // console.log({ redHoverText });
    redHoverText.addEventListener("click", function () {
        // In here, we can now set the color of this 
        // redHoverText element to be red
        redHoverText.style.color = "red";
        // What if we also want the text inside this p tag to change?
        redHoverText.innerHTML = "CLICKED! 👀👀👀👀👀👀";
    });

});