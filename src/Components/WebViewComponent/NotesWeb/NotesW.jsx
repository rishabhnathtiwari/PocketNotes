import React from 'react'
import enter from '../../../imagesassets/enter.png';
import WebNotesContent from '../../WebViewComponent/NotesContentWeb/NotesContent';
import usePocketContext from '../../../Hooks/pocketcontext';
import './NotesW.css';



const NotesWeb = () => {


    const [Text, setText] = useState("");
    const [BGColor, setBGColor] = useState("#fff");
    const [initials, setInitials] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");
    const { notes, setNotes, selected } = usePocketContext();
  
    useEffect(() => {
      setNotes(JSON.parse(localStorage.getItem(selected)) || []);
      const groupNames = JSON.parse(localStorage.getItem("groupNames"));
      const selectedGroup = groupNames.find((group) => group.name === selected);
      if (selectedGroup) {
        setBGColor(selectedGroup.color);
        setInitials(
          selectedGroup.name
            .split(" ")
            .map((word) => word.charAt(0))
            .join("")
            .toUpperCase()
        );
        setSelectedTitle(
          selectedGroup.name
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        );
      }
    }, [selected, setNotes]);
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSaveNotes();
      }
    };
  
    const handleSaveNotes = () => {
      if (!Text.trim()) {
        return;
      }
      const notes = JSON.parse(localStorage.getItem(selected)) || [];
      const newNoteObj = {
        id: Date.now(),
        title: selected,
        content: Text.trim(),
        date: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        }),
        time: new Date().toLocaleTimeString(),
      };
      notes.push(newNoteObj);
      localStorage.setItem(selected, JSON.stringify(notes));
      setText("");
      setNotes(notes);
    };
  
    const handleChange = (e) => {
      setText(e.target.value);
    };

  return (
    <div className='webnotes'>
        <div className='webnotes-title'>
            <div className='webnotes-titlecolor'
            
            style={{backgroundColor: BGColor}}>
                {initials}
                
            </div>
        <div  className='webnotes-titlestext'>{selectedTitle}</div>
 </div>

 <div className="webnotes-content">
        {notes && notes.length > 0
          ? notes.map((note, index) => (
              <WebNotesContent key={index} note={note} />
            ))
          : null}
      </div>
      <div className="webnotes-input">

        <textarea
          value={Text}
          placeholder="Enter your notes here"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter} alt="enter" onClick={handleSaveNotes} />
      </div>
 
      
    </div>
  )
}

export default NotesWeb
