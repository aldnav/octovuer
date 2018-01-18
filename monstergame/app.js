new Vue({
    el: '#game',
    data: {
        gameIsRunning: false,
        player1: {
            name: 'Player',
            health: 100,
            healing: 3
        },
        player2: {
            name: 'Monster',
            health: 100,
            healing: 3
        },
        logs: []
    },
    methods: {
        startNewGame: function() {
            this.player1.health = 100;
            this.player1.healing = 3;
            this.player2.health = 100;
            this.player2.healing = 3;
            this.gameIsRunning = true;
            this.logs = [];
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
            var attacker = opponent.name === this.player2.name ? this.player1 : this.player2;
            this.logs.unshift({
                isPlayer: attacker.name === this.player1.name,
                text: `${attacker.name} attacks by ${damage} damage!`
            });
            if (opponent.health <= 0) {
                opponent.health = 0;
            }
        },
        heal: function(player) {
            if (player.healing > 0) {
                var healPoints = getRandomIntInclusive(10, 20);
                player.health += healPoints;
                if (player.health > 100) {
                    player.health = 100;
                }
                this.logs.unshift({
                    isPlayer: player.name === this.player1.name,
                    text: `${player.name} heals by ${healPoints} points.`
                });
                player.healing--;
            }
        },
        quit: function() {
            this.gameIsRunning = false;
        },
        getLogClass: function(log) {
            return [
                `${log.isPlayer ? 'by-player': 'by-monster'}`,
                `${log.text.indexOf('heal') >= 0 ? 'healing': ''}`
            ];
        }
    },
    computed: {
        isGameOver: function() {
            return this.player1.health === 0 || this.player2.health === 0;
        }
    }
});

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}