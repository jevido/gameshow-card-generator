<script>
  import gameCards from "../game-cards";
  import Card from "$/Card.svelte";

  console.debug(gameCards);
</script>

<div>
  {#each gameCards as category}
    {#each category.questions as card, index}
      <Card type={category.type} {card} category={category.title} points={(index + 1) * 100} />
    {/each}
  {/each}
</div>

<style>
  .credits {
    margin-top: 40px;
    text-align: center;
    color: #343536;
  }
</style>
