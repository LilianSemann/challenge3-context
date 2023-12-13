"use client"

import { TasksContext, TasksDispatchContext } from "@/taskcontext"
import { ITodo } from "@/types/tasks"
import { useContext, useState } from "react"

interface IEdit {
    display: boolean
    todo: ITodo
    upd: () => void
}

export default function EditTodo(props: IEdit) {

    const dispatch = useContext(TasksDispatchContext)
    const tasks = useContext(TasksContext)

    const [todo, setTodo] = useState({
        id: -1,
        title: "",
        done: false
    })

    if (props.display) return (
        <>
            <section className="bg-gray-600 opacity-60 h-screen w-full fixed top-0 left-0 flex justify-center items-center" onClick={props.upd}/>
            <section className="fixed flex flex-col bg-white h-[30%] w-[30%] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] p-4 rounded-lg justify-between">
                <div>
                    <h3>Edit your todo</h3>
                    <input type="text" className="border border-zinc-300 py-1 px-2 outline-none rounded-md" defaultValue={props.todo.title} onChange={(e) => setTodo({...todo, id: props.todo.id, title: e.target.value})}/> 
                </div>
                <div className="flex gap-4">
                    <button onClick={() => {dispatch!({type: "update", task: todo}); props.upd()}} className="py-1 px-2 border border-zinc-300 rounded-md font-light">edit</button>
                    <button onClick={() => {dispatch!({type: "delete", task: {title: props.todo.title, id: props.todo.id, done: props.todo.done}}); props.upd()}} className="py-1 px-2 border border-zinc-300 rounded-md font-light">delete</button>
                </div>
            </section>
        </>
    )

}