new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert('alerting!');
        },
        updateValue: function(event) {
            this.value = event.target.value;
        }
    }
});