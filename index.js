export default function Interval(fn, interval) {
    var id = setInterval(fn, interval);
    this.cleared = false;
    this.clear = function () {
        this.cleared = true;
        clearTimeout(id);
    };
}

