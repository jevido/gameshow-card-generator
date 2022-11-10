<script>
  import CardBack from "./CardBack.svelte";
  import CardFront from "./CardFront.svelte";

  export let card;
  export let category;
  export let points;
  export let type;
</script>

<div class="flex flex-row">
  <div class="card">
    <div class="color-grid">
      <div class="black" />
      <div class="red1" />
      <div class="red2" />
      <div class="green" />
    </div>
    <CardFront {type} {card} />
  </div>

  <div class="card">
    <div class="color-grid">
      <div class="black" />
      <div class="red1" />
      <div class="red2" />
      <div class="green" />
    </div>
    <CardBack {card} {points} {category} />
  </div>
</div>

<style>
  .card {
    print-color-adjust: exact;
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
</style>
