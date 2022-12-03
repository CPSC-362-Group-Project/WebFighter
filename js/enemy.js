let enemyUsedMagic = false
let enemyUsedSpecial2 = false
let moveable2 = false

//turn on simulator on single player mode
let simulator = localStorage.getItem("isSinglePlayer") === "true" ? true : false;
let mode = localStorage.getItem("difficulty");
// create an enemy sprite instance
const enemy = new Fighter(Kenji)

const enemyHealing = enemy.magicSprites.healing_effect
const heal_eff2 = new Sprite({
  position: enemy.position,
  imageSrc: enemyHealing.imageSrc,
  scale: enemyHealing.scale,
  framesMax: enemyHealing.framesMax,
  offset: enemyHealing.offset,
  is2dFrame: enemyHealing.is2dFrame,
  xFrames: enemyHealing.xFrames
})

const enemyMagic2 = enemy.magicSprites.magic2.effect
const magic2b = new Sprite({
  position: { ...enemy.position },
  imageSrc: enemyMagic2.imageSrc,
  scale:  enemyMagic2.scale,
  framesMax:  enemyMagic2.framesMax,
  offset:  enemyMagic2.offset
})

const enemyMagic2Impact = enemy.magicSprites.magic2.impact
const magic2bImpact = new Sprite({
  position: { ...magic2b.position },
  imageSrc: enemyMagic2Impact.imageSrc,
  scale: enemyMagic2Impact.scale,
  framesMax: enemyMagic2Impact.framesMax,
  offset: enemyMagic2Impact.offset,
  is2dFrame: enemyMagic2Impact.is2dFrame,
	xFrames: enemyMagic2Impact.xFrames,
})
/*
This function uses random number to generate random attack for the enemy
Generate number between 1 and 1000, with larger range meaning more likely to happen
*/
let randomNum = 1;
let activated = false;
let magicIsRegenerating = false;

const easy = {
  leftRunRange : {max: 20},
  rightRunRange : {min: 301, max: 400},
  healingRange: {min: 601, max: 601},
  specialAttackRange: {min: -1, max: -1},
  jumpRange: {min: 801, max: 801},
  attackRange: {min: 901, max: 902},
  magicRegeneratedAmount: 0,
}

const medium = {
  leftRunRange : {max: 40},
  rightRunRange : {min: 301, max: 429},
  healingRange: {min: 601, max: 603},
  specialAttackRange: {min: 701, max: 701},
  jumpRange: {min: 801, max: 810},
  attackRange: {min: 901, max: 905},
  magicRegeneratedAmount: 1,
}

const hard = {
  leftRunRange : {max: 80},
  rightRunRange : {min: 301, max: 529},
  healingRange: {min: 601, max: 610},
  specialAttackRange: {min: 701, max: 702},
  jumpRange: {min: 801, max: 820},
  attackRange: {min: 901, max: 910},
  magicRegeneratedAmount: 3,
}

const insane = {
  leftRunRange : {max: 150},
  rightRunRange : {min: 301, max: 559},
  healingRange: {min: 601, max: 630},
  specialAttackRange: {min: 701, max: 704},
  jumpRange: {min: 801, max: 850},
  attackRange: {min: 901, max: 935},
  magicRegeneratedAmount: 5,
}

const impossible = {
  leftRunRange : {max: 299},
  rightRunRange : {min: 301, max: 599},
  healingRange: {min: 601, max: 650},
  specialAttackRange: {min: 651, max: 657},
  jumpRange: {min: 701, max: 799},
  attackRange: {min: 801, max: 999},
  magicRegeneratedAmount: 10,
}


let simulatorStat
//simulator mode difficulty is medium by default
switch(mode) {
  case "easy":
    simulatorStat = easy;
    break;
  case "medium":
    simulatorStat = medium;
    break;
  case "hard":
    simulatorStat = hard;
    break;
  case "insane":
    simulatorStat = insane;
    break;
  case "impossible":
    simulatorStat = impossible;
    break;
  default:
    simulatorStat = medium;
}


