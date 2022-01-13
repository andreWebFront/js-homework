# js-homework

for (let z = 1; z <= 100; z++) {
    let g = '';
    for (let q = 1; q <= 100; q++) {
        (q == z)||(z == 100 - q) ? g += '0': g += '1';
    }
    console.log(g);
}


let str = 'abcslaj92fsl2kda59;lka';
// (str.startsWith('abc')) ? console.log(str.replace('abc', 'www')): console.log(str + 'zzz');



let nums = /\d/g,
    found = [...str.matchAll(nums)],
    sum = '';
console.log(found);
for (i = 0; i <= found.length - 1; i++) {
    sum += found[i];
    console.log(sum);
}
