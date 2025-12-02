"use client"
import { useState } from "react";
const CommentForm = ({postId, user}) => {
    const [text, setText] = useState("");
  async function submitComment(){
    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId,
        text,
        userId: user.id || null,
        userName: user.name,
      }),
    });

    setText("");
  };
    return (
       <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
      />
      <button onClick={submitComment}>Submit</button>
    </div>
    );
};

export default CommentForm;