const { Sprite, Fighter } = require('../js/classes.js')
const assert = require('assert').strict

describe('Testing classes', function () {
  it('should be able to create an instance of Fighter', function () {
    const fighter = new Fighter({
      position: {
        x: 100,
        y: 100
      },
      velocity: {
        x: 0,
        y: 0
      },
      color: 'red',

      attackBoxOffset: {
        x: 0,
        y: 0
      },
      scabbardOffset: {
        x: -50,
        y: 0
      }
    })
  })
})
