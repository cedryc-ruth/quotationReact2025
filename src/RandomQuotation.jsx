import { useState } from 'react';
import {quotes, authors} from './data.js'
import QuotationList from './QuotationList.jsx';

function RandomQuotation() {
    const [citations, setCitations] = useState('');

    let authorNames = Object.keys(authors);

    const [editedAuthorName, setEditedAuthorName] = useState('');

    const handleChange = () => {
        let value = document.getElementById('author').value;
        let name = value=='' ? '' : value[0].toUpperCase()+value.slice(1).toLowerCase();
        
        setEditedAuthorName(name);
    };

    const handleClick = function(type) {
        if(type!='all' && type==citations) {
            setCitations(type+'1');
        } else {
            setCitations(type);
        }
    };

    return <section>
        <div>
            <label htmlFor="selectedAuthor">Auteur</label>
            <select id="selectedAuthor" name="selectedAuthor">
                <option></option>
                { authorNames.map((name) => <option key={name}>{name}</option>) }
            </select>
        </div>
        <div>
            <label htmlFor="author">Auteur</label>
            <input type="texte" id="author" name="author" value={editedAuthorName} onChange={handleChange} />
        </div>
        <div>
            <input type="checkbox" id="showPicture" name="showPicture" /><label htmlFor="showPicture">Afficher la photo de l'auteur</label>
        </div>
        <div>
            <button id="btAllQuotations" onClick={function() {handleClick("all")}}>Afficher toutes les citations</button>
            <button id="btRandomQuotation" onClick={function() {handleClick("random")}}>Afficher une citation au hasard</button>
            <button id="btRandomQuotationByAuthor" onClick={function() {handleClick("authorRandom")}}>Afficher une citation de l'auteur mentionné</button>
        </div>
        <div id="citations">{citations}
            {citations=='all' && <QuotationList /> }
            {citations.startsWith('random') && <QuotationList shuffle="true" count="1" /> }
            {citations.startsWith('authorRandom') && <QuotationList shuffle="true" author={editedAuthorName} count="1" /> }
        </div>
    </section>;
}

export default RandomQuotation;