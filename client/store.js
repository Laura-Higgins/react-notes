// Redux Store //
const Redux = require('redux')

function reducer(state= {notes: ['Make sure to Catch a Promise', 'Unlinked files are lost files!', 'Map returns a NEW array'] }, action) {
  switch(action.type) {
    case 'ADD_NOTE':
    return state.concat(action.text)
    case 'DELETE_NOTES':
    return []
    default:
    return state
  }
}

const store = Redux.createStore(reducer)

module.exports = store
