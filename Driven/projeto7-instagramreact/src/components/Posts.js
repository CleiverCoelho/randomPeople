const postsUsuarios = [
    {imagem: "assets/img/dog.svg", usuario: "barked", perfil: "assets/img/barked.svg"}, 
    {imagem: "assets/img/gato-telefone.svg", usuario: "meowed", perfil: "assets/img/meowed.svg"}
];

export default function Posts(){
    return (
        <div class="posts">
        
            {postsUsuarios.map( (post) => {
                return (
                    <Post perfil={post.perfil} usuario={post.usuario} imagem={post.imagem}/>
                )
            } )};
        </div>
    );
}

function Post (props){
    return (
        <div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src={props.perfil} alt={props.usuario}/>
                                {props.usuario}
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                            <img src={props.imagem} alt={props.usuario}/>
                        </div>

                        <div class="fundo">
                        
                            <div class="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src="assets/img/respondeai.svg" alt="respondeai"/>
                                <div class="texto">
                                    Curtido por <strong>respondeai</strong> e <strong>outras <span>101.523</span> pessoas</strong>
                                </div>
                            </div>

                        </div>
                    </div>
    );
}
