let a = [1, 1, 2, 1, 3, 3, 6, 4, 7, 8];
const arr = [a[0]];
for (var i = 1; i < a.length; i++) {
    if(a[i] !== a[i-1]) {
        arr.push(a[i]);
    }
}
console.log(arr, 'arr');