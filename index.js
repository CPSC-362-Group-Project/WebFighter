const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576
canvas.style = "position: absolute; top: 10px; left: 0px; right: 0px; bottom: 200px; margin: auto; border:4px solid blue";

c.fillRect(0, 0, canvas.width, canvas.height)

class Sprite {
    constructor(position){
        this.position = position
    }
}

const player = new Sprite({
    x: 0,
    y: 0
})

console.log(player)