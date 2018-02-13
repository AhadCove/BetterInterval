# Better Interval
Better interval is a "Better" way to handle intervals
It wil keep track of if the interval is active or not.


## Why
There are multiple instances where I had to keep track of a interval and now I can much easier


## How to use
```
var t = new Interval(function () {
    alert('this is a test');
}, 5000);
console.log(t.cleared); // false
t.clear();
console.log(t.cleared); // true
```