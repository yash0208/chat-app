import { JSX, useContext, useEffect, useState } from "react";
import { Conversation } from "../models/Conversation";
import { ConversationContext } from "../providers/ConversationProviders";

export default function HomeScreen() : JSX.Element{
    const context = useContext(ConversationContext);
    if(!context) {
        console.log("error loading context");
        return <div>Error loading conversations</div>;
    }

    const {conversations} = context;
    return(
        <div>
            <h1>Conversations</h1>
            <ul>
                {conversations.map((conversation: Conversation) => (
                    <li key={conversation.id}>
                    </li>
                ))}
            </ul>
        </div>
    )
}