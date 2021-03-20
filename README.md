<p align="center">
   <img src="https://user-images.githubusercontent.com/68665746/111533157-3ebd0400-8745-11eb-8cba-ef8446866d95.jpg" alt="teamspy"/>
</p>

<p align="center">
   <a href="" target="_blank"><img src="https://img.shields.io/badge/made%20by-gabrielf.otto-red" alt=""></a>
   <a href="" target="_blank"><img src="https://img.shields.io/badge/license-MIT-green" alt=""></a>
</p>

<h3 align="center">🚧 teamspy - concluído 🚀 🚧</h3>
<hr />

<h2>💻 Sobre o projeto</h2>
<p>teamspy - é uma aplicação que demonstra as permissões do usuário baseado no time que ele está no momento. Por exemplo, o usuário 1, no time 1, é um administrador, mas esse mesmo usuário no time 2, é um moderador.</p>
<p>As permissões são baseadas no time, não no usuário.</p>
<hr />

<h2>⚙️ Funcionalidades</h2>
<ul>
   <li>Login e logout</li>
   <li>Cadastro de times</li>
   <li>Cadastro de projetos</li>
   <li>Enviar convites por email para uma pessoa se tornar membro de um time</li>
   <li>Cadastro de membros para um time através dos convites</li>
   <li>Remover membros dos times</li>
   <li>Alteração do tema da interface</li>
</ul>
<hr />

<h2>🎨 Demonstração</h2>
https://user-images.githubusercontent.com/68665746/109526342-33a17d00-7a91-11eb-9897-740bf35ee6a2.mp4
<hr />

<h2>🚀 Como executar o projeto</h2>
<p>Este projeto é divido em duas partes:</p>
<ul>
   <li>Backend</li>
   <li>Frontend</li>
</ul>
<p>O Frontend precisa que o Backend esteja sendo executado para funcionar.</p>

<h2>Pré-requisitos</h2>
<p>Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: <a href="https://git-scm.com/downloads">Git</a>, <a href="https://nodejs.org/pt-br/download/">Node.js</a> e <a href="https://classic.yarnpkg.com/en/docs/install#windows-stable">Yarn</a>. Além disso, é bom ter um editor para trabalhar com o código como o <a href="https://code.visualstudio.com/download">VSCode</a>.</p>

<h3>🎲 Rodando o Backend (servidor):</h3>
<div>
   <pre>
<span>#</span> Instale o cli do adonis de forma global
$ npm install -g @adonisjs/cli<br><br>
   
<span>#</span> Clone este repositório
$ git clone https://github.com/gabrielf-otto/go-teams.git<br>
      
   <span>#</span> Acesse a pasta do projeto no terminal/cmd
   $ cd teamspy<br>
      
   <span>#</span> Vá para a pasta server
   $ cd backend<br>
      
   <span>#</span> Instale as dependências
   $ yarn<br>
      
   <span>#</span> Execute a aplicação em modo de desenvolvimento
   $ npx adonis serve --dev<br>
      
   <span>#</span> O servidor inciará na porta 3333 - acesse http://localhost:3333
   </pre>
</div>

<h3>🧭 Rodando a aplicação web (Frontend):</h3>
<div>
   <pre>     
<span>#</span> Em outro terminal, vá para a pasta frontend
$ cd frontend<br><br>
      
   <span>#</span> Instale as dependências
   $ yarn<br>
      
   <span>#</span> Execute a aplicação em modo de desenvolvimento
   $ yarn start<br>
      
   <span>#</span> O servidor inciará na porta 3000 - acesse http://localhost:3000
   </pre>
</div>

<h2>🛠 Tecnologias</h2>
<p>As principais tecnologias que foram utilizadas na construção do projeto:</p>
<p><b>Backend:</b></p>
<ul>
   <li><a href="https://nodejs.org/en/" target="_blank">NodeJS</a></li>
   <li><a href="https://adonisjs.com/" target="_blank">AdonisJS</a></li>
   <li><a href="https://www.postgresql.org/" target="_blank">Postgres</a></li>
</ul>
<hr />

<p><b>Frontend:</b></p>
<ul>
   <li><a href="https://pt-br.reactjs.org/" target="_blank">ReactJS</a></li>
   <li><a href="https://redux.js.org/" target="_blank">Redux</a></li>
   <li><a href="https://redux-saga.js.org/" target="_blank">Redux Saga</a></li>
   <li><a href="https://github.com/axios/axios" target="_blank">Axios</a></li>
   <li><a href="https://styled-components.com/" target="_blank">Styled Components</a></li>
</ul>
<hr />


<h2>🦸 Autor</h2>
<img src="https://avatars.githubusercontent.com/u/68665746?s=96&v=4" alt="me">
<p><b>Gabriel Otto</b></p>
<hr />


<h2>📝 Licença</h2>
<p>Este projeto está sob licença MIT.</p>
