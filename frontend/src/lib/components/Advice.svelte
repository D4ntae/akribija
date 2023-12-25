<script lang="ts">
    export let title:string;
    export let id: Number;
</script>

<a href="/savjeti/{id}">
    <div class="container">
        <h3 class="text">{title}</h3>
        <div class="break"></div>
    </div>
</a>

<style>
    .break {
        border: 1px dashed grey;
        width: 800px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .container {
        display: flex;
        flex-direction: column;
    }

    .text {
        text-align: center;
        font-size: 1.8rem;
        padding: 0px;
        margin: 18px;
    }
</style>
