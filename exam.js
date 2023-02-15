// question 1

var a = "karan";
var b = 10;

var atype = typeof(a);
var btype = typeof(b);

console.log(atype);
console.log(btype);

// question 2

var number = 25;

if(number<30){
    console.log("number is bigger")
}else{
    console.log("number is smaller")
}

// questino 3

for(i=1;i<=5;i++){
    str =""
    for(j=1;j<=i;j++){
        if(i<=j){
            str = str + " "
        }
        else{
            str =str + "*"
        }
    }
    console.log(str)
}

// question 4

// question 5

    a ={
        name : "abc",
        marks : {
                    maths : 90,
                    english : 30,
                    gujarati : 20
                }
    }

var sum = (maths+english+gujarati)
var avg = sum/3
console.log(avg)


// question 6

function pc(a,b,c,d){
    pc = (a+b+c+d);
    console.log(pc)
}

pc(1,2,3,4)

