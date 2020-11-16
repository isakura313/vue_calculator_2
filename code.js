function isNotNumber(value){
    return Number.isNaN(value);
}
const calc = new Vue({
    el: '#app',
    data: {
        x:0,
        y:0,
        lastResult: 0,
    },
    computed: {
        result: function(){
            let x = this.x;
            if(isNotNumber(x)) return this.lastResult;
            x = +this.x;

            let y = this.y;
            if(isNotNumber(y)) return this.lastResult;
            y = +this.y;
            this.lastResult = x + y;
            return `Результат сложения ${this.lastResult}`
        }
    }

})