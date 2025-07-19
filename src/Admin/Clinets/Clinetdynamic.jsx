import { useEffect, useState } from 'react';
import EditClinet from './EditClinet';
import useaxiospublic from '../../Hook/useaxiospublic';
import { toast } from 'react-toastify';

const ClientDynamic = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [altText, setAltText] = useState('');
    const [clients, setClients] = useState([]);
    const axiosPublic = useaxiospublic();

    const fetchClients = async () => {
        try {
            const res = await axiosPublic.get('/client');
            setClients(res.data);
        } catch (err) {
            console.error("Error fetching client data:", err);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = { imageUrl, altText };

        try {
            const response = await axiosPublic.post('/client', formdata);
            if (response.data) {
                toast.success("Client data submitted successfully!");
                fetchClients(); // ✅ Refresh list after adding
                setImageUrl('');
                setAltText('');
            } else {
                toast.error("Failed to submit client data.");
            }
        } catch (error) {
            console.error("Error submitting client data:", error);
            toast.error("Failed to submit client data.");
        }
    };

    return (
        <div className='pt-20 bg-[#F3F4F6] h-full'>
            <div className="md:max-w-md  mx-auto p-6 bg-[#25AAE1] rounded-lg shadow-md">
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
                        placeholder="Enter Client image URL"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="altText" className="block lg:text-sm text-[8px] font-medium text-white mb-1">
                        Alt Text
                    </label>
                    <input
                        type="text"
                        id="altText"
                        value={altText}
                        onChange={(e) => setAltText(e.target.value)}
                        placeholder="Enter alt/Client text (company name)"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
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

            {/* ✅ Pass data and fetch function to EditClinet */}
            <EditClinet data={clients} refresh={fetchClients} />
        </div>
    );
};

export default ClientDynamic;
