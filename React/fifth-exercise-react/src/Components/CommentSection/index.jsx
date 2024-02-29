import { useState } from 'react'
import style from './style.module.css'

export default function CommentSection({ addComment }) {
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let date = new Date().toLocaleString()
    addComment({ email, comment, date })
    setEmail("")
    setComment("")
  }

  return (
    <div className={style.container}>
      <h2>Seção de Comentários</h2>

      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="comment">Comentário</label>
        <textarea
          id="comment"
          cols="30"
          rows="10"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <button type="submit">Enviar comentário</button>
      </form>
      <hr />
    </div >
  )
}