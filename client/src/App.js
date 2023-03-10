import ChatGPTLogo from './components/ChatGPTLogo';
import { useState } from 'react';

import './normal.css';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([{
    user: "gpt",
    message: "How can I help you today?",
  }, {
    user: "me",
    message: "I want to use ChatGpt today",
  }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setChatLog([...chatLog, {
      user: 'me',
      message: input,
    }]);
    setInput('');
    // fetch response to the api and
    // sending to localhost:5000 as a post
    const response = await fetch(
      'http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({
          message: chatLog.map(
                      (message) => message.message
                   ).join('')
        }),
      },
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          {
            chatLog.map((message, index) => (
              <ChatMessage key={ index } message={ message } />
            ))
          }
        </div>
        <div className="chat-input-holder">
          <form onSubmit={ handleSubmit }>
            <input
              className="chat-input-textarea"
              placeholder="Type your message here"
              value={ input }
              onChange={ (e) => setInput(e.target.value) } />
          </form>
        </div>
      </section>
    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <>
      <div className={ `chat-message
                        ${ message.user === "gpt" && "chatgpt" }
                     ` }>
        <div className="chat-message-center">
          <div className={ `avatar
                            ${ message.user === "gpt" && "chatgpt" }
                          ` }>
            { message.user === "gpt" &&
              <ChatGPTLogo />
            }  
          </div>
          <div className="message">
            { message.message }
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
