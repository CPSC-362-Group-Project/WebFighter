let enemyUsedMagic = false
let enemyUsedSpecial2 = false
let moveable2 = false

// create an enemy sprite instance
const enemy = new Fighter({
  position: {
    x: 850,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: -50,
    y: 0
  },
  imageSrc: './img/Martial-Hero2/Sprites/Idle.png',
  framesMax: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 175
  },
  sprites: {
    idle: {
      imageSrc: './img/Martial-Hero2/Sprites/Idle.png',
      framesMax: 4
    },
    run: {
      imageSrc: './img/Martial-Hero2/Sprites/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/Martial-Hero2/Sprites/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/Martial-Hero2/Sprites/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/Martial-Hero2/Sprites/Attack1.png',
      framesMax: 4
    },
    takeHit: {
      imageSrc: './img/Martial-Hero2/Sprites/Take hit.png',
      framesMax: 3
    },
    death: {
      imageSrc: './img/Martial-Hero2/Sprites/Death.png',
      framesMax: 7
    }
  },
  attackBox: {
    // offset and height and width should be the same
    offset: {
      x: -171,
      y: 50
    },
    width: 171,
    height: 50
  }
})

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