function simulateAttack() {
  
  randomNum = Math.floor(Math.random() * 1000) + 1;
  if (randomNum <= simulatorStat.leftRunRange.max && (enemy.position.x - enemy.attackBox.width + 50 > player.position.x)) {
    if (activated) {
      return 
    }
    activated = true;
    keys.ArrowLeft.pressed = true ;
    enemy.lastKey = "ArrowLeft";
    
    setTimeout(() => {
      keys.ArrowLeft.pressed = false;
      activated = false;
    }, 200);
    
    
  } else if (randomNum >= simulatorStat.rightRunRange.min && randomNum <= simulatorStat.rightRunRange.max && (enemy.position.x < player.position.x + 50)) {
    if (activated) {
      return
    }
    activated = true;
    keys.ArrowRight.pressed = true ;
    enemy.lastKey = "ArrowRight";

    setTimeout(() => {
      keys.ArrowRight.pressed = false;
      activated = false;
    }, 200);
  }
  else if (randomNum >= simulatorStat.healingRange.min && randomNum <= simulatorStat.healingRange.max && enemy.health <= 70) {
    enemy.useMagic();
    if (enemy.isUsingMagic) {
      enemyUsedMagic = true;
    }
  }
  else if (randomNum >= simulatorStat.specialAttackRange.min && randomNum <= simulatorStat.specialAttackRange.max && enemy.magic >= 50 && player.position.y <= enemy.position.y + 50 && player.position.y >= enemy.position.y - 50) {
    enemy.useSpecial2();
    if (enemy.isUsingSpecial2) {
      enemyUsedSpecial2 = true;
    }
  }
  else if (randomNum >= simulatorStat.jumpRange.min && randomNum <= simulatorStat.jumpRange.max && player.velocity.y < 0) {
    if (enemy.velocity.y === 0) {
      enemy.velocity.y = -12;
    }
  }
  else if ( randomNum >= simulatorStat.attackRange.min && randomNum <= simulatorStat.attackRange.max && enemy.position.x - enemy.attackBox.width < player.position.x) {
    enemy.attack();
}
  else {
    enemy.switchSprite("idle");
  }

  if (magicIsRegenerating) {
    return
  }
  if (enemy.magic <= 100) {
    enemy.magic += simulatorStat.magicRegeneratedAmount;
    magicIsRegenerating = true;
  }
  setTimeout(() => {
    magicIsRegenerating = false;
  }, 1500);
}

function enemyAnimate() {
  /************************************* 
  Enemy movements are defined below
  *************************************/

  if(simulator) simulateAttack();

  enemy.velocity.x = 0;
  if (keys.ArrowLeft.pressed && enemy.lastKey === "ArrowLeft") {
    enemy.velocity.x = -3;
    enemy.switchSprite("run");
    
  } else if (keys.ArrowRight.pressed && enemy.lastKey === "ArrowRight") {
    enemy.velocity.x = 3;
    enemy.switchSprite("run");
  }
  // return to idle if no other animation is being performed
  else {
    enemy.switchSprite("idle");
  }

  // control animation for enemy jump and fall
  if (enemy.velocity.y < 0) {
    enemy.switchSprite("jump");
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite("fall");
  }

  collisionDetection({character1: enemy, character2: player}, 2);
  

  if (enemy.isAttacking && enemy.framesCurrent === 2) {
    enemy.isAttacking = false;
  }
  
  /*************************************
  Enemy magic is defined below
  **************************************/

  if (enemyUsedMagic) {
    heal_eff2.position = enemy.position;
    heal_eff2.offset = { x: 80, y: 80 };
    heal_eff2.update();

    setTimeout(() => {
      enemyUsedMagic = false;
    }, 5000);
  }

  if (enemyUsedSpecial2) {
    // shooting attack

    if (!moveable2) {
      magic2b.position = { ...enemy.position };
      moveable2 = true;
    }

    // close up attack
    // magic2b.position = enemy.position
     // close up attack
    // magic2b.position = enemy.position
    if (magic2b.position.x > player.position.x) {
      magic2b.update();
      magic2bImpact.position = magic2b.position;
			magic2bImpact.update();
      magic2b.position.x -= 5;
      magic2b.position.y = player.position.y;
    } else {
      // magic2b.position.x = player.position.x
      magic2b.position = player.position;
      magic2b.update();
      magic2bImpact.position = player.position;
			magic2bImpact.update();
      magic2b.framesCurrent = 0;
      magic2b.update();
      if (magic2b.framesCurrent === 5) {
        magic2b.framesCurrent = 0;
      }
      player.switchSprite("takeHit");
      setTimeout(() => {
        enemyUsedSpecial2 = false;
      }, 3000);
      // magic2b.position.x = player.position.x
    }
  }

  if (enemy.isUsingSpecial2) {
    enemy.isUsingSpecial2 = false;
    enemy.magic -= 15;
    if (player.health < 20 ) {
      player.health = 0;
    } else {
      player.health -= 20;
    }
    document.querySelector("#enemyMagic").style.width = enemy.magic + "%";
    document.querySelector("#playerHealth").style.width = player.health + "%";
  }

  if (enemy.isUsingMagic && enemy.magic >= 5) {
    enemy.isUsingMagic = false;
    if (enemy.health < 80) {
      enemy.health += 25;
    } else {
      enemy.health = 100;
    }
    enemy.magic -= 5;
    document.querySelector("#enemyMagic").style.width = enemy.magic + "%";
    document.querySelector("#enemyHealth").style.width = enemy.health + "%";
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId });
  }
}
