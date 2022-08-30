<div class="front-side our-logo">
  <div class="color-grid">
    <div class="black" />
    <div class="red1" />
    <div class="red2" />
    <div class="green" />
  </div>
  <div class="info-grid">
    <div class="name">
      <h2><i>S.S.</i></h2>
    </div>
    <h3 class="question name">De vraag zelf</h3>
    <div class="addr">
      <p>
        <strong>Antwoord:</strong>
        het antwoord op de vraag
      </p>
    </div>
  </div>
</div>
<div class="back-side our-logo">
  <div class="color-grid">
    <div class="black" />
    <div class="red1" />
    <div class="red2" />
    <div class="green" />
  </div>
  <div class="name-tag">
    <h1>
      <strong>Categorie naam</strong>
    </h1>
    <h3>500</h3>
  </div>
</div>
<div class="credits">
  <div>
    Save image
    <a href="#save">save image</a>
  </div>
</div>

<!-- background-image: url('logo.png'); -->
<style>
  .front-side,
  .back-side {
    width: 390px;
    height: 220px;
    display: grid;
    grid-template-columns: 2% 96% 2%;
    grid-template-rows: 4% 92% 4%;
    position: relative;
    margin: 20px auto;
    overflow: hidden;
    box-shadow: 2px 5px 15px 0px #17161694;
    background-color: #122529;
  }
  .color-grid {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(8, 50px);
    grid-gap: 8px;
    width: 150px;
    height: 400px;
    transform: rotate(-45deg);
  }
  .black {
    background-color: #343536;
    grid-column: 2 / span 2;
    grid-row: 1 / span 3;
  }
  .red1 {
    background-color: #e45e4f;
    grid-row: 2 / span 5;
  }
  .red2 {
    background-color: #e45e4f;
    grid-column: 2 / span 2;
    grid-row: 4/7;
  }
  .green {
    background-color: #007e67;
    grid-column: 2/4;
    grid-row: 7/9;
  }

  .info-grid {
    grid-column: 2/3;
    grid-row: 2/3;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(5, 255, 255, 0.313);
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.432);
    border-radius: 6px;
    font-size: 0.7rem; /*12px;*/
    display: grid;
    grid-template-columns: 15px repeat(3, 1fr) 15px;
    grid-template-rows: repeat(3, 1fr);
    line-height: 1px;
  }
  .info-grid .name {
    grid-column: 2 / span 2;
    grid-row: 1 / span 1;
    font-size: 1.2em;
    letter-spacing: 0.1rem;
    margin-top: 8px;
  }
  .info-grid .addr {
    grid-column: 2 / span 2;
    grid-row: 3;
  }

  .back-side .name-tag {
    grid-column: 1 / span 4;
    grid-row: 2 / span 1;
    align-self: center;
    z-index: 2;
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(5, 255, 255, 0.313);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.288);
    font-size: 0.6rem; /*12px;*/
    letter-spacing: 0.1rem;
    text-align: center;
  }
  .name-tag h1,
  h3 {
    margin: 2px;
    font-weight: unset;
  }
  .credits {
    margin-top: 40px;
    text-align: center;
    color: #343536;
  }

  .question {
    display: grid;
    grid-row: inherit !important;
    font-weight: bold;
  }
</style>
