let canvas = document.getElementById('canvas');
let checked = document.querySelector('p.text-muted.list-rules[_ngcontent-ywe-c98]');

if (checked) {
    alert('Canvas element is not found');
    console.log('Script stopped because canvas is missing');
} else {
    let active = prompt('on active anti afk per milliseconds');
    let duration = prompt('afk duration using ms (milliseconds)');

    if (active === null) {
        alert('on active milliseconds cannot be null');
        console.log('canceled anti afk');
    } else if (duration === null) {
        alert('duration milliseconds cannot be null');
        console.log('canceled anti afk');
    } else {
        let intervalId = setInterval(() => {
            canvas.click();
            console.log('Canvas clicked');
        }, parseInt(active));

        setTimeout(() => {
            clearInterval(intervalId);
            console.log('Auto-click stopped after ' + duration + ' ms');
        }, parseInt(duration));
    }
}
