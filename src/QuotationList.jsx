import SimpleQuotation from './SimpleQuotation.jsx';
import {quotes} from './data.js'

function QuotationList({shuffle, author, count, displayPicture}) {
    //Filtrer par auteur
    //console.log(author)
    let filteredQuotes = author
        ? quotes.filter(function(quote) { return quote.author==author })
        : quotes

    //Limiter au count premiers résultats
    if(count!=undefined) filteredQuotes = filteredQuotes.slice(0,count)

    //Mélanger les citations (= Trier par ordre aléatoire)
    if(shuffle) quotes.sort((a,b)=>{ return Math.round((Math.random() * (1+1))+-1) })

    let cpt = filteredQuotes.length;

    return <>
        { filteredQuotes.map(quote => <SimpleQuotation key={quote.id} quoteId={quote.id} displayPicture={displayPicture} />) }
        { (count==undefined || count>1) && <p>Total : {count || cpt}</p> }
    </>;
/*  Solution 2
    return <>
        { quotes.map((quote, index) => {
                if(!author || quote.author==author) {
                    cpt++;

                    return (count==undefined ||cpt<=count) && <SimpleQuotation key={quote.id} quoteId={quote.id} />
                }
            })
        }
        { (count==undefined || count>1) && <p>Total : {count || cpt}</p> }
    </>;
*/
}

export default QuotationList