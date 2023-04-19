function check() {
    let year = parseInt(document.getElementById("y").value);

    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                document.getElementById("r").innerHTML = year + " is a lead year!";
            } else {
                document.getElementById("r").innerHTML = year + " is not lead year!";
            }
        } else {
            document.getElementById("r").innerHTML = year + " is a lead year!";
        }
    } else {
        document.getElementById("r").innerHTML = year + " is not a lead year!";
    }
}

function check02() {
    let ye = parseInt(document.getElementById('y').value);
    let nam = false;
    if (ye%4 == 0) {
        if(ye%100 == 0){
            if(ye%400== 0){
                name = true
            }
        }else{
            name = true
        }
    }
    if(name){
        document.write( ye + ' is a lead year!')
    }else{
        document.write( ye + ' is not a lead year!')
    }
}

function check03() {
    let yea = parseInt(document.getElementById('y').value)
    let n = false

    let leadby_04 = yea % 4 == 0 ;

    if(leadby_04){

        let leadby_100 = yea % 100 == 0;

        if (leadby_100){

            let leadby_400 = yea % 400 == 0;

            n = true
        }
    }
    if(n){
        alert(yea + ' is a lead yead!');
    }else{
        alert(yea + ' is not a lead year!');
    }
}