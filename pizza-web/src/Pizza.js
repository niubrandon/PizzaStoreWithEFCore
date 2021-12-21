import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PizzaFrame = styled.div`
    border: solid 1px gray;
    padding: 10px;
    margin: 15px 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px grey;
    font-family: Arial;
`;

const Input = styled.input`
    border: solid 1px black;
    padding: 5px;
    border-radius: 3px;
`;

const Title = styled(Input)`
    text-transform: uppercase;
`;

const Save = styled.button`
   width: 100px;
   margin: 10px;
   background: green;
   color: white;
   font-size: 16px;
   padding: 10px;
   border-radius: 5px;
`;
/* let pizzas = [{
   id: 1, name: 'Cheese pizza', description: 'very cheesy'
 },
 {
   id: 2, name: 'Al Tono pizza', description: 'lots of tuna'
}]; */

const Pizza = ({ pizza }) => {
  const [data, setData] = useState(pizza);
  const [dirty, setDirty] = useState(false);
 
  function update(value, fieldName, obj) {
    setData({ ...obj, [fieldName] : value });
    setDirty(true);
  }
 
  function onSave(e) {
    e.preventDefault();
    console.log("save button clicked");
    console.log(data);
    setDirty(false);
    // make rest call
    axios.put(`/pizza/${data.id}`,data)
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }
 
   return (
   <React.Fragment>
      <PizzaFrame>
        <h3>
          <Title onChange={(evt) => update(evt.target.value, 'name', data)} value={data.name} /> 
        </h3>
        <div>
          <Input onChange={(evt) => update(evt.target.value, 'description', data)} value={data.description} />
        </div>
        {dirty ? <div><Save onClick={onSave}>Save</Save></div> : null}
     </PizzaFrame>
   </React.Fragment>);
}

export default Pizza;