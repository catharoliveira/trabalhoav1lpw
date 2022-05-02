import ModelError from "/ModelError.js";

export default class Produto {
    
  //
  // DECLARAÇÃO DE ATRIBUTOS PRIVADOS: Em JavaScript, se o nome do atributo tem # no início, isso 
  // indica que ele é privado. Também deve-se colocar a presença dele destacada, como está abaixo.
  //
  #comercial;
  #marca;
  #codigo;
  #quantidade;
  #seletor;

  //-----------------------------------------------------------------------------------------//

  constructor(comercial, marca, codigo, quantidade, seletor) {
    this.setcomercial(comercial);
    this.setmarca(marca);
    this.setcodigo(codigo);
    this.setquantidade(quantidade);
    this.setseletor(seletor);      
  }
  
  //-----------------------------------------------------------------------------------------//

  getcomercial() {
    return this.#comercial;
  }
  
  //-----------------------------------------------------------------------------------------//

  setcomercial(comercial) {
    if(!Produto.validarcomercial(comercial))
      throw new ModelError("Produto Inválido: " + comercial);
    this.#comercial = comercial;
  }
  
  //-----------------------------------------------------------------------------------------//

  getmarca() {
    return this.#marca;
  }
  
  //-----------------------------------------------------------------------------------------//

  setmarca(marca) {
    if(!Produto.validarmarca(marca))
      throw new ModelError("Marca do produto inválida: " + marca);
    this.#marca = marca;
  }
  
  //-----------------------------------------------------------------------------------------//

  getcodigo() {
    return this.#codigo;
  }
  
  //-----------------------------------------------------------------------------------------//

  setcodigo(codigo) {
    if(!Produto.validarcodigo(codigo))
      throw new ModelError("Código Inválido: " + codigo);
    this.#codigo = codigo;
  }
  
  //-----------------------------------------------------------------------------------------//

  getquantidade() {
    return this.#quantidade;
  }
  
  //-----------------------------------------------------------------------------------------//

  setquantidade(quantidade) {
    if(!Produto.validarquantidade(quantidade))
      throw new ModelError("Quantidade inválido: " + quantidade);
    this.#quantidade = quantidade;
  }
  
  //-----------------------------------------------------------------------------------------//

  getseletor() {
    return this.#seletor;
  }
  
  //-----------------------------------------------------------------------------------------//

  setseletor(seletor) {
    if(!Produto.validarseletor(seletor))
      throw new ModelError("seletor inválido: " + seletor);
    this.#seletor = seletor;
  }
  
  //-----------------------------------------------------------------------------------------//

  toJSON() {
    return '{' +
               '"comercial" : "'   + this.#comercial   + '",' +
               '"marca" : "'       + this.#marca  + '",' +
               '"codigo" : "' + this.#codigo + '",' +
               '"quantidade" : "'  + this.#quantidade  + '",' +
               '"seletor" : "'     + this.#seletor     + '" ' + 
           '}';  
  }
  
  //-----------------------------------------------------------------------------------------//

  static assign(obj) {
    return new Produto(obj.comercial, obj.marca, obj.codigo, obj.quantidade, obj.seletor);
  }

  //-----------------------------------------------------------------------------------------//
  
  static deassign(obj) { 
    return JSON.parse(obj.toJSON());
  }

  //-----------------------------------------------------------------------------------------//

  static validarcomercial(comercial) {
    if(comercial == null || comercial == "" || comercial == undefined)
      return false;
    
    const padraoNome = /[A-Za-z]{1,40}/;
    if (!padraoNome.test(comercial)) 
      return false;
    
    return true;
  }

  //-----------------------------------------------------------------------------------------//

  static validarmarca(marca) {
    if(marca == null || marca == "" || marca == undefined)
      return false;
    
    const padraomarca = /[A-Za-z]{1,40}/;
    if (!padraomarca.test(marca)) 
      return false;
    
    return true;

  }

  //-----------------------------------------------------------------------------------------//

  static validarcodigo(codigo) {
    if(codigo == null || codigo == "" || codigo == undefined)
      return false;
    
    const padraocodigo = /[A-Za-z]{1,40}/;
    if (!padraocodigo.test(codigo)) 
      return false;
    
    return true;
  }

  //-----------------------------------------------------------------------------------------//

  static validarquantidade(quantidade) {
    if(quantidade == null || quantidade == "" || quantidade == undefined)
      return false;
    
    return true
  }

  //-----------------------------------------------------------------------------------------//

  static validarseletor(seletor) {
    if(seletor== null || seletor == "" || seletor == undefined)
      return false;
    
    return true
  }

  //-----------------------------------------------------------------------------------------//
   
  mostrar() {
    let texto = "comercial: " + this.#comercial + "\n";
    texto += "marca: "   + this.#marca + "\n";
      
    alert(texto);
    alert(JSON.stringify(this));
  }
}