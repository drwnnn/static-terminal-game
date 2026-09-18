//OBJECT LITERAL 1
const gameInfo = {
    gameName: "Battle Arena",
    version: "1.0",
    difficulty: "Normal"
};

//OBJECT LITERAL 2
const battleInfo = {
    location: "Dark Forest",
    reward: 500,
    status: "Battle in progress"
};

//CLASS 1 CHARACTER
class Character {

    //CONSTRUCTOR 1
    constructor(name, health, damage) {
        this.name = name;

        //ENCAPSULATION 1
        this._health = health;

        //ENCAPSULATION 2
        this._damage = damage;
    }

    //METHOD 1
    attack(target) {
        throw new Error("Attack method must be implemented.");
    }

    //METHOD 2
    showStatus() {
        console.log(
            `${this.name} | HP: ${this._health} | Damage: ${this._damage}`
        );
    }
}

//CLASS 2 PLAYER
//INHERITANCE 1
class Player extends Character {

    //CONSTRUCTOR 2
    constructor(name, health, damage, level) {
        super(name, health, damage);
        this.level = level;
    }

    //METHOD 3
    attack(target) {
        console.log(`${this.name} attacks ${target.name}!`);

        target._health -= this._damage;

        if (target._health < 0) {
            target._health = 0;
        }

        console.log(`${target.name} now has ${target._health} HP.`);
    }

    //METHOD 4
    heal() {

        if (this._health < 100) {
            this._health += 20;

            if (this._health > 100) {
                this._health = 100;
            }

            console.log(`${this.name} healed for 20 HP.`);
        } else {
            console.log(`${this.name} already has full health.`);
        }
    }
}

//CLASS 3 ENEMY
//INHERITANCE 2
class Enemy extends Character {

    //METHOD 5
    taunt() {
        console.log(`${this.name}: "You cannot defeat me!"`);
    }

    attack(target) {
        console.log(`${this.name} attacks ${target.name}!`);

        target._health -= this._damage;

        if (target._health < 0) {
            target._health = 0;
        }

        console.log(`${target.name} now has ${target._health} HP.`);
    }
}

//CLASS 4 BOSS
//INHERITANCE 3
//Boss inherits from Enemy.
class Boss extends Enemy {

    specialAttack(target) {
        let specialDamage = this._damage * 2;

        console.log(
            `${this.name} uses SPECIAL ATTACK on ${target.name}!`
        );

        target._health -= specialDamage;

        if (target._health < 0) {
            target._health = 0;
        }

        console.log(
            `${target.name} received ${specialDamage} damage!`
        );
    }
}

//OBJECTS
//OBJECT 1
const player = new Player("Darwin", 100, 25, 10);

//OBJECT 2
const enemy1 = new Enemy("Goblin", 60, 10);

//OBJECT 3
const enemy2 = new Enemy("Orc", 80, 15);

//OBJECT 4
const boss = new Boss("Dark Lord", 150, 20);

//ARRAY 1
const enemies = [
    enemy1,
    enemy2,
    boss
];

//ARRAY 2
const actions = [
    "Attack",
    "Heal",
    "Special Attack"
];

//ARRAY 3
const rewards = [
    100,
    250,
    500
];

//LET VARIABLES
let battleRound = 1;
let playerScore = 0;
let enemyCount = enemies.length;
let totalRewards = 0;
let bonusDamage = 5;
let healingAmount = 20;
let battleMessage = "Battle started!";
let currentEnemy = enemy1;
let victoryBonus = 100;
let remainingHealth = player._health;

//ARROW FUNCTION 1
const getEnemyName = (enemy) => enemy.name;

//ARROW FUNCTION 2
const calculateBonusDamage = (damage) => damage + bonusDamage;

//ARROW FUNCTION 3
const calculateReward = (reward) => reward * 2;

//ARROW FUNCTION 4
const checkHealth = (health) =>
    health > 50 ? "Healthy" : "Low Health";

//ARROW FUNCTION 5
const showMessage = (message) => console.log(message);

//DESTRUCTURED ARRAY 1
const [firstEnemy, secondEnemy, thirdEnemy] = enemies;

//DESTRUCTURED ARRAY 2
const [firstAction, secondAction, thirdAction] = actions;

//DESTRUCTURED ARRAY 3
const [firstReward, secondReward, thirdReward] = rewards;

//DESTRUCTURED OBJECT LITERAL 1
const { gameName, version } = gameInfo;

//DESTRUCTURED OBJECT LITERAL 2
const { location, reward } = battleInfo;

//DESTRUCTURED OBJECT LITERAL 3
const { name: playerName, level: playerLevel } = player;

