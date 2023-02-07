import ReactDOM from "react-dom";
const storiesUsuarios = [
    {imagem: "assets/img/9gag.svg", usuario: "9gag"}, 
    {imagem: "assets/img/meowed.svg", usuario: "meowed"},
    {imagem: "assets/img/barked.svg", usuario: "barked"},
    {imagem: "assets/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet"},
    {imagem: "assets/img/wawawicomics.svg", usuario: "wawawicomics"},
    {imagem: "assets/img/respondeai.svg", usuario: "respondeai"},
    {imagem: "assets/img/filomoderna.svg", usuario: "filomoderna"},
    {imagem: "assets/img/memeriagourmet.svg", usuario: "memeriagourmet"}
];

const postsUsuarios = [
    {imagem: "assets/img/dog.svg", usuario: "barked", perfil: "assets/img/barked.svg"}, 
    {imagem: "assets/img/gato-telefone.svg", usuario: "meowed", perfil: "assets/img/meowed.svg"}
];

function NavBar(){
    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="separador"></div>
                <img src="assets/img/logo.png" alt="logo"/>
                </div>

                <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
                </div>

                <div class="icones-mobile">
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    );
}

function Stories(){
    return (
        <div class="stories">
            {storiesUsuarios.map( ( storie ) => {
                return (
                    <div class="story">
                        <div class="imagem">
                            <img src= {storie.imagem} alt={storie.usuario}/>
                        </div>
                        <div class="usuario">
                            {storie.usuario}
                        </div>
                    </div>
                    );
                } 
            )}
            

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}

function Posts(){
    return (
        <div class="posts">
            
            {postsUsuarios.map( (post) => {
                return (
                    <div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src={post.perfil} alt={post.usuario}/>
                                {post.usuario}
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                            <img src={post.imagem} alt={post.usuario}/>
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
                )
            } )};
        </div>
    );
}

function Corpo(){
    return (
        <div class="corpo">
                <div class="esquerda">
                    
                    <Stories></Stories>
                    <Posts></Posts>
                    
                </div>

                <div class="sidebar">
                    <div class="usuario">
                    <img src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
                    <div class="texto">
                        <span>
                        <strong>catanacomics</strong>
                        <ion-icon name="pencil"></ion-icon>
                        </span>
                    </div>
                    </div>

                    <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                        <img src="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes.svg"/>
                        <div class="texto">
                            <div class="nome">bad.vibes.memes</div>
                            <div class="razao">Segue você</div>
                        </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                        <img src="assets/img/chibirdart.svg" alt="chibirdart"/>
                        <div class="texto">
                            <div class="nome">chibirdart</div>
                            <div class="razao">Segue você</div>
                        </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                        <img src="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" />
                        <div class="texto">
                            <div class="nome">razoesparaacreditar</div>
                            <div class="razao">Novo no Instagram</div>
                        </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                        <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
                        <div class="texto">
                            <div class="nome">adorable_animals</div>
                            <div class="razao">Segue você</div>
                        </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>

                    <div class="sugestao">
                        <div class="usuario">
                        <img src="assets/img/smallcutecats.svg" alt="smallcutecats"/>
                        <div class="texto">
                            <div class="nome">smallcutecats</div>
                            <div class="razao">Segue você</div>
                        </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>
                    </div>

                    <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                    Hashtags • Idioma
                    </div>

                    <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>
    )
}


function App(){
    return (
        <div class="root">
            <NavBar></NavBar>
            <Corpo></Corpo>
        </div>
        // Fim da Div Root
    )
}

const bodyDom = document.querySelector("body");
ReactDOM.render(App(), bodyDom);
