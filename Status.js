"use strict";

export default class Status {
  #comercial;
  static NAVEGANDO = new Status('Navegando');
  static INCLUINDO = new Status('Incluindo');  
  static ALTERANDO = new Status('Alterando');  
  static EXCLUINDO = new Status('Excluindo');  
  
  constructor(comercial) {
    this.#comercial = comercial;
  }  
}