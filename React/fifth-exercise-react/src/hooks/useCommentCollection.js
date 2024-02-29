import { useState } from "react";

export default function UseCommentCollection() {
  const [comments, setComments] = useState([])

  function addComment({ email, comment, date }) {
    const id = Math.floor(Math.random() * 100000)
    const completeComment = { id, email, comment, date }
    setComments(state => {
      return [completeComment, ...state]
    })
  }

  return { comments, addComment }
}