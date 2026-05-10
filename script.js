//Funcionalidade: Tema (Claro/Escuro) 
const btnTema = document.getElementById('btnTema');

btnTema.addEventListener('click', function() {
    // 'classList.toggle' adiciona a classe se ela não existir, e a remove se já existir.
    // Isso é o que permite a troca de temas no CSS.
    document.body.classList.toggle('tema-escuro');
    
    // Altera o ícone e o texto do botão para refletir a ação oposta ao tema atual
    if (document.body.classList.contains('tema-escuro')) {
        btnTema.textContent = '☀️ Tema';
    } else {
        btnTema.textContent = '🌙 Tema';
    }
});

// Funcionalidade: Menu Responsivo (Mobile)
const btnMenu = document.getElementById('btnMenu');
const navMenu = document.getElementById('navMenu');

btnMenu.addEventListener('click', function() {
    // Alterna a classe que mostra/esconde o menu em dispositivos móveis (controlado via CSS)
    navMenu.classList.toggle('menu-aberto');
});

// Funcionalidade: Navegação Dinâmica (Mostrar/Esconder secções simulando uma Single Page Application)
const linksNavegacao = document.querySelectorAll('.nav-link');
const secoes = document.querySelectorAll('.sap-section-card');

linksNavegacao.forEach(link => {
    link.addEventListener('click', function(e) {
        // e.preventDefault() evita que a página role até a âncora de forma brusca, 
        // permitindo que o JS controle a transição visual.
        e.preventDefault(); 

        // 1. Esconde todas as secções removendo a classe que as torna visíveis
        secoes.forEach(secao => {
            secao.classList.remove('secao-ativa');
        });

        // 2. Identifica qual secção foi clicada com base no href.
        const idAlvo = this.getAttribute('href').substring(1); 
        const secaoAlvo = document.getElementById(idAlvo);

        // 3. Mostra apenas a secção selecionada adicionando a classe ativa
        if (secaoAlvo) {
            secaoAlvo.classList.add('secao-ativa');
        }

        // 4. Se estiver num telemóvel (menu hambúrguer aberto), fecha o menu automaticamente após clicar em um link
        if (navMenu.classList.contains('menu-aberto')) {
            navMenu.classList.remove('menu-aberto');
        }
    });
});

// Funcionalidade: Validação do Formulário
document.getElementById('formContato').addEventListener('submit', function(e) {
    // Impede o envio real do formulário (recarregamento da página) para podermos tratar os dados via JS
    e.preventDefault();

    // Captura os valores digitados nos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Expressão regular (Regex) para verificar se o formato do e-mail é válido (texto@texto.texto)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validação de campos vazios
    if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos do formulário.");
        return; // Interrompe a execução da função se faltarem dados
    }

    // Validação de formato de e-mail usando o regex
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Simula o sucesso do envio e limpa o formulário (this.reset())
    alert("Mensagem enviada com sucesso!");
    this.reset();
});