import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import OrderCard from '../components/orders/OrderCard';
import BackButton from '../components/shared/BackButton';

const Orders = () => {
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden'>
      <div className='flex items-center justify-between px-10 py-4'>
        <div className='flex items-center gap-4'>
          <BackButton/>
          <h1 className='text-[#f5f5f5] text-2xl font-bold tracking-wide'>Orders</h1>
        </div>
        <div className='flex items-center justify-around gap-4'>
          <button className='text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold'>All</button>
          <button className='text-[#ababab] text-lg bg-[#383838] rounded-lg px-5 py-2 font-semibold'>In Progress</button>
          <button className='text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold'>Ready</button>
          <button className='text-[#ababab] text-lg rounded-lg px-5 py-2 font-semibold'>Completed</button>
        </div>
      </div>

      <div className='flex flex-wrap gap-6  px-44 py-4 overflow-y-scroll scrollbar-hide h-[calc(100vh-5rem-5rem)]'>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
      </div>

      <BottomNav/>
    </section>
  )
}

export default Orders