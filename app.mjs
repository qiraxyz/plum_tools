export const plum_1 = () => {
    var buttons = document.querySelectorAll('.action-button');
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
}

