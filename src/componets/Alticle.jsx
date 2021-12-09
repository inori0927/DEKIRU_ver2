import React from 'react';

const Alticle = (props) => {
   return (
       <div>
           <h2>{props.title}</h2>
           <label htmlFor="check">公開状態</label>
           <input type="checkbox" checked={props.isPublished} id="check" onClick={() => props.toggle()} />
       </div>
   )
};
export default Alticle;