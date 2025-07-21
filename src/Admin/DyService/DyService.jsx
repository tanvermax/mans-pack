import React, { useState, useEffect } from 'react';
import useaxiospublic from '../../Hook/useaxiospublic';
import DyServiceEdit from './DyserviceEdit';


const DyService = ({ serviceToEdit, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    id: '',
    service: '',
    heading: '',
    description: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const axiosPublic = useaxiospublic();

  // If editing, populate form with existing data
  useEffect(() => {
    if (serviceToEdit) {
      setFormData({
        service: serviceToEdit.service,
        heading: serviceToEdit.heading,
        description: serviceToEdit.description
      });
    } else {
      setFormData({
       
        service: '',
        heading: '',
        description: ''
      });
    }
  }, [serviceToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formData)

    try {
      // In a real app, you would upload the image first
      // For this example, we'll assume the image path is already correct
      
      if (serviceToEdit) {
        // Update existing service
        await axiosPublic.put(`/services/${formData.id}`, formData);

      } else {
        // Add new service
      const respose =   await axiosPublic.post('/service', formData);
      if (respose.data) {
        alert("data sumitted")
      }
      }

    //   onSuccess();
    } catch (error) {
      console.error('Error saving service:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" bg-white ">
     <div className='w-10/12 mx-auto bg-blue-50 p-10'>
     <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {serviceToEdit ? 'Edit Service' : 'Add New Service'}
      </h2>
      
      <form className='' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="heading">
            Service Title
          </label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
            Image Path (or upload new)
          </label>
          <input
            type="text"
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
          />
          <input
            type="file"
            id="imageUpload"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />
        </div>

        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Saving...' : serviceToEdit ? 'Update Service' : 'Add Service'}
          </button>
        </div>
      </form>
     </div>
      <DyServiceEdit/>
    </div>
  );
};

export default DyService;