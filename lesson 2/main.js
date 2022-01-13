// task 1
// *
for(let i = 1; i<=20; i++){
     console.log(i);
}
// **
for(let j = -1; j >= -20; j--){
    console.log(j);
}
// ***
for(let k = 100; k >= 2; k -= 2){
    console.log(k);
}
// -------------------------------------
// task 2
let a,b;
a = 34;
((a || b) > 30)?console.log('yes'):console.log('no');
// -------------------------------------
// task 3
let c = +prompt('Enter first number'),
    d = +prompt('Enter second number'),
    e = +prompt('Enter third number');

(((c&&d&&e)>10)&&((c&&d)%3==0))?console.log('yes'):console.log('no');
// ------------------------------------
// task 4
let sum = 0,
    n = 10;
for(let i = 1; i <= n; i++){
    sum += i;
    console.log(sum);
}

// task 5
 let years = 2,
    month = 4,
    monthInYear = 12,
    days = 30;

if (month > 12){
   console.log('too much');
} else {
   console.log(((years*monthInYear)+ month)*days);
}

// task 6
let nc = 35, symbol = '';
for(let f = 1; f <= nc; f++){
   symbol += 'A';
   console.log(symbol);
}

//task 7
for(let h = 1, ones = ''; h <= 10; h++){
    //ones = '1';
    //console.log(ones);
    for(let q = 1, nulls = ''; q <= 10; q++){
        //nulls += '0';
        //console.log(nulls);
        console.log(q);
    }
}