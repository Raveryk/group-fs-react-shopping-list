import {useState} from 'react';
import axios from 'axios';

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
    quantity: Number(quantity),
    unit: unit}
  console.log(newItem);
  axios.post('/list', newItem)
  .then(response => {
    console.log('added new item to grocery list', response);
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

export default AddItem;