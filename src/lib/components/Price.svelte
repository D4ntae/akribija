<script lang="ts">
    export let price: number;
    export let title: string;
    export let mode: string;
</script>

<div class="container">
    <h2 class="title">{title}</h2>
    {#if mode == "card"}
        <p class="text">{price.toFixed(2)} € / {(price * 7.53).toFixed(2)} kn po kartici</p>
    {:else if mode == "free"}
        <p class="text">Besplatno, na zahtjev</p>
    {:else if mode == "single"}
        <p class="text">{price.toFixed(2)} € / {(price * 7.53).toFixed(2)} kn</p>
    {/if}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
    }
    .title {
        color: var(--bg_dark);
        font-family: Geist;
    }
    .text {
        margin: 0px;
        color: var(--text_dark);
        font-family: Geist;
    }
</style>
