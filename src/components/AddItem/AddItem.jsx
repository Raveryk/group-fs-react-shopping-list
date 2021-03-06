import {useState} from 'react';
import axios from 'axios';

// retrieves items from the form and adds them to the database
function AddItem( props ) {
  const getGroceries = props.getGroceries;

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  console.log(itemName);
const handleSubmit = () => {
  event.preventDefault();
  console.log('click');
  const newItem = {
    name: itemName,
    //converts quantity to a number
    quantity: Number(quantity),
    unit: unit}
  console.log(newItem);
  axios.post('/list', newItem)
  .then(response => {
    console.log('added new item to grocery list', response);
    //clears input and should prompt display render once function is working
    setItemName('');
    setQuantity('');
    setUnit('');
    getGroceries();
  })
  .catch(error => {
    console.log('Error adding new item', error);
    alert('unable to add new item to the list');
  })
  console.log(newItem);
}

//HTML for form used to input new items into shopping list
  return(
    <>
    <h2>Add an Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Item: </label>
        <input type="test" value={itemName} onChange={ (event) => setItemName(event.target.value)} /><br/>
        <label>Quantity: </label>
        <input type="text" value={quantity} onChange={ (event) => setQuantity(event.target.value)} />
        <label>Units: </label>
        <input type="text" value={unit} onChange={ (event) => setUnit(event.target.value)} /><br/>
        <button type="submit">Save</button>
      </form>
    </>
  )
}

//exports to be used in app.jsx
export default AddItem;