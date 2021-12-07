import { React, useState } from 'react';
import './Pagination.css';

const Pagination = ({ pageSize, totalProducts, paginate }) => {
    const pageNumbers = [];
    const [activePage, setActivePage] = useState(1);


    for (let i = 1; i <= Math.ceil(totalProducts / pageSize); i++) {
        pageNumbers.push(i);
    }

    const className = (number) => {
        return number === activePage ? "pagination-active-item" : "pagination-item";
    }

    const onClick = (number) => {
        setActivePage(number);
        paginate(number);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li
                       key={number}
                       onClick={() => onClick(number)}
                       className={className(number)}
                    >
                    <a href='!#'>
                        {number}
                    </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;