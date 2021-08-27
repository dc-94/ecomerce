class cardC extends HTMLElement {
    constructor() {
        super();
        this.prodnum;
        this.titulo;
        this.desc;
        this.mxcj;
        this.precioc;
        this.preciom;
        this.src;

    }

    static get observedAttributes() {
        return ['titulo',"prodnum", "mxcj", "desc","precioc", "preciom", "src"];
    }

    attributeChangedCallback(tituloAttr, oldValue, newValue) {
        switch (tituloAttr) {
            case "prodnum":
                this.prodnum = newValue;
                break;
            case "titulo":
                this.titulo = newValue;
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
            case "src":
                this.src = newValue;
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
              <button type="button" data-bs-target="#${this.prodnum}" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="${this.src}" class="" alt="...">
              </div>
              <div class="carousel-item">
                <img src="${this.src}" class="d-block w-100" alt="...">
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
            <p>${this.desc}</p>
            <p>${this.mxcj}m2 por caja</p>
            <p>${this.precioc} por caja</p>
            <h2>${this.preciom} x m2</h2>
        </div>
      </div>
      `;
    }
}

window.customElements.define("tarjeta-comp", cardC);