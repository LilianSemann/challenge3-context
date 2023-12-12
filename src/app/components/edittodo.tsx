"use client"

import { TasksContext, TasksDispatchContext } from "@/taskcontext"
import { useContext, useState } from "react"

export default function EditTodo() {

    const dispatch = useContext(TasksDispatchContext)
    const tasks = useContext(TasksContext)

    const [task, setTask] = useState({
        id: tasks.length,
        title: ""
    })

    if ("") return (
        <>
            <section className="bg-gray-600 opacity-60 h-screen w-full fixed top-0 left-0 flex justify-center items-center"/>
            <section className="fixed flex flex-col bg-white h-[30%] w-[30%] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] p-4 rounded-lg justify-between">
                <div>
                    <h3>Edit your todo</h3>
                    <input type="text" className="border border-zinc-300 py-1 px-2 outline-none rounded-md" defaultValue={""} onChange={(e) => ""}/> 
                </div>
                <div className="flex gap-4">
                    <button className="py-1 px-2 border border-zinc-300 rounded-md font-light">edit</button>
                    <button className="py-1 px-2 border border-zinc-300 rounded-md font-light">delete</button>
                </div>
            </section>
        </>
    )

}