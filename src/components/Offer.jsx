import React from 'react'
import offerImg from "../assets/offer.png"

const Offer = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-10 bg-neutral-200 pt-5 px-40 '>
                <div>
                    <img src={offerImg} />
                </div>
                <div className='flex flex-col gap-5 justify-center'>
                    <h2 className=' font-bold text-4xl'> #OfferOfTheMonth</h2>
                    <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h2 className='text-4xl font-bold'>Just $35!!!</h2>
                </div>
            </div>
            <div className='flex justify-between py-14 bg-red-600 px-40'>
                <p className='text-3xl font-bold text-neutral-50'>GRAB THIS LIMITED TIME OFFER</p>
                <button className='font-semibold border rounded-2xl p-3 bg-red-600 text-neutral-50'>ORDER NOW &gt;&gt;</button>
            </div>
        </div>
    )
}

export default Offer;