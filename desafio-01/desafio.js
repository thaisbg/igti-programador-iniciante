//var dados= require('./funcionarios');

var dados = {
    "funcionarios": [
        {
            "nome": "Joao Cardoso Barbosa",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Rebeca Costa Oliveira",
            "salario": 2000,
            "setor": "Produção"
        },
        {
            "nome": "Ana Azevedo Alves",
            "salario": 5000,
            "setor": "Comercial"
        },
        {
            "nome": "Marisa Dias Barbosa",
            "salario": 6500,
            "setor": "Produção"
        },
        {
            "nome": "Igor Cunha Lima",
            "salario": 1200,
            "setor": "Comercial"
        },
        {
            "nome": "Sarah Sousa Costa",
            "salario": 1500,
            "setor": "Comercial"
        },
        {
            "nome": "Giovanna Santos Araujo",
            "salario": 2500,
            "setor": "Produção"
        },                           
        {
            "nome": "Otávio Souza Cardoso",
            "salario": 3500,
            "setor": "Administrativo"
        },
        {
            "nome": "Leonardo Souza Lima",
            "salario": 1500,
            "setor": "Produção"
        },
        {
            "nome": "Nicolash Cavalcanti Fernandes",
            "salario": 4000,
            "setor": "Comercial"
        },                             
        {
            "nome": "Matheus Ribeiro Rocha",
            "salario": 4500,
            "setor": "Administrativo"
        },
        {
            "nome": "Vitor Ribeiro Barbosa",
            "salario": 3500,
            "setor": "Produção"
        },
        {
            "nome": "Carlos Oliveira Rodrigues",
            "salario": 7000,
            "setor": "Administrativo"
        },
        {
            "nome": "Mateus Pinto Pereira",
            "salario": 5500,
            "setor": "Administrativo"
        },
        {
            "nome": "Vinícius Pereira Castro",
            "salario": 3500,
            "setor": "Comercial"
        },      
{
            "nome": "Gabriela Souza Pereira",
            "salario": 2500,
            "setor": "Administrativo"
        },
        {
            "nome": "Emily Melo Cavalcanti",
            "salario": 2000,
            "setor": "Produção"
        },
        {
            "nome": "Luís Carvalho Silva",
            "salario": 1500,
            "setor": "Comercial"
        },
        {
            "nome": "José Melo Araujo",
            "salario": 4000,
            "setor": "Produção"
        },
        {
            "nome": "Manuela Ferreira Cardoso",
            "salario": 6000,
            "setor": "Comercial"
        },
        {
            "nome": "Anna Gomes Rodrigues",
            "salario": 7000,
            "setor": "Comercial"
        },
        {
            "nome": "Anna Sousa Goncalves",
            "salario": 5000,
            "setor": "Produção"
        },                           
        {
            "nome": "Gabrielle Araujo Souza",
            "salario": 7500,
            "setor": "Administrativo"
        },
        {
            "nome": "Maria Cavalcanti Rocha",
            "salario": 3000,
            "setor": "Produção"
        },
        {
            "nome": "Luis Lima Rocha",
            "salario": 2000,
            "setor": "Comercial"
        },                             
        {
            "nome": "Rodrigo Correia Souza",
            "salario": 3500,
            "setor": "Administrativo"
        },
        {
            "nome": "Guilherme Silva Cavalcanti",
            "salario": 5500,
            "setor": "Produção"
        },
        {
            "nome": "Nicole Costa Pinto",
            "salario": 2000,
            "setor": "Administrativo"
        },
        {
            "nome": "Emilly Gomes Araujo",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Thaís Sousa Carvalho",
            "salario": 4000,
            "setor": "Comercial"
        },
{
            "nome": "Vitor Oliveira Sousa",
            "salario": 5500,
            "setor": "Administrativo"
        },
        {
            "nome": "José Sousa Lima",
            "salario": 7500,
            "setor": "Produção"
        },
        {
            "nome": "Mateus Barros Carvalho",
            "salario": 8000,
            "setor": "Comercial"
        },
        {
            "nome": "Júlio Cavalcanti Martins",
            "salario": 5000,
            "setor": "Produção"
        },
        {
            "nome": "Antônio Almeida Goncalves",
            "salario": 2000,
            "setor": "Comercial"
        },
        {
            "nome": "Ana Castro Dias",
            "salario": 9500,
            "setor": "Comercial"
        },
        {
            "nome": "Rafaela Cunha Santos",
            "salario": 2000,
            "setor": "Produção"
        },                           
        {
            "nome": "Giovanna Barros Santos",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Gabrielly Martins Alves",
            "salario": 4000,
            "setor": "Produção"
        },
        {
            "nome": "Otávio Araujo Costa",
            "salario": 3500,
            "setor": "Comercial"
        },                             
        {
            "nome": "Bruna Lima Azevedo",
            "salario": 3000,
            "setor": "Administrativo"
        },
        {
            "nome": "Rebeca Ferreira Oliveira",
            "salario": 2500,
            "setor": "Produção"
        },
        {
            "nome": "Breno Sousa Rocha",
            "salario": 6000,
            "setor": "Administrativo"
        },
        {
            "nome": "Vitória Castro Almeida",
            "salario": 5000,
            "setor": "Administrativo"
        },
        {
            "nome": "Marina Goncalves Rodrigues",
            "salario": 4000,
            "setor": "Comercial"
        }
    ]
}

function maiorSalario() {
    var maiorSalarioEmpresa = dados.funcionarios[0].salario
    for (i = 0; (i < dados.funcionarios.length); i++) {
        if(dados.funcionarios[i].salario >= maiorSalarioEmpresa) {
            maiorSalarioEmpresa = dados.funcionarios[i].salario;
            var nomeFuncMaiorSalario = dados.funcionarios[i].nome;
        } 
    }
    //console.log("O maior salário é de " + nomeFuncMaiorSalario + ", que ganha " + maiorSalarioEmpresa)
    document.getElementById("resultado").innerHTML = "O maior salário é de " + nomeFuncMaiorSalario + ", que ganha " + maiorSalarioEmpresa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

function menorSalario() {
    var menorSalarioEmpresa = dados.funcionarios[0].salario
    for (i = 0; (i < dados.funcionarios.length); i++) {
        if(dados.funcionarios[i].salario < menorSalarioEmpresa) {
            menorSalarioEmpresa = dados.funcionarios[i].salario;
            var nomeFuncMenorSalario = dados.funcionarios[i].nome;
        } 
    }
    // console.log("O menor salário é de " + nomeFuncMenorSalario + ", que ganha " + menorSalarioEmpresa)
    document.getElementById("resultado").innerHTML = "O menor salário é de " + nomeFuncMenorSalario + ", que ganha " +  menorSalarioEmpresa.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

}

function media() {
    var soma = 0
    var salarios = []

    for (i = 0; (i < dados.funcionarios.length); i++) {
        salarios.push(dados.funcionarios[i].salario);
        soma += salarios[salarios.length -1]
    }
    mediaSalarial = soma / salarios.length
    // console.log(mediaSalarial)
    document.getElementById("resultado").innerHTML = "A média salarial da empresa é de " + mediaSalarial.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

}

function maiorSalariodoSetor(setor) {
    var maiorSalarioSetor = dados.funcionarios[0].salario
    for (i = 0; (i < dados.funcionarios.length); i++) {
        var setor = document.getElementById("setor").value
        if((setor === dados.funcionarios[i].setor) && (dados.funcionarios[i].salario >= maiorSalarioSetor)) {
            maiorSalarioSetor = dados.funcionarios[i].salario;
            var nomeFuncMaiorSalarioSetor = dados.funcionarios[i].nome;
        } 
    }
    //console.log("O maior salário do setor " + setor + " é de " + nomeFuncMaiorSalarioSetor + ", que ganha " + maiorSalarioSetor)
    document.getElementById("maiorSalarioSetor").innerHTML = "O maior salário do setor " + setor + " é de " + nomeFuncMaiorSalarioSetor + ", que ganha " + maiorSalarioSetor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
}

function menorSalariodoSetor(setor) {
    var menorSalarioSetor = dados.funcionarios[0].salario
    for (i = 0; (i < dados.funcionarios.length); i++) {
        var setor = document.getElementById("setor").value
        if((setor === dados.funcionarios[i].setor) && (dados.funcionarios[i].salario < menorSalarioSetor)) {
            menorSalarioSetor = dados.funcionarios[i].salario;
            var nomeFuncMenorrSalarioSetor = dados.funcionarios[i].nome;
        } 
    }
    //console.log("O menor salário do setor " + setor + " é de " + nomeFuncMenorrSalarioSetor + ", que ganha " + menorSalarioSetor)
    document.getElementById("menorSalarioSetor").innerHTML = "O menor salário do setor " + setor + " é de " + nomeFuncMenorrSalarioSetor + ", que ganha " + menorSalarioSetor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

}

function mediaSetor(setor) {
    var soma = 0
    var salarios = []
    var setor = document.getElementById("setor").value
    
    for (i = 0; (i < dados.funcionarios.length); i++) {       
        if(setor === dados.funcionarios[i].setor) {
            salarios.push(dados.funcionarios[i].salario);
            soma += salarios[salarios.length -1]
        }
    }
    var mediaSalarialSetor = soma / salarios.length
    //console.log("Média salarial do " + setor + ": " + mediaSalarialSetor)
    document.getElementById("mediaSetor").innerHTML = "A média salarial do " + setor + " é de " + mediaSalarialSetor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

}
