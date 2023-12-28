<script lang="ts">
    type Savjet = {
        id: Number,
        title: string;
        desc: string;
        img: string;
    }

    export let data: Savjet;
</script>


<div class="container">
    <h3>{data.title}</h3>
    <p class="desc">{data.desc}</p>
    <img src={data.img} alt="Advice">
</div>


<style>
    h3 {
        font-size: 2.2rem;
        font-family: Inika;
    }

    .desc {
        font-family: Inika;
        font-size: 1.2rem;
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

    @media screen and (max-width: 768px) {
        .container {
            width: 100vw;
        }


        img {
            width: 90vw;
            height: auto
        }
    }
    
</style>
