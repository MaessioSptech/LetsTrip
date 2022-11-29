// footer
function dimensaoTela() {
    var heightTela = window.innerHeight;

    document.getElementById('pag_processos').style.minHeight = heightTela + 'px';
}

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
    destino = { nome: 'Águas de Lindóia', img: './imagens/aguas_de_Lindoia.jpg', descricao: 'Em Águas de Lindóia, a Capital Termal do Brasil, você irá reconhecer na simplicidade e na espontaneidade das pessoas um dos maiores valores deste balneário que está tão próximo da Capital de São Paulo e tão distante do estresse dos grandes centros urbanos.' },
    destino = { nome: 'Águas de São Pedro', img: './imagens/aguas_de_sao_pedro.jpg', descricao: 'A cidade é conhecida pelas suas águas hidrominerais de valor medicinal, tendo suas fontes naturais com alguns dos principais atrativos turísticos. Possui ainda dois grandes parques (Dr. Octavio Moura Andrade Parque Municipal e o Parque das Águas).' },
    destino = { nome: 'Campos do Jordão', img: './imagens/campos_do_jordao.jpg', descricao: 'Quando se pensa em viajar para um lugar friozinho e romântico, Campos do Jordão é uma das primeiras cidades que vêm à mente. Não é para menos: além das temperaturas baixas, o destino possui ótima infraestrutura e diversas atrações, seja para uma viagem a dois, em família ou com os amigos.' },
    destino = { nome: 'Extrema', img: './imagens/extrema.jpg', descricao: 'O encontro, a prosa e a hospitalidade fazem parte do cotidiano da nossa gente que nasceu e cresceu convivendo com a natureza. Dentre tantas experiências, nessa região acolhedora, você encontra a adrenalina para renovar o ânimo e, ao mesmo tempo, a paz orquestrada pelo silêncio das montanhas e o canto das águas da floresta para reposicionar o espírito.' },
    destino = { nome: 'Holambra', img: './imagens/holambra.jpg', descricao: 'Não é exagero dizer que passear por Holambra é se deparar com flores por todos os lados. Essa cidade é tipicamente holandesa, bastante conhecida pela Expoflora, a maior exposição de plantas e flores da América Latina. A herança holandesa é nítida na cidade. Além da gastronomia típica, a arquitetura das construções chama a atenção e é motivo de muitas fotos dos turistas.' },
    destino = { nome: 'Ilha bela', img: './imagens/ilha_bela.jpg', descricao: 'Ilhabela é um pedacinho de paraíso em meio ao belo Litoral Norte de São Paulo. Imagine uma ilha com praias, montanhas, natureza com paisagens paradisíacas, além de ótima estrutura, charme e diversão. Esta é Ilha Bela! São mais de 30 praias para conhecer e visitar, algumas com fácil acesso e bem urbanizadas, outras mais selvagens apenas por barco e trilha.' },
    destino = { nome: 'Joanópolis', img: './imagens/joanopolis.jpg', descricao: 'Joanópolis é uma cidade do interior paulista que reserva a melhor viagem para quem busca uma rápida aventura. Aqui, é possível encontrar as belezas da Serra da Mantiqueira, como cachoeiras, trilhas, montanhas e lindas paisagens. Mas também existe a tranquilidade e clima único da cidade conhecida como a Capital do Lobisomem, uma lenda característica da região.' },
    destino = { nome: 'Paraty', img: './imagens/paraty.jpg', descricao: 'Paraty une história e paisagens naturais realmente estonteantes. A região, conhecida como Costa Verde, oferece mais de uma centena de praias e ilhas para quem deseja curtir os dias de sol. E para quem preferir o contato mais íntimo com a Serra do Mar, há ainda uma grande variedade de cachoeiras a serem desbravadas pelos viajantes em Paraty.' },
    destino = { nome: 'São Roque', img: './imagens/sao_roque.jpg', descricao: 'São Roque é conhecida como a Terra do Vinho, pois possui em seu território diversas vinícolas, que produzem os mais variados tipos de vinho. Pode-se fazer o famoso Roteiro do Vinho, com degustação dos vinhos e produtos da região. Digna de ser visitada é a reserva ecológica, um parque municipal no qual se pode admirar a vegetação natural, com suas típicas orquídeas e bromélias.' },
    destino = { nome: 'Serra Negra', img: './imagens/serra_negra.jpg', descricao: 'Serra Negra é uma cidade muito mais do que geograficamente estratégica. A montanha, o charme do centrinho de compras, o clima puro e rico em oxigenação, a grande infra-estrutura em hotelaria de lazer e eventos, a gastronomia, a qualidade dos produtos e serviços, a originalidade dos imigrantes italianos, a hospitalidade das pessoas, a beleza natural; enfim, tudo em Serra Negra esta preparado para receber.' }];

function exibirGaleria(list_viagem) {

    for (var dest = 0; dest < list_viagem.length; dest++) {
        quadro_viagem.innerHTML += `
            <div class='banner-div'>
            <img onclick="exibirModal('${list_viagem[dest].nome}', '${list_viagem[dest].img}', '${list_viagem[dest].descricao}')" src='${list_viagem[dest].img}'>
            <p class='text-caixa'>${list_viagem[dest].nome}</p>
            </div>`
    };
};

