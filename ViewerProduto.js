import Status from "/Status.js";
import produto from "/Produto.js";
import ViewerError from "/ViewerError.js";

//------------------------------------------------------------------------//

export default class ViewerProduto {

  #ctrl;
  
  constructor(ctrl) {
    this.#ctrl = ctrl;
    this.divNavegar  = this.obterElemento('divNavegar'); 
    this.divComandos = this.obterElemento('divComando'); 
    this.divAviso    = this.obterElemento('divAviso'); 
    this.divDialogo  = this.obterElemento('divDialogo');

    this.btPrimeiro  = this.obterElemento('btPrimeiro');
    this.btAnterior  = this.obterElemento('btAnterior');
    this.btProximo   = this.obterElemento('btProximo');
    this.btUltimo    = this.obterElemento('btUltimo');

    this.btIncluir   = this.obterElemento('btIncluir');
    this.btExcluir   = this.obterElemento('btExcluir');
    this.btAlterar   = this.obterElemento('btAlterar');
    this.btSair      = this.obterElemento('btSair');

    this.btOk        = this.obterElemento('btOk');
    this.btCancelar  = this.obterElemento('btCancelar');

    this.comercial   = this.obterElemento('comercial');
    this.marca       = this.obterElemento('marca');
    this.codigo = this.obterElemento('codigo');
    this.quantidade  = this.obterElemento('quantidade');
    this.seletor     = this.obterElemento('seletor');
      
    this.btPrimeiro.onclick = fnBtPrimeiro; 
    this.btProximo.onclick  = fnBtProximo; 
    this.btAnterior.onclick = fnBtAnterior; 
    this.btUltimo.onclick   = fnBtUltimo; 

    this.btIncluir.onclick  = fnBtIncluir; 
    this.btAlterar.onclick  = fnBtAlterar; 
    this.btExcluir.onclick  = fnBtExcluir;  
    this.btSair.onclick     = fnBtSair; 

    this.btOk.onclick       = fnBtOk; 
    this.btCancelar.onclick = fnBtCancelar; 
  }

//------------------------------------------------------------------------//

  obterElemento(idElemento) {
    let elemento = document.getElementById(idElemento);
    if(elemento == null) 
      throw new ViewerError("Não encontrei um elemento com id '" + idElemento + "'");
    // Adicionando o atributo 'viewer' no elemento do Viewer. Isso permitirá
    // que o elemento guarde a referência para o objeto Viewer que o contém.
    elemento.viewer = this;
    return elemento;
  }

//------------------------------------------------------------------------//
  
  getCtrl() { 
    return this.#ctrl;
  }

//------------------------------------------------------------------------//
  
  apresentar(pos, qtde, produto) {    
    
    this.configurarNavegacao( pos <= 1 , pos == qtde );   

    if(produto == null) {
      this.comercial.value    = "";
      this.marca.value   = "";
      this.codigo.value  = "";
      this.quantidade.value   = "";
      this.seletor.value      = "";
      this.divAviso.innerHTML = " Produtos: 0";
    } else {
      this.comercial.value    = produto.getcomercial();
      this.marca.value   = produto.getmarca();
      this.codigo.value  = produto.getcodigo();
      this.quantidade.value   = produto.getquantidade();
      this.seletor.value      = produto.getseletor();
      this.divAviso.innerHTML = "Posição: " + pos + " | Produtos: " + qtde;
    }
  }

//------------------------------------------------------------------------//

  configurarNavegacao(flagInicio, flagFim) {
    this.btPrimeiro.disabled = flagInicio;
    this.btUltimo.disabled   = flagFim;
    this.btProximo.disabled  = flagFim;
    this.btAnterior.disabled = flagInicio;
  }
  
//------------------------------------------------------------------------//
  
