import axios from 'axios';
import {useState} from 'react';


function ShoppingList() {

    const [shoppingList, setShoppingList] = useState([])

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


    return(
        <div>
            <h1>Shopping List</h1>
            {shoppingList.map(item => 
                (<div key={item.id}>{item.name}{item.quantity}{item.unit} <DeleteItem id={item.id}/> </div>)
                ) }
        </div>

    )
}


export default ShoppingList;

