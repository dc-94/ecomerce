class cardC extends HTMLElement {
    constructor() {
        super();
        this.prodnum;
        this.titulo;
        this.desc;
        this.formato;
        this.mxcj;
        this.precioc;
        this.preciom;
        this.src1;
        this.src2;

    }

    static get observedAttributes() {
        return ['titulo',"prodnum", "mxcj", "desc","precioc", "preciom","formato", "src1", "src2"];
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
            case "precioc":
                this.precioc = newValue;
                break;
            case "preciom":
                this.preciom = newValue;
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
      <div class="pCard">
        <div class="pCard_img">
            <div id="${this.prodnum}" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#${this.prodnum}" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#${this.prodnum}" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./img/productos/${this.src1}" class="" alt="${this.titulo}">
              </div>
              <div class="carousel-item">
                <img src="./img/productos/${this.src2}" class="d-block w-100" alt="${this.titulo}">
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
            <p class="presentacion">Presentacion:</p>
            <p>${this.desc}</p>
            <p><strong>${this.mxcj}m2</strong> por ${this.formato}</p>
            <p><strong>${this.preciom}</strong> x m2</p>
            <h2><span>${this.precioc}</span> x ${this.formato}</h2>
        </div>
      </div>
      `;
    }
}

window.customElements.define("tarjeta-comp", cardC);