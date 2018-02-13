# Better Timeout
Better timeout is a "Better" way to handle timeouts
It wil keep track of if the timeout is active or not.


## Why
There are multiple instances where I had to keep track of a timeout and now I can much easier


## How to use
```
var t = new Timeout(function () {
    alert('this is a test');
}, 5000);
console.log(t.cleared); // false
t.clear();
console.log(t.cleared); // true
```