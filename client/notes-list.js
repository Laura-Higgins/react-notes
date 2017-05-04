// react Component NotesList //
const React = require('react')

function NotesList(props) {
  return (
    <div>
    <h1 className="notesTitle">Notes:</h1>
    <ul className="theList">
    {
      props.notes.map( function(note) {
      return <li className="note">{note}</li>
      })
    }
    </ul>
    </div>
  )
}

module.exports = NotesList
