class cardS extends HTMLElement {
    constructor() {
        super();
        this.prodnum;
        this.titulo;
        this.desc;
        this.preciod;
        this.categoria;
        this.off;
        this.formato;
        this.mxcj;
        this.marca;
        this.material;
        this.uso;
        this.src1;
        this.src2;
    }

    static get observedAttributes() {
        return ['titulo',"prodnum", "mxcj", "desc", "categoria", "preciod", "off", "marca", "material", "uso", "formato", "src1", "src2"];
    }

    attributeChangedCallback(tituloAttr, oldValue, newValue) {
        switch (tituloAttr) {
            case "prodnum":
                this.prodnum = newValue;
                break;
            case "titulo":
                this.titulo = newValue;
                break;
            case "formato":
                this.formato = newValue;
                break;
            case "desc":
                this.desc = newValue;
                break;
            case "categoria":
                this.categoria = newValue;
                break;
            case "preciod":
                this.preciod = newValue;
                break;
            case "off":
                this.off = newValue;
                break;
            case "mxcj":
                this.mxcj = newValue;
                break;
            case "marca":
                this.marca = newValue;
                break;
            case "material":
                this.material = newValue;
                break;
            case "uso":
                this.uso = newValue;
                break;
            case "src1":
                this.src1 = newValue;
                break;
            case "src2":
                this.src2 = newValue;
                break;
        }
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="pCard ">
        <div class="pCard_img">
          <div id="${this.prodnum}" class="carousel slide" data-bs-ride="carousel">
        <div class="off"><p>SALE!</p></div>
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#${this.prodnum}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#${this.prodnum}" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${this.src1}" class="-block w-100" alt="${this.titulo}">
              </div>
              <div class="carousel-item">
                <img src="${this.src2}" class="d-block w-100" alt="${this.titulo}">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#${this.prodnum}" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#${this.prodnum} " data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="pCard_body">
          <div class="pCard_body_txt">
            <h3>${this.titulo}</h3>
            <p class="ps-1">${this.categoria}</p>
            <p class="precio ps-3">${this.preciod}</p>
          </div>
          <div class="pCard_body_modal">
          
            <!-- Button trigger modal -->
          
            <button type="button" class="cta_off " data-bs-toggle="modal" data-bs-target="#${this.prodnum}1">
              ver producto
            </button>

            <!-- Modal -->
            
            <div class="modal  fade" id="${this.prodnum}1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="pCard_body_modal_content modal-content">
                  <button type="button" class="x_modal" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="pCard_body_modal_content_body modal-body">
                  <div class="pCard_body_modal_content_body_carousel ">
                    <div id="${this.prodnum}2" class="carousel carousel-fade slide" data-bs-ride="carousel">
                      <div class="carousel-indicators">
                        <button type="button" data-bs-target="#${this.prodnum}2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#${this.prodnum}2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img src="${this.src1}" class="d-block w-100" alt="${this.titulo}">
                        </div>
                        <div class="carousel-item">
                          <img src="${this.src2}" class="d-block w-100" alt="${this.titulo}">
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#${this.prodnum}2" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#${this.prodnum}2 " data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                      </div>
                  </div>

                  <div class="pCard_body_modal_content_body_info">
                    <div class="pCard_body_modal_content_body_info_title">
                      <p> ${this.categoria}</p>
                      <h5 class="modal-title" id="${this.prodnum}1Label">${this.titulo}</h5>
                    </div>
                    <div class="pCard_body_modal_content_body_info_txt">
                      <div class="off"><p>SALE!</p></div>
                      <p class="precio">${this.preciod} </p>
                      <hr class="dropdown-divider">
                      <p class="presentacion">Detalles:</p>
                      <p>${this.desc}</p>
                      <hr class="dropdown-divider">
                      <p><strong>Marca:</strong> ${this.marca}</p>
                      <hr class="dropdown-divider">
                      <p>SKU: ${this.prodnum}</p>
                    </div>
                    <div class="pCard_body_modal_content_body_info_btns">
                      <button type="button" class="btn link" data-bs-dismiss="modal">Cerrar</button>
                      <button type="button" class="wsp ">
                        <a href="https://api.whatsapp.com/send?phone=543413594100&text=Hola%21%20buenos%20m%C3%A1s%20rmaci%C3%B3n%20sobre%20${this.titulo}-${this.prodnum}%202." target="_blank">Consultar</a>
                      </button>
                    </div>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>        `;
    }
}

window.customElements.define("tarjeta-sale", cardS);