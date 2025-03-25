/* 
______________________________________________________________________

--DOM

O DOM, conhecido como Document Object Model, é um conjuto de objtos dentro do vagador, que dá acesso aos componentes dentro do sistema, onde você aprende a manipula-los para usar no site, como das comandos.

E há varias maneiras de acessar e comandar nossos códigos a fazerem o que quisermos. 

Uma dessas nabeiras é: 

por Marca --> getElementsByTagName()

por ID --> getElementById() 

______________________________________________________________________

--EVENTOS

Os eventos são tudo o que podem acontecer dentro dos codigos com os evetos dom, onde damos ordens para palavras e figuras e tudo pode acontecer, isso é chamado de eventos.

Para ver todos os eventos disponiveis basta ir na pagina de Event references. La tem uma lista de cada evento.
______________________________________________________________________

--FUNÇÕES

As funções são conjuntos de codigos que só são acessados caso um evento eme especifico aconteça.

para o iniciar, você precisa criar:

function { }

e então, dar um nome para essa função, que normalmente são nomes de ventos, então quando formos dar  nom de alguma função:

function ação() {
}

Elas precisam dos metodos, que são o comando que faz algo, por exemplo, o onclick, funciona quando clicamos em algo e ele deve ter um efeito após isso. Isso é um metodo. Emtão damos a ele um nome de nossa escolha para o identificar para ser usado. Vou escolher o nome clicar.
______________________________________________________________________

--COMANDOS.

window.alert('') Cria uma janela com um aviso para o usuario na tela do site logo no inicio da entada ou em algum outro momento caso seja configurado.
|
Ele também possui um derivado de mesmo valor, que é o: alert que tem a memsa ativação.

window.confirm('') Cria uma janela com uma pergunta e irá dar dois botões, uma para sim e uma para não para respinder a pergunta na tela.

window.prompt('') Cria uma janela onde terá uma caixinha de texto para o usuario preencher cm a informção que foi pedida.

_______________________________________________________________________


--METODOS

onclick  Serve para atribuir um click, que irá ser ativado quando clicarmos na palavra ou local onde foi configurada.



--IDENTIICADORES

Aqui estão as regras para noemar variaveis.

-Podem começar com LETRA, $ ou _
-Não podemos começar com NÚMEROS
-É possivel usar LETRAS ou NÚMEROS
-É possivel usar ACENTOS e SÍMBOLOS
-Não podem conter ESPAÇOS
-Não podem ser PALAVRAS RESERVADAS (comandos existentes)

_________________________________________________________________________
 
--VARIAVEIS

--VAR
Existem muitos tipos de variaveis para se usar no JS, mas por enquanto, vamos ver apenas as que podemos intitular de 'var' e como funcionam. Por exemplo, quando quiser guardar algo dentro de uma var, ela deve ser colocada no começo como "var nome = window.prompt('Qual seu nome?')" Nesse caso, ela ja esta atribuida ali. Então, o resutado da ação feito pelo usuario, ficará dentro da 'var'.

nessse caso, 'var nome' é o nome da variavel. 

E para usar a avriavel quando for neccessario, deverá fazer uma concatenação, que é quando usamos a variavel para apresentar a informação guardada. E isso pode ser feito dessa maneira:
window.alert('É um grande prazer te conhecer,' + nome)

Veja que depois do texto da string, fora dela, temos um '+' que é a concanetação, e o nome da variavel. Dessa maneira, esta acontecendo uma concatenação da adição da varivel no comando.

E caso queira acrescentar mais texto depoisa da variavel, também é possivel. Basta adicionar " + 'adicone aqui o texto' " e assim é feita mais uma junção.

Agora algo importante, caso você tente fazer a var n1, somar com a var n2, ao inves de ela somar os numeros através de um comando como prompot por exemplo, como por exemplo 2+2, ela não vai somar, e sim fazer ser 22, ao invés de 4. Isso porque o + não foi usado para soma, e sim para concatenação. Isso porque ele cosiderou o resultado como string, e não o tipo numerico como adição. Ja uqe o + serve para concatenação em caso de string, e adição para o caso numerico.
_________________________________________________________________________

--CONVERÇÃO 
Temos que converter para numeros. Chamada de converção de tipo. Nisso vamos utilizar o:

Number.parselnt() no caso de numeros inteiro.
Number.parseFloat() no caso de numeros reais.

Ou, podemos usar apenar o Number, que irá decidir sozinho se o numero é inteiro ou real. Nesse caso, iria funcionar assim.

var n1 = Number(window.prompt('Digite um numero: '))
var n2 = Number(window.prompt('Digite outro numero: '))

Pronto, agora estão convertidos para numeros e não strings. Agora os calculos serão mátematicos.

E para converter numeros para string? Simples, é feito da mesma maneira. Mas ao invés de Number, iremos usar String.

Agora vamos ver um exemplo de uma conta de soma.

var n1 = Number(window.prompt('Digite um numero'))
var n2 = Number(window.prompt('Digite outro numero'))
var s = n1 + n2
window.alert('A soma dos valores é ' + s)

Ai está. Ele ira pegar os numeros ditos pelo usuario e os somar, guardando o resultado em uma var e depois o mostrando. Esse caso foi feito com soma, mas também pode ter outras expressões númericas.

No caso para converter string, temos que usar String(n), ou colocamos o que queremos convereter em n.toString()

--OS OPOERADORES NUMERICOS EM JS;
+ para a soma
- para a subtração
* para a multiplicação
/ para a divisão real
% para a divisão inteira
** para achar o quadrado do numero.

Um lembrete é que, uma ordem de operadores sempre será realizada primeiro, idependente dos que forem colocados primeiro, para os dar prioridade e manter a ordem desejada, deve os ccolocar em ()

A ordem de precedência dos operadores sempre será: () , **

* , / , % , tem a mesma precendência, nesse caso, quem aparecer primeiro, será feito primeiro.

e por último, ele fará + e -

_______________________________________________________________________

--OPERADORES ATRIBUIÇÃO
As variaveis são como 'as vagas de um carro' porque sempre que sai uma, vem outra, se N valia 3, e foi feito que N = N + 4, N tera o valor atribuido para o novo valor desse resultado, e assim por diante. Isso se chama auto-atribuição. Isso só funciona caso a mesma variavel receba ela mesma.

E tambêm temos o n++, que adiciona um numero a mais, se antes era 1, passa a valer 2. E o mesmo vale para o n--. Mas tambêm existe outra vertente que é --n, e ++n, que ja adiciona o valor no momento exato, diferente de n++ que leva um comando a mais para ser efetuado. Mas isso será visto e aprendido melhor mais para frente.

_______________________________________________________________________

--OPERADORES RELACIONAIS
São os famosos:
> = Maior
< = menor
>= = maior ou igual
<= = menor ou igual
== = igual
!= = diferente

_______________________________________________________________________

--OPERADORES DE IDENTIDADE
=== = é quando é o mesmo valor e tipo de dado. Se forem iguais ele mostrara 'true'. Exemplo, separar string de numero.

!== = esse é o desigual restrito, que mostra se os tipos são didferentes, oU que tenham o mesmo valor. Se forem desiguais ele mostrata 'true' como exemplo, separar string de numero.

_______________________________________________________________________


--OPERADORES LÓGICOS
! = negaçaõ (ou vai dar false ou true)
&& = conjunção (Se tiver algum false na linha, será false)
|| disjunção (se tive algum true na linnham será true.)

Se em uma linha forem colocados operadores aritmeticos, releacionais e lógicos, a ordem será, (aritmeticos, relacionais e lógicos.) 

E caso a ordem de execução da conta seja (!, &&, ||) será feita na ordem de !, &&, ||.

_______________________________________________________________________


--ORDEM DE PRECEDENCIA DESSA BAGAÇA TODA!!!
aritmeticos 
relacionais
lógicos

______________________________________________________________________

--TERNÁRIO
?
:
Aqui podemos ver o conceito de 'VERDADEIRO' ou 'FALSO', onde o ? vai ser a verdadiro e o : falso. Tudo irá depende da questão para esse resultado. (Eu não entendi muito bem essa parte, mas espero entende com o tempo e experiencia.) È uma questão parecida com IF e ELSE.

_________________________________________________________________________

--TIPOS DE DADOS

tipos primordiais:

number:  números
string:  palavras
boolean:  verdadeiro ou falso
 
_________________________________________________________________________


MACETE: O comadno typeof mostra qual o tipo do dado que você quer ver.-

_________________________________________________________________________

--CONDIÇÕES

Os famosos if ou else.

if = se
else = senao

Aqui temos u exemplo de como isso fnciona:


var hora = 8
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa atrde!')
} else {
    console.log('Boa noite!')
}

É facil de entender caso preste atenção.

E aqui vemos mais um exemplo onde temos um novo comando que mostra ahora eta do computador da pessoa.

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa atrde!')
} else {
    console.log('Boa noite!')
}

Agora veja essse exemplo, o Brake. Ele serve para quebrar, ou melhor, para pausar. Veja o exemplo.


var agora = new Date()
var diaSem = agora.getDay()

--SWITCH

O switch serve para quando o if não é necessario, ou seja,quando alguns resultados ja estão prontos e são simples e valores pontuais.Só funciona com numeros inteiros e caracteres, como strings. Veja o exemplo.

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3: console.count9('Quarta')
        break
    case 4: console.log('Quinta')
        break
    case 5: console.log('Sexta')
        break
    case 6: console.log('Sabado')
        break    
}

Caso o Break não estivesse ali, todos os resultados iriam sair uma atras do outro, sendo que com ele, se um resultado ja estiver confirmado, fiacra apenas nele. Será a lionha final. Por exemplo:

Se o resultado foe segunda, ele entregára esse resultado e irá parar, caso não tiver o Break, ele i´ra continuar a passar os resultados que ainda existem.

Lembrando que os nmeros começam a partir do 0. 

_________________________________________________________________________

Os laços de repetição serevm para fazer um comando ser execuad enquanto (while) ele for verdadeiro, o fazendo se repetir enquanto aquela condição estiver ocorrendo, e quando ela para, o ciclio termina, assim termiando a função.

O for serve para a mesma função, porem um pouco diferente, nele, as coisas são simplificadas e na maior parte, tem apenas 3 fases, que são essas aqui:

for(   ;     ;    )

Primeiro ele pega a iniciação, que é a variavel que ele vai iniciar, 
depois ele pega o teste lógico, e por ultimo, o incremento. Veja o exemplo:

for(var c = 1;c <= 5;c++

)

Isso é apenas um exemplo de código, mas funciona asssim.


*/



