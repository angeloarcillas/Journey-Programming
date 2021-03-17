//! NOT WORKING

import React, { useRef, useState } from "react";
import "./App.css";

// import firebase dependency
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// states
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  // your config
});

// firebase authentication
const auth = firebase.auth();

// firebase cloud firestore
const firestore = firebase.firestore();

// firebase analytics
const analytics = firebase.analytics();

function App() {
  // get user
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  // google login form
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
      <p>
        Do not violate the community guidelines or you will be banned for life!
      </p>
    </>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

function ChatRoom() {
  const dummy = useRef();

  // use collection (messages collection)
  const messagesRef = firestore.collection("messages");

  // sort and limit
  const query = messagesRef.orderBy("createdAt").limit(25);

  // messages
  const [messages] = useCollectionData(query, { idField: "id" });

  // set form state
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    // authenticated user
    const { uid, photoURL } = auth.currentUser;

    // send message
    await messagesRef.add({
      text: formValue, // formValue state
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid, // auth user id
      photoURL, // auth user photo
    });

    setFormValue(""); // clear form field

    // scroll to bottom (<span ref={dummy}>)
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {/* loop through messages */}
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        {/* set ref for dummy */}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />

        {/* disable if formValue is empty */}
        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </>
  );
}

function ChatMessage({ text, uid, photoURL }) {
  // determine if you send or the other user send it
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img alt="user profile" src={photoURL || "https://picsum.photos/200"} />
        <p>{text}</p>
      </div>
    </>
  );
}

export default App;
