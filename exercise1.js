var app = new Vue({
    el: '#exercise',
    data: {
        name: 'Aldrin Navarro',
        age: 23,
        imageUrl: 'http://doge2048.com/meta/doge-600.png'
    },
    methods: {
        getRandomNumber: (min=0, max=1) => {
            return Math.random() * (max - min) + min;
        }
    }
});