import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useaxiospublic from '../../Hook/useaxiospublic';
import { toast } from 'react-toastify';

const UpdateBanner = () => {
    const loadData = useLoaderData();
    const [formData, setFormData] = useState({
        image: loadData.image || '',
        heading: loadData.heading || '',
        description: loadData.description || ''
    });
    const axiospublic = useaxiospublic();

    console.log(loadData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {


          const response =   await axiospublic.put(`banner/${loadData._id}`, formData)
        
            // const result = await response.json();
            // console.log('Update successful:', response);
            if (response.status==200) {
                toast.success("Update successful")
            }
            // You might want to add a success message or redirect here
        } catch (error) {
            console.error('Error updating banner:', error);
            // Handle error (show error message, etc.)
        }
    };

    return (
        <div className='p-5 max-w-4xl mx-auto'>
            <h1 className='text-2xl font-bold mb-6'>Update Banner: {loadData._id}</h1>

            <form onSubmit={handleSubmit} className='space-y-4'>
                <div className='space-y-2'>
                    <label htmlFor='image' className='block text-sm font-medium text-gray-700'>
                        Image URL
                    </label>
                    <input
                        type='text'
                        id='image'
                        name='image'
                        value={formData.image}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        required
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='heading' className='block text-sm font-medium text-gray-700'>
                        Heading
                    </label>
                    <input
                        type='text'
                        id='heading'
                        name='heading'
                        value={formData.heading}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        required
                    />
                </div>

                <div className='space-y-2'>
                    <label htmlFor='description' className='block text-sm font-medium text-gray-700'>
                        Description
                    </label>
                    <textarea
                        id='description'
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
                        required
                    />
                </div>

                <div className='mt-6'>
                    <button
                        type='submit'
                        className='px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                        Update Banner
                    </button>
                </div>
            </form>

            <div className='mt-8 p-4 border rounded-lg'>
                <h2 className='text-lg font-semibold mb-3'>Preview:</h2>
                <div className='group-hover:blur-sm transition-all duration-200'>
                    <img
                        src={formData.image}
                        alt="Banner Preview"
                        className="w-full h-48 object-cover rounded"
                    />
                    <h3 className="text-xl font-semibold mt-2">{formData.heading}</h3>
                    <p className="text-gray-700">{formData.description}</p>
                </div>
            </div>
        </div>
    );
};

export default UpdateBanner;