function convert() {
    let c = Number(document.querySelector('.cel').value);
    let f = Number(document.querySelector(".fah").value);
    let k = Number(document.querySelector(".kel").value);
    if (f==0 && k==0) { 
        f = (9 / 5)*c+32;
        k = c+273.15;
    } else if (c==0 && k==0) { 
        c = (5/9)*(f-32);
        k = c+273.15;
    } else if (c==0 && f==0) { 
        c = k-273.15;
        f = (9/5)*c+32;
    }
    document.querySelector('.cel').value = c.toFixed(2);
    document.querySelector('.fah').value = f.toFixed(2);
    document.querySelector('.kel').value = k.toFixed(2);
}
function reset() {
    document.querySelector('.cel').value = 0;
    document.querySelector('.fah').value = 0;
    document.querySelector('.kel').value = 0;
}