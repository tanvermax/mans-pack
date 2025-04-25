import React from 'react';
import AllNews from '../../Component/Newspaert/Allnews';

const Knowledge = () => {
    return (
        <div className='py-10'>
          <div className='w-10/12 mx-auto mt-5 grid grid-cols-5'>
            <h3 className='text-4xl uppercase col-span-2 font-bold'>knowledge panel</h3>
            <p className='col-span-3 text-blue-900 font-medium'>Our blog is dedicated to providing valuable insights and information on all things related to printing and packaging. Our team of experts has a wealth of knowledge and experience in the industry, and they are passionate about sharing their insights and expertise with you.</p>
          </div>
            <AllNews></AllNews>
        </div>
    );
};

export default Knowledge;