var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        secondCounter: 0
    },
    // very useful for reacting to changes but not necesarrily re-computing
    // hence caching
    // see: https://vuejs.org/v2/guide/computed.html
    computed: {
        output: function() {
            console.log('Computed');
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        }
    },
    methods: {
        result: function() {
            console.log('Method');
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        }
    }
});