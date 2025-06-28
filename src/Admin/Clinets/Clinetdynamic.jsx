import { useState } from 'react';
import EditClinet from './EditClinet';
import useaxiospublic from '../../Hook/useaxiospublic';
import { toast } from 'react-toastify';

const ClientDynamic = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [altText, setAltText] = useState('');
    const axiosPublic = useaxiospublic();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted:', { imageUrl, altText });
        const formdata = { imageUrl, altText }
        axiosPublic.post('/client', formdata)
            .then(response => {
                console.log("client Data submitted successfully:", response.data);
                toast.success("client Data submitted successfully!");

            })
            .catch(error => {
                console.error("Error submitting client data:", error);
                toast.error("Failed to submit client Data.");
            });
        // Add your submit logic here
    };

    return (
        <div className='pt-20 bg-[#F3F4F6] h-full'>
            <div className="max-w-md mx-auto p-6 bg-[#25AAE1] rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-white">Image Input</h2>
                <div className="mb-4">
                    <label htmlFor="imageUrl" className="block text-sm font-medium text-white mb-1">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Enter Clinet image URL"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="altText" className="block text-sm font-medium text-white mb-1">
                        Alt Text
                    </label>
                    <input
                        type="text"
                        id="altText"
                        value={altText}
                        onChange={(e) => setAltText(e.target.value)}
                        placeholder="Enter alt/Clinet text (company name)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-full bg-white text-[#25AAE1] font-semibold py-2 px-4 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
                {imageUrl && (
                    <div className="mt-4">
                        <img
                            src={imageUrl}
                            alt={altText || 'Image preview'}
                            className="max-w-full h-auto rounded-md"
                        />
                    </div>
                )}
            </div>
            <div>
                <EditClinet />
            </div>
        </div>
    );
};

export default ClientDynamic;