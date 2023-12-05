document.addEventListener('DOMContentLoaded', () => {
    const car = document.getElementById('car');
    let carPosition = 50; // Initial position

    document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowLeft' && carPosition > 0) {
            carPosition -= 10;
        } else if (event.code === 'ArrowRight' && carPosition < 90) {
            carPosition += 10;
        }

        car.style.left = carPosition + '%';
    });
});

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var cursors;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('car', 'path/to/your/car/image.png');
    // Add more assets as needed
}

function create() {
    player = this.physics.add.image(400, 300, 'car');
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
    } else {
        player.setVelocityY(0);
    }
}


var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var cursors;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('car', 'path/to/your/car/image.png');
    // Add more assets as needed
}

function create() {
    player = this.physics.add.image(config.width / 2, config.height / 2, 'car');
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    this.input.addPointer();
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
    } else {
        player.setVelocityY(0);
    }

    // Mobile touch input
    if (this.input.pointer1.isDown) {
        var touchX = this.input.pointer1.x;
        var touchY = this.input.pointer1.y;

        var angle = Phaser.Math.Angle.Between(player.x, player.y, touchX, touchY);
        var speed = 160;

        player.setVelocityX(Math.cos(angle) * speed);
        player.setVelocityY(Math.sin(angle) * speed);
    }
}
var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var cursors;

var game = new Phaser.Game(config);

function preload() {
    this.load.image('car', 'path/to/your/car/image.png');
    // Add more assets as needed
}

function create() {
    player = this.physics.add.image(config.width / 2, config.height / 2, 'car');
    player.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();

    this.input.addPointer();
}

function update() {
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown) {
        player.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
    } else {
        player.setVelocityY(0);
    }

    // Mobile touch input
    if (this.input.pointer1.isDown) {
        var touchX = this.input.pointer1.x;
        var touchY = this.input.pointer1.y;

        var angle = Phaser.Math.Angle.Between(player.x, player.y, touchX, touchY);
        var speed = 160;

        player.setVelocityX(Math.cos(angle) * speed);
        player.setVelocityY(Math.sin(angle) * speed);
    }
}
