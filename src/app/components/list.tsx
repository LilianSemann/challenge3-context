"use client"

import { TasksContext, TasksDispatchContext } from "@/taskcontext"
import { useContext, useState } from "react"
import AddTodo from "./addtodo"
import EditTodo from "./edittodo"

export default function List() {
    
    const dispatch = useContext(TasksDispatchContext)
    const tasks = useContext(TasksContext)

    const [modal, setModal] = useState({
        display: false,
        todo: {
            id: -1,
            title: "",
            done: false
        }
    })

    return (
        <section className="flex flex-col gap-2">
            <AddTodo/>
             <div className="w-full shadow-md rounded-xl">
                 <table className="w-full p-4 ">
                     <thead>
                         <tr>
                             <td className="py-2 px-3 w-[10%]"></td>
                             <td className="py-2 w-[80%]">title</td>
                             <td className="py-2 px-3 w-[10%]"></td>
                         </tr>
                     </thead>
                     <tbody className="font-light">
                        {tasks.map((t) => (
                            <tr key={t.id} className="odd:bg-zinc-50">
                                <td className="py-2 px-3 w-[10%]">{t.id}</td>
                                <td style={{textDecorationLine: (t.done?  "line-through" : "none"), color: (t.done?  "rgb(156 163 175)" : "black")}} className="py-2 w-[80%]">{t.title}</td>
                                <td style={{color: (t.done? "rgb(252 165 165)" : "rgb(156 163 175)")}} className="py-2 px-3 w-[10%] text-sm text-gray-400 text-end group flex relative"><button onClick={() => !t.done? setModal({display: true, todo: {id: t.id, title: t.title, done: t.done}}) : {}}>edit</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <EditTodo display={modal.display} todo={modal.todo} upd={() => setModal(modal.display? {...modal, display: false} : {...modal, display: true})}/>
            </div>
        </section>
    )
}


{/* <input type="checkbox" defaultChecked={t.done} className="cursor-pointer h-3 w-3" onClick={() => dispatch!({type: 'toggle', task: t})}/> */}