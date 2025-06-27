import { useState } from 'react';
import useaxiospublic from '../../Hook/useaxiospublic';
import { toast } from 'react-toastify';
import Dyportfolio from './Dyportfolio';

const DynamicPortfolio = () => {
    const [fields, setFields] = useState([]);
    const [newField, setNewField] = useState({
        type: '',
        name: '',
        alt: ''
    });

    const axiospublic = useaxiospublic();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewField(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddField = (e) => {

        e.preventDefault();
        if (newField.type && newField.name && newField.alt) {
            setFields(prev => [...prev, newField]);
            setNewField({
                type: '',
                name: '',
                alt: '',
            });
            axiospublic.post('/portfolio', newField)
                .then(response => {
                    console.log("portfolio Data submitted successfully:", response.data);
                    toast.success("portfolio Data submitted successfully!");
                })
                .catch(error => {
                    console.error("Error submitting data:", error);
                    toast.error("Failed to submit portfolio Data.");
                });


        } else {
            alert('Please fill all fields');
        }
    };


    return (
        <div className='bg-[#F3F4F6] h-full pt-20 px-5'>
            <div className=" w-2xl mx-auto bg-white p-5 rounded-2xl">
                <h2 className="text-xl font-semibold mb-4">Add New Field</h2>

                <div className="space-y-4">


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                        <input
                            type="text"
                            name="type"
                            value={newField.type}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter type (e.g., food)"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image (URL from imagebb or other )</label>
                        <input
                            type="text"
                            name="name"
                            value={newField.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter image URL"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
                        <input
                            type="text"
                            name="alt"
                            value={newField.alt}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter alt text"
                        />
                    </div>

                    <button
                        onClick={handleAddField}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Add Field
                    </button>
                </div>

                {fields.length > 0 && (
                    <div className="mt-8">
                        <h3 className="text-lg font-medium mb-2">Added Fields</h3>
                        <div className="space-y-4">
                            {fields.map((field, index) => (
                                 <div
                                 key={index}
                                 className="bg-white rounded-lg shadow p-4 space-y-3"
                             >
                                 <img
                                     src={field.name}
                                     alt="Card"
                                     className="w-1/2 mx-auto  object-cover rounded"
                                 />
                                 <h3 className="text-xl font-semibold">Type: {field.type}</h3>
                                 <p className="text-gray-700">Alt : {field.alt}</p>
                             </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className='py-5'>
                <Dyportfolio/>
            </div>
        </div>
    );
};

export default DynamicPortfolio;