import './App.css';
import React, { useState,useEffect } from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [username,setUsername] = useState('');
  const [input,setInput] = useState("");
  const [messages,setmessage]= useState(
    [

    ]
  );

  useEffect(()=>{
    db.collection('messages').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
      setmessage(snapshot.docs.map(doc=>({id: doc.id, message:doc.data()})))
    });
  },[])

  console.log(messages)
  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, []);

  const sendmessage = (event)=>{
    event.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  
  return (
    <div className="App">
    <h2>Welcome {username}</h2>
    <form className="this_is_form">
      <FormControl className="app_form_control">
          <InputLabel>Enter a Message</InputLabel>
          <Input className="app_input" value={input} onChange={(e)=>setInput(e.target.value)} />

          <IconButton className="app_iconbutton"
           disabled={!input} type="submit" variant="contained" color="primary" onClick={sendmessage}
          >
            <SendIcon/>
          </IconButton>
         
      </FormControl>
    </form>
    <FlipMove>
        {
          messages.map(({id,message})=>{
            return(
              <Message key={id} username={username} message={message}/>
            )
          })
        }
    </FlipMove>
    </div>
  );
}

export default App;
