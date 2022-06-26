import React, { useState } from 'react'

export const AddTodo = (props) => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")


    const submit = (e) => {
        e.preventDefault()
        if(!title || !desc){
            alert('Title or Description not entered')
        }
        else{
            props.addToDo(title,desc)
        }
    }
    return (
        <div className='container my-3'>
            <h3>
                Add a Todo
            </h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" vaue={title} id="title" onChange={(e)=> setTitle(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" value={desc} id="desc" onChange={(e)=> setDesc(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-sm btn-success my-3">Add Todo</button>
            </form>

        </div>
    )
}
