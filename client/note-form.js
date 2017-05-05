// react Component NoteForm //
const React = require('react')
const store = require('./store')

function NoteForm(props) {
  const handleChange = function($event) {
    store.dispatch({ type: 'INPUT_CHANGED', text: $event.target.value })
  }
  const handleSubmit = function($event) {
    $event.preventDefault()
    const $form = $event.target
    const $input = $form.querySelector('input')
    store.dispatch({ type: 'NOTE_CREATED', text: $input.value })

  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={props.noteInput} className="input-form" type="text" placeholder="Text Here" onChange={handleChange}/>
      <button className="btn btn-info" type="submit"> add </button>
    </form>
  )
}

module.exports = NoteForm
