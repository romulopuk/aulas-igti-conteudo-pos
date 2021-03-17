let recipes = [];

const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

async function start() {
  const resources = await fetch('http://localhost:3001/recipes');
  const json = await resources.json();
  recipes = json;

  const answers = [];

  answers.push(question01());
  answers.push(question02());
  answers.push(question03());
  answers.push(question04());
  answers.push(question05());
  answers.push(question06());
  answers.push(question07());
  answers.push(question08());
  answers.push(question09());
  answers.push(question10());

  for (const [index, answer] of answers.entries()) {
    const style =
      index % 2 === 0
        ? 'backgroundColor: black; color: white'
        : 'backgroundColor: black; color: orange';

    console.log(
      `%c Questão ${(index + 1).toString().padStart(2, '0')}: ${answer}`,
      style
    );
  }
}

function question01() {
  /**
   * Questão 01: Quantas receitas existem ao todo?
   */
  return recipes.length;
}

function question02() {
  /**
   * Questão 02: Qual é a média de preços das receitas?
   */
  let count = 0;

  for ( let i = 0; i < recipes.length; i++) {
    let indexPrice = recipes[i].price;
    count = count + indexPrice
  }
    let average = (count / recipes.length).toFixed(2);
  return average;
}

function question03() {
  /**
   * Questão 03: Qual é a receita mais cara e o seu preço?
   * Dica 01: formate o número obtido com o moneyFormatter, declarado
   * no início deste arquivo
   */
  let priceArray = [];
  let maxValue;
  let maxNameValue;
  let fullAnswer;

  for (let i = 0; i < recipes.length; i++) {
    let indexPrice = recipes[i].price;
    priceArray.push(indexPrice);
  }

  maxValue = Math.max.apply(null, priceArray);

  for (let j = 0; j < recipes.length; j++) {
    let findingPrice = recipes[j].price === maxValue;
    
    if (findingPrice) { 
      maxNameValue = recipes[j].title;
    }
  }

  fullAnswer = maxNameValue+ ' -- ' +moneyFormatter.format(maxValue);
  return fullAnswer;
}

function question04() {
  /**
   * Questão 04: Qual é a receita que possui mais ingredientes? Mostre também a
   * quantidade de ingredientes desta receita
   */
  let showIngr;
  let moreIngr;
  let ingredientArray = [];
  let recipeName;

  for (let i = 0; i < recipes.length; i++) {
    showIngr = recipes[i].ingredients.length;
    ingredientArray.push(showIngr);
    moreIngr = Math.max.apply(null, ingredientArray);
  }

  for (let j = 0; j < recipes.length; j++) {
    showIngr = recipes[j].ingredients.length;
    if (showIngr === moreIngr) {
      recipeName = recipes[j].title;
    }
  }

  let result = recipeName+ ' - ' +moreIngr+ ' ingredientes.';

  return result;
}

function question05() {
  /**
   * Questão 05: Liste todos os ingredientes distintos considerando todas
   * as receitas. Liste os ingredientes separados por ', '.
   * Dica 01: pesquise por array.flat()
   * Dica 02: pesquise por array.join()
   * Dica 03: pesquise por Set em JavaScript e faça a re-conversão
   * para array com Array.from
   */

   let showIngr;
   let newArrayIngr = [];
   let flatArray;
   let arraySet = new Set();
   let cleanArraySet = [];
   let arraySetJoin = [];

   for (let i = 0; i < recipes.length; i++) {
    showIngr = recipes[i].ingredients;
    newArrayIngr.push(showIngr);
    flatArray = newArrayIngr.flat();
   }

   for (let j = 0; j < flatArray.length; j++) {
    arraySet.add(flatArray[j]);
   }
   
   for (let item of arraySet) {
    cleanArraySet.push(item);
   }
   
   arraySetJoin = cleanArraySet.join(', ');
   
  return arraySetJoin;
}

function question06() {
  /**
   * Questão 06: existe algum ingrediente que aparece em todas as receitas?
   * Em caso afirmativo, informe-o(os).
   * Dica 01: reaproveite funções já implementadas
   * Dica 02: utilize array.every
   * Dica 03: utilize arrey.forEach
   * Dica 04: pesquise pelo método array.includes
   * Dica 05: pesquise pelo método array.split
   */
  let showIngr;
  let newArrayIngr = [];
  let flatArray;
  let arraySet = new Set();
  let cleanArraySet = [];
  let oneInAll;

  for (let i = 0; i < recipes.length; i++) {
   showIngr = recipes[i].ingredients;
   newArrayIngr.push(showIngr);
   flatArray = newArrayIngr.flat();
  }

  for (let j = 0; j < flatArray.length; j++) {
   arraySet.add(flatArray[j]);
  }
  
  for (let item of arraySet) {
   cleanArraySet.push(item);
  }
  
  for (let item of cleanArraySet) {
    let counter = null;
    for (let index = 0; index < recipes.length; index++) {
      let buscaIndex = recipes[index].ingredients;
      if (buscaIndex.includes(item)) {
        counter = counter + 1;
        if (counter === recipes.length) {
          oneInAll = item;
        } 
      }
    }
  }

  return oneInAll;
}

function question07() {
  /**
   * Questão 07: Quantas receitas possuem "uva" como ingrediente?
   * Dica 01: pesquise pelo método array.includes
   */
  let item = 'uva';
  let counter = null;

  for (let index = 0; index < recipes.length; index++) {
    let buscaIndex = recipes[index].ingredients;
    if (buscaIndex.includes(item)) {
      counter = counter + 1;
    }
  }

  return counter;
}

function question08() {
  /**
   * Questão 08: Quantas receitas possuem "abóbora" e "aveia" como ingredientes?
   * Dica 01: pesquise pelo método array.includes
   */
  let itemA = 'abóbora';
  let itemB = 'aveia';
  let counter = null;

  for (let index = 0; index < recipes.length; index++) {
    let buscaIndex = recipes[index].ingredients;
    if (buscaIndex.includes(itemA) && (buscaIndex.includes(itemB))) {
        counter = counter + 1;
    }
  }

  return counter;
}

function question09() {
  /**
   * Questão 09: Um determinado cliente quer comprar 2 itens de cada receita
   * que contenha "calabresa" com ingrediente. Quanto ele vai pagar?
   */
  let itemA = 'calabresa';
  let counter = null;
  let priceArray = [];
  let addingPrice = 0;
  let doublePriceFix = 0;

  for (let index = 0; index < recipes.length; index++) {
    let buscaIndex = recipes[index].ingredients;
    if (buscaIndex.includes(itemA)) {
      let indexPrice = recipes[index].price;
      priceArray.push(indexPrice);
    }
  }

  for (let i = 0; i < priceArray.length; i++) {
    addingPrice = addingPrice + priceArray[i]; 
  }

  doublePriceFix = moneyFormatter.format(addingPrice.toFixed(2) * 2);
  return doublePriceFix;
}

function question10() {
  /**
   * Questão 10: Qual seria o faturamento bruto mensal se fossem vendidos,
   * durante um mês, 3 itens de cada receita?
   */
  let priceArray = [];
  let addingPrice = 0;
  let triplePriceFix = 0;

  for (let index = 0; index < recipes.length; index++) {
    let indexPrice = recipes[index].price;
    priceArray.push(indexPrice);
  }

  for (let i = 0; i < priceArray.length; i++) {
    addingPrice = addingPrice + priceArray[i]; 
  }

  triplePriceFix = moneyFormatter.format(addingPrice.toFixed(2) * 3);
  return triplePriceFix;
}

start();
