import React from 'react';

const Form = ( ingredients ) => {
    return (
    <div className="data">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          { (ingredients.length > 0) ? ingredients.map( (ingredients, index) => {
             return (
              <tr key={ index }>
                <td>{ ingredients.id }</td>
                <td>{ ingredients.name }</td>
              </tr>
            )
           }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      </table>
      </div>
    );
  }
  export default Form