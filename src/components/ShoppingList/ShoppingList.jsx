


function ShoppingList(props) {

    return(
        <div>
            <h1>Shopping List</h1>
            {props.shoppingList.map(item => 
                (<div key={item.id}>{item.name}{item.quantity}{item.unit} <DeleteItem id={item.id}/> <BuyGroceries id={item.id} /></div>)
                ) }
        </div>

    )
}


export default ShoppingList;

