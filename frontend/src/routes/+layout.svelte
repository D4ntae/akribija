<script lang="ts">
    import "../styles.css"

    let isOpen = false;

    function clickHandler(event: Event | undefined) {
        event?.preventDefault()

        isOpen = !isOpen
    }
</script>

<nav class={!isOpen ? "navbar" : "navbar-open"} id="navbar">
    <div class={!isOpen ? "left" : "left-open"}>
        <p class="akribija">Akribija</p>
        <div class="hamburger" on:click={() => clickHandler(event)}>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
    <div class={!isOpen ? "right" : "right-open"}>
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

    .hamburger {
        display: none;
    }

    @media screen and (max-width: 768px) {
        .navbar {
            background-color: var(--bg_dark);
            width: 100vw;
            height: 7.5vh;
            display: flex;
            flex-direction: column;
        }

        .navbar-open {
            background-color: var(--bg_dark);
            width: 100vw;
            height: 15vh;
            display: flex;
            flex-direction: column;
        }

        .left {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-left: 0px;
            width: 100%;
            height: 100%;
        }

        .left-open {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding-left: 0px;
            width: 100%;
            height: 50%;
        }

        .akribija {
            padding-left: 15px;
        }

        .right-open {
            display: flex;
            flex-direction: columns;
            align-items: center;
            justify-content: space-evenly;
            height: 50%;
            width: 100%;
        }



        .right {
            display: none;
            flex-direction: columns;
            align-items: center;
            justify-content: space-evenly;
            height: 50%;
            width: 100%;
        }

        .link {
            color: var(--text);
            font-size: 1.1rem;
            font-family: Inika;
            text-decoration: none;
        }

        .hamburger {
            width: 30px;
            height: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-right: 15px;
        }

        .line {
            width: 100%;
            height: 20%;
            background-color: white;
        } 
    }
</style>
