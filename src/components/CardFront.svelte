<script>
  export let card;
  export let type;
</script>

<div class="info-grid">
  <h4 class="h-3">
    <i class="absolute">S.S</i>
    <i class="absolute right-4">{type}</i>
  </h4>
  <h3 class="question name">{@html card.question}?</h3>
  <div class="addr">
    <p class="flex w-[22rem]">
      <strong>Antwoord:</strong>&nbsp;
      {card.answer}
    </p>
  </div>
</div>

<style>
  .info-grid {
    grid-column: 2/3;
    grid-row: 2/3;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(5, 255, 255, 0.313);
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.432);
    border-radius: 6px;
    font-size: medium; /*12px;*/
    display: grid;
    grid-template-columns: 15px repeat(3, 1fr) 15px;
    grid-template-rows: repeat(3, 1fr);
  }
  .info-grid .name {
    grid-column: 2 / span 3;
    grid-row: 1 / 3;
    font-size: large;
    letter-spacing: 0.1rem;
  }
  .info-grid .addr {
    grid-column: 2 / span 2;
    grid-row: 3;
  }
  .question {
    display: flex;
    grid-row: inherit !important;
    font-weight: bold;
  }
  h4 i {
    margin-left: 4px;
  }
</style>
