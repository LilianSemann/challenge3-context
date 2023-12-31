"use client"

import { createContext, useReducer } from "react";
import { ITodo, IAction } from "./types/tasks";
import { TasksDispatch } from "./types/context";

export default function TasksProvider({ children }: { children: React.ReactNode }) {

    const [tasks, dispatch] = useReducer(tasksReducer, initialList)

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

function tasksReducer(tasks: ITodo[], action: IAction) {
    switch (action.type) {
        case "added": {
            return [
                ...tasks, {
                    id: action.task.id,
                    title: action.task.title,
                    done: false
                }
            ]
        }

        case "delete": {
            return tasks.filter(t => t.id !== action.task.id)
        }

        case "toggle": {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return { ...t, done: !t.done };
                } else {
                    return t;
                }
            });
        }

        case "update": {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
                });
        }

        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialList = [
    {id: 0, title: "a", done: false},
    {id: 1, title: "b", done: true},
    {id: 2, title: "c", done: false},
]

export const TasksContext = createContext(initialList);
export const TasksDispatchContext = createContext<TasksDispatch | undefined>(undefined); 