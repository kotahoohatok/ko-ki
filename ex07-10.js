function keisan1() {
    var x,y,z
    x = Number(document.getElementById('tai1').value);
    y = Number(document.getElementById('sin1').value);
    z = Number(x / (y * y));
    if (z <= 18.5) {
        alert('あなたのBMI,' + 'z' + 'は低体重です。');
    } else if (z < 25) {
        alert('あなたのBMI' + 'z' + 'は普通です。');
    } else {
        alert('あなたのBMI' + 'z' + 'は肥満です。');
    }
}
