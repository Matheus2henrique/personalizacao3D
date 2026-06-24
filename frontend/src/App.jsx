import { useState } from 'react'
import './App.css'

function App() {
  const [ filtroAtivo , setFiltroAtivo] = useState("Todos");

  const produtos = [
  // Todos
  { id: 1, nome: "Todos 1", categoria: "Todos", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlR18aYoqG7ttJo7zRahDDT2h-2zR-AEtR9ED2mPuwZA&s" },
  { id: 2, nome: "Todos 2", categoria: "Todos", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJ9M8_-ZUJMuTiwqS9qZ89OSUg_fqCs3IF3tHNQZO5g&s=10" },
  { id: 3, nome: "Todos 3", categoria: "Todos", imagem: "https://img.ltwebstatic.com/v4/j/spmp/2025/05/30/d4/174859288581417c490a991d37834cd6703bc524ee_thumbnail_405x.webp" },
  { id: 4, nome: "Todos 4", categoria: "Todos", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5RsazrudKCZl_qNQ5NemybF-zA_P0z-V-1qumUzaDQJBnJguVo1Mdtw&s=10" },
  { id: 5, nome: "Todos 5", categoria: "Todos", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFYhNyAx4oX8jv5dNNA3CE9_q94dQnxVi0uxUNiNimg&s" },
  { id: 6, nome: "Todos 6", categoria: "Todos", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_722273-MLB103761597831_012026-F.webp" },
  { id: 7, nome: "Todos 7", categoria: "Todos", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18oyXvfIE22Ut_LNB6uE35Elb4c0IxsXWhJyY_RkNyQ&s=10" },
  { id: 8, nome: "Todos 8", categoria: "Todos", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HrK-t1KywECkljvkINg9KEStAbO5Yq0hRIxWoRExKA&s=10" },

  // Roupa Fem
  { id: 9, nome: "Roupa Fem 1", categoria: "Roupa Fem", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_792442-MLB107467950939_022026-F-blusa-feminina-cropped-viscolycra-personalizado-com-seu-logo.webp" },
  { id: 10, nome: "Roupa Fem 2", categoria: "Roupa Fem", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlR18aYoqG7ttJo7zRahDDT2h-2zR-AEtR9ED2mPuwZA&s" },
  { id: 11, nome: "Roupa Fem 3", categoria: "Roupa Fem", imagem: "https://img.ltwebstatic.com/v4/j/spmp/2025/05/30/d4/174859288581417c490a991d37834cd6703bc524ee_thumbnail_405x.webp" },
  { id: 12, nome: "Roupa Fem 4", categoria: "Roupa Fem", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmx3_yF5yDPFa_Uobbzry2Tc0eZeyCSQ2mu2egS0FBn2y42I0Ok8-H9DQ&s=10" },
  { id: 13, nome: "Roupa Fem 5", categoria: "Roupa Fem", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn89YWbzC0ViL7-yyJnkoU8xdJ1LMoGVujWyF_XW9X4w&s" },
  { id: 14, nome: "Roupa Fem 6", categoria: "Roupa Fem", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrxOcmXQkPoBeeFG2Y412-yqdYnsncZ2FZk2X9MiYzCg&s" },
  { id: 15, nome: "Roupa Fem 7", categoria: "Roupa Fem", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4hUqBGqxKHsTYMyTz6mqzAocPfb7M1La0NQ1M0r3tQA&s" },
  { id: 16, nome: "Roupa Fem 8", categoria: "Roupa Fem", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7zFE4Y1jF5XDb3OdGajaJuf1gJd3mEdYHpLxoeMZcg&s" },

  // Roupa Mas
  { id: 17, nome: "Roupa Mas 1", categoria: "Roupa Mas", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS1DB9pNmzHzQpJUJQl_meBkipELWBsDsM1zV0NfSvmw&s" },
  { id: 18, nome: "Roupa Mas 2", categoria: "Roupa Mas", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE_sKY0MHKOSV_q55kC69g1DoOa9Vbauup6gErNKlUAVZ7S6jk_p8SEUQ&s=10" },
  { id: 19, nome: "Roupa Mas 3", categoria: "Roupa Mas", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJ9M8_-ZUJMuTiwqS9qZ89OSUg_fqCs3IF3tHNQZO5g&s=10" },
  { id: 20, nome: "Roupa Mas 4", categoria: "Roupa Mas", imagem: "https://img.kwcdn.com/product/fancy/b6f2ef80-35fb-4e79-bda0-79a8720f6938.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp" },
  { id: 21, nome: "Roupa Mas 5", categoria: "Roupa Mas", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0Ad5iavC5z6UHOjBzR0KxJV2ZI6wYfKIwbDEn20JGQ&s=10" },
  { id: 22, nome: "Roupa Mas 6", categoria: "Roupa Mas", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_650754-MLB110189078857_042026-F-kit-10-camisetas-personalizadas-empresas-criamos-sua-estampa.webp" },
  { id: 23, nome: "Roupa Mas 7", categoria: "Roupa Mas", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLi7ttgkinAR0vRycfhXBD8btbmhiS9IiIoh_HY9wJTA&s" },
  { id: 24, nome: "Roupa Mas 8", categoria: "Roupa Mas", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5RsazrudKCZl_qNQ5NemybF-zA_P0z-V-1qumUzaDQJBnJguVo1Mdtw&s=10" },

  // Roupa Inf
  { id: 25, nome: "Roupa Inf 1", categoria: "Roupa Inf", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFYhNyAx4oX8jv5dNNA3CE9_q94dQnxVi0uxUNiNimg&s" },
  { id: 26, nome: "Roupa Inf 2", categoria: "Roupa Inf", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18oyXvfIE22Ut_LNB6uE35Elb4c0IxsXWhJyY_RkNyQ&s=10" },
  { id: 27, nome: "Roupa Inf 3", categoria: "Roupa Inf", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8P6RX3dqtfjhA_Gxlf0CZ5tiwwUuvoPeKuk-Gi62EcA&s=10" },
  { id: 28, nome: "Roupa Inf 4", categoria: "Roupa Inf", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ32yvGyTpH4ScWXc0OUpyciK_JKQaFsl3azy_N-rwRd7T2vShdt19xczw&s=10" },
  { id: 29, nome: "Roupa Inf 5", categoria: "Roupa Inf", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9YtSdmFAUdpQjp-xe9u77TmvNW61wXqnpyEmX_e6Osw&s=10" },
  { id: 30, nome: "Roupa Inf 6", categoria: "Roupa Inf", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgs5zcZqAYlRtX7_KHBtJ2dZ_yQynBMwlEF5hc_qm4Pw&s" },
  { id: 31, nome: "Roupa Inf 7", categoria: "Roupa Inf", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2q8P3dbrHjMXtYE8-UitZeuh0aE_xWDWKMldmcTcAoQ&s=10" },
  { id: 32, nome: "Roupa Inf 8", categoria: "Roupa Inf", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssyh70-iApH3keEA3twsnvFEKkn2RMUxmAOEmnKXUc_qFX4Hz9jx-Af4&s=10" },

  // Acessórios
  { id: 33, nome: "Acessório 1", categoria: "Acessórios", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_722273-MLB103761597831_012026-F.webp" },
  { id: 34, nome: "Acessório 2", categoria: "Acessórios", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9HrK-t1KywECkljvkINg9KEStAbO5Yq0hRIxWoRExKA&s=10" },
  { id: 35, nome: "Acessório 3", categoria: "Acessórios", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGAU1KkR8JgD4GeNp0QXvjibZKKi6k-Hib4-bR-6OyA&s=10" },
  { id: 36, nome: "Acessório 4", categoria: "Acessórios", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsjnvpO0iI8nqmz2Si1ys-MwWb8VeUXYbIB_Pe2X93fA&s=10" },
  { id: 37, nome: "Acessório 5", categoria: "Acessórios", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFEbqTEbklcLMP76N_55CJn-en6NlST6qz7a2_-wiMQ&s" },
  { id: 38, nome: "Acessório 6", categoria: "Acessórios", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGAU1KkR8JgD4GeNp0QXvjibZKKi6k-Hib4-bR-6OyA&s=10" },
  { id: 39, nome: "Acessório 7", categoria: "Acessórios", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsjnvpO0iI8nqmz2Si1ys-MwWb8VeUXYbIB_Pe2X93fA&s=10" },
  { id: 40, nome: "Acessório 8", categoria: "Acessórios", imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_722273-MLB103761597831_012026-F.webp" }
];

  const produtosFiltrados =
  filtroAtivo === "Todos"
    ? produtos.filter(produto => produto.categoria === "Todos")
    : produtos.filter(produto => produto.categoria === filtroAtivo);

  return(
    <>
    <div className="page">  
      <header className='header'>
        <div className="container">

        <nav className="links">
          <ul>
            <li><a href="">Pra você</a></li>
            <li><a href="">Novidades</a></li>
            <li><a href="">Personalização</a></li>
            <li><a href="">Moda</a></li>
            <li><a href="">Utensílios</a></li>
          </ul>
        </nav>

        <div className="opcao-Pesq">
          <img className='img' src="https://cdn-icons-png.flaticon.com/256/64/64673.png" alt="icon lupa"/>
          <img className='img' src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png" alt="icon perfil"/>
          <img className='img' src="https://cdn-icons-png.flaticon.com/512/4202/4202388.png" alt="icon carrinho"/>
        </div>

        </div>
      </header>

      <section className="banner">
        <div className="content">
          <span>FAÇA VOCÊ</span>

          <h1>
            Personalize
            <br />
            para a família
          </h1>

          <p>
            Com fotos, textos ou desenhos únicos,
            como vocês.
          </p>

        </div>
          <img src="https://i.pinimg.com/1200x/8f/94/fe/8f94febf292a823e4ea40abc730e97db.jpg" alt="blusa" style={{width: "20%" , marginRight: "140px"}} />
      </section>

      <section className='catalogo'>
        
        <h2>Personalize do seu jeito!</h2>
        <p>Um catalogo repleto de opcoes: Escolha e personalize sua roupa ou seu utensilho de forma rapida e facil!</p>

        <div className="filtros">
          <button className={filtroAtivo === "Todos" ? "ativo" : ""} onClick={() => setFiltroAtivo("Todos")}>Todos</button>
          <button className={filtroAtivo === "Roupa Fem" ? "ativo" : ""} onClick={() => setFiltroAtivo("Roupa Fem")}>Roupa Fem</button>
          <button className={filtroAtivo === "Roupa Mas" ? "ativo" : ""} onClick={() => setFiltroAtivo("Roupa Mas")}>Roupa Mas</button>
          <button className={filtroAtivo === "Roupa Inf" ? "ativo" : ""} onClick={() => setFiltroAtivo("Roupa Inf")}>Roupa Inf</button>
          <button className={filtroAtivo === "Acessórios" ? "ativo" : ""}onClick={() => setFiltroAtivo("Acessórios")}>Acessórios</button>
        </div>

        <div className="cards-container">
          {produtosFiltrados.map(produto => (
            <div className="card" key={produto.id}>
              <img src={produto.imagem} alt={produto.nome} />
              <h3>{produto.nome}</h3>
              <button>Personalizar</button>
            </div>
          ))}
        </div>

      </section>

    </div>  
    </>
  )
  
}

export default App
