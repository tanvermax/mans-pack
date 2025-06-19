import React, { useState } from 'react';
import BannerEdit from './BannerEdit';
import useaxiospublic from '../../Hook/useaxiospublic';
import { toast } from 'react-toastify';

const Dynamicbanner = () => {
    const [formData, setFormData] = useState({
        image: '',
        heading: '',
        description: ''
    });
    const axiospublic = useaxiospublic();

    const [submittedData, setSubmittedData] = useState([]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSubmittedData(prev => [...prev, formData]);
        setFormData({ image: '', heading: '', description: '' });
        axiospublic.post('/banner', formData)
            .then(response => {
                console.log("Data submitted successfully:", response.data);
                toast.success("Banner Data submitted successfully!");
            })
            .catch(error => {
                console.error("Error submitting data:", error);
                toast.error("Failed to submit Banner Data.");
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-[#000A64] text-center">Home Banner Section</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Background Image (Imagebb link)"
                        className="w-full p-3 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="heading"
                        value={formData.heading}
                        onChange={handleChange}
                        placeholder="Head line"
                        className="w-full p-3 border rounded"
                        required
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="w-full p-3 border rounded"
                        rows={3}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-[#000A64] text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {submittedData.length > 0 && (
                <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {submittedData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow p-4 space-y-3"
                        >
                            <img
                                src={item.image}
                                alt="Card"
                                className="w-full h-48 object-cover rounded"
                            />
                            <h3 className="text-xl font-semibold">{item.heading}</h3>
                            <p className="text-gray-700">{item.description}</p>
                        </div>
                    ))}
                </div>
            )}

            <div className='pt-10'>
                <BannerEdit></BannerEdit>

            </div>
        </div>

    );
};

export default Dynamicbanner;