<script lang="ts">
    export let title:string;
    export let id: Number;

    if (title.length > 20) {
        title = title.slice(0, 17) + "..."
    }
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

    @media screen and (max-width: 768px) {
        .break {
            border: 1px dashed grey;
            width: 80%;
        }

        .container {
            width: 100vw;
            align-items: center;
        }
    }

</style>
