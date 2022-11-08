<script>
  import gameCards from "../game-cards";
  import Card from "$/Card.svelte";
</script>

<div>
  {#each gameCards as category}
    {#each category.questions as card, index}
      <Card {card} category={category.title} points={(index+1)*100}/>
    {/each}
  {/each}
</div>


<div class="credits">
  <div>
    Save image
    <a href="#save">save image</a>
  </div>
</div>

<style>
  .credits {
    margin-top: 40px;
    text-align: center;
    color: #343536;
  }
</style>
