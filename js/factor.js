
// Example class for testing automation with mocha
class Todos {
  constructor () {
    this.todos = []
  }

  list () {
    return [...this.todos]
  }

  add (title) {
    const todo = {
      title,
      completed: false
    }

    this.todos.push(todo)
  }

  complete (title) {
    let todoFound = false
    this.todos.forEach((todo) => {
      if (todo.title === title) {
        todo.completed = true
        todoFound = true
      }
    })

    if (!todoFound) {
      throw new Error(`No TODO was found with the title: "${title}"`)
    }
  }
}

// testing decrease timer function with mocha
let timer = 60
let timerId
function decreaseTimer () {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000)
    timer--
  }

  if (timer === 0) {
    // determineWinner({ player, enemy, timerId })
  }
}

module.exports = { Todos, decreaseTimer }
