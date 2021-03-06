var editoras = require('../models/editoras.js');

module.exports = {
    menueditoras,
    salvarLivro,
    editorasListar,
    editorasNovo
    // editorasSalvar
    
}

function menueditoras(req, res) {
    res.render('editoras/frm_menueditoras.ejs', { title: 'editoras' });
}

function salvarLivro(dados, callback) {
    var msql = 'INSERT INTO editoras SET ? ';
    
    client.query(msql, dados, callback);
}

function editorasListar(req, res) {
    editoras.editorasListar(function (err, result) {
        console.log("Listar editoras: ");
        if (err) {
            throw err;
        }
        res.render('editoras/frm_editorasListar.ejs',
        {
            title: 'Listar editoras',
            editoras: result
        });
    });
};

function editorasNovo(req, res) {
    var dados = [
        {
            edt_codigo: "",
            edt_dtcadastro: "",
            edt_nome: "",
            edt_cidade: "",
            edt_cep: "",
            edt_estado:"",
            edt_email:"",
            edt_telefone:""
        }
    ];
    
    Editoras.editorasListar(function (err, result) {
        if (err) {
            throw err;
        } else {
            res.render('editoras/frm_editorasEditar.ejs',
            {
                editoras: dados
            });
        }
    });
}

// function editorasSalvar(req, res) {
//   var dados = req.body;
//   console.log("Salvando Livro...");
//   console.log(req.body);
//   if (dados.liv_codigo == "") {
//     dados.liv_codigo = null;
//     console.log("Inserindo Livro...");
//     editoras.salvarLivro(dados, function (err, result) {
//       if (err) {
//         throw err;
//       }
//       res.redirect('/editoras/listar');
//     })
//   } else {
//     console.log("Alterando Livro...");
//     editoras.alterarLivro(dados, function (err, result) {
//       if (err) {
//         throw err;
//       }
//       res.redirect('/editoras/listar');
//     });
//   }

// }




