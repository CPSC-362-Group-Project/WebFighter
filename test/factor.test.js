const {Todos, decreaseTimer} = require('../js/factor.js');
const assert = require('assert').strict;

describe("integration test", function() {
  it("should be able to add and complete TODOs", function() {
      let todos = new Todos();
      assert.notStrictEqual(todos.list().length, 1);
  });
});

describe("Test decrease timer", function() {
  it("should be able to decrease timer", function() {
      let timer = 60;
    
    decreaseTimer();
  
      assert.notStrictEqual(timer, 59);
      
  });
});