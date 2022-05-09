//1
function cumprimentar (nome){
  console.log("Olá, " + nome + "!")
}
console.log("1)")
cumprimentar("Maria")


//2
function converterIdadeEmAnosParaDias (anos){
  let dias
  dias = anos * 365 
  console.log(dias)
}
console.log("2)")
converterIdadeEmAnosParaDias(25)


//3
function calcularSalario (horas, salarioPorHora){
  let salario
  salario = horas * salarioPorHora 
  console.log("Salário igual a R$ " + salario)
}
console.log("3)")
calcularSalario(150, 40.5)


//4
function nomeDoMes(numeroMes){
  let nomeMes 
  const Meses = ["janeiro", "fevereiro", "março",
  "abril", "maio", "junho", "julho", "agosto",
  "setembro", "outubro", "novembro", "dezembro"]
  nomeMes = Meses[numeroMes-1]
  console.log(nomeMes)
}
console.log("4)")
nomeDoMes(4)


//5
function maiorOuIgual(x, y){
  if(x >= y)
    console.log("true")
  else console.log("false")
}
console.log("5)")
maiorOuIgual(0, 0)
maiorOuIgual(0, "0")
maiorOuIgual(0, 1)


//6
function inverso (valor){
  
  if(typeof valor === 'number')
    console.log(-valor)
  else if(typeof valor === 'boolean')
    console.log(!valor)
  else console.log("booleano ou números esperado, mas o parâmetro é do tipo " + typeof valor)
}
console.log("6)")
inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")


//7
function estaEntre (numero, minimo, maximo, inclusivo = false){
  if(inclusivo){
    console.log(numero <= maximo && numero >= minimo)
  } else {
    console.log(numero < maximo && numero > minimo)
  }
}
console.log("7)")
estaEntre(10, 0, 50)
estaEntre(16, 100, 169)  
estaEntre(3, 0, 3)
estaEntre(3, 0, 3, true)


//8
function multiplicar (x, y){
  let resultado = 0
  for(let i = 1; i <= y; i++)
    resultado += x
  console.log(resultado)
}
console.log("8)")
multiplicar(5, 5)
multiplicar(5, 0)
multiplicar(0, 0)


//9
function repetir(elemento, repetições){
  let vetor = []
  for(let i = 0; i < repetições; i++)
    vetor.push(elemento)
  console.log(vetor)
}
console.log("9)")
repetir("código", 2)
repetir(7, 3)


//10
function simboloMais(repetições){
  let sequencia = ""
  for(let i = 0; i < repetições; i++)
    sequencia = sequencia + "+"
  console.log(sequencia)
}
console.log("10)")
simboloMais(6)
simboloMais(2)


//11
function receberPrimeiroEUltimoElemento (vetor){
  let n = vetor.length
  let vetor_resultado = [vetor[0], vetor[n - 1]]
  console.log(vetor_resultado)
}
console.log("11)")
receberPrimeiroEUltimoElemento([7, 14, 'Olá'])
receberPrimeiroEUltimoElemento([-100, 8, 'bla bla', 98])


//12
function removerPropriedade(objeto, propriedade){
  delete objeto[propriedade]
  console.log(objeto)
}
console.log("12)")
removerPropriedade({a: 1, b: 2}, "a")


//13
function filtrarNumeros(vetor){
  const saida = []
  for(i in vetor){
    if(typeof vetor[i] === "number")
      saida.push(vetor[i])
  }
  console.log(saida)
}
console.log("13)")
filtrarNumeros(['f', 1, "web", 20])


//14
function ObjetoParaArray(objeto){
  console.log(Object.entries(objeto))
}
console.log("14)")
ObjetoParaArray({codigo: 11111, preco:12000})


//15
function receberSomenteOsParesDeIndicesPares(vetor){
  let resultado = []
  for(i in vetor){
    if(i % 2 === 0 && vetor[i] % 2 === 0)
      resultado.push(vetor[i])
  }
  console.log(resultado)
}
console.log("15)")
receberSomenteOsParesDeIndicesPares([1,2,3,5,6,7,8,10])


//16
function checarAnoBissexto (ano){
  console.log((ano % 4 === 0 && ano % 100 != 0 )||(ano % 400 === 0))
}
console.log("16)")
checarAnoBissexto(2020)
checarAnoBissexto(2100)


//17
function somarNumeros (vetor){
  soma = 0
  for(i in vetor){
    soma += vetor[i]
  }
  console.log(soma)
}
console.log("17)")
somarNumeros([1.1, 2.2, 3.3, 4, 5])


