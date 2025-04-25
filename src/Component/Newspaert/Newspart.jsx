import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Newspart = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

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

    // Handle slide navigation
    const nextSlide = () => {
        if (currentSlide < data.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    // Handle touch swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 50) nextSlide(); // Swipe left
        if (diff < -50) prevSlide(); // Swipe right
    };

    // Update slider position
    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    if (loading) return  <div className="skeleton h-32 w-full"></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-manrope text-2xl lg:text-4xl font-bold text-gray-900 text-center mb-14">
                    Our popular blogs
                </h2>
                <div className="relative mb-14">
                    <div
                        ref={sliderRef}
                        className="flex gap-x-5 gap-y-8 snap-x snap-mandatory transition-transform duration-300 ease-in-out"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {data.map((newsdata) => (
                            <div
                                key={newsdata._id}
                                className="group cursor-pointer w-full border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600 snap-start shrink-0"
                            >
                                <div className="flex items-center mb-6">
                                    <img
                                        src="https://pagedone.io/asset/uploads/1696244553.png"
                                        alt="Harsh image"
                                        className="rounded-lg  object-cover"
                                    />
                                    <div className="block p-5">
                                        <h4 className="text-gray-900 lg:text-base text-xs font-medium md:leading-8 ">
                                            {newsdata.headline}
                                        </h4>
                                        <p className='py-3'>{newsdata.description}</p>
                                        <div className="flex gap-5 items-center justify-between font-medium">
                                            <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                                            <span className="text-sm text-indigo-600">2 year ago</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className={`absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        disabled={currentSlide === 0}
                        aria-label="Previous slide"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextSlide}
                        className={`absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full ${currentSlide === data.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        disabled={currentSlide === data.length - 1}
                        aria-label="Next slide"
                    >
                        →
                    </button>
                </div>
                <Link
                    to="/newspart"
                    className="cursor-pointer border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100"
                >
                    View All
                </Link>
            </div>
        </section>
    );
};

export default Newspart;