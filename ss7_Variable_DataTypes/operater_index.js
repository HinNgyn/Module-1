a = prompt('Enter value of width:')
b = prompt('Enter value of height:')

let width = parseInt(a)
let height = parseInt(b)

if(a>0 && b>0 && a!=b ){
    let area = a*b
    document.write('The width is ' + a + '<br/>' + 'The height is ' + b)
    document.write('<br/>The rectangular area is ' + area)

}else{
    alert('Error!')
}
