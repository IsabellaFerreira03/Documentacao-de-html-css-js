/* 

OS OPOERADORES NUMERICOS EM JS;
 + para a soma
 - menos para a subtração
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

 ORDEM DE PRECEDENCIA DESSA BAGAÇA TODA!!!
 aritmeticos
 relacionais
 lógicos

_______________________________________________________________________

 TERNÁRIO
 ?
 :
 Aqui podemos ver o conceito de 'VERDADEIRO' ou 'FALSO', onde o ? vai ser a verdadiro e o : falso. Tudo irá depende da questão para esse resultado. (Eu não entendi muito bem essa parte, mas espero entende com o tempo e experiencia.) È uma questão parecida com IF e ELSE.

 _______________________________________________________________________


MACETE: O comadno typeof mostra qual o tipo do dado que você quer ver.-

_______________________________________________________________________

 COMANDOS.

 window.alert('') Cria uma janela com um aviso para o usuario na tela do site logo no inicio da entada ou em algum outro momento caso seja configurado.

 window.confirm('') Cria uma janela com uma pergunta e irá dar dois botões, uma para sim e uma para não para respinder a pergunta na tela.

 window.prompt('') Cria uma janela onde terá uma caixinha de texto para o usuario preencher cm a informção que foi pedida.


 _______________________________________________________________________

 ==VARIAVEIS

 VAR
 Existem muitos tipos de variaveis para se usar no JS, mas por enquanto, vamos ver apenas as que podemos intitular de 'var' e como funcionam. Por exemplo, quando quiser guardar algo dentro de uma var, ela deve ser colocada no começo como "var nome = window.prompt('Qual seu nome?')" Nesse caso, ela ja esta atribuida ali. Então, o resutado da ação feito pelo usuario, ficará dentro da 'var'.

 nessse caso, 'var nome' é o nome da variavel. 

 E para usar a avriavel quando for neccessario, deverá fazer uma concatenação, que é quando usamos a variavel para apresentar a informação guardada. E isso pode ser feito dessa maneira:

 window.alert('É um grande prazer te conhecer,' + nome)

 Veja que depois do texto da string, fora dela, temos um '+' que é a concanetação, e o nome da variavel. Dessa maneira, esta acontecendo uma concatenação da adição da varivel no comando.

 E caso queira acrescentar mais texto depoisa da variavel, também é possivel. Basta adicionar " + 'adicone aqui o texto' " e assim é feita mais uma junção.

 Agora algo importante, caso você tente fazer a var n1, somar com a var n2, ao inves de ela somar os numeros através de um comando como prompot por exemplo, como por exemplo 2+2, ela não vai somar, e sim dazer ser 22, ao invés de 4. Isso porque o + não foi usado para soma, e sim para concatenação. Isso porque ele cosiderou o resultado como string, e não o tipo numerico como adição. Ja uqe o + serve para concatenação em caso de string, e adição para o caso numerico.

Temos que converter para numeros. Chamada de converção de tipo. Nisso vamos utilizar o:

Number.parselnt() no caso de numeros inteiro.
Number.parseFloat() no caso de numeros reais.

Ou, podemos usar apenar o Number, que irá decidir sozinho se o numero é inteiro ou real. Nesse caso, iria funcionar assim.

var n1 = Number(window.prompt('Digite um numero: '))
var n2 = Number(window.prompt('Digite outro numero: '))

Pronto, agora estão convertidos para numeros e não strings. Agora os calculos serão mátematicos.

E para converter numeros para string? Simples, é feito da mesma maneira. Mas ao invés de Number, iremos usar String.


*/

var n1 = Number(window.prompt('Digite um numero: '))
var n2 = Number(window.prompt('Digite outro numero: '))










