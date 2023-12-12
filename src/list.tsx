// "use client"

// import { Todos } from "@/types/tasks"
// import { useState } from "react"

// interface Edit {
//     modal: {
//         display: boolean
//         todo: Todos
//     }
//     close: () => void
//     upd: (todo: Todos) => void
//     dlt: (id: number) => void
// }

// export default function EditTodo(props: Edit) {
    
//     const [todo, setTodo] = useState({
//         id: -1,
//         title: "",
//         done: false
//     })

//     if (props.modal.display) return (
//         <>
//             <section onClick={props.close} className="bg-gray-600 opacity-60 h-screen w-full fixed top-0 left-0 flex justify-center items-center"/>
//             <section className="fixed flex flex-col bg-white h-[30%] w-[30%] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] p-4 rounded-lg justify-between">
//                 <div>
//                     <h3>Edit your todo</h3>
//                     <input type="text" className="border border-zinc-300 py-1 px-2 outline-none rounded-md" defaultValue={props.modal.todo.title} onChange={(e) => setTodo({...todo, id: props.modal.todo.id, title: e.target.value})}/> 
//                 </div>
//                 <div className="flex gap-4">
//                     <button onClick={() => {props.upd(todo); props.close()}} className="py-1 px-2 border border-zinc-300 rounded-md font-light">edit</button>
//                     <button onClick={() => {props.dlt(props.modal.todo.id); props.close()}} className="py-1 px-2 border border-zinc-300 rounded-md font-light">delete</button>
//                 </div>
//             </section>
//         </>
//     )

// }