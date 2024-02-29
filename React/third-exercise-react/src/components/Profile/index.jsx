import Button from "../Button"
import style from "./style.module.css"

export default function Profile({ avatar, name, bio, phone, email, githubUrl, linkedinUrl, twitterUrl }) {
  return (
    <div className={style.container}>
      <img className={style.avatar} src={avatar} alt={name} />
      <h2 className={style.name}> {name}</h2>
      <h3 className={style.bio}>{bio}</h3>
      <p className={style.phone}>{phone}</p>
      <p className={style.email}>{email}</p>
      <Button social="GitHub" link={githubUrl} />
      <Button social="Linkedin" link={linkedinUrl} />
      <Button social="Twitter" link={twitterUrl} />
    </div>
  )
}