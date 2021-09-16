import React from 'react';


const Field = ({item, field, label}) => {
  console.log(item);
const    showDataAvailable = data => {
            if (!data ) {
                  return "no data available"
            } else {
                  return data
            }
        }

   return (
      <li className="list-group-item d-flex justify-content-between">
         <span className="term">{label}</span>
         <span>{item[field]}</span>
      </li>
   );
}
export default Field;