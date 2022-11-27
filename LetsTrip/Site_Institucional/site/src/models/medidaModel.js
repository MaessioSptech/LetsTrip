var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT v.nome_viagem, count(u.fkViagem) AS qtd_viagem
        FROM usuario u JOIN viagem v ON u.fkViagem = v.id 
            WHERE u.fkViagem IS NOT NULL 
                GROUP BY u.fkViagem ORDER BY v.nome_viagem;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT v.nome_viagem, count(u.fkViagem) AS qtd_viagem
        FROM usuario u JOIN viagem v ON u.fkViagem = v.id 
            WHERE u.fkViagem IS NOT NULL 
                GROUP BY u.fkViagem ORDER BY v.nome_viagem;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT v.nome_viagem, count(u.fkViagem) AS qtd_viagem
        FROM usuario u JOIN viagem v ON u.fkViagem = v.id 
            WHERE u.fkViagem IS NOT NULL 
                GROUP BY u.fkViagem ORDER BY v.nome_viagem;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT v.nome_viagem, count(u.fkViagem) AS qtd_viagem
        FROM usuario u JOIN viagem v ON u.fkViagem = v.id 
            WHERE u.fkViagem IS NOT NULL 
                GROUP BY u.fkViagem ORDER BY v.nome_viagem;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
