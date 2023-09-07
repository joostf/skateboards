<nav>
    <ul>
        <li><a href="/" prefetch>Home</a></li>
        <li><a href="/skateboards" prefetch>Skateboards</a></li>
        <li><a href="/about" prefetch>About</a></li>
    </ul>
</nav>

<main>
    <slot />
</main>

<style>
    ul {
        list-style: none;
        padding:0;
        display: flex;
        gap:1em
    }
</style>