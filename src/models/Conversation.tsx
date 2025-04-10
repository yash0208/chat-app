import { Message } from "./Message";

export class Conversation{
    id : string;
    createdAt : Date;
    messages : Message[];

    constructor({data} : {data: any}){
        this.id = data?.id ?? "";
        this.createdAt = new Date(data?.createdAt ?? new Date());
        this.messages = data?.messages?.map((message: any) => new Message({data: message})) ?? [];
    }
}