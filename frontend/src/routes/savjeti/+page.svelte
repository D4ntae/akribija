<script lang="ts">
    import Advice from "$lib/components/Advice.svelte";

    export let data: {
        data: [{
            title: string,
            id: Number
        }]
    };
</script>

{#each data.data as advice}
    <Advice title={advice.title} id={advice.id}/>
{/each}

