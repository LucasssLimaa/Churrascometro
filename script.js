vbody{
    font-family: gotico;
    background-color: #F0c32a;
}

img{
    padding-top: 2%;
}

h1{
    color: #333333;
    font-size: 2.5vw;
}

#container{
    margin: auto;
    background-color: #F0c32a;
    width: 35%;
    height: 70%;
    border-radius: 10px;
    display: flex;

    flex-direction: column;
    align-items: center;
}

#tela1{
    display: flex;

    flex-direction: column;
    align-items: center;
}

#tela2{
    width: 90%;
    display: flex;

    flex-direction: column;
    align-items: center;
}

.entradas{
    text-align: center;
    display: grid;

    grid-template: auto auto / auto auto;
    grid-gap: 7%;
    justify-items: center;
}

input{
    border: none;
    border-radius: 5px;
    text-align: center;
    margin: 4%;
    width: 90%;
    padding: 8%;
    opacity: 0.9;

    transition-property: all;
    transition-duration: 300ms;
}

input:hover{
    opacity: 1;
    width: 92%;
}

#botao{
    color: white;
    background-color: #333333;
    text-align: center;
    border-radius: 5px;
    font-size: 1.4vw;
    width: 23%;
    opacity: 1;
    margin-top: 8%;
    padding: 2%;

    transition-property: all;
    transition-duration: 300ms;
}

#botao:hover{
    width: 25%;
}

#botao2{
    color: white;
    background-color: #333333;
    display: none;
    text-align: center;
    border-radius: 5px;
    font-size: 1.2vw;
    opacity: 1;
    width: 40%;
    padding: 3%;

    transition-property: all;
    transition-duration: 300ms;
}

#botao2:hover{
    width: 42%;
}

#h2{
    margin-bottom: 0;
    font-size: 2.3vw;
    color: #333333;
}

#resultado{
    display: none;
    margin-top: 1.5%;
    text-align: center;
    width: 90%;
    opacity: 0.9;
    height: 30%;   
}

#carnes{
    margin: 5%;
    background-color: white;
    border-radius: 10px;
}

#cervejas{
    margin: 5%;
    background-color: white;
    border-radius: 10px;
}

#bebidas{
    margin: 5%;
    background-color: white;
    border-radius: 10px;
}

p{
    padding: 4%;
    margin: 0;
    font-size: 1.5vw;
    color: #333333;
    border: 2px solid #F0c32a;
}

@font-face {
    font-family: gotico;
    src: url(assets/fonts/GothicA1-Bold.ttf);
}

@media screen and (max-width: 1023px) {

    body{
        background-color: #F0c32a;
    }

    img{
        width: 60%;
        height: 60%;
    }
    
    #container{
        width: 100%;
    }

    h1{
        margin-top: 5%;
        color: #333333;
        font-size: 8vw;
    }

    .entradas{
        margin-top: 2%;
        width: 90%;
    }

    input{
        margin: 5%;
        width: 80%;
        padding: 8%;
        font-size: 4vw;
    }

    #botao{
        font-size: 5vw;
        width: 28%;
        margin-top: 10%;
        padding: 4%;
    }

    #botao:hover{
        width: 30%;
    }

    #botao2{
        font-size: 4.5vw;
        width: 58%;
        padding: 5%;
    }
    
    #botao2:hover{
        width: 60%;
    }

    #resultado{
        margin-top: 5%;
        width: 100%;
        height: 30%;    
    }

    #h2{
        margin-bottom: 0;
        font-size: 6vw;
    }

    #carnes{
        margin: 5%;
    }
    
    #cervejas{
        margin: 5%;
    }
    
    #bebidas{
        margin: 5%;
    }
    

    p{
        margin: 4%;
        font-size: 5vw;
        margin: 0;
        padding: 5%;
    }

}
