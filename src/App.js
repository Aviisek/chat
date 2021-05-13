import './App.css';
import React from 'react';
import Store from './store/Store';
import ChatContainer from './chat/ChatContainer';

function App() {
  return (
    <Store>
      <div className="App">
        <ChatContainer></ChatContainer>
      </div>
    </Store>
  );
}

export default App;
