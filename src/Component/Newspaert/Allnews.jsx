import React, { useEffect, useState } from 'react';

const AllNews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://man-pack-server.vercel.app/newspost');
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="skeleton h-32 w-full"></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope md:text-4xl font-bold text-gray-900 text-center mb-14">
          All Blogs
        </h2>
        <div className="grid md:grid-cols-3 justify-center gap-5 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between  lg:gap-x-8">
          {data.map((newsdata) => (
            <div
              key={newsdata._id}
              className="group cursor-pointer w-full max-lg:max-w-xl  border border-gray-300 rounded-2xl p-5 m-2 transition-all duration-300 hover:border-indigo-600"
            >
              <div className="flex items-center mb-6">
                <img
                  src={newsdata.photoUrl}
                  alt="Harsh image"
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                  {newsdata.headline}
                </h4>
                <div className="flex items-center justify-between font-medium">
                  <h6 className="text-sm text-gray-500">Mans Packaging C.</h6>
                  <span className="text-sm text-indigo-600">2 year ago</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllNews;