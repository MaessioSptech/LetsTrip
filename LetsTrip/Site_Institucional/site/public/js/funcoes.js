// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        b_usuario.innerHTML = nome;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}


// modal
function mostrarModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "flex";
}

function fecharModal() {
    var divModal = document.getElementById("div_modal");
    divModal.style.display = "none";
}

// Funcoes criadas


// Galeria de imagens
const list_viagem = [
    destino = { nome: 'Águas de Lindoia', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
    destino = { nome: 'Águas de São Pedro', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
    destino = { nome: 'Campos do Jordão', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
    destino = { nome: 'Extrema', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
    destino = { nome: 'Holambra', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
    destino = { nome: 'Ilha bela', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
    destino = { nome: 'Joanópolis', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
    destino = { nome: 'Parati', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
    destino = { nome: 'São Roque', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' },
    destino = { nome: 'Serra Negra', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem' }];

function exibirGaleria(list_viagem) {

    for (var dest = 0; dest < list_viagem.length; dest++) {
        quadro_viagem.innerHTML += `
            <div class='banner-div'>
            <img onclick="exibirModal('${list_viagem[dest].nome}', '${list_viagem[dest].img}', '${list_viagem[dest].descricao}')" src='${list_viagem[dest].img}'>
            <p class='text-caixa'>${list_viagem[dest].nome}</p>
            </div>`
        // <img onclick="verificarUser('${list_viagem[dest].nome}')" src='${list_viagem[dest].img}'>
    };
};

//Exibir o modal
function exibirModal(viagem, imagem, descricao) {
    banner_modal.innerHTML = `
            <div class="modal-overlay active">
                <div class="modal">
                    <div quadro_desc>
                        <div> 
                            <img src='${imagem}'>
                        </div>

                        <div>
                            <h2>${viagem}</h2>
                            <p> ${descricao} </p>
                            <button onclick="verificarUser('${viagem}')">Favoritar</button><br>
                            <a onclick='Modal.close()'>Cancelar</a>
                            <div id="caixa_modal"></div>
                        </div>
                    </div>
                </div>
            </div>
        `
};
function exibirCaixaModal(viagem, idUsuario) {
    caixa_modal.innerHTML = `
            <h2>Você já tem uma viagem favortia</h2>
            <p>Tem certeza que quer trocar?</p>

            <button onclick="trocarFavorito('${viagem}', '${idUsuario}')">Sim, tenho certeza!</button> <br>
            <button onclick='Modal.close()'>Cancelar</button>
        `
}

const Modal = {
    close() {
        // fechar o modal
        // remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

// Verificar se usuario ja tem viagem favorita
function verificarUser(viagem) {
    var idUsuario = sessionStorage.ID_USUARIO;
    var user_repetido = false

    fetch(`/avisos/consultar/${idUsuario}`).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("feed_container");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                for (let i = 0; i < resposta.length; i++) {
                    list_user_favoritos = resposta[i];

                    if (list_user_favoritos.fkViagem != null) {
                        user_repetido = true
                    }
                }

                if (user_repetido) {
                    // Configurar uma box com a a frase 'Certeza que quer alterar seu lugar favorito'
                    // se 'SIM' faca

                    exibirCaixaModal(viagem, idUsuario)
                    // Se 'NAO' exiba mensagem de OK

                } else {
                    trocarFavorito(viagem, idUsuario)
                }

            });
            //
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);

    });
};

// Trocar a viagem favorita
function trocarFavorito(viagem, idUsuario) {
    var viagemVar = viagem;
    var idUsuarioVar = idUsuario;


    // Enviando o valor da nova input
    fetch("/usuarios/trocarFavorito", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            viagemServer: viagemVar,
            idUsuarioServer: idUsuarioVar
        })

        
    }).then(function (resposta) {

        console.log("resposta: ", resposta);


        if (resposta.ok) {

            cardErro.style.display = "block";

            console.log("Troca de lugar favorito concluido!");

        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
    });
    
    return false;
}

// Adicionar viagem ao BD
function publicar(viagem) {
    var idUsuario = sessionStorage.ID_USUARIO;

    var corpo = {
        titulo: viagem
    }

    fetch(`/avisos/publicar/${idUsuario}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            //CONFIGURAR UMA BOX AVISANDO DO POST SUCESSO
            window.alert("Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!");

            //CONFIGURAR UM SET TIME OUT PARA TROCAR DE PAGINA
            window.location = "./grafico.html";
            limparFormulario();
            finalizarAguardar();
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
};

// Atualizar Grafico
const list_qtdViagem = []
/*function atualizarGrafico(list_viagem) {

    fetch("/avisos/listar").then(function (resposta) {
        var repetido = true;

        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("feed_container");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                for (var cont = 0; cont < list_viagem.length; cont++) {
                    for (let i = 0; i < resposta.length; i++) {
                        if (resposta[i].nome_viagem == list_viagem[cont].nome) {
                            viagem = {
                                nome_viagem: resposta[i].nome_viagem,
                                qtd_viagem: resposta[i].qtd_viagem
                            }
                            list_qtdViagem.push(viagem)

                            repetido = false

                        }
                    }
                    if (repetido) {
                        viagem = {
                            nome_viagem: list_viagem[cont].nome,
                            qtd_viagem: 0
                        }

                        list_qtdViagem.push(viagem)
                    }

                    repetido = true
                }

                plotarGrafico(list_qtdViagem);

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
};

 function plotarGrafico(list_qtdViagem) {
    
    const ctx = document.getElementById('myChart');


    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [`Águas de Lindoia`, `Águas de São Pedro`, `Campos do Jordão`, `Extrema`, `Holambra`, `Ilha bela`, `Joanópolis`, `Parati`, `São Roque`, `Serra Negra`],
            datasets: [{
                label: 'Votos das Viagens',
                data: [`${list_qtdViagem[0].qtd_viagem}`, `${list_qtdViagem[1].qtd_viagem}`, `${list_qtdViagem[2].qtd_viagem}`, `${list_qtdViagem[3].qtd_viagem}`, `${list_qtdViagem[4].qtd_viagem}`, `${list_qtdViagem[5].qtd_viagem}`, `${list_qtdViagem[6].qtd_viagem}`, `${list_qtdViagem[7].qtd_viagem}`, `${list_qtdViagem[8].qtd_viagem}`, `${list_qtdViagem[9].qtd_viagem}`],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    min: 0,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    });
    myChart.update();
    
    
} */




/* Parametrizando os graficos*/
function obterDadosGrafico(list_viagem) {

    if (proximaAtualizacao != undefined) {
        clearTimeout(proximaAtualizacao);
    }

    fetch(`/medidas/ultimas`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarGrafico(resposta, list_viagem);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

var repetido = true;
function plotarGrafico(resposta, list_viagem) {
    console.log('iniciando plotagem do gráfico...');

    // Criando estrutura para plotar gráfico - labels
    let labels = [`Águas de Lindoia`, `Águas de São Pedro`, `Campos do Jordão`, `Extrema`, `Holambra`, `Ilha bela`, `Joanópolis`, `Parati`, `São Roque`, `Serra Negra`];
    
    // Criando estrutura para plotar gráfico - dados
    let dados = {
        labels: labels,
        datasets: [{
            label: 'Votos das Viagens',
            data: [],
            borderWidth: 1
        }]
    };
    
    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosGrafico" e passados para "plotarGrafico":')
    console.log(resposta)
    
    for (var cont = 0; cont < list_viagem.length; cont++) {
        for (var i = 0; i < resposta.length; i++) {
            if (resposta[i].nome_viagem == list_viagem[cont].nome) {

                dados.datasets[0].data.push(resposta[i].qtd_viagem);

                repetido = false

            }
        }
        if (repetido) {

            dados.datasets[0].data.push(0);

        }

        repetido = true
    }

    
    console.log('----------------------------------------------')
    console.log('O gráfico será plotado com os respectivos valores:')
    console.log('Labels:')
    console.log(labels)
    console.log('Dados:')
    console.log(dados)
    console.log('----------------------------------------------')
    
    // Criando estrutura para plotar gráfico - config
    const config = {
        type: 'bar',
        data: dados,
        options: {
            scales: {
                y: {
                    min: 0,
                    ticks: {
                        stepSize: 1
                    }
                }
            }
        }
    };

    // Adicionando gráfico criado em div na tela
    let myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

    alert(dados)

    setTimeout(() => atualizarGrafico(dados, myChart), 2000);
}


// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas, 

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
function atualizarGrafico(dados, myChart) {

    fetch(`/medidas/tempo-real`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {

                console.log(`Dados recebidos: ${JSON.stringify(novoRegistro)}`);
                console.log(`Dados atuais do gráfico:`);
                console.log(novoRegistro);
                console.log(dados);

                
                    // tirando e colocando valores no gráfico
                    dados.datasets[0].data = [];

                    for (var cont = 0; cont < list_viagem.length; cont++) {
                        for (var i = 0; i < novoRegistro.length; i++) {
                            if (novoRegistro[i].nome_viagem == list_viagem[cont].nome) {
                
                                dados.datasets[0].data.push(novoRegistro[i].qtd_viagem)
                
                                repetido = false
                
                            }
                        }
                        if (repetido) {
                
                            dados.datasets[0].data.push(0);
                
                        }
                
                        repetido = true
                    }

                    myChart.update();
                

                // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
                proximaAtualizacao = setTimeout(() => atualizarGrafico(dados, myChart), 2000);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
            // Altere aqui o valor em ms se quiser que o gráfico atualize mais rápido ou mais devagar
            proximaAtualizacao = setTimeout(() => atualizarGrafico(dados, myChart), 2000);
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });

}





