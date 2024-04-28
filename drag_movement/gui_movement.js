let ptGUI;
let menu;
let afkStatus;
let isDragging = false;
let dragOffsetX, dragOffsetY;

menu = /*html*/ `
    <div id="ptGUI-title" class="ptGUI-title" style="text-align: center; margin-bottom: 20px;">Plum GUI</div>
    
    <!-- toggle anim loop -->
    <button id="ptGUI-button-1" class="ptGUI-button ptGUI-anim-button" style="display: block; width: 100%; padding: 10px; margin-bottom: 10px; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease; background-color: green;">Anim Loop</button>
    
    <!-- toggle anti afk -->
    <div class="ptGUI-checkbox" style="margin-bottom: 10px; background-color: red; text-align: center; border-radius: 5px;">
        <label for="ptGUI-checkbox-1" id="anti_afk" style="display: inline-block; text-align: center; position: relative; cursor: pointer;">Anti afk toggle : 
        ${afkStatus === undefined ? "off" : afkStatus}</label>
    </div>

    <!-- toggle destroy GUI -->
    <button id="destroyButton" class="ptGUI-button ptGUI-destroy-button" style="background-color: rgba(0, 0, 128, 0.8); display: block; width: 100%; padding: 10px; margin-bottom: 10px; border: none; border-radius: 5px; cursor: pointer; transition: background-color 0.3s ease;">Destroy</button>
`;

ptGUI = /*html*/ `
    <div id="ptGUI" class="ptGUI-container" style="position: absolute; top: 20px; left: 20px; width: 300px; padding: 20px; background-color: rgba(0, 0, 0, 0.8); color: white; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">
        ${menu}
    </div>
`;

document.body.insertAdjacentHTML("beforeend", ptGUI);

const ptGUIElement = document.getElementById("ptGUI");

// Handle mouse events
ptGUIElement.addEventListener("mousedown", function (e) {
    isDragging = true;
    dragOffsetX = e.clientX - ptGUIElement.offsetLeft;
    dragOffsetY = e.clientY - ptGUIElement.offsetTop;
    e.preventDefault(); // Prevent default drag behavior
});

document.addEventListener("mousemove", function (e) {
    if (isDragging) {
        ptGUIElement.style.left = (e.clientX - dragOffsetX) + 'px';
        ptGUIElement.style.top = (e.clientY - dragOffsetY) + 'px';
    }
});

document.addEventListener("mouseup", function () {
    isDragging = false;
});

// Handle touch events
ptGUIElement.addEventListener("touchstart", function (e) {
    isDragging = true;
    var touch = e.touches[0];
    dragOffsetX = touch.clientX - ptGUIElement.offsetLeft;
    dragOffsetY = touch.clientY - ptGUIElement.offsetTop;
    e.preventDefault(); // Prevent default drag behavior
}, { passive: false });

document.addEventListener("touchmove", function (e) {
    if (isDragging) {
        var touch = e.touches[0];
        ptGUIElement.style.left = (touch.clientX - dragOffsetX) + 'px';
        ptGUIElement.style.top = (touch.clientY - dragOffsetY) + 'px';
    }
}, { passive: false });

document.addEventListener("touchend", function () {
    isDragging = false;
});

document.getElementById("destroyButton").addEventListener("click", function () {
    if (ptGUIElement) {
        ptGUIElement.remove();
    }
});