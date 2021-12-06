import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByBrand, filterByColor } from '../redux/actions/ProductActions';
import Sorter from './Sorter';
import './Filter.css';

const Filter = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);
    console.log('Products', products)
    const [brands, setBrands] = useState([]);
    const [colors, setColors] = useState([]);

    useEffect(() => {
        dispatch(filterByBrand(brands));
    }, [brands, dispatch])

    useEffect(() => {
        dispatch(filterByColor(colors));
    }, [colors, dispatch])

    const selectableFilters = {
        colors: [],
        brands: []
    }

    products.forEach(product => {
        if (!selectableFilters.brands.includes(product.brand)) {
             selectableFilters.brands.push(product.brand)
        }

        product.colors.forEach((color) => {
            if (!selectableFilters.colors.includes(color)) {
                selectableFilters.colors.push(color)
            }
        })
    })

    const createBrand = (brand) => {
        let brandList = [];

        if (!brands.includes(brand)) {
            brandList = [...brands, brand];
        } else {
            brandList = [...brands.filter(bra => bra !== brand)]
        }

        setBrands(brandList);
    }

    const createColor = (color) => {
        let colorList = [];

        if (!colors.includes(color)) {
            colorList = [...colors, color];
        } else {
            colorList = [...colors.filter(col => col !== color)]
        }

        setColors(colorList);
    }


    return (<>
        <div className="filter">
            <div>
                <p className="filter-header">Renk</p>
                {
                    selectableFilters.colors.map((color, i) => {
                        return (<span
                            key={i}
                            style={{ color: colors.includes(color) ? '#FF6000' : 'black' }}
                            onClick={() => {
                                createColor(color)
                            }}
                        >
                            {color}({products.filter((p) => p.colors.includes(color)).length})
                        </span>)
                    })
                }
            </div>
            <div>
                <p className="filter-header">Sıralama</p>
                <Sorter isDropdown={false} />
            </div>
            <div>
                <p className="filter-header">Marka</p>
                {selectableFilters.brands.map((brand, i) => {
                    return (<span
                       key={i}
                       style={{color: brands.includes(brand) ? '#FF6000' : 'black'}}
                       onClick={() =>  {
                           createBrand(brand)
                        }}
                    >
                       {brand}({products.filter((p) => p.brand === brand).length})
                    </span>)
                })}
            </div>
        </div>
    </>)


}

export default Filter;