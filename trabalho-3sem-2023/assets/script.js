function sendForm(){

    let inputs = [];

    inputs.push(document.querySelector('#razao-social'));
    inputs.push(document.querySelector('#cep'));
    inputs.push(document.querySelector('#endereco'));
    inputs.push(document.querySelector('#numero'));
    inputs.push(document.querySelector('#cidade'));
    inputs.push(document.querySelector('#estado'));
    inputs.push(document.querySelector('#nome'));
    inputs.push(document.querySelector('#email'));

    let vazios = [];
    let inputsObj = [];

    for (let i = 0; i < inputs.length; i++){
        
        let name = inputs[i].name;
        let value = inputs[i].value;
        
        if (value == ""){
            vazios.push(name);
        }

        inputsObj.push({ [name]: value });
    }

    if (vazios.length > 0){
        let msg = "O(s) seguinte(s) campo(s) não pode(m) estar vazio(s):";

        for (i = 0; i < vazios.length; i++){
            msg += `\n${vazios[i]}`;
        }

        alert(msg);
        return;

    }

    alert("Dados Enviados!");

}

function linkTo(link){
    window.location.href = link;
}
