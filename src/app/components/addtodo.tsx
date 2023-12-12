"use client"

import { useState, useContext } from 'react'
import { TasksContext, TasksDispatchContext } from '@/taskcontext'

export default function AddTodo() {

    const dispatch = useContext(TasksDispatchContext)
    const tasks = useContext(TasksContext)

    const [task, setTask] = useState({
        id: tasks.length,
        title: ""
    })

    return (
        <div className="w-full border py-2 px-3 rounded-xl">
            <input type="text" placeholder="Write a new todo..." onChange={(e) => setTask({...task, title: e.target.value})} value={task.title} className="outline-none w-[93%]"/>
            <button className="w-[7%] text-center font-light" onClick={() => {if (task.title != "") {{dispatch!({type: 'added', task: {id: tasks.length, title: task.title, done: false}}); setTask({id: tasks.length, title: ""})}}}}>Add</button>
        </div>
    )
}