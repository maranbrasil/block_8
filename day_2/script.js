// Ex. 1
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function authorBornIn1947() {
  return books.find((bookData) => bookData.author.birthYear === 1947).author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');

// Ex. 2
// Retorne o nome do livro de menor nome.

function smallerName() {
  let nameBook;
  books.forEach((bookData) => {
    if(!nameBook || bookData.name.length < nameBook.length) {
      nameBook = bookData.name;
    }
  })
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

// Ex. 3
// Encontre o livro cujo nome possui 26 caracteres.

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find((bookData) => bookData.name.length === 26);
}

assert.deepStrictEqual(getNamedBook(), expectedResult);

// Ex. 4
// Ordene os livros por data de lançamento em ordem decrescente.

const expectedResult1 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  return books.sort((bookDataA, bookDataB) => bookDataB.releaseYear - bookDataA.releaseYear)
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult1);

// Ex. 5
// Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

const expectedResult2 = false;

function everyoneWasBornOnSecXX() {
  return books.every((bookData) => bookData.author.birthYear >= 1901 && bookData.author.birthYear <= 2000);
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult2);

// Ex. 6
// Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

const expectedResult3 = true;

function someBookWasReleaseOnThe80s() {
  return books.some((bookData) => bookData.releaseYear >= 1980 && bookData.releaseYear <= 1989);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult3);

// Ex. 7
// Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.

const expectedResult4 = false;

function authorUnique() {
  return books.every((bookData) => {
    let age = [];
    if(!age || bookData.author.birthYear === age) {
      age = bookData.author.birthYear;
    }
  })
}

assert.strictEqual(authorUnique(), expectedResult4);
