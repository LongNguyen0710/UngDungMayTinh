function Add(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = a + b;
    document.getElementById("ketqua").innerHTML = c;
}
function Sub(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = a - b;
    document.getElementById("ketqua").innerHTML = c;
}
function Mul(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = a * b;
    document.getElementById("ketqua").innerHTML = c;
}
function Div(){
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = a / b;
    document.getElementById("ketqua").innerHTML = c;
}
