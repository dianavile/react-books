import React from 'react';

 function Book(props) {
    return (
    <div>
        <div style={{ paddingBottom:20, fontSize: 20 , fontWeight: 'bold'}}>{props.title}</div>
        <div >{props.author}</div>
        <br/>
   </div>
    )
};

export default Book;