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