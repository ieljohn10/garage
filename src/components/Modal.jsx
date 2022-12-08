import { useState } from "react"
import './Modal.scss';

export default function Modal(){

    
    return(
        <div className="Modal" id="myDiv">
            <div className="ModalDiv">
                <h1 className="modal-title">Add Note</h1>
                <form action="submit">
                    <div className="form-item">
                        <label>Title: </label>
                        <input type="text" placeholder="Enter Title"/>
                    </div>
                    <div className="form-item">
                        <label>Context: </label>
                        <textarea name="context" id="" cols="30" rows="10" placeholder="Enter Context"/>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </div>
    )
}