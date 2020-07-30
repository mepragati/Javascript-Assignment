var quotes=['“Be yourself; everyone else is already taken.”― Oscar Wilde','“You only live once, but if you do it right, once is enough.”― Mae West','“Be the change that you wish to see in the world.”― Mahatma Gandhi','“In three words I can sum up everything I\'ve learned about life: it goes on.”― Robert Frost','“If you tell the truth, you don\'t have to remember anything.”― Mark Twain','“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard','“Always forgive your enemies; nothing annoys them so much.”― Oscar Wilde','“To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde','“Live as if you were to die tomorrow. Learn as if you were to live forever.”― Mahatma Gandhi','“I am so clever that sometimes I don\'t understand a single word of what I am saying.”― Oscar Wilde','“Insanity is doing the same thing, over and over again, but expecting different results.”― Narcotics Anonymous']

function newQuote()
{
    var rand = Math.floor(Math.random() * (quotes.length - 1));
    document.getElementById("quotes").innerHTML = quotes[rand];
}
