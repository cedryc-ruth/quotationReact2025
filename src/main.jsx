import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Message from './Message.jsx'
import SimpleQuotation from './SimpleQuotation.jsx'
import QuotationList from './QuotationList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Message titre="Notification" date="jma">Composant affiché avec succès</Message>
    <Message>Information sans titre</Message>

    <h2>SimpleQuotation</h2>
    <SimpleQuotation quoteId="1" />

    <h2>Empty QuotationList</h2>
    <QuotationList />
    <h2>Shuffled QuotationList</h2>
    <QuotationList shuffle="false" /><hr />
    <h2>QuotationList of <em>Bob</em></h2>
    <QuotationList author="Bob" /><hr />
    <h2>QuotationList of <em>Fred</em></h2>
    <QuotationList author="Fred" /><hr />
    <h2>QuotationList of <em>Lydia</em></h2>
    <QuotationList author="Lydia" /><hr />
    <h2>QuotationList of <em>Andrew</em></h2>
    <QuotationList author="Andrew" />
    <h2>QuotationList of <em>Bob</em> - shuffle</h2>
    <QuotationList shuffle="true" author="Bob" />

    <h2>Count - 2</h2>
    <QuotationList count="2" />
    <h2>Count - 1</h2>
    <QuotationList count="1" />
    <h2>Count - 0</h2>
    <QuotationList count="0" />
  </StrictMode>,
)
