<script lang="ts">
    import { Hr, Html, Text } from "svelte-email"
    export let name: string;
    export let lastname: string;
    export let subject: string;
    export let content: string;
</script>

<Html lang="hr">
    <Text>Ime: {name}</Text>
    <Text>Prezime: {lastname}</Text>
    <Hr />
    <Text>{content}</Text>
</Html>
