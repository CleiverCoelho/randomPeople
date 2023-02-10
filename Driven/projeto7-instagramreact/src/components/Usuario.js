import React from 'react';

export default function Usuario (props){
    
    const [nome, setNome] = React.useState(props.nome);
    const [imagem, setImagem] = React.useState(props.imagem);
    
    function trocarNome(){
        const novoNome = prompt("Digite o novo nome");
        if(novoNome){
            setNome(novoNome);
        }
    }

    function trocarImagemUsuario(){
        const novaImagem = prompt("Digite a nova imagem");
        if(novaImagem){
            setImagem(novaImagem);
        }
    }

    return (
        <div class="usuario">
            <img onClick={trocarImagemUsuario} src={imagem} alt="imagem de perfil"/>
            <div class="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon onClick= {trocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}