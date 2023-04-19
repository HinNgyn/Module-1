function convert() {
    const DL = 23515
    let gt = document.forms['chuyendoi01']['giatri'].value;
    let vn = document.getElementById('c01').value;
    let dol = document.getElementById('c02').value;
    if (vn == dol) {
        document.getElementById('ct').innerHTML = gt;
    } else if (vn == "v" && dol == "u") {
        let t = gt / DL
        document.getElementById('ct').innerHTML = t + " VND";
    } else if (vn == "u" && dol == "v") {
        let c = gt * DL
        document.getElementById('ct').innerHTML = c + " USD";
    }
}
