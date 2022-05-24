const card = ['apple', 'banana', 'orange'];

for(const item of card) {
    console.log(item);
}

function range(start: number, end: number, step = 1) {
    return{
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if(start < end){
                start = start + step;
                return { value: start, done: false };
            }
            return { done: true, value: end };
        }
    }
}

for(const n of range(0, 100, 5)) {
    console.log(n);
}