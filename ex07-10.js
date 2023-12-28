function keisan1() {
    var x,y,z
    x = Number(document.getElementById('tai1').value);
    y = Number(document.getElementById('sin1').value);
    z = Number(x / (y * y));
    if (z <= 18.5) {
        alert(z + 'は低体重');
    } else if (z < 25) {
        alert(z + 'は普通');
    } else {
        alert(z + 'は肥満');
    }
}
