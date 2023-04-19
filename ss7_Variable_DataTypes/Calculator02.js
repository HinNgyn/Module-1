
function add() {
    let i = parseInt(document.getElementById("a").value)
    let y = parseInt(document.getElementById("b").value)
    let a = i + y
    document.getElementById('result').innerHTML= "Result Division: " + a
}
function su(){
    let i = parseInt(document.getElementById("a").value)
    let y = parseInt(document.getElementById("b").value)
    let s = i - y
    document.getElementById('result').innerHTML= "Result Division: " + s
}
function mul() {
    let i = parseInt(document.getElementById("a").value)
    let y = parseInt(document.getElementById("b").value)
    let m = i * y
    document.getElementById('result').innerHTML= "Result Division: " + m
}
function divi() {
    let i = parseInt(document.getElementById("a").value)
    let y = parseInt(document.getElementById("b").value)
    let d = i/y
    document.getElementById('result').innerHTML= "Result Division: " + d
}