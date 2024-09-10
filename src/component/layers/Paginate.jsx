import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Db from '../../db.json'
import Item from './Item';
import Item2 from './Item2';



// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
//     41,42,43,44,45,46,47,48,49,50
// ];
console.log(Db);

const items = Db;

function Items({ currentItems }) {
    return (
        <>
            <div className="grid grid-cols-3 gap-[40px] pl-1">
                {currentItems &&
                    currentItems.map((item, index) => (
                        <div key={index}>
                            {/* <h3>{item.id}</h3> */}
                            <Item className=''
                        productid={item.id}
                        productTitle={item.title}
                        productImg={item.image}
                        productPrice={item.price}
                        productTag={item.tag}
                        productColor={item.color}
                      />
                        </div>
                    ))
                }
            </div>
        </>
    );
}


const Paginate = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default Paginate