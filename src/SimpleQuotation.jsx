import {quotes} from './data.js'

function SimpleQuotation({quoteId, displayPicture}) {   console.log(quotes);
    let index = quotes.findIndex(quote => quote.id==quoteId)

    return <blockquote>
        <p>{quotes[index].id} - <em>{quotes[index].quote}</em> 
        { !displayPicture
            ? <> - <span style={ {fontSize:'0.8em', color: 'gray'} }>{quotes[index].author}</span></>
            : <figure style={{display:'inline-block',margin:'5px'}}>
                <img src='https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU' alt='photo' width="20" />
                <figcaption style={{lineHeight: '0.2em'}}><span style={ {fontSize:'0.8em', color: 'gray'} }>{quotes[index].author}</span></figcaption>
            </figure>
        }
        </p>
    </blockquote>;
}

export default SimpleQuotation