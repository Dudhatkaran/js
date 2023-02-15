var year = 2016;
if (year % 4 == 0) {
    console.log("leap year")
}
else {
    console.log("not leap year")
}

var number = 6;

if (number == 12) {
    console.log("dec")
} else if (number == 11) {
    console.log("nov")
} else if (number == 10) {
    console.log("oct")
} else if (number == 9) {
    console.log("sup")
} else if (number == 8) {
    console.log("aug")
} else if (number == 7) {
    console.log("july")
} else if (number == 6) {
    console.log("jun")
} else if (number == 5) {
    console.log("may")
} else if (number == 4) {
    console.log("april")
} else if (number == 3) {
    console.log("march")
} else if (number == 2) {
    console.log("feb")
} else if (number == 1) {
    console.log("jan")
}

var month_unit = 100;

if (month_unit > 0 && month_unit < 50) {
    total_price = month_unite = 0.50
} else if (month_unit > 51 && month_unit < 150) {
    total_price = month_unite = 0.75
} else if (month_unit > 151 && month_unit < 250) {
    total_price = month_unite = 1.20
} else if (month_unit > 250) {
    total_price = month_unite = 1.50
}

console.log(total_price);

for (i = 10; i >= 1; i--) {
    console.log(i)
}

var a = 2
var b = 3

for (i = 0; i <= 2; i++) {
    console.log(i)
}
a = [1, 2, -6, 3, -1, -5];

for (i = 0; i <= 5; i++) {
    if (a[i] < 0) {
        console.log(a[i])
    }
}

