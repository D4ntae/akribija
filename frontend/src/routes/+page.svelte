<div class="container">
    <div class="top-container">
        <div class="top-text">
            <p class="lektura-text"><b>Lektura</b> je proces u kojemu se autorski rad ispravlja i uređuje
jezično i pravopisno u skladu s pravilima standardnoga
hrvatskog jezika.</p>
        </div>
        <div class="books-container">
            <img class="books" src="/images/books.jpg" alt="A stack of books">
        </div>
    </div>
    <div class="form-container">
        <h1 class="title">Pošaljite nam upit</h1>
        <form class="form" enctype="multipart/form-data" action="/" method="POST">
            <div id="form-split">
                <input name="name" id="name" type="text" placeholder="Ime...">
                <input name="lastname" id="lastname" type="text" placeholder="Prezime...">
            </div>
            <input name="subject" id="subject" type="text" placeholder="Predmet...">
            <textarea rows=8 cols=34 name="content" id="content" placeholder="Poruka..."></textarea>
            <input name="file" type="file">
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

    @media screen and (max-width: 768px) {
        .container {
            height: auto;
        }

        .top-container {
            display: flex;
            flex-direction: columns;
            align-items: center;
            border-bottom: 2px solid lightgray;
            margin-bottom: 20px;
        }

        .lektura-text {
            font-family: Geist;
            text-align: center;
        }

        .top-text {
            width: 100%;
        }

        .books {
            width: 300px;
            height: 300px;
            display: none;
        }

        .form-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100vw;
                                }

        .books-container {
            display: none;
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
            width: 85%;
        }

        .send-container {
            display: flex;
            justify-content: center;
        }

        #name {
            height: 25px;
            width: 75%;
        }

        #lastname {
            width: 75%;
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

   }
</style>
