import style from "./style.module.css"

export default function Button({ social, link }) {
  return (
    <>
      <a className={style.button} href={link} target="_blank">{social}</a>
    </>
  )
}