import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import Navbar from './Navbar';



function bestsellersDisplay() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, [id]);

   
    return (
        <>
            <ContentWrapper>
                <Navbar/>
            </ContentWrapper>
            <div className='p-10'>
                <h1 className='text-4xl text-center mb-10'>Products in {category}</h1>
                <div className='grid grid-cols-4 gap-4'>
                    {products?.map((product) => (
                        <div key={product.id} className='p-4 border shadow-md'>
                            <img src={product.thumbnail} alt={product.title} className='h-40 w-full object-cover' />
                            <h3 className='mt-2 text-lg'>{product.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default bestsellersDisplay;
