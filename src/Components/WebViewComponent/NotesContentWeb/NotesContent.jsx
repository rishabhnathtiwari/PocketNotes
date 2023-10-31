import React from 'react'
import './NotesContent.css';


const NotesContent = ({note}) => {
  return (
    <div className="webnotescontent">
    <div className="webnotes-contentdatetime-details">
      <div className="webnotes-contentdate">{note.date}</div>
      <div className="webnotes-contenttime">{note.time}</div>
    </div>
    <div className="webnotes-contentdetails">

      <p>{note.content}</p>
    </div>
  </div>
  )
}

export default NotesContent
