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
    function exibirGaleria(){
        var list_viagem = [
            destino = { nome: 'Holambra', img: './imagens/pelourinho_bahia_zarpo.jpg' },
            destino = { nome: 'São Roque', img: './imagens/pelourinho_bahia_zarpo.jpg' },
            destino = { nome: 'Ilha bela', img: './imagens/pelourinho_bahia_zarpo.jpg' },
            destino = { nome: 'Joanópolis', img: './imagens/pelourinho_bahia_zarpo.jpg' },
            destino = { nome: 'Campos do Jordão', img: './imagens/pelourinho_bahia_zarpo.jpg' },
            destino = { nome: 'Águas de São Pedro', img: './imagens/pelourinho_bahia_zarpo.jpg' },
            destino = { nome: 'Parati', img: './imagens/pelourinho_bahia_zarpo.jpg' },
            destino = { nome: 'Extrema', img: './imagens/pelourinho_bahia_zarpo.jpg' },
            destino = { nome: 'Águas de Lindoia', img: './imagens/pelourinho_bahia_zarpo.jpg' },
            destino = { nome: 'Serra Negra', img: './imagens/pelourinho_bahia_zarpo.jpg' }];
    
        for (var dest = 0; dest < list_viagem.length; dest++) {
            quadro_viagem.innerHTML += `<div><img onclick="verificarUser('${list_viagem[dest].nome}')" src='${list_viagem[dest].img}'><d class='text-caixa'>${list_viagem[dest].nome} </p></div>`
        };
    };
    
    // Verificar se usuario ja tem viagem favorita
    function verificarUser(viagem) {
        var idUsuario = sessionStorage.ID_USUARIO;
        var user_repetido = false
        
        fetch("/avisos/consultar").then(function (resposta) {
            if (resposta.ok) {
                alert(resposta)
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

                         if(list_user_favoritos.id == idUsuario){
                            var user_repetido = true
                         }
                    }

                    if(user_repetido){
                        // Configurar uma box com a a frase 'Certeza que quer alterar seu lugar favorito'
                        // se 'SIM' faca
                        alert('Voce já tem uma viagem favorita')
                        trocarFavorito(viagem, idUsuario)
                        // Se 'NAO' exiba mensagem de OK

                    } else{
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

    function trocarFavorito(viagem, idUsuario){
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

                mensagem_erro.innerHTML = "Troca de lugar favorito concluido!";

                setTimeout(() => {
                    window.location = "./grafico.html";
                }, "2000")
                
                limparFormulario();
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
        });

        return false;
    }


