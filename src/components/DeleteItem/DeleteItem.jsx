import axios from 'axios';
import getGroceries from '../App/App.jsx';

function DeleteItem(prop) {
    function handleDelete() {
        deleteItem((this).data("id"))
    }
    function deleteItem() {
        axios({
            method: 'DELETE',
            url: '/list/{prop.id}'
        })
        .then( function (response) {
            getGroceries();
        })
        .catch( function(error) {
            alert('Error on deleting item.', error);
        });
    }
    return (
        <button class="delete-item" data-id={prop.id}>Delete!</button> 
    );
}


export default DeleteItem