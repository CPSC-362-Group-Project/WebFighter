let playerUsedMagic = false
let playerUsedSpecial1 = false
let playerUsedSpecial2 = false
let moveable = false

// create the main player sprite instance
const player = new Fighter({
  position: {
    x: 120,
    y: 100
  },
  velocity: {
    x: 0,
    y: 0
  },
  offset: {
    x: 0,
    y: 0
  },
  imageSrc: './img/Martial-Hero/Sprites/Idle.png',
  framesMax: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 160
  },
  sprites: {
    idle: {
      imageSrc: './img/Martial-Hero/Sprites/Idle.png',
      framesMax: 8
    },
    run: {
      imageSrc: './img/Martial-Hero/Sprites/Run.png',
      framesMax: 8
    },
    jump: {
      imageSrc: './img/Martial-Hero/Sprites/Jump.png',
      framesMax: 2
    },
    fall: {
      imageSrc: './img/Martial-Hero/Sprites/Fall.png',
      framesMax: 2
    },
    attack1: {
      imageSrc: './img/Martial-Hero/Sprites/Attack1.png',
      framesMax: 6
    },
    takeHit: {
      imageSrc: './img/Martial-Hero/Sprites/Take Hit - white silhouette.png',
      framesMax: 4
    },
    death: {
      imageSrc: './img/Martial-Hero/Sprites/Death.png',
      framesMax: 6
    }
  },
  attackBox: {
    offset: {
      x: 100,
      y: 50
    },
    width: 160,
    height: 50
  }

})

const heal_eff1 = new Sprite({
  position: player.position,
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

const waterEffect = new Sprite({
  position: enemy.position,
  imageSrc: './assets/magic_eff/water_eff/water_blast_spritesheet/waterBlast-Startup-and-Infinite.png',
  scale: 2.0,
  framesMax: 12,
  offset: {
    x: 80,
    y: 80
  },
  is2dFrame: true,
  xFrames: 4
})

const waterEffectEnd = new Sprite({
  position: enemy.position,
  imageSrc: './assets/magic_eff/water_eff/water_blast_spritesheet/waterBlast-End.png',
  scale: 2.0,
  framesMax: 9,
  offset: {
    x: 80,
    y: 80
  },
  is2dFrame: true,
  xFrames: 3
})

const waterBall = new Sprite({
  position: { ...player.position },
  imageSrc: './assets/magic_eff/water_eff/water_ball _spritesheet/waterBall-Startup-and-Infinite.png',
  scale: 2.0,
  framesMax: 25,
  offset: {
    x: 0,
    y: 0
  },
  is2dFrame: true,
  xFrames: 5
})

const waterBallImpact = new Sprite({
  position: { ...enemy.position },
  imageSrc: './assets/magic_eff/water_eff/water_ball _spritesheet/waterBall-Impact.png',
  scale: 2.0,
  framesMax: 16,
  offset: {
    x: 0,
    y: 0
  },
  is2dFrame: true,
  xFrames: 4
})
