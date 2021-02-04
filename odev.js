/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

const car = {
  registrationNumber: 'GA12345',
  brand: 'Toyota',
  displayDetails: function () {
    console.log(this.registrationNumber + ' ' + this.brand);
  },
};

// Cozum 1
const myCarDetails = car.displayDetails.bind(car);
myCarDetails();

// Cozum 2
const myCarDetails2 = () => {
  car.displayDetails();
};
myCarDetails2();

/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isValidName(name) {
  if (typeof name === 'string' && name !== '') {
    const words = name.split(' ');
    return words.every((word) => word.length >= 2);
  } else {
    return false;
  }
}

const tests = [
  'mehmet', // true
  'selcuk', // true
  'mehmet selcuk', // true
  'mehmet selcuk a', // false
  '', // false
  'a', // false
  'a  a', // false
  12, // false
  true, // false
  null, // false
  NaN, // false
  undefined, // false
  {}, // false
  [], // false
];

tests.map((element) => {
  console.log(`${element} = `, isValidName(element));
});

/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.


**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
};

function summary(genre, year) {
  console.log(
    `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
  );
}

// Cozum 1
summary.call(book, 'dystopian', 1932);
// Cozum 2.1
summary.apply(book, ['dystopian', 1932]);
// Cozum 2.2
const params = ['dystopian', 1932];
summary.apply(book, params);
// Cozum 3
const summaryBinded = summary.bind(book, 'dystopian', 1932);
summaryBinded();
