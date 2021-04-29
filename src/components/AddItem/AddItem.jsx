import {useState} from 'react';
import Axios from 'react';

function AddItem() {

  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');

const handleSubmit = () => {
  event.preventDefault();
  console.log('click');
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