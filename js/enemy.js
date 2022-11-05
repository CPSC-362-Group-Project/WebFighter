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
