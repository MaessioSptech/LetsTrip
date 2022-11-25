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
            destino = { nome: 'Holambra', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'},
            destino = { nome: 'São Roque', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'},
            destino = { nome: 'Ilha bela', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'},
            destino = { nome: 'Joanópolis', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'},
            destino = { nome: 'Campos do Jordão', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'},
            destino = { nome: 'Águas de São Pedro', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'},
            destino = { nome: 'Parati', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'},
            destino = { nome: 'Extrema', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'},
            destino = { nome: 'Águas de Lindoia', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'},
            destino = { nome: 'Serra Negra', img: './imagens/pelourinho_bahia_zarpo.jpg', descricao: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'}];
    
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
    function exibirModal(viagem, imagem, descricao){
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
    function exibirCaixaModal(viagem, idUsuario){
        caixa_modal.innerHTML = `
            <h2>Você já tem uma viagem favortia</h2>
            <p>Tem certeza que quer trocar?</p>

            <button onclick="trocarFavorito('${viagem}', '${idUsuario}')">Sim, tenho certeza!</button> <br>
            <button onclick='Modal.close()'>Cancelar</button>
        `
    }

    const Modal = {
        close(){
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
        alert('Entrou no verificarUser')
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

                         if(list_user_favoritos.fkViagem != null){
                             user_repetido = true
                         }
                    }

                    if(user_repetido){
                        // Configurar uma box com a a frase 'Certeza que quer alterar seu lugar favorito'
                        // se 'SIM' faca
                        alert('Voce já tem uma viagem favorita')

                        exibirCaixaModal(viagem, idUsuario)
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

    // Trocar a viagem favorita
    function trocarFavorito(viagem, idUsuario){
        alert('Favorti')
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

    


