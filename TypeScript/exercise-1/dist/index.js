const spaceships = [];
function saveSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi adicionada.`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((s) => s.name === name);
    return spaceship;
}
function addMember(newMember, spaceship) {
    if (!(spaceship.crew.length == spaceship.crewLimit)) {
        spaceship.crew.push(newMember);
        alert(`O membro ${newMember} foi adicionado à nave ${spaceship.name}`);
    }
    else {
        alert(`Falha! O limite de tripulantes já foi atingido.`);
    }
}
function sendMission(spaceship) {
    if (spaceship.crew.length >= Math.floor(spaceship.crewLimit / 3)) {
        if (spaceship.inMission === false) {
            spaceship.inMission = true;
            alert(`A nave ${spaceship.name} foi enviada em missão!`);
        }
        else {
            alert(`A nave ${spaceship.name} já está em missão!`);
        }
    }
    else {
        alert(`Número de tripulantes abaixo do mínimo.`);
    }
}
function listAll() {
    spaceships.forEach((spaceship) => {
        alert(`Nome: ${spaceship.name},
          Piloto: ${spaceship.pilot},
          Tripulação: ${spaceship.crew},
          Limite: ${spaceship.crewLimit} tripulantes,
          Em missão? ${spaceship.inMission === true ? 'Sim' : 'Não'}
    `);
    });
}
function firstMenuOption() {
    const name = prompt("Digite o nome da nave: ");
    const pilot = prompt(`Digite o nome do piloto da ${name}: `);
    const limit = Number(prompt(`Digite o limite de tripulação da ${name}: `));
    const confirmation = confirm(`Confirma o registro da nave ${name}?\nPiloto: ${pilot}\nTamanho da Tripulação: ${limit}`);
    if (confirmation) {
        saveSpaceship(name, pilot, limit);
    }
}
function secondMenuOption() {
    const member = prompt(`Digite o nome do membro: `);
    const name = prompt("Digite o nome da nave: ");
    const confirmation = confirm(`Confirma a adição do membro ${member} na nave ${name}?`);
    if (confirmation) {
        const spaceship = findSpaceship(name);
        if (spaceship)
            addMember(member, findSpaceship(name));
        else
            alert(`A nave não foi encontrada`);
    }
}
function thirdMenuOption() {
    const name = prompt("Digite o nome da nave: ");
    const confirmation = confirm(`Confirma o envio da nave ${name} em missão?`);
    if (confirmation) {
        const spaceship = findSpaceship(name);
        if (spaceship)
            sendMission(findSpaceship(name));
        else
            alert(`A nave não foi encontrada`);
    }
}
// MENU
function showMenu() {
    let userOption = 0;
    while (userOption !== 5) {
        const menu = prompt(`Escolha uma opção:
      1. Adicionar Nave
      2. Adicionar Membro a Nave
      3. Enviar Nave em Missão
      4. Listar Todas as Naves
      5. Encerrar.
    `);
        userOption = Number(menu);
        switch (userOption) {
            case 1:
                firstMenuOption();
                break;
            case 2:
                secondMenuOption();
                break;
            case 3:
                thirdMenuOption();
                break;
            case 4:
                listAll();
                break;
            case 5:
                alert("Encerrando o sistema.");
                break;
            default:
                alert("Essa opção não existe! Tente novamente.");
                break;
        }
    }
}
showMenu();
