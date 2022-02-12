export interface User{
    data:DataObject,
    support:any
} 

export interface DataObject{
    avatar:string
    email: string
    first_name: string
    id: number | string
    last_name: string
}

export interface SupportObject{
    url:string,
    text:string
}

export interface UserList{
    data: DataObject[]
    page: number
    per_page: number
    support: SupportObject,
    total: number
    total_pages: number
}