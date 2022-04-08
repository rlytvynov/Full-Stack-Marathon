let { AvengerQuote } = require('./AvengerQuote');
let { Comment } = require('./Comment')

let blackWidow = new AvengerQuote(1, 'BlackWidow', 'Just do it!', ['widow1.jpg', 'widow2.jpg'], '24-02-2022', new Comment('01-10-2021', "KAMPUS KAKAHA").getComment())
let spiderMan = new AvengerQuote(2, 'SpiderMan', 'Just do it!', ['spider1.jpg', 'spider2.jpg'], '24-02-2022', new Comment('03-04-2020', "KOROBKA WINDOWS").getComment())
let hulk = new AvengerQuote(3, 'Hulk', 'Just do it!', ['hulk1.jpg', 'hulk2.jpg'], '24-02-2022', new Comment('17-09-2022', "O, MINA, NIHUYA").getComment())
let thor = new AvengerQuote(4, 'Thor', 'Just do it!', ['thor1.jpg', 'thor2.jpg'], '24-02-2022', new Comment('18-10-2019', "KITAY LOH").getComment())
let ironMan = new AvengerQuote(5, 'IronMan', 'Just do it!', ['ironman1.jpg', 'ironman2.jpg'], '24-02-2022', new Comment('23-11-2017', "SKUCHNO").getComment())
let venom = new AvengerQuote(6, 'Venom', 'Just do it!', ['venom1.jpg', 'venom2.jpg'], '24-02-2022', new Comment('21-05-2013', "YANUKOVICH TOP!!!").getComment())

module.exports.data = [
  blackWidow,
  spiderMan,
  hulk,
  thor,
  ironMan,
  venom
];
