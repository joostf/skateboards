<script>
  import { scale, fly } from 'svelte/transition'
  import { backOut } from 'svelte/easing'
  import { onMount } from 'svelte';

  let animateSliceData = false
  let animateBoards = false

	onMount(() => {
		animateBoards = true
    animateSliceData = false
	})
  
  export let slice
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  <ul>
    {#each slice.items as item, i}
      {#if animateBoards}
      <li in:scale={{start:0.2, delay:300 * i}} >
        <a href="skateboards/{item.skateboard.uid}">
          <span>{item.skateboard.data.title}</span>
          <img src="{item.skateboard.data.visual.url}" alt="{item.skateboard.data.title}" width="240" height="320"/>
        </a>
      </li>
      {/if}
    {/each}
  </ul>
  
  <footer>
    <form>
      <input type="checkbox" bind:checked={animateSliceData} id="data">
      <label for="data">toggle slice data</label>
    </form>

    {#if animateSliceData}
    <div in:fly={{y: 100, easing: backOut}} out:fly={{x: -200, easing: backOut}}>
      <h2>Slice data</h2>
    
      <pre>
          {JSON.stringify(slice, null, 2)}
      </pre>
    </div>
    {/if}
     
  </footer>
  
</section>


<style>
  ul  {
    list-style: none;
    padding: 0;
    display:flex;
    flex-wrap:wrap;
    gap:1em;
  }
  li a {
    display:flex;
    flex-flow: column;
    gap:1rem
  }
  img {
    max-width:100%;
  }
  footer div {
    color:var(--highlight);
    overflow-x:scroll;
    max-height:20rem;
    margin-top: 2rem;
    margin-right: 10rem;
  }
  footer form {
    display:flex;
    align-items:center;
    gap:.5rem;
  }
</style>