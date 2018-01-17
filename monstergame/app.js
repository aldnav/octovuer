new Vue({
    el: '#game',
    data: {
        gameIsRunning: false,
        player1: {
            name: 'You',
            health: 100,
            healing: 3
        },
        player2: {
            name: 'Monster',
            health: 100,
            healing: 3
        },
    },
    methods: {
        startNewGame: function() {
            this.player1.health = 100;
            this.player1.healing = 3;
            this.player2.health = 100;
            this.player2.healing = 3;
            this.gameIsRunning = true;
        },
        attackMonster: function(minAttack, maxAttack) {
            this.attack(this.player2, minAttack, maxAttack);
            setTimeout(function() {
                if (this.player2.health > 0) {
                    this.attack(this.player1);
                }
            }.bind(this), 1000);
        },
        attack: function(opponent, minAttack=1, maxAttack=20) {
            var damage = getRandomIntInclusive(minAttack, maxAttack);
            opponent.health -= damage;
            if (opponent.health <= 0) {
                opponent.health = 0;
            }
        },
        heal: function(player) {
            if (player.healing > 0) {
                player.health += getRandomIntInclusive(10, 20);
                if (player.health > 100) {
                    player.health = 100;
                }
                player.healing--;
            }
        },
        quit: function() {
            this.gameIsRunning = false;
        }
    }
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}