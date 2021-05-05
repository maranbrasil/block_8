const dadosEmployee = (nome) => {                             // função primária
  const email = nome.toLowerCase().split(' ').join('_');
  const objeto1 = { nomeCompleto: nome,
                    email: `${email}@trybe.com`,
  }
  return objeto1
}
const newEmployees = (bummer) => { // função HOF
  const employees = {
    id1: bummer('Pedro Guerra'),
    id2: bummer('Luiza Drumond'),
    id3: bummer('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(dadosEmployee));

// ----------------------------------------------------------------------

const giveResult = () => {
  const number = Math.ceil(Math.random() * 4) + 1);
  return number;
}

const compareWith = (betNumber) => {
  if (betNumber === giveResult()) {
    return 'Parabéns você ganhou';
  }
  return 'Tente novamente';
}

console.log (compareWith(4));




const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));
