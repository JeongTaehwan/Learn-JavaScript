class Counter {
    constructor(runEvery5Times) {
        this.counter = 0;
        this.callback = runEvery5Times    
    }

    increase() {
        this.counter++;
        console.log(this.counter);
        if(this.counter % 5 == 0) {
            this.callback && this.callback(this.counter);
        }
    }
}

const coolCounter = new Counter();
function printsomething(num) {
    console.log(`yo! ${num}`);
}

const printCOunter = new Counter(printsomething);
