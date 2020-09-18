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

function checkDate() {
    let inputDate = document.querySelector('#data').value;
        if (inputDate[2] === '/' && inputDate[5] === '/'){
            let dia = inputDate[0] + inputDate[1];
            if (dia > 0 && dia < 32) {
                let mes = inputDate[3] + inputDate[4];
                if (mes > 0 && mes < 13) {
                     let ano = inputDate[6] + inputDate[7] + inputDate[8] + inputDate[9];
                     if (ano > 0) {
                         return true;
                     } else {
                         alert('A data está incorreta');
                     }
                    }
                }
            }
        }

        function creatForms() {
            let body = document.getElementsByTagName('body')[0];
            let formResumo = document.getElementById('nome').value + '<br>';
            formResumo += document.getElementById('email').value + '<br>';
            formResumo += document.getElementById('cpf').value + '<br>';
            formResumo += document.getElementById('cidade').value + '<br>';
            formResumo += document.forms['input']['estados-brasil'].value + '<br>';
        
            let resumeBox = document.createElement('div');
            resumeBox.innerHTML = formResumo;
            body.appendChild(resumeBox);
        };