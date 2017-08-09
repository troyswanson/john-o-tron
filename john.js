var nouns = [
  'My eyes are',
  'The TV is',
  'The sun is',
  'I am',
  'My fingers are',
  'My controller is',
  'My hotel room is',
  'My breakfast was',
  'My feet are',
  'My nose is',
  'Final Destination is',
  'Randall is',
  'My chair is',
  "Hyrule's tornado is",
  "Zero Suit's armor pieces are",
  'Your character is',
  'That MU is',
  'My hands are',
  'M2K is',
  'PC Chris is',
  'KDJ is',
  'Mang0 is',
  'hungrybox is',
  'Hugs is',
  'D1 is',
  'pr0g is',
  'My girlfriend is'
];

var problems = [
  'too sweaty',
  'too small',
  'too big',
  'too loud',
  'too loose',
  'in my eyes',
  'tired',
  'too bright',
  'in pain',
  'too stuffy',
  'too late',
  'unfair',
  'too laggy',
  'OP',
  'too cold',
  'too slippery',
  'too cheap',
  'too random',
  'too far',
  'too smelly',
  'broken',
  'too easy',
  'creeping up behind me'
];

var shuffle = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = function () {
  return shuffle(nouns) + ' ' + shuffle(problems) + '.';
};