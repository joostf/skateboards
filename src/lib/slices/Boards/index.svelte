<script>
  /** @type {import("@prismicio/client").Content.BoardsSlice} */

  export let slice;

  console.dir(slice)
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
  <ul>
    {#each slice.items as item}
      <li>
        <a href="{item.skateboard.uid}">
          <span>{item.skateboard.data.title}</span>
          <img src="{item.skateboard.data.visual.url}" />
        </a>
      </li>

    {/each}
  </ul>

  <footer>
    <pre>
        {JSON.stringify(slice, null, 2)}
    </pre>
  </footer>
</section>

<style>
  ul  {
    list-style: none;
    padding: 0;
  }
  li a {
    display:flex;
    flex-flow: column;
    gap:1rem
  }
  img {
    max-width:25rem;
  }
</style>