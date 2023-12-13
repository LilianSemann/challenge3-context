export interface ITodo {
    id: number
    title: string
    done: boolean
}

export interface IAction {
    type: string
    task: ITodo
}