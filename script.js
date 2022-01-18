const firstArr = ['Breaking news:', 'The Sun reports:', 'The Guardian headline:', 'Today in the news:', 'My teacher told me that:'];

const secondArr = ['The secret to a lasting marriage is comunication, comunication and', 'Only two things in life are certain: death and', 'The healing process began when I joined a support group for victoms of',
'A succesful job interview starts with a firm handshake and ends with', 'It is a pity that kids these days are all involved with', 'In Rome, there are whispers that the Vatican has a secret Room devoted to',
'Next from J.K. Rowling: Harry Potter and the Chamber of'];

const thirdArr = ['spending lots of money.', 'a really cool hat.', 'drinking alone.', 'my ex-wife.', 'Stalin.', 'Vladimir Putin.', 'Santa Claus.', 'the American Dream.', 'the economy.', 'not wearing pants.',
 'Italians.', 'soup that is too hot.', 'the World of Warcraft.', 'Jesus.', 'shaking the baby until it stops crying.', 'puppies!', 'seeing my father cry.', 'being a woman.', 'the Russians.',
'destroying the evidence.', 'Lady Gaga.', 'extremely tight jeans.', 'the true meaning of Christmas.', 'shiny objects.', 'Robert Downey Jr.'];

function randomMessage() {
    const firstRandSel = firstArr[Math.floor(Math.random() * firstArr.length)]
    const secondRandSel = secondArr[Math.floor(Math.random() * secondArr.length)]
    const thirdRandSel = thirdArr[Math.floor(Math.random() * thirdArr.length)]

    const fStatement = (arrOne, arrTwo, arrThree) => arrOne + ' ' + arrTwo + ' ' + arrThree;

    const output = fStatement(firstRandSel, secondRandSel, thirdRandSel);
    const htmlTag = document.getElementById('random-message');

    htmlTag.innerHTML = output;
};

randomMessage();