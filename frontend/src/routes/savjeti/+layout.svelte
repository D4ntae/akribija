<div class="main">
    <div>
        <h1>Jezični savjeti</h1> 
        <p class="by-text">by Akribija</p>
    </div>
    <div class="container">
        <slot />
    </div>
</div>


<style>
    .container {
        height: 92vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
 
    h1 {
        font-size: 3.5rem;
        font-family: Inika;
        font-weight: 200;
        padding: 0px;
        margin: 0px;
    }

    .by-text {
        padding: 0px;
        margin: 0px;
        text-align: right;
    }

    .main {
        background-color: var(--bg_main);
        height: 92vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        overflow-y: scroll;
    }
</style>
