<script>
    import { SliceZone } from '@prismicio/svelte'
    import { components } from '$lib/slices'
    
    export let data
</script>

<h1>{ data.title }</h1>


<div>
    <SliceZone slices={data.slices} {components} />
</div>





