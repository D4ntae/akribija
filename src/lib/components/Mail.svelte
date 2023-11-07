<script lang="ts">
    import { Html, Text } from "svelte-email"
    export let name: string;
    export let lastname: string;
    export let subject: string;
    export let content: string;
</script>

<Html lang="hr">
    <Text>
        {name} {lastname} {subject} {content}
    </Text>
</Html>
