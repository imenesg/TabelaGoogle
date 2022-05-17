
import "../assets/CSS/form.css"
import "../assets/CSS/root.css"

import alvo from "../assets/img/alvo.png"

import React from "react";
import {useState } from "react";

function Form(){
    const [nome , setNome] = useState("")
    const [mensagem , setMensagem] = useState("")
    const [telefone , setTelefone] = useState()
    const [email , setEmail] = useState("")

    const [mensagemBotao, setMensagemBotao] = useState("Enviar")

   


    function funOnchang(event){
       if(event.target.name === "Nome" ){
        setNome(event.target.value)
       }else if(event.target.name === "Mensagem"){
        setMensagem(event.target.value)
       }else if(event.target.name === "Telefone"){
        setTelefone(event.target.value)
       }else if(event.target.name === "Email"){
        setEmail(event.target.value)
       }
        
    }
    function funOnSubmit(event){
        event.preventDefault()
        setMensagemBotao("Aguarde :)")
        fetch("https://api.sheetmonkey.io/form/gYejoHXcYD49pK6jjeFLpy" , {

        method: 'post',
        headers: {
            'Accept' :'application/json',
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({Nome: nome,  Mensagem: mensagem ,Telefone: telefone, Email:email,   })
        }).then(() =>{
            setNome("")
            setMensagem("")
            setTelefone("")
            setEmail("")

            setMensagemBotao("Enviado")



            setTimeout(() => {
                setMensagemBotao("Enviar");
                alert("🎲Seus dados foram enviados para a planilha📝 : https://docs.google.com/spreadsheets/d/1lzy6NQrXEg8PJdxuY1YWJXNVWOf-W_f1QR-EN6INWTQ/edit?usp=sharing")
              }, "500")
        })
    }
    return(
        <div className="container">

        <img className="alvo" src={alvo}></img>

            <form  onSubmit={funOnSubmit}>
            <h2>Bem vindo</h2>
            <input type={"text"} name={"Nome"} placeholder={"Nome"} onChange={funOnchang} value={nome} id={"setNome"}></input>
            <textarea maxlength="56" name={"Mensagem"} placeholder={"Mensagem bacana"} onChange={funOnchang} value={mensagem} id={"setMensagem"}></textarea>
            <input type={"tel"} name={"Telefone"} placeholder={"Telefone"} onChange={funOnchang} value={telefone} id={"setTelefone"}></input>
            <input type={"email"} name={"Email"} placeholder={"E-mail"} onChange={funOnchang} value={email} id={"setEmail"}></input>

            <button type={"submit"}>{mensagemBotao}</button>
            </form>
        </div>
        
    )
}

export default Form; 