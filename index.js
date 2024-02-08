const perguntas = [
    {
      pergunta: "Quem é o protagonista de Death Stranding?",
      respostas: [
        "Sam Porter Bridges",
        "Hideo Kojima",
        "Die-Hardman",
        "Fragile",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome da criatura misteriosa que assombra o mundo do jogo?",
      respostas: [
        "BTs",
        "Mules",
        "Ludens",
        "Chiral Crystals",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é Clifford Unger?",
      respostas: [
        "O chefe final do jogo",
        "Um antigo amigo de Sam",
        "Um soldado da Segunda Guerra Mundial",
        "Um líder dos Mules",
      ],
      correta: 2
    },
    {
      pergunta: "O que é 'Chiral Network' no contexto do jogo?",
      respostas: [
        "Uma rede de entrega de comida",
        "Uma rede social para os sobreviventes",
        "Uma rede de comunicação que conecta os sobreviventes",
        "Uma rede de transporte subterrâneo",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o líder da organização Bridges?",
      respostas: [
        "Fragile",
        "Die-Hardman",
        "Deadman",
        "Amelie",
      ],
      correta: 1
    },
    {
      pergunta: "O que os Mules fazem no mundo do jogo?",
      respostas: [
        "Entregam suprimentos para os necessitados",
        "Roubam cargas de entrega dos outros",
        "Protegem os sobreviventes dos BTs",
        "Constroem estradas e pontes",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a condição de Sam Porter Bridges que o torna excepcional no mundo do jogo?",
      respostas: [
        "Ele pode se teletransportar",
        "Ele é imune aos BTs",
        "Ele possui habilidades de parkour",
        "Ele é um repatriado",
      ],
      correta: 3
    },
    {
      pergunta: "O que são os Crater Lakes no jogo?",
      respostas: [
        "Lagos cheios de criaturas perigosas",
        "Pontos de encontro para os sobreviventes",
        "Lugares onde ocorreram explosões nucleares",
        "Fontes de água potável",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é responsável pela trilha sonora original de Death Stranding?",
      respostas: [
        "Hans Zimmer",
        "Ludvig Forssell",
        "Harry Gregson-Williams",
        "Jesper Kyd",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do bebê-pod que Sam Porter Bridges carrega consigo?",
      respostas: [
        "BB",
        "DD",
        "CC",
        "AA",
      ],
      correta: 0
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')

  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent =corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(const resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent =corretas.size + ' de ' + totalDePerguntas
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }