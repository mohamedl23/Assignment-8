var popular_quoats = [
    {
        quoat: `"Be yourself; everyone else is already taken."`,
        author: "--Oscar Wilde",
    },
    {
        quoat: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "--Marilyn Monroe",
    },
    {
        quoat: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
        author: "--Albert Einstein",
    },
    {
        quoat: `"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
        author: "--Albert Einstein",
    },
    {
        quoat: `"So many books, so little time."`,
        author: "--Frank Zappa",
    },
    {
        quoat: `"A room without books is like a body without a soul."`,
        author: "--Marcus Tullius Cicero",
    },
    {
        quoat: `"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."`,
        author: "--Bernard M. Baruch",
    },
    {
        quoat: `"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,
        author: "--Dr. Seuss",
    },
    {
        quoat: `"You only live once, but if you do it right, once is enough."`,
        author: "--Mae West",
    },
    {
        quoat: `"Be the change that you wish to see in the world."`,
        author: "--Mahatma Gandhi",
    },
]
var quote = document.getElementById("quote")
var author = document.getElementById("author")
function get_quoats() {
    var random = Math.floor(Math.random() * popular_quoats.length + 1);
    var deleteAndAdd = popular_quoats.splice(random, 1);
    quote.innerHTML = deleteAndAdd[0].quoat ;
    author.innerHTML = deleteAndAdd[0].author;
    popular_quoats.unshift(deleteAndAdd[0]);
};


