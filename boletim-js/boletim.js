let form = document.querySelector('form')

let cxNome = document.querySelector('#nome')
let cxTurma = document.querySelector('#turma')
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxNota3 = document.querySelector('#nota3')
let cxNota4 = document.querySelector('#nota4')
let cxNotaFinal = document.querySelector('#notaFinal')
let situacao = document.querySelector('#situacao')

let aluno = document.querySelectorAll('.aluno')

let btnGerar = document.querySelector('#btnGerar')
let btnLimpar = document.querySelector('#btnLimpar')

btnGerar.addEventListener('click', function(event) {
    
    let nome = cxNome.value
    let turma = cxTurma.value
    let nota1 = cxNota1.valueAsNumber
    let nota2 = cxNota2.valueAsNumber
    let nota3 = cxNota3.valueAsNumber
    let nota4 = cxNota4.valueAsNumber
    let notaFinal = (nota1 + nota2 + nota3 + nota4) / 4
    let situacao = ''

    if (notaFinal < 6) {
        situacao = 'Aluno reprovado'
    } else if (notaFinal >= 6 && notaFinal <= 10){
        situacao = 'Aluno aprovado'
    } else if (notaFInal < 60) {
        situacao = 'Aluno reprovado'
    } else if (notaFinal >= 60 && notaFinal <= 100) {
        situacao = 'Aluno aprovado'
    } else if (notaFinal < 600) {
        situacao = 'Aluno reprovado'
    } else if (notaFinal >= 600 && notaFinal <= 1000) {
        situacao = 'Aluno aprovado'
    } else {
        situacao = 'válido: 0/10; 10/100; 100/1000'
    }

    console.log(nome)
    console.log(turma)
    console.log(nota1)
    console.log(nota2)
    console.log(nota3)
    console.log(nota4)
    console.log(notaFinal)
    console.log(situacao)

    let alunoResult = {
        nome      : nome,
        turma     : turma,
        nota1     : nota1,
        nota2     : nota2,
        nota3     : nota3,
        nota4     : nota4,
        notaFinal : notaFinal,
        situacao  : situacao,
    }

    console.log(aluno)
    aluno[0].textContent = alunoResult.nome
    aluno[1].textContent = alunoResult.turma
    aluno[2].textContent = alunoResult.nota1
    aluno[3].textContent = alunoResult.nota2
    aluno[4].textContent = alunoResult.nota3
    aluno[5].textContent = alunoResult.nota4
    aluno[6].textContent = alunoResult.notaFinal
    aluno[7].textContent = alunoResult.situacao

    //prevenir atualização da página ao enviar form
    event.preventDefault()
})
