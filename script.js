const data = require("./data");
// Encontrar elemento em um array de objetos
function findBookByTitle(arrBooks, title) {
  for (let i = 0; i < arrBooks.length; i++) {
    if (arrBooks[i].title === title) {
      return arrBooks[i];
    }
  }
  return null;
}

function findBookByTitle2(arrBooks, title) {
  return arrBooks.find((book) => book.title === title);
}

function findBookByTitle3(arrBooks, title) {
  for (const book of arrBooks) {
    if (book.title === title) {
      return book;
    }
  }
  return null;
}
// Filtrar elementos de um array de objetos
function filterProductsByPrice(arrProducts, price) {
  const filteredProducts = [];
  for (const product of arrProducts) {
    if (product.price > price) {
      filteredProducts.push(product);
    }
  }
  return filteredProducts;
}

function filterProductsByPrice2(arrProducts, price) {
  return arrProducts.filter((product) => product.price > price);
}

// Contar a frenquencia de elementos de um array
function counterUniqueElements(arr) {
  const counter = {};
  for (const element of arr) {
    if (counter[element]) {
      counter[element]++;
    } else {
      counter[element] = 1;
    }
  }
  return counter;
}

function counterUniqueElements2(arr) {
  const counter = {};
  for (const elem of arr) {
    counter[elem] = (counter[elem] || 0) + 1;
  }
  return counter;
}

// Mesclar dois objetos
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

function mergeObjects2(obj1, obj2) {
  const mergedObject = {};
  for (let key in obj1) {
    mergedObject[key] = obj1[key];
  }
  for (let key in obj2) {
    mergedObject[key] = obj2[key];
  }
  return mergedObject;
}

// Filtrar elementos unicos de um array
function filterUniqueElements(arr) {
  return [...new Set(arr)];
}

function filterUniqueElements2(arr) {
  const uniqueElements = [];
  for (const elem of arr) {
    if (!uniqueElements.includes(elem)) {
      uniqueElements.push(elem);
    }
  }
  return uniqueElements;
}

// Verificar numeros primos
function isPrimo(num) {
  if (num < 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function isPrimo2(num) {
  if (num < 1) return false;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Inverter uma string
function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseString2(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Somas de Números Pares de um Array
function sumEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0).reduce((a, b) => a + b, 0);
}

function sumEvenNumbers2(arr) {
  let sum = 0;
  for (const num of arr) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

function sumEvenNumbers3(arr) {
  return arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);
}

// Calcular Fatorial de um Número

function factorialize(num) {
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

function factorialize2(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);
}

// Verifica se uma palavra é palindromo
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function isPalindrome2(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
}

console.log(findBookByTitle(data.books, "Book 2"));
console.log(findBookByTitle2(data.books, "Book 2"));
console.log(findBookByTitle3(data.books, "Book 2"));
console.log(filterProductsByPrice(data.products, 20));
console.log(filterProductsByPrice2(data.products, 20));
console.log(counterUniqueElements(data.elements));
console.log(counterUniqueElements2(data.elements));
console.log(mergeObjects(data.object1, data.object2));
console.log(mergeObjects2(data.object1, data.object2));
console.log(filterUniqueElements(data.arrayWithDuplicates));
console.log(filterUniqueElements2(data.arrayWithDuplicates));
console.log(isPrimo(data.primeNumber));
console.log(isPrimo2(data.primeNumber));
console.log(reverseString(data.palindromeString));
console.log(reverseString2(data.nonPalindromeString));
console.log(sumEvenNumbers(data.elements));
console.log(sumEvenNumbers2(data.elements));
console.log(sumEvenNumbers3(data.elements));
console.log(factorialize(5));
console.log(factorialize2(5));
console.log(isPalindrome(data.palindromeString));
console.log(isPalindrome2(data.nonPalindromeString));
