import React, { useEffect } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList'
import axios from 'react';
import {useState} from 'react';


function App() {

    const [shoppingList, setShoppingList] = useState([])
    //function to get groceries from server
    const getGroceries = () => {

        axios({
            method: 'GET',
            url: '/list'
        })
        .then(response => {
            console.log('You got items from the server:', response.data);
            //Setting shoppingList to retain data coming back from server.
            setShoppingList(response.data);
        })
        .catch(error => {
            console.log('Something went wrong with GET:', error);
        })

    
    }



    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>

            <ShoppingList shoppingList={shoppingList} getGroceries={getGroceries}/>
            </main>
        </div>
    );
}

export default App;
