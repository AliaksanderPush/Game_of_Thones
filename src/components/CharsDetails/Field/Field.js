import React from 'react';


const Field = ({item, field, label}) => {
  
const    showDataAvailable = data => {
            if (data.length === 0 ) {
                  return "no data available"
            } else {
                  return data
            }
        }

   return (
      <li className="list-group-item d-flex justify-content-between">
         <span className="term">{label}</span>
         <span>{showDataAvailable(item[field])}</span>
      </li>
   );
}
export default Field;