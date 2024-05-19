interface User {
  id: number,
  login: string,
  name: string,
  bio: string,
  public_repos: number,
  repos_url: string,
  message?: "Not Found",
  repos: Repo[]
}

interface Repo {
  name: string,
  description: string,
  fork: boolean,
  stargazers_count: number
}

const users: User[] = []

async function addUser(name: string) {
  let url = `https://api.github.com/users/${name}`
  const fetchedUser: User = await fetch(url).then(res => res.json())

  if (!fetchedUser.message) {
    let user = {
      id: fetchedUser.id,
      login: fetchedUser.login.toLowerCase(),
      name: fetchedUser.name,
      bio: fetchedUser.bio,
      public_repos: fetchedUser.public_repos,
      repos_url: fetchedUser.repos_url,
      repos: []
    }

    addRepos(user)
    users.push(user)
    console.log(`O usuário ${name} foi adicionado!`)
  } else {
    console.log(`O usuário ${name} não foi encontrado!`)
  }
}

async function addRepos(user: { login: string, repos_url: string, repos: Repo[] }) {
  let url = user.repos_url
  const fetchedRepos: Repo = await fetch(url).then(res => res.json())
  console.log(fetchedRepos)

  for (let i = 0; i < 3; i++) {
    if (fetchedRepos[i]) {
      let repo = {
        name: fetchedRepos[i].name,
        description: fetchedRepos[i].description,
        fork: fetchedRepos[i].fork,
        stargazers_count: fetchedRepos[i].stargazers_count
      }

      user.repos.push(repo)
    }
  }
}

function findUser(login: string) {
  const user = users.find((u) => u.login === login)
  return user
}

function showSavedInfo(login: string) {
  const user = findUser(login)

  if (user) {
    console.log(`Nome: ${user.name}
ID: ${user.id}
Login: ${user.login}
Bio: ${user.bio}
Public Repos: ${user.public_repos}
Repositórios: ${user.repos.map(repo => `
  -------------------
  Nome: ${repo.name},
  Descrição: "${repo.description}",
  Fork: ${repo.fork},
  Contador de Estrelas: ${repo.stargazers_count}`)}\n`)
  } else {
    console.log(`O usuário não foi encontrado!`)
  }
}

function listAll() {
  users.forEach((u) => {
    console.log(`Nome: ${u.name},
Login: ${u.login},
ID: ${u.id},
Bio: ${u.bio},
Public Repos: ${u.public_repos}
-----------------`)
  })
}

function sumRepos() {
  let sum = 0;
  users.forEach(user => {
    sum += user.public_repos
  });

  console.log(`Total de Repositórios: ${sum}`)
}

function topFiveMostRepos() {
  const topFive = users.sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)
  console.log(`Top 5 Usuários com mais repositórios:`)
  topFive.forEach(user => {
    console.log(`Nome: ${user.name},
Quantidade: ${user.public_repos}`)
  })
}

async function main() {
  await addUser('isaacpontes')
  await addUser('julianaconde')
  await addUser('pcaldass')
  await addUser('lucasqueirogaa')
  await addUser('frans203')
  await addUser('LeDragoX')
  await addUser('jPales1')
  
  showSavedInfo('isaacpontes')
  showSavedInfo('julianaconde')
  showSavedInfo('jPales1')

  listAll()
  sumRepos()
  topFiveMostRepos()
}

main()