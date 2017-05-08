// react Component NotesList //
const React = require('react')
const NoteForm = require('./note-form')

function NotesList(props) {
  return (
    <div>
      <NoteForm noteInput={props.noteInput}/>
      <h1 className="notesTitle">Notes:</h1>
      <ul className="theList">
      {
        props.notes.map( function(note) {
          return <li className="note" key={note}>{note}</li>
        })
      }
      </ul>
    </div>
  )
}

module.exports = NotesList
