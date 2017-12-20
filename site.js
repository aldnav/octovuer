var app = new Vue({
    el: '#app',
    data: {
        title: 'Hello world!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com"></a>'
    },
    methods: {
        changeTitle: function(e) {
            this.title = e.target.value;
        },
        sayHello: function(e) {
            return this.title;
        }
    }
});

var app2 = new Vue({
    el: '#events-app',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(event, step=1) {
            this.counter += step;
        },
        updateCoordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe: function(event) {
            alert('alerting!');
        }
    }
});