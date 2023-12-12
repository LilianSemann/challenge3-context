export interface ITodos {
    id: number
    title: string
    done: boolean
}

export interface IAction {
    type: string
    task: ITodos
}