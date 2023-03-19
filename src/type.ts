export enum Priority {
    HIGH,
    MEDIUM,
    LOW
}
export enum STATUS {
    TODO,
    PROGRESS,
    DONE
}
export interface Todo {
    id: number,
    title: string,
    content: string,
    priority: Priority,
    status: STATUS
}