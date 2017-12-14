var app = new Vue({
    el: '#exercise',
    data: {
        name: 'Aldrin Navarro',
        age: 23
    },
    methods: {
        getRandomNumber: (min=0, max=1) => {
            return Math.random() * (max - min) + min;
        }
    }
});