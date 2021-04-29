import axios from 'axios';


function ShoppingList() {

    axios({
        method: 'GET',
        url: '/list'
    })
    .then(response => {
        console.log('You got items from the server:', response.data);

    })
    .catch(error => {
        console.log('Something went wrong with GET:', error);

    })


    return(
        <div>

        </div>

    )
}


export default ShoppingList;