let estadosBrasileiros = [
    'Acre',
    'Alagoas',
    'Amapá',
    'Amazonas',
    'Bahia',
    'Ceará',
    'Distrito Federal',
    'Espírito Santo',
    'Goiás',
    'Maranhão',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Minas Gerais',
    'Pará',
    'Paraíba',
    'Paraná',
    'Pernambuco',
    'Piauí',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Rio Grande do Sul',
    'Rondônia',
    'Roraima',
    'Santa Catarina',
    'São Paulo',
    'Sergipe',
    'Tocantins'
];

let select = document.getElementById("estados-brasil");  
for (let i = 0; i < estadosBrasileiros.length; i += 1) {
    let position = document.createElement("option")
    select.appendChild(position);
    let meuEstado = document.getElementsByTagName("option");
    meuEstado[i].innerHTML = estadosBrasileiros[i];
}