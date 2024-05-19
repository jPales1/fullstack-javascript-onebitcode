const planets = [];
function findPlanet(name) {
    const planet = planets.find((p) => p.name === name);
    return planet ?? false;
}
function addPlanet(name, coordinates, situation) {
    let planet = {
        name,
        coordinates,
        situation,
        satellites: []
    };
    planets.push(planet);
    alert(`Planeta ${name} foi adicionado com sucesso!`);
}
function changeSituation(newSituation, planet) {
    if (planet.situation != newSituation) {
        planet.situation = newSituation;
        alert(`A situação do planeta ${planet.name} foi alterada para ${newSituation}!`);
    }
    else
        alert(`A nova situação do planeta é igual à anterior (${planet.situation})!`);
}
function addSatellite(newSatellite, planet) {
    if (!(planet.satellites.includes(newSatellite))) {
        planet.satellites.push(newSatellite);
        alert(`Satélite ${newSatellite} adicionado ao planeta ${planet.name}!`);
    }
    else {
        alert(`O satélite ${newSatellite} já existe no planeta ${planet.name}!`);
    }
}
function removeSatellite(removeSatellite, planet) {
    if (planet.satellites.includes(removeSatellite)) {
        planet.satellites = planet.satellites.filter((satellite) => satellite !== removeSatellite);
        alert(`Satélite ${removeSatellite} removido do planeta ${planet.name}!`);
    }
    else {
        alert(`O satélite ${removeSatellite} não existe no planeta ${planet.name}!`);
    }
}
// Funções Auxiliares
function validSituation() {
    let situation;
    let validSituation = false;
    while (!validSituation) {
        const situationInput = prompt(`Informe a situação do planeta:
    1. Habitado
    2. Habitável
    3. Inabitável
    4. Inexplorado`);
        switch (situationInput) {
            case "1":
                situation = "Habitado";
                validSituation = true;
                break;
            case "2":
                situation = "Habitável";
                validSituation = true;
                break;
            case "3":
                situation = "Inabitável";
                validSituation = true;
                break;
            case "4":
                situation = "Inexplorado";
                validSituation = true;
                break;
            default:
                alert("Situação inválida!");
                break;
        }
    }
    return situation;
}
function validPlanet(callbackfn) {
    const planetName = prompt("Informe o nome do planeta:");
    const planet = findPlanet(planetName);
    if (planet) {
        callbackfn(planet);
    }
    else {
        alert("O planeta foi não encontrado! Retornando ao menu...");
    }
}
// Opções do Menu
function firstMenuOption() {
    const name = prompt('Informe o nome do planeta:');
    const coordinateA = Number(prompt('Informe a primeira coordenada:'));
    const coordinateB = Number(prompt('Informe a segunda coordenada:'));
    const coordinateC = Number(prompt('Informe a terceira coordenada:'));
    const coordinateD = Number(prompt('Informe a quarta coordenada:'));
    const situation = validSituation();
    const confirmation = confirm(`Confirma o registro do planeta ${name}?
  Coordenadas: (${coordinateA}, ${coordinateB}, ${coordinateC}, ${coordinateD})
  Situação: ${situation}`);
    if (confirmation) {
        addPlanet(name, [coordinateA, coordinateB, coordinateC, coordinateD], situation);
    }
}
function secondMenuOption() {
    validPlanet(planet => {
        const situation = validSituation();
        changeSituation(situation, planet);
    });
}
function thirdMenuOption() {
    validPlanet(planet => {
        const satellite = prompt('Informe o nome do satélite a ser adicionado:');
        addSatellite(satellite, planet);
    });
}
function fourthMenuOption() {
    validPlanet(planet => {
        const satellite = prompt('Informe o nome do satélite a ser removido:');
        removeSatellite(satellite, planet);
    });
}
function fifthMenuOption() {
    let list = 'Planetas:\n';
    planets.forEach(planet => {
        const [a, b, c, d] = planet.coordinates;
        list += `
      Nome: ${planet.name}
      Coordenadas: (${a}, ${b}, ${c}, ${d})
      Situação: ${planet.situation}
      Satélites: ${planet.satellites.length}`;
        planet.satellites.forEach(satellite => {
            list += `       - ${satellite}\n`;
        });
    });
    alert(list);
}
// MENU
let userOption = 0;
while (userOption !== 6) {
    const menu = `Menu
    1 - Registrar um novo planeta
    2 - Atualizar situação do planeta
    3 - Adicionar um satélite ao planeta
    4 - Remover um satélite do planeta
    5 - Lista todos os planetas
    6 - Sair
  `;
    userOption = Number(prompt(menu));
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
            fourthMenuOption();
            break;
        case 5:
            fifthMenuOption();
            break;
        case 6:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
