import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import Navbar from './Navbar';

function CategoriesLists() {
    const [data, setData] = useState();


    useEffect(() => {
        fetch('https://dummyjson.com/products/category-list')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    if (!data) {
        return <p className="text-center text-2xl">Loading...</p>;
    }

    return (
        <>
            <ContentWrapper>
                <Navbar/>
            </ContentWrapper>
            <div className='px-20 mb-10'>
                <h1 className='text-2xl mb-6'>Shop by All Categories</h1>
                <div className='grid grid-cols-4 gap-6'>
                    {data?.map((products, index) => (
                        <Link to={`/category/${products}`}
                            className='border rounded-lg bg-red-600 text-neutral-100 text-xl text-center py-4 px-6 hover:bg-black shadow-lg transition duration-300'
                            key={index}
                        >
                            {products}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );

}

export default CategoriesLists;
