import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import bookData from './data.json'
import {BrowserRouter as Router} from 'react-router-dom'

console.log(bookData.results.books)//array that needs to be accessed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
  <React.StrictMode>
      <App bookData={bookData}/>
    </React.StrictMode>
</Router>
);
