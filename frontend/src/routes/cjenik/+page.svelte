<script> import Price from "$lib/components/Price.svelte";
</script>
<div class="container">
    <h1>Cjenik usluga lekture</h1>
    <p style="margin-top: 0px;">1 kartica - 1500 znakova bez razmaka</p>
    <p style="margin-top: 0px;">*Studenti plaćaju avansno tj. plaćaju unaprijed</p>
    <div class="break"></div>
    <Price title="Lektura za studente" price={1.35} mode="card"/> 
    <Price title="Lektura doktorskih disertacija" price={3.50} mode="card"/> 
    <Price title="Lektura rukopisa i knjiga" price={2.70} mode="card"/> 
    <Price title="E-potvrda o lekturi" price={1.35} mode="free"/> 
    <Price title="Papirnata potvrda o lekturi" price={4} mode="single"/> 
    <div class="break"></div>
    <h2>Popust</h2>
    <p style="margin-top: 0px;">Na količinu (iznad 100 kartica)</p>
    <p style="margin-top: 0px;">Nakon uvida u tekst</p>
</div>

<style>
    .container {
        background-color: var(--bg_main);
        height: 92vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
    }

    h1 {
        font-family: Geist;
        font-size: 2.5rem;
        color: var(--text_dark);
    }

    h2 {
        font-family: Geist;
        color: var(--text_dark);
    }

    .break {
        border: 1px solid lightgray;
        width: 800px;
    }

    @media screen and (max-width: 768px) {
        h1 {
            text-align: center;
        }

        .break {
            border: 1px solid lightgray;
            width: 80%;
        }
    }
</style>
