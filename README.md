# js-homework

for (let z = 1; z <= 100; z++) {
    let g = '';
    for (let q = 1; q <= 100; q++) {
        (q == z)||(z == 100 - q) ? g += '0': g += '1';
    }
    console.log(g);
}
