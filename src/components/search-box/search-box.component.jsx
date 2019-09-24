import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (  // destructuring props objekt
    <input
        className="my-3 form-control form-control-lg search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
)

// KAD SE NE BI KORISTIO DESTRUCTURING PROPS
// export const SearchBox = (props) => (  
//     <input
//         className="m-3"
//         type="search"
//         placeholder={props.placeholder}
//         onChange={props.handleChange}
//     />
// )