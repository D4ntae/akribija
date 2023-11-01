<div class="container">
    <div class="top-container">
        <div class="top-text">
            <p class="lektura-text"><b>Lektura</b> je proces u kojemu se autorski radi ispravlja jezično i pravopisno.</p>
        </div>
        <div class="books-container">
            <img class="books" src="/images/books.jpg" alt="A stack of books">
        </div>
    </div>
    <div class="form-container">
        <h1 class="title">Pošaljite nam upit</h1>
        <form class="form" action="/">
            <div id="form-split">
                <input id="name" type="text" placeholder="Ime...">
                <input id="lastname" type="text" placeholder="Prezime...">
            </div>
            <input id="subject" type="text" placeholder="Predmet...">
            <textarea rows=8 cols=34 id="content" placeholder="Poruka..."></textarea>
            <input type="file">
            <div class="send-container">
                <input id="send-button" value="Zatraži lekturu" type="submit">
            </div>
        </form>
    </div>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        background-color: var(--bg_main);
        width: 100%;
        height: 92vh;
        align-items: center;
    }

    .top-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 2px solid lightgray;
        margin-bottom: 20px;
    }

    .lektura-text {
        font-family: Geist;
    }

    .top-text {
        width: 500px;
    }

    .books {
        width: 300px;
        height: 300px;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .books-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: white;
        padding: 20px;
        border-radius: 15px;
        border: 1px solid lightgray;
        width: 760px;
    }

    .send-container {
        display: flex;
        justify-content: center;
    }

    #name {
        height: 25px;
        width: 50%;
    }

    #lastname {
        width: 50%;
        height: 25px;
    }

    #form-split {
        display: flex;
        gap: 10px; 
    }

    #subject {
        height: 25px;
    }

    #content {
        font-size: 1rem;
    }

    #send-button {
        background-color: var(--bg_dark);
        border: none;
        width: 150px;
        height: 40px;
        border-radius: 8px;
        font-family: Geist;
        color: white;
        font-size: 1.1rem;
        opacity: 1;
        transition: opacity 0.25s;
        margin-top: 10px;
    }

    #send-button:hover {
        opacity: 0.9;
        transition: opacity 0.25s;
        cursor: pointer;
    }

    .title {
        font-family: Geist;
        margin-top: 0px;
        padding: 0px;
    }
</style>
