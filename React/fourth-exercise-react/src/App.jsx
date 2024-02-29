import { useState } from "react"

export default function App() {
  const [password, setPassword] = useState("")
  const [text, setText] = useState("Copiar")

  function generate() {
    setText("Copiar")
    const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lenght = 12
    let newPassword = ""
    for (let i = 0; i < lenght; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
  }

  function copy(){
    window.navigator.clipboard.writeText(password)
    setText("Copiado!")
  }

  return (
    <div className="app">
      <h1>Gerador de Senha</h1>
      <div>
        <button onClick={generate}>Gerar!</button>
        <button onClick={copy}>{text}</button>
        <p>{password}</p>
      </div>
    </div>
  )
}