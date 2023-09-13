<script>
    import { fly } from 'svelte/transition'
    import { backOut } from 'svelte/easing'
    import { onMount } from 'svelte';

    let animate = false

    const myTransition = () => {
        return {
        css: (t) => {
            return `scale: ${t}`
        },
        easing: backOut,
        duration: 250,
        delay:500
        };
    };

	onMount(() => {
		animate = true
	})

    export let data    
</script>

{#if animate}
<h1 transition:myTransition>{ data.title }</h1>
{/if}

{#if animate}
<div>
    <section in:fly={{y:100, delay:300, easing:backOut}}>
        <h2>History of skateboards</h2>
        <p>The first skateboards started with wooden boxes, or boards, with roller skate wheels attached to the bottom. Crate scooters preceded skateboards, having a wooden crate attached to the nose (front of the board), which formed rudimentary handlebars. The boxes turned into planks, similar to the skateboard decks of today.</p>
        <a href="https://en.wikipedia.org/wiki/Skateboarding">Bron: Wikipedia</a>
    </section>
    <section in:fly={{y:100, delay:500}}>
        <h2>How to assemble skateboards</h2>
        <ol>
            <li>Attach grip tape to the top of your deck. Press the tape so that it lays flat along the entire deck, and then trim off excess tape using the razor.</li>
            <li>Punch holes in your tape. Turn your board over and use the bolts from the hardware kit to punch holes in the tape.</li>
            <li>Secure the trucks. Position your trucks on the board with their kingpins facing toward each other, and secure them in place with the bolts, using the skate tool to tighten the nuts.</li>
            <li> Install your bearings. Each wheel needs two bearings to spin properly. Press a bearing into one side of your wheel until you feel it pop into place. Insert a bearing spacer into the wheel from the side that does not have a bearing, and then press a bearing onto the open side. Repeat for all four wheels.</li>
            <li>Mount your wheels. Using the hardware that comes with your trucks, place a washer on an axle, then a wheel, then a second washer. Secure in place using a nut. Repeat for all four wheels.</li>
        </ol>

        <a href="https://www.redbull.com/us-en/how-to-build-a-skateboard">Bron: Red Bull</a>
    </section>
    <section in:fly={{y:200, delay:700}}>
        <h2>Types of skateboards</h2>
        <p>In the beginning, it was just a flat wood deck and four metal wheels taken from old roller skates. Today, there are many different types of skateboards.</p>
        <p>The evolution of skateboarding led to the development and refinement of different styles of skateboard decks.</p>
        <p>Each one was designed to accommodate the demands of different riding conditions - performing tricks, cruising down the street, dropping in on a bowl or half-pipe, or speeding down a hill.</p>
        <p>For example, the evolution of concave bends and kick tails increased the strength of the deck and made it a more versatile vehicle.</p>

        <a href="https://www.surfertoday.com/skateboarding/the-different-types-of-skateboards">Bron: Surf Today</a>
    </section>
</div>
{/if}

<style>
    div {
        --highlight:#877cbf ;
        display:flex;
        flex-direction:column;
        gap:1rem
    }
    section {
        background: var(--highlight);
        color:var(--secondary);
        padding:1rem;
        margin-bottom: 2rem;
        max-width:80ch
    }
    a {
        display:block;
        margin-top: 1rem
    }
    img {
        position:absolute;
        right:0;
        top:0
    }
</style>