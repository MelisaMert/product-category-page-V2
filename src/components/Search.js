import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'; 
import { searchProducts } from "../redux/actions/ProductActions";
import './Search.css';

const Search = () => {

    const [search,setSearch] = useState("");
    const dispatch = useDispatch(); 

    useEffect(() => {
       dispatch(searchProducts(search))
    }, [search,dispatch])

    return(
        <input
           data-testid = "search-input"
           className="search-button"
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           placeholder="25 milyon’dan fazla ürün içerisinde ara"
        />
    )

}

export default Search;