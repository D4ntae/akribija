<script lang="ts">
    type Savjet = {
        id: Number,
        title: string;
        desc: string;
        img: string;
    }

    export let data: Savjet;
</script>


<div class="main">
    <div>
        <h1>Jezični savjeti</h1> 
        <p class="by-text">by Akribija</p>
    </div>
    <div class="container">
        <h3>{data.title}</h3>
        <p class="desc">{data.desc}</p>
        <img src={data.img} alt="Advice">
    </div>
</div>


<style>
    h1 {
        font-size: 3.5rem;
        font-family: Inika;
        font-weight: 200;
        padding: 0px;
        margin: 0px;
    }

    h3 {
        font-size: 2.2rem;
        font-family: Inika;
        
    }

    .by-text {
        padding: 0px;
        margin: 0px;
        text-align: right;
    }

    .desc {
        font-family: Inika;
        font-size: 1.2rem;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1250px;
    }
    
    img {
        width: 1000px;
        height: auto
    }

    
</style>
