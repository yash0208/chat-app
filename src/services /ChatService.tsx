import { Conversation } from "../models/Conversation";
import { Message } from "../models/Message";

class ChatServices{
    private readonly conversations_api = "https://chatflat.smooch.rocks/conversations";
    private readonly get_conversation_by_id_api = "https://chatflat.smooch.rocks/conversations";
    private readonly reset_conversations = "ttps://chatflat.smooch.rocks/conversations/reset";
    
    async getConversations() : Promise<Conversation[]> {
        try{
            const response = await fetch(this.conversations_api);
            if(!response.ok){
                console.log("error fetching data");
                return [];
            }
            const data = await response.json();
            return data.map((item : any) => {
                new Conversation(data);
            })
        }
        catch(e){
            console.log(e);
            return[];
        }
    } 

    async getMessage({id } : {id: string}) : Promise<Conversation[]> {
        try{
            const response = await fetch(this.get_conversation_by_id_api +  "/" +id);
            if(!response.ok){
                console.log("error fetching data");
                return [];
            }
            const data = await response.json();
            return data.map((item : any) => {
                new Message(data);
            })
        }
        catch(e){
            console.log(e);
            return[];
        }
    } 
}

export const chatServices = new ChatServices();