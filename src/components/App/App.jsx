import React, { useEffect } from 'react';
import Header from '../Header/Header.jsx'
import AddItem from '../AddItem/AddItem'
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList';
import axios from 'react';
import {useState} from 'react';


function App() {



    // const [shoppingList, setShoppingList] = useState([])
    // //function to get groceries from server

    // // useEffect(() => {
    // //     getGroceries()
    // //   }, [])


    // const getGroceries = () => {

    //     axios({
    //         method: 'GET',
    //         url: '/list'
    //     })
    //     .then(response => {
    //         console.log('You got items from the server:', response.data);
    //         //Setting shoppingList to retain data coming back from server.
    //         setShoppingList(response.data);
    //     })
    //     .catch(error => {
    //         console.log('Something went wrong with GET:', error);
    //     })

    
    // }

    // getGroceries();




    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>

            <ShoppingList />
            </main>
            <AddItem />
        </div>
    );
}

export default App;

// getGroceries={getGroceries}
