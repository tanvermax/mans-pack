import React, { useEffect, useState } from 'react';
import useaxiospublic from '../../Hook/useaxiospublic';

const DyServiceEdit = ({ onEdit }) => {
  const axiosPublic = useaxiospublic();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all services
  const fetchServices = async () => {
    try {
      const res = await axiosPublic.get('/service');
      setServices(res.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    console.log(id)
    const confirm = window.confirm('Are you sure you want to delete this service?');
    if (!confirm) return;

    try {
      await axiosPublic.delete(`/service/${id}`);
      setServices(prev => prev.filter(service => service._id !== id));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  if (loading) return <div className="text-center py-6">Loading services...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6">All Services</h2>
      {services.length === 0 ? (
        <p className="text-gray-600">No services found.</p>
      ) : (
        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="p-4 border border-gray-200 rounded-md shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-800">{service.heading}</h3>
                <p className="text-gray-600">{service.description}</p>
                {service.service && (
                  <img
                    src={service.service}
                    alt="Service"
                    className="mt-2 w-32 h-20 object-cover rounded border"
                  />
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(service)}
                  className="px-4 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DyServiceEdit;
