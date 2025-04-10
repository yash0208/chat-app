import { Conversation } from "../models/Conversation";
import { createContext, useState, ReactNode, useEffect } from "react";
import { chatServices } from "../services /ChatService";


interface ConversationContextItems{
    conversations : Conversation[];
}

export const ConversationContext = createContext<ConversationContextItems | undefined>(undefined);

export const ConversationProvider = ({children} : {children : ReactNode}) => {
    const [conversations, setConversations] = useState<Conversation[]>([]);
    
    useEffect(  () =>  {
        const fetchChats = async () => {
            const conversationsResponse  = await chatServices.getConversations();
            setConversations(conversationsResponse);
        }
        fetchChats();
    },[]);

    

    return (
        <ConversationContext.Provider value={{conversations}}>
            {children}
        </ConversationContext.Provider>
    )
}