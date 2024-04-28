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

document.getElementById("destroyButton").addEventListener("click", function () {
  const ptGUIElement = document.getElementById("ptGUI");
  if (ptGUIElement) {
    ptGUIElement.remove();
  }
});

document
  .getElementById("ptGUI-button-1")
  .addEventListener("click", function () {
    var buttons = document.querySelectorAll(".action-button");
    var exp_1 = prompt("Masukkan exp 1");
    var exp_2 = prompt("Masukkan exp 2");
    var exp_3 = prompt("Masukkan exp 3");
    if (buttons.length >= 5) {
      var intervalId = setInterval(function () {
        buttons[exp_1].click();
        setTimeout(function () {
          buttons[exp_2].click();
          buttons[exp_3].click();
        }, 500);
      }, 500);

      setTimeout(function () {
        clearInterval(intervalId);
        buttons[2].click();
      }, 30000);
    }
  });

document.getElementById("anti_afk").addEventListener("click", function () {
  let intervalId;
  let appendStatus = function () {
    return document.getElementById("anti_afk").textContent = `Anti afk toggle : ${afkStatus}`;
  };
  if (afkStatus === "on") {
    afkStatus = "off";
    if (intervalId) {
      clearInterval(intervalId);
      console.log("Interval stopped because anti afk is turned off");
    }
  } else {
    afkStatus = "on";
    let canvas = document.getElementById("canvas");
    let checked = document.querySelector(
      "p.text-muted.list-rules[_ngcontent-ywe-c98]"
    );

    if (checked) {
      alert("Canvas element is not found");
      afkStatus = "off";
      console.log("Script stopped because canvas is missing");
    } else {
      let active = prompt("on active anti afk per milliseconds");
      let duration = prompt("afk duration using ms (milliseconds)");

      if (active === null) {
        alert("on active milliseconds cannot be null");
        console.log("canceled anti afk");
      } else if (duration === null) {
        alert("duration milliseconds cannot be null");
        console.log("canceled anti afk");
      } else {
        if (intervalId) {
          clearInterval(intervalId);
          console.log("Old interval stopped before creating new one");
        }
        intervalId = setInterval(() => {
          canvas.click();
          console.log("Canvas clicked");
        }, parseInt(active));

        setTimeout(() => {
          clearInterval(intervalId);
          afkStatus = "off";
          document.getElementById(
            "anti_afk"
          ).textContent = `Anti afk toggle : ${afkStatus}`;
          console.log("Auto-click stopped after " + duration + " ms");
          console.log("Auto-click stopped after " + duration + " ms");
          console.log("Auto-click stopped after " + duration + " ms");
        }, parseInt(duration));
      }
    }
  }
  appendStatus();
});


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