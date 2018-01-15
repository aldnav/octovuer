new Vue({
    el: '#exercise',
    data: {
        value: 0,
        duration: 5000
    },
    computed: {
        result: function() {
            return this.value !== 37 ? 'not there yet' : 'done'
        }
    },
    watch: {
        result: function() {
            setTimeout(function() {
                this.value = 0;
            }.bind(this), parseInt(this.duration))
        }
    }
});