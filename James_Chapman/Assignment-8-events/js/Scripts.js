// Global variables
var titleTip = "Character limit: ";
var titleMax = "Max limit reached!";
var showToolTip = false;

// Utility functions
function get(element){
    return document.getElementById(element);
}

// Event handler functions
function showPosition(event){
    var screenX = get("screenX"),
    screenY = get("screenY"),
    pageX = get("pageX"),
    pageY = get("pageY"),
    clientX = get("clientX"),
    clientY = get("clientY"),
    tooltip = get("tooltip");

screenX.textContent = event.screenX;
screenY.textContent = event.screenY;
pageX.textContent = event.pageX;
pageY.textContent = event.pageY;
clientX.textContent = event.clientX;
clientY.textContent = event.clientY;

if(showToolTip){
    tooltip.style.left = event.clientX + 10 + "px";
    tooltip.style.top = event.clientY - 20 + "px";
}
}

// Wire up event handlers
window.addEventListener("load", function() {
    // Set up
    var tooltipChk = get("show-tooltip");

    tooltipChk.addEventListener("change", function () {
        var tooltip = get("tooltip");

        if(this.checked) {
            showTooltip = true;
            tooltip.classList.add("visible");
        }else{
            showTooltip = false;
            tooltip.classList.remove("visible");

        };
    });
});

window.addEventListener("mousemove", function(event) {
    showPosition(event);
});
