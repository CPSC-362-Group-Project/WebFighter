let enemyUsedMagic = false
let enemyUsedSpecial2 = false
let moveable2 = false

// create an enemy sprite instance
const enemy = new Fighter(Kenji)

const heal_eff2 = new Sprite({
  position: enemy.position,
  imageSrc: './assets/magic_eff/healing_eff/Heal Gameboy Sprite Sheet.png',
  scale: 2.0,
  framesMax: 16,
  offset: {
    x: 80,
    y: 80
  },
  is2dFrame: true,
  xFrames: 4
})

const fireBolt = new Sprite({
  position: { ...enemy.position },
  imageSrc: './assets/magic_eff/fire_eff/firebolt-SpriteSheet.png',
  scale: 2.0,
  framesMax: 11,
  offset: {
    x: 0,
    y: 0
  }
})

function enemyAnimate() {
  /************************************* 
  Enemy movements are defined below
  *************************************/
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
      fireBolt.position = { ...enemy.position };
      moveable2 = true;
    }

    // close up attack
    // fireBolt.position = enemy.position
    if (fireBolt.position.x > player.position.x) {
      fireBolt.update();
      fireBolt.position.x -= 5;
    } else {
      // fireBolt.position.x = player.position.x
      fireBolt.position = player.position;
      fireBolt.update();
      fireBolt.framesCurrent = 0;
      fireBolt.update();
      if (fireBolt.framesCurrent === 5) {
        fireBolt.framesCurrent = 0;
      }
      player.switchSprite("takeHit");
    }

    setTimeout(() => {
      enemyUsedSpecial2 = false;
    }, 5000);
  }

  if (enemy.isUsingSpecial2) {
    enemy.isUsingSpecial2 = false;
    enemy.magic -= 40;
    if (player.health < 35) {
      player.health = 0;
    } else {
      player.health -= 35;
    }

    document.querySelector("#enemyMagic").style.width = enemy.magic + "%";
    document.querySelector("#playerHealth").style.width = player.health + "%";
  }

  if (enemy.isUsingMagic && enemy.magic >= 20) {
    enemy.isUsingMagic = false;
    if (enemy.health < 50) {
      enemy.health += 50;
    } else {
      enemy.health = 100;
    }
    enemy.magic -= 20;
    document.querySelector("#enemyMagic").style.width = enemy.magic + "%";
    document.querySelector("#enemyHealth").style.width = enemy.health + "%";
  }

  // end game based on health
  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId });
  }
}
