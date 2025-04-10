import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ConversationProvider } from './providers/ConversationProviders';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <ConversationProvider>
        <HomeScreen />
    </ConversationProvider>
    
  );
}

export default App;
