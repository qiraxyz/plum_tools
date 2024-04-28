let ptGUI;
let menu;
let afkStatus;

menu = /*html*/`
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

ptGUI = /*html*/`
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

document.getElementById("ptGUI-button-1").addEventListener("click", function () {
    var buttons = document.querySelectorAll(".ptGUI-button");
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

document.getElementById('anti_afk').addEventListener("click", function () {
    if (afkStatus === "on") {
        afkStatus = "off";
    } else {
        afkStatus = "on";
    }
    document.getElementById('anti_afk').textContent = `Anti afk toggle : ${afkStatus}`; // Update text label
})