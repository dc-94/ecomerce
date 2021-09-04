class cardC extends HTMLElement {
    constructor() {
        super();
        this.prodnum;
        this.titulo;
        this.desc;
        this.formato;
        this.mxcj;
        this.marca;
        this.material;
        this.src1;
        this.src2;

    }

    static get observedAttributes() {
        return ['titulo',"prodnum", "mxcj", "desc","marca", "material","formato", "src1", "src2"];
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
                case "mxcj":
                    this.mxcj = newValue;
                    break;
            case "marca":
                this.marca = newValue;
                break;
            case "material":
                this.material = newValue;
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
        <div class="pCard prod-card">
        <div class="pCard_img">
            <div id="${this.prodnum}" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#${this.prodnum}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#${this.prodnum}" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="../productos/img/${this.src1}" class="-block w-100" alt="${this.titulo}">
                </div>
                <div class="carousel-item">
                  <img src="../productos/img/${this.src2}" class="d-block w-100" alt="${this.titulo}">
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
            <h3>${this.titulo}</h3>
            <p><strong>Medidas:</strong></p>
            <p>${this.desc}</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#${this.prodnum}1">
              ver producto
            </button>
  <!-- Modal -->
            <div class="modal fade" id="${this.prodnum}1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="${this.prodnum}1Label">${this.titulo}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="d-flex">
                      <div id="${this.prodnum}" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                          <button type="button" data-bs-target="#${this.prodnum}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#${this.prodnum}" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <img src="../productos/img/${this.src1}" class="-block w-100" alt="${this.titulo}">
                          </div>
                          <div class="carousel-item">
                            <img src="../productos/img/${this.src2}" class="d-block w-100" alt="${this.titulo}">
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
                    <div>
                      <p class="presentacion">Detalles:</p>
                      <hr class="dropdown-divider">
                      <p><strong>Medidas:</strong></p>
                      <p>${this.desc}</p>
                      <p><strong>Marca:</strong> ${this.marca}</p>
                      <p><strong>Material:</strong> ${this.material}</p>
                      <p><strong>${this.mxcj}m2</strong> por ${this.formato}</p>
                      <hr class="dropdown-divider">
                      <p>SKU: ${this.prodnum}</p>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn link" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-success">
                      <a href="https://api.whatsapp.com/send?phone=543413216351&text=Buenos%20días%20queria%20saber%20mas%20informacion%20sobre%20${this.titulo}%20-%20${this.prodnum}%20." target="_blank"><i class="ri-whatsapp-line"></i>Consultar</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      `;
    }
}

window.customElements.define("tarjeta-comp", cardC);