import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react'; 
import './Search.css';

const Search = () => {

    const [value,setValue] = useState();

    const onChange = (e) => {
       setValue(e.target.value)
    }

    return(
        <input
           data-testid = "search-input"
           className="search-button"
           value={value}
           onChange={onChange}
           placeholder="25 milyon’dan fazla ürün içerisinde ara"
        />
    )

}

export default Search;