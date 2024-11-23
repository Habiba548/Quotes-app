var Quote = [

    {
        text: ' “Be yourself; everyone else is already taken.” ',
        author: '― Oscar Wilde',
    },

    {
        text: ' “You only live once, but if you do it right, once is enough.” ',
        author: '― Mae West',
    },

    {
        text: ' “Be the change that you wish to see in the world.” ',
        author: '― Mahatma Gandhi',
    },
    {
        text: ' “A friend is someone who knows all about you and still loves you.” ',
        author: '― Elbert Hubbard',
    },


]

// console.log( Quote );

var prevrandem;

function generateQuote() {

    var random = Math.floor(Math.random() * Quote.length)


    document.getElementById('quoteText').innerHTML= Quote[random].text  ;
    document.getElementById('quoteAuthor').innerHTML =Quote[random].author ;
}

