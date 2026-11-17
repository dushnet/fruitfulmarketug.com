'use client' 
import {useState} from 'react';
export default function MyFooter({...props}){

  return (<footer role ='contentinfo' {...props} className='bg-gray-900 text-white py-4 px-6'>
    <div className='container mx-auto text-center'>
      <p className='text-sm'>
        &copy; {new Date().getFullYear()} fruitful market ug. All rights reserved.
      </p>
    </div>
  </footer>)
}