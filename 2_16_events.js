var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(step=1, e) {
            this.counter += step;
        },
        updateCoordinates: function(e) {
            this.x = e.clientX;
            this.y = e.clientY;
        }
    }
});