import axios from 'axios';



function BuyGroceries(props) {

    axios({
        method: 'PUT',
        url: `/list/:${props.id}`,
        data: props.id
    })
    .then(response => {
        console.log('You bought an item:', response );
        props.getGroceries();
    })
    .catch(error => {
        console.log('Something went wrong buying item:', error);
    })


    return(
        <button data-id={props.id}>Buy</button>
    )
}

export default BuyGroceries;