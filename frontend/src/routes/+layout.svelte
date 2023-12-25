<script>
    import "../styles.css"
</script>

<nav class="navbar">
    <div class="left">
        <p class="akribija">Akribija</p>
    </div>
    <div class="right">
        <a href="/" class="link">Naslovna</a>
        <a href="/savjeti" class="link">Savjeti</a>
        <a href="/cjenik" class="link">Cjenik</a>
        <a href="/kontakt" class="link">Kontakt</a>
    </div>
</nav>

<slot />

<style>
    .navbar {
        background-color: var(--bg_dark);
        width: 100vw;
        height: 7vh;
        display: flex;
        flex-direction: row;
    }

    .left {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: 15px;
        width: 70%;
    }

    .right {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 30%;
    }

    .link {
        color: var(--text);
        font-size: 1.1rem;
        font-family: Inika;
        text-decoration: none;
    }

    .akribija {
        font-family: IslandMoments;
        font-size: 2.5rem;
        color: var(--text);
    }
</style>
