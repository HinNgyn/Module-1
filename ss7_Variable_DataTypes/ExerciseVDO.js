/*Bài 1: Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học.
    Sau đó hiển thị điểm trung bình và tổng của những điểm này.*/
a = +prompt('Enter the physical scores: ')
b = +prompt('Enter the chemistry scores: ')
c = +prompt('Enter the biology scores: ')
if (a <= 10 && b <= 10 && c <= 10) {
    document.write('The scores of student is: <br/>')
    s = a + b + c
    console.log('Sum of scores is ' + s)
    ave = (a + b + c) / 3
    let average = parseInt(ave)
    document.write('<br/>Average = ' + average)
} else {
    alert('Error!')
}


/*Bài 2:  Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit).
    [Hướng dẫn: C/5 = (F-32)/9]*/
d = prompt('Enter the value of Celsius: ')
change = d * (9 / 5) + 32
let f = parseFloat(change)
document.write('<br/>Fahrenheit is ' + f + '0F<br/>')


/*Bài 3: Viết chương trình tính diện tích hình tròn*/

const PI = 3.141592
let r = prompt('Enter the value of radius ')
let circle = r * r * PI
document.write('Circle area ' + circle)


// Bài 4: Viết chương trình chu vi hình tròn

function rectangular() {
    var dai = parseInt(document.forms["rectangularform"]["length"].value);
    var rong = parseInt(document.forms["rectangularform"]["wide"].value);
    var cv = (dai + rong) * 2;
    document.getElementById('chuvi').innerHTML = "Perimeter of a rectangle " + cv;
}