//SPREAD ARRAY 1
const copiedEnemies = [...enemies];

//SPREAD ARRAY 2
const copiedRewards = [...rewards];

//SPREAD OBJECT LITERAL 1
const updatedGameInfo = { ...gameInfo };

//SPREAD OBJECT LITERAL 2
const updatedBattleInfo = { ...battleInfo };

//MAP ARRAY 1
const enemyNames = enemies.map(enemy => enemy.name);

//MAP ARRAY 2
const doubledRewards = rewards.map(reward => reward * 2);

//FILTER ARRAY 1
const strongEnemies = enemies.filter(
    enemy => enemy._health >= 80
);

//FILTER ARRAY 2
const highRewards = rewards.filter(
    reward => reward >= 250
);

//OPTIONAL CHAINING OBJECT LITERAL 1
const playerStatus = {
    name: player?.name,
    level: player?.level
};

//OPTIONAL CHAINING OBJECT LITERAL 2
const bossStatus = {
    name: boss?.name,
    health: boss?._health
};

//LOOP 1 FOR LOOP
console.log("   ENEMIES");

for (let i = 0; i < enemies.length; i++) {
    enemies[i].showStatus();
}

console.log(" ");

//LOOP 2 FOR LOOP
console.log("   AVAILABLE ACTIONS");

for (let action of actions) {
    console.log(`Action: ${action}`);
}

console.log(" ");

//LOOP 3 WHILE LOOP
console.log("   REWARDS");

let i = 0;

while (i < rewards.length) {
    console.log(`Reward: ${rewards[i]} gold`);
    i++;
}

console.log(" ");

//CONDITIONAL 1
console.log("   PLAYER STATUS");

player.showStatus();

if (player.level >= 10) {
    console.log("Player is ready for the battle!");
} else {
    console.log("Player needs more training.");
}

console.log(" ");

//CONDITIONAL 2
console.log("   PLAYER ATTACK");

player.attack(enemy1);

if (enemy1._health <= 0) {
    console.log(`${enemy1.name} has been defeated!`);
} else {
    console.log(`${enemy1.name} is still alive!`);
}

console.log(" ");

//CONDITIONAL 3
console.log("   BOSS BATTLE");

boss.taunt();

if (player._health > 50) {

    player.attack(boss);

} else if (player._health > 0) {

    player.heal();

} else {

    console.log("   Player has been defeated!");
}

//BOSS SPECIAL ATTACK
console.log("   BOSS SPECIAL ATTACK");

boss.specialAttack(player);

console.log(" ");

//ADDITIONAL FEATURES
console.log("   ADDITIONAL FEATURES");

console.log(`Game Name: ${gameName}`);
console.log(`Game Version: ${version}`);
console.log(`Battle Location: ${location}`);
console.log(`Battle Reward: ${reward} gold`);

console.log(`First Enemy: ${firstEnemy.name}`);
console.log(`Second Enemy: ${secondEnemy.name}`);
console.log(`Third Enemy: ${thirdEnemy.name}`);

console.log(`First Action: ${firstAction}`);
console.log(`Second Action: ${secondAction}`);
console.log(`Third Action: ${thirdAction}`);

console.log(`First Reward: ${firstReward} gold`);
console.log(`Second Reward: ${secondReward} gold`);
console.log(`Third Reward: ${thirdReward} gold`);

console.log(`Enemy Names: ${enemyNames.join(", ")}`);
console.log(`Doubled Rewards: ${doubledRewards.join(", ")}`);

console.log(
    `Strong Enemies: ${strongEnemies.map(enemy => enemy.name).join(", ")}`
);

console.log(
    `High Rewards: ${highRewards.join(", ")} gold`
);

console.log(`Player Status: ${playerStatus.name}, Level ${playerStatus.level}`);
console.log(`Boss Status: ${bossStatus.name}, HP ${bossStatus.health}`);

//USING ARROW FUNCTIONS
console.log(`Current Enemy: ${getEnemyName(currentEnemy)}`);

console.log(
    `Bonus Damage: ${calculateBonusDamage(player._damage)}`
);

console.log(
    `Double Reward: ${calculateReward(reward)} gold`
);

console.log(
    `Player Health Status: ${checkHealth(player._health)}`
);

showMessage(battleMessage);

//FINAL STATUS
console.log("   FINAL STATUS");

player.showStatus();
boss.showStatus();

console.log(" ");

//GAME INFORMATION
console.log("   GAME INFORMATION");

console.log(`Game: ${gameInfo.gameName}`);
console.log(`Version: ${gameInfo.version}`);
console.log(`Location: ${battleInfo.location}`);
console.log(`Reward: ${battleInfo.reward} gold`);