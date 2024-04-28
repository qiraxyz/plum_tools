let canvas;
let ptGUI;
let toggleButton;

canvas = document.querySelector("canvas");

ptGUI = document.createElement("select");
ptGUI.style.position = "absolute";
ptGUI.style.top = "0";
ptGUI.style.left = "0";
ptGUI.style.width = "100%";
ptGUI.style.zIndex = "1000";
ptGUI.style.display = "none";

toggleButton = document.createElement("button");
toggleButton.innerHTML = "FT Mod Toggle";
toggleButton.style.color = "blue";
toggleButton.style.position = "absolute";
toggleButton.style.top = "0";
toggleButton.style.left = "0";
toggleButton.style.zIndex = "1001";

const functions = [
  "Pick the menu",
  "anim_1",
  "d_anim_1",
  "Enable Function 2",
  "Disable Function 2",
  "Remove All Scripts and Elements",
];
functions.forEach((func) => {
  const opt = document.createElement("option");
  opt.value = func;
  opt.innerHTML = func;
  ptGUI.appendChild(opt);
});

function toggleFunction1(enable) {
  var buttons = document.querySelectorAll(".action-button");
  if (buttons.length >= 5 && enable === true) {
    var exp_1 = prompt("Masukkan exp 1");
    var exp_2 = prompt("Masukkan exp 2");
    var exp_3 = prompt("Masukkan exp 3");
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
  console.log(`Function 1 is now ${enable ? "enabled" : "disabled"}.`);
}

function toggleFunction2(enable) {
  console.log(`Function 2 is now ${enable ? "enabled" : "disabled"}.`);
}

function removeAllScriptsAndElements() {
  const scripts = document.querySelectorAll("body > script");
  scripts.forEach((script) => {
    script.parentNode.removeChild(script);
  });
  if (toggleButton.parentNode) {
    toggleButton.parentNode.removeChild(toggleButton);
  }
  if (ptGUI.parentNode) {
    ptGUI.parentNode.removeChild(ptGUI);
  }
  console.log("All scripts and elements have been removed.");
}

ptGUI.addEventListener("change", () => {
  const selectedOption = ptGUI.value;
  if (selectedOption === "Pick the menu") {
    console.log("Pick the menu");
  } else if (selectedOption === "anim_1") {
    toggleFunction1(true);
  } else if (selectedOption === "d_anim_1") {
    toggleFunction1(false);
  } else if (selectedOption === "Enable Function 2") {
    toggleFunction2(true);
  } else if (selectedOption === "Disable Function 2") {
    toggleFunction2(false);
  } else if (selectedOption === "Remove All Scripts and Elements") {
    removeAllScriptsAndElements();
  }
});

toggleButton.addEventListener("click", () => {
  ptGUI.style.display = ptGUI.style.display === "none" ? "block" : "none";
});

document.body.appendChild(ptGUI);
document.body.appendChild(toggleButton);
