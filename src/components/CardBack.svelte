<script>
  export let category;
  export let points;
</script>

<div class="name-tag">
  <h1>
    <strong>{category}</strong>
  </h1>
  <h3>{points}</h3>
</div>

<style>
  .name-tag {
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
    text-align: center;
  }
  .name-tag h1,
  h3 {
    margin: 2px;
    font-weight: unset;
    font-size:large
  }
</style>