  statusEdicao(operacao) { 
    this.divNavegar.hidden = true;
    this.divComandos.hidden = true;
    this.divDialogo.hidden = false; 
    
    if(operacao != Status.EXCLUINDO) {
      this.marca.disabled = false;
      this.codigo.disabled = false;
      this.quantidade.disabled = false;
      this.seletor.disabled = false;
      this.divAviso.innerHTML = "";      
    } else {
      this.divAviso.innerHTML = "Deseja excluir este registro?";      
    }
    if(operacao == Status.INCLUINDO) {
      this.comercial.disabled = false;
      this.comercial.value = "";
      this.marca.value = "";
      this.codigo.value = "";
      this.quantidade.value = "";
      this.seletor.value = "";
    }
  }

//------------------------------------------------------------------------//
  
  statusApresentacao() { 
    this.marca.disabled = true;
    this.divNavegar.hidden = false;
    this.divComandos.hidden = false;
    this.divDialogo.hidden = true; 
    this.comercial.disabled = true;
    this.marca.disabled = true;
    this.codigo.disabled = true;
    this.quantidade.disabled = true;
    this.seletor.disabled = true;
  }

}

//------------------------------------------------------------------------//
// CALLBACKs para os Botões
//------------------------------------------------------------------------//

function fnBtPrimeiro() {
  // Aqui, o 'this' é o objeto Button. Eu adicionei o atributo 'viewer'
  // no botão para poder executar a instrução abaixo.
  this.viewer.getCtrl().apresentarPrimeiro();
  
}

//------------------------------------------------------------------------//

function fnBtProximo() {
  // Aqui, o 'this' é o objeto Button. Eu adicionei o atributo 'viewer'
  // no botão para poder executar a instrução abaixo.
  this.viewer.getCtrl().apresentarProximo();
  
}

//------------------------------------------------------------------------//

function fnBtAnterior() {
  // Aqui, o 'this' é o objeto Button. Eu adicionei o atributo 'viewer'
  // no botão para poder executar a instrução abaixo.
  this.viewer.getCtrl().apresentarAnterior();
  
}

//------------------------------------------------------------------------//

function fnBtUltimo() {
  // Aqui, o 'this' é o objeto Button. Eu adicionei o atributo 'viewer'
  // no botão para poder executar a instrução abaixo.
  this.viewer.getCtrl().apresentarUltimo();
  
}
//------------------------------------------------------------------------//

function fnBtIncluir() {
  // Aqui, o 'this' é o objeto Button. Eu adicionei o atributo 'viewer'
  // no botão para poder executar a instrução abaixo.
  this.viewer.getCtrl().iniciarIncluir();
}

//------------------------------------------------------------------------//

function fnBtAlterar() {
  // Aqui, o 'this' é o objeto Button. Eu adicionei o atributo 'viewer'
  // no botão para poder executar a instrução abaixo.
  this.viewer.getCtrl().iniciarAlterar();
  
}

//------------------------------------------------------------------------//

function fnBtExcluir() {
  // Aqui, o 'this' é o objeto Button. Eu adicionei o atributo 'viewer'
  // no botão para poder executar a instrução abaixo.
  this.viewer.getCtrl().iniciarExcluir();
}

//------------------------------------------------------------------------//

function fnBtSair() {
  window.close();
}

//------------------------------------------------------------------------//

function fnBtOk() {
  const comercial = this.viewer.comercial.value;
  const marca = this.viewer.marca.value;
  const codigo = this.viewer.codigo.value;
  const quantidade = this.viewer.quantidade.value;
  const seletor = this.viewer.seletor.value;
    
  // Como defini que o método "efetivar" é um dos métodos incluir, excluir ou alterar
  // não estou precisando colocar os ninhos de IF abaixo.
  this.viewer.getCtrl().efetivar(comercial, marca, codigo, quantidade, seletor); 


}

//------------------------------------------------------------------------//

function fnBtCancelar() {
  this.viewer.getCtrl().cancelar(); 
}

//------------------------------------------------------------------------//





