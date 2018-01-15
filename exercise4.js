let progressInterval;
new Vue({
  el: '#exercise',
  data: {
    effectClass: '',
    redBg: {backgroundColor: 'red'},
    userClass: 'blue',
    greenBorder: false,
    anotherUserBorder: 'yellow',
    progress: 0,
    progressStyle: {
        backgroundColor: 'transparent'
    },
    onProgress: false
  },
  computed: {
    textFromEffect: function() {
        return {
            color: this.effectClass === 'shrink' ? 'black' : 'white'
        }
    },
    userBorder: function() {
        console.log(Boolean(this.greenBorder));
        return Boolean(this.greenBorder) ? 'greenBorder' : 'blackBorder'
    }
  },
  methods: {
    startEffect: function() {
        setInterval(function() {
            this.effectClass = this.effectClass === 'shrink' ? 'highlight': 'shrink'
        }.bind(this), 2000)
    },
    startProgress: function() {
        if (this.onProgress) {
            return;
        }
        this.onProgress = true;
        let increment = 1;
        let width = 10;
        progressInterval = setInterval(() => {
            if (this.progress < 100) {
                this.progress += increment;
                width += 10;
            }

            if (this.progress >= 100) {
                this.onProgress = false;
                setTimeout(function() {
                    this.progress = 0;
                }.bind(this), 500);
                clearInterval(progressInterval);
            }

            if (this.progress < 10) {
                this.progressStyle = {
                    backgroundColor: 'red',
                    width: width
                }
                increment = 2;
            } else if (this.progress < 20) {
                this.progressStyle = {
                    backgroundColor: 'orange',
                    width: width
                }
                increment = 4;
            } else if (this.progress < 30) {
                this.progressStyle = {
                    backgroundColor: 'yellow',
                    width: width
                }
                increment = 5;
            } else if (this.progress < 45) {
                this.progressStyle = {
                    backgroundColor: 'green',
                    width: width
                }
            } else if (this.progress < 60) {
                this.progressStyle = {
                    backgroundColor: 'blue',
                    width: width
                }
            } else if (this.progress < 75) {
                this.progressStyle = {
                    backgroundColor: 'indigo',
                    width: width
                }
            } else if (this.progress < 90) {
                this.progressStyle = {
                    backgroundColor: 'violet',
                    width: width
                }
            }
        }, 200);
    }
  }
});
