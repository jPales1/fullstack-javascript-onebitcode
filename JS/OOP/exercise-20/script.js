import { Component } from "./classes/Component.js"
import { Form } from "./classes/Form.js"
import { Input } from "./classes/Input.js"
import { Label } from "./classes/Label.js"

const title = new Component('h1', 'body', { innerText: 'Olá, Mundo!' })
console.log(title)

title.tag = 'h2'
title.build().render()

const form = new Form('body')

const label = new Label('Nome:', form, { htmlFor: 'nameInput' })
const input = new Input(form, { id: 'nameInput', name: 'name' })

form.render()
label.render()
form.addChildren(input)

// Outra maneira

form.addChildren(
  new Component('br'),
  new Component('br'),
  new Label('Data de Nascimento:', { htmlFor: 'birthdayInput'}),
  new Input(form, { id: 'birthdayInput', name: 'birthday', type: 'date' })
)