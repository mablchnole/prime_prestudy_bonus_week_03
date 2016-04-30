function A(x) {
	x = x + 10;
	return x;
}
function B(x) {
	x = x - 2;
	return x;
}
function C(x) {
	x = x + 3;
	return x;
}

console.log(A(B(C(4)))); 

