function perimeter(a, b, c, d) {
    return a + b + c + d;
}

function area(a, b, c, d) {
    let h = Math.sqrt(Math.pow(c, 2) - Math.pow(((a - b) * (a - b) + c * c - d * d) / (2 * (a - b)), 2));
    return ((a + b) * h) / 2;
}

function middleLine( a, b) {
    return (a + b) / 2;
}