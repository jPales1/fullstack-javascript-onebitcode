import Profile from "./components/Profile";
import avatar from "./assets/foto.jpg"

export default function App() {
  return (
    <Profile
      avatar={avatar}
      name="João Pedro Pales"
      bio="Desenvolvedor Front-End"
      phone="+5577988332499"
      email="joaopedropales@gmail.com"
      githubUrl="https://github.com/jPales1"
      linkedinUrl="https://www.linkedin.com/in/jpales/"
      twitterUrl="https://twitter.com/jPwlxs_"
    />
  )
}