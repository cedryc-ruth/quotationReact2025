import {quotes} from './data.js'

function SimpleQuotation({quoteId}) {   console.log(quotes);
    let index = quotes.findIndex(quote => quote.id==quoteId)

    return <blockquote>
        <p>{quotes[index].id} - <em>{quotes[index].quote}</em> 
        - <span style={ {fontSize:'0.8em', color: 'gray'} }>{quotes[index].author}</span></p>
    </blockquote>;
}

export default SimpleQuotation