//18
function despesasTotais(vetor){
  let despesas = 0
  for(i in vetor){
    despesas += vetor[i].preco
  }
  console.log(despesas)
}
console.log("18)")
despesasTotais([{nome:'celular', preco :3000.00},
 {nome: 'notebook', preco: 5000.05}])


//19
function calcularMedia (vetor){
  soma = 0
  for(let i in vetor){
    soma += vetor[i]
  }
  let n = vetor.length 
  media = soma / n
  console.log(media)
}
console.log("19)")
calcularMedia([1,2,3])
calcularMedia([1,2,3,4])


//20
function areaDoTriangulo(base, altura){
  let area = (base * altura) / 2
  console.log(area.toFixed(2))
}
console.log("20)")
areaDoTriangulo(10, 15)
areaDoTriangulo(9.25, 13.1)


//21
function menorNumero (vetor){
  menor = vetor[0]
  for(i in vetor){
    if(vetor[i]<menor)
      menor = vetor[i]
  }
  console.log(menor)
}
console.log("21)")
menorNumero([1,2,3,4,0])
menorNumero([1,2,-3,4,0])


//22
function funcaoDaSorte(escolhido){
  let sorteado 
  sorteado = Math.floor(Math.random()*10 +1)
  if(sorteado === escolhido)
    console.log('Parabéns! O número sorteado foi ' + sorteado)
  else console.log('Que pena! O número sorteado foi ' + sorteado)
}
console.log("22)")
funcaoDaSorte(6)
funcaoDaSorte(8)
funcaoDaSorte(2)


//23
function contarPalavras(frase){
  fraseSemEspaco=frase.split(' ')
  console.log(fraseSemEspaco.length)
}
console.log("23)")
contarPalavras("Sou uma frase")


//24
function contarCaractere(caractere, palavra){
  let contador = 0
  for(let i = 0; i < palavra.length; i++)
    if(caractere === palavra.charAt(i))
      contador++
  console.log(contador)
}
console.log("24)")
contarCaractere("r", "a sorte favorece os audazes")


//25 
function buscarPalavrasSemelhantes(parte, frase){
  const palavrasSemelhantes=[]
  for(let palavra of frase)
    if(palavra.includes(parte))
    palavrasSemelhantes.push(palavra)
  console.log(palavrasSemelhantes)
}
console.log("25)")
buscarPalavrasSemelhantes("pro",["programação",'mobile','profissional'])


//26
function removerVogais(palavra){
  const vogais = ['a','e','i','o','u','A','E','I','O','U']
  vogais.forEach(vogal => palavra = palavra.replace(vogal,""))
  console.log(palavra)
}
console.log("26)")
removerVogais('Coder')


//27
function inverter(objeto){
  const objetoInvertido = {}
  const chave = Object.keys(objeto)
  const valor = Object.values(objeto)
  for(let i = 0; i < chave.length; i++)
    objetoInvertido[valor[i]] = chave[i]
  console.log(objetoInvertido)
}
console.log("27)")
inverter({a:1, b:2, c:3})


//28
function filtrarPorQuantidadeDeDígitos(vetor, digitos){
  const resultado = []
  for(i in vetor){
    if(Math.pow(10, digitos-1)<=vetor[i] && Math.pow(10, digitos)>vetor[i])
      resultado.push(vetor[i])
  }
  console.log(resultado)
}
console.log("28)")
filtrarPorQuantidadeDeDígitos([38, 2, 365, 10, 125, 11], 2)


//29
function segundoMaior(vetor){
  maior = vetor[0]
  for(i in vetor){
    if(vetor[i]>maior)
      maior = vetor[i]
  }
  let segundoMaior
  if(vetor[0] !== maior)
     segundoMaior = vetor[0]
  else  segundoMaior = vetor[1]
  for(j in vetor){
    if(vetor[j]<maior && vetor[j]>=segundoMaior)
      segundoMaior = vetor[j]
  }
  console.log(segundoMaior)
}
console.log("29)")
segundoMaior([12, 16, 1, 5])
segundoMaior([8, 4, 5, 6])


//30
function receberMelhorEstudante(desempenhos){
  let nomes = Object.keys(desempenhos)
  let maiorMedia = 0
  let melhorAluno = ''
  for (i in nomes){
    let media
    let notas = desempenhos[nomes[i]]
    let somas = 0
    for(let j in notas){
      somas += notas[j]
    }
    media = somas / notas.length
    if(media > maiorMedia){
      maiorMedia = media
      melhorAluno = nomes[i]
    }
  }
  console.log({nome: melhorAluno, media: maiorMedia})
}    

console.log("30)")
receberMelhorEstudante({
  Joao: [8, 7, 6],
  Mariana: [7, 9 ,10],
  Carla:[5, 5, 8]
})
