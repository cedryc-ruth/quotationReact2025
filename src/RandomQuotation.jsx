import { useState } from 'react';
import {quotes, authors} from './data.js'
import QuotationList from './QuotationList.jsx';

function RandomQuotation() {
    const [citations, setCitations] = useState('');

    let authorNames = Object.keys(authors);

    const [editedAuthorName, setEditedAuthorName] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [displayPicture, setDisplayPicture] = useState(false);

    const handleChangeEdit = () => {
        let value = document.getElementById('author').value;
        let name = value=='' ? '' : value[0].toUpperCase()+value.slice(1).toLowerCase();
        
        //Mettre à jour le champ texte
        setEditedAuthorName(name);

        //Synchroniser le champ texte avec la liste déroulante (select)
        setSelectedAuthor(name.toLowerCase());
    };

    const handleChangeSelect = (e)=>{
        //Mettre à jour le select (choisir l'option correspondante)
        setSelectedAuthor(e.target.value);

        //Mettre à jour le champ texte
        setEditedAuthorName(e.target.value);
    };

    const handleClick = function(type) {
        if(type!='all' && type==citations) {
            setCitations(type+'1');
        } else {
            setCitations(type);
        }
    };

    const handleChangeCheckbox = (e) => {
        setDisplayPicture(!displayPicture);
    };

    return <section>
        <div>
            <label htmlFor="selectedAuthor">Auteur</label>
            <select id="selectedAuthor" name="selectedAuthor"
                value={selectedAuthor} 
                onChange={handleChangeSelect}>
                <option></option>
                { authorNames.map((name) => <option key={name}>{name}</option>) }
            </select>
        </div>
        <div>
            <label htmlFor="author">Auteur</label>
            <input type="texte" id="author" name="author" value={editedAuthorName} onChange={handleChangeEdit} />
        </div>
        <div>
            <input type="checkbox" id="showPicture" name="showPicture" onChange={handleChangeCheckbox} /><label htmlFor="showPicture">Afficher la photo de l'auteur</label>
        </div>
        <div>
            <button id="btAllQuotations" onClick={function() {handleClick("all")}}>Afficher toutes les citations</button>
            <button id="btRandomQuotation" onClick={function() {handleClick("random")}}>Afficher une citation au hasard</button>
            <button id="btRandomQuotationByAuthor" onClick={function() {handleClick("authorRandom")}}>Afficher une citation de l'auteur mentionné</button>
        </div>
        <div id="citations">{citations}
            {citations=='all' && <QuotationList displayPicture={displayPicture} /> }
            {citations.startsWith('random') && <QuotationList shuffle="true" count="1" /> }
            {citations.startsWith('authorRandom') && <QuotationList shuffle="true" author={editedAuthorName} count="1" /> }
        </div>
    </section>;
}

export default RandomQuotation;