import { useState, useEffect } from 'react';
import useaxiospublic from '../../Hook/useaxiospublic';
import { toast } from 'react-toastify';
import Dyportfolio from './Dyportfolio';

const DynamicPortfolio = () => {
    const [fields, setFields] = useState([]);
    const [categories, setCategories] = useState([]); // Store unique categories
    const [isNewCategory, setIsNewCategory] = useState(false);
    const [newField, setNewField] = useState({
        type: '',
        name: '',
        alt: ''
    });

    const axiospublic = useaxiospublic();

    // Fetch existing categories on mount
    useEffect(() => {
        axiospublic.get('/portfolio')
            .then(res => {
                const uniqueCats = [...new Set(res.data.map(item => item.type))];
                setCategories(uniqueCats);
            })
            .catch(err => console.error("Error fetching categories", err));
    }, [axiospublic]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // If user selects "Add New Category", toggle input mode
        if (name === 'type' && value === 'ADD_NEW_SPECIAL') {
            setIsNewCategory(true);
            setNewField(prev => ({ ...prev, type: '' }));
        } else {
            setNewField(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleAddField = (e) => {
        e.preventDefault();
        if (newField.type && newField.name && newField.alt) {
            axiospublic.post('/portfolio', newField)
                .then(response => {
                    toast.success("Portfolio added successfully!");
                    setFields(prev => [...prev, newField]);
                    
                    // Update categories list if a new one was added
                    if (!categories.includes(newField.type)) {
                        setCategories(prev => [...prev, newField.type]);
                    }

                    // Reset Form
                    setNewField({ type: '', name: '', alt: '' });
                    setIsNewCategory(false);
                })
                .catch(error => {
                    toast.error("Failed to submit data.");
                });
        } else {
            toast.warn('Please fill all fields');
        }
    };

    return (
        <div className='bg-[#F3F4F6] min-h-screen pt-20 px-5'>
            <div className="w-2xl mx-auto bg-white p-5 rounded-2xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-center">Manage Portfolio</h2>

                <div className="space-y-4">
                    {/* Dynamic Category Section */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                        {!isNewCategory ? (
                            <select
                                name="type"
                                value={newField.type}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select a category</option>
                                {categories.map((cat, i) => (
                                    <option key={i} value={cat}>{cat}</option>
                                ))}
                                <option value="ADD_NEW_SPECIAL" className="font-bold text-blue-600">+ Add New Category</option>
                            </select>
                        ) : (
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    name="type"
                                    value={newField.type}
                                    onChange={handleInputChange}
                                    className="flex-1 px-3 py-2 border border-blue-400 rounded-md focus:outline-none"
                                    placeholder="Enter new category name"
                                    autoFocus
                                />
                                <button 
                                    onClick={() => setIsNewCategory(false)}
                                    className="text-xs text-red-500 underline"
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                        <input
                            type="text"
                            name="name"
                            value={newField.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="https://i.ibb.co/..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Alt Text</label>
                        <input
                            type="text"
                            name="alt"
                            value={newField.alt}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                            placeholder="Describe the image"
                        />
                    </div>

                    <button
                        onClick={handleAddField}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                    >
                        Upload to Portfolio
                    </button>
                </div>
            </div>
            <div className='py-10'>
                <Dyportfolio />
            </div>
        </div>
    );
};

export default DynamicPortfolio;