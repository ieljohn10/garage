import './StickyNote.scss';

export default function StickNote(){
    return(
        <div className="StickyNote">
            <div className="NoteContainer">
                <div className="header">
                    <div className="stickynote-title">Title</div>
                    <span className='closeNote'>&times;</span>
                </div>
                <div className="body">
                    <div className="stickyNoteContext">
                        <h3>Context</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}