//Exibir o modal
function exibirModal(viagem, imagem, descricao) {
    banner_modal.innerHTML = `
            <div class="modal-overlay active">
                <div class="modal">
                    <div class='quadro_desc'>
                        <div> 
                            <img src='${imagem}'>
                        </div>

                        <div id='modalBanner' style="width: 100%; height: 100%;">
                            <h2>${viagem}</h2>
                            <p style="100%; margin: 25px 0; font-size: 19px"> ${descricao} </p>
                            <div class="div_button">
                                <button class="btnAceitar" onclick="verificarUser('${viagem}')">Favoritar</button><br>
                                <button class="btnCancelar" onclick='Modal.close()'>Cancelar</button>
                            </div>
                        </div>
                            <div id="caixa_modal"></div>
                    </div>
                </div>
            </div>
        `
};
function exibirCaixaModal(viagem, idUsuario) {
    modalBanner.innerHTML = '';
    modalBanner.innerHTML = `
            <div class='quadro_desc'>

                <div id='modalBanner' style="width: 100%; height: 100%;">
                    <h2>Você já tem uma viagem favorita</h2>
                    <p>Tem certeza que quer trocar?</p>
            
                    <div class="div_button">
                        <button class="btnAceitar" onclick="trocarFavorito('${viagem}', '${idUsuario}')">Sim, tenho certeza!</button>
                        <button class="btnCancelar" onclick='Modal.close()'>Cancelar</button>
                    </div>
                </div>
            </div>
            
        `
}
var verificador = 0
function ModalAviso(rank, verificador, viagemUsuario) {

    for (var i = 0; i < list_viagem.length; i++) {
        if (list_viagem[i].nome == viagemUsuario) {
            var src_img = list_viagem[i].img
        }
    };

    if (verificador == 1) {
        if (rank == false) {
            banner_modal.innerHTML = `
                <div class="modal-overlay active">
                    <div class="modal">
                        <div  class='quadro_desc'>
                            <div> 
                                <img src='${src_img}'>
                            </div>
                                <div id="caixa_modal"></div>
                        </div>
                    </div>
                </div>
                `
            caixa_modal.innerHTML = `
            <h2>Que legal!</h2>
            <p style="margin-left: 30px">Você escolheu umas das três viagens <b>mais</b> favoritadas do site. <br>
            Parece que muita gente recomenda viajar para <b>${viagemUsuario}</b>.</p>

            <div class="div_button">
                <button class="btnAceitar" onclick='Modal.close()'>Uaaau, gostei!</button>
            </div>
        `
        } else {
            banner_modal.innerHTML = `
                <div class="modal-overlay active">
                    <div class="modal">
                        <div  class='quadro_desc'>
                            <div> 
                                <img src='${src_img}'>
                            </div>
                            <div id="caixa_modal"></div>
                        </div>
                    </div>
                </div>
                `
            caixa_modal.innerHTML = `
            <h2>Bacana</h2>
            <p style="margin-left: 30px">Você escolheu umas das três viagens <b>menos</b> populares do site. <br>
            Com certeza <b>${viagemUsuario}</b> é um bom destino, mas não é o preferido dos turista.</p>

            <div class="div_button">
                <button class="btnCancelar" onclick='Modal.close()'>Saquei!</button>
            </div>
        `
        }
    }
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

var viagemUsuario = '';
// Trocar a viagem favorita
function trocarFavorito(viagem, idUsuario) {
    var viagemVar = viagem;
    var idUsuarioVar = idUsuario;
    viagemUsuario = viagem;
    verificador = 1;


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


const list_qtdViagem = []

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
    let labels = [`Águas de Lindóia`, `Águas de São Pedro`, `Campos do Jordão`, `Extrema`, `Holambra`, `Ilha bela`, `Joanópolis`, `Paraty`, `São Roque`, `Serra Negra`];

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


    setTimeout(() => atualizarGrafico(dados, myChart), 2000);
}


// Esta função *atualizarGrafico* atualiza o gráfico que foi renderizado na página,
// buscando a última medida inserida em tabela contendo as capturas, 

//     Se quiser alterar a busca, ajuste as regras de negócio em src/controllers
//     Para ajustar o "select", ajuste o comando sql em src/models
var list_ranking = []
function atualizarGrafico(dados, myChart) {
    list_ranking = []
    console.log('TESTE--------------')
    console.log(viagemUsuario)

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

                            var rank = {
                                nome: list_viagem[cont].nome,
                                qtd_votos: novoRegistro[i].qtd_viagem
                            }

                            list_ranking.push(rank)

                            repetido = false

                        }
                    }
                    if (repetido) {

                        dados.datasets[0].data.push(0);

                        var rank = {
                            nome: list_viagem[cont].nome,
                            qtd_votos: 0
                        }

                        list_ranking.push(rank)

                    }

                    repetido = true
                }
                console.log('LISTA DOS RANKINGS')
                console.log(list_ranking)

                list_ranking.sort(function (obj1, obj2) {
                    return obj1.qtd_votos < obj2.qtd_votos ? -1 :
                        (obj1.qtd_votos > obj2.qtd_votos ? 1 : 0);
                });

                console.log('LISTA DOS RANKINGS - ORDENADOS')
                console.log(list_ranking)

                for (var j = 0; j < list_ranking.length; j++) {
                    if (list_ranking[j].nome == viagemUsuario) {
                        var index = j
                    }
                }

                console.log('Viagem Favoritada pelo User')
                console.log(viagemUsuario)

                console.log('Index dessa viagem na lista')
                console.log(index + 1)
                if (index <= 2) {
                    rank = false // Nos 3 MENOS votados
                } else if (index > list_viagem.length - 4) {
                    rank = true // Nos 3 MAIS votados
                }


                ModalAviso(rank, verificador, viagemUsuario);

                verificador = 0;

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





