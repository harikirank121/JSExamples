function calc(op){
    var a = parseFloat(document.getElementById("n1").value);
    var b = parseFloat(document.getElementById("n2").value);
    var r;

    if(op == "+"){
        r = a + b;
    }
    else if(op == "-"){
        r = a - b;
    }
    else if(op == "*"){
        r = a * b;
    }
    else if(op == "/"){
        if(b != 0){
            r = a / b;
        }else{
            r = "Error";
        }
    }
    else if(op == "%"){
        r = a % b;
    }

    document.getElementById("res").innerHTML = r;
}
