import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const Adminhome = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
    const news = {
      headline: data.headline,
      description: data.description,
    }
    try {

      axiosSecure.post('/newspost', news)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });

          }
        })
      
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="bg-white mb-6 rounded-2xl shadow-xl p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Upload Your Photo
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}
          className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo (Preview Only)
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16V8m0 0l-4 4m4-4l4 4m6-4v8m-4-4h8"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG (MAX. 5MB)</p>
                  </div>
                )}
                <input
                  id="photo-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...register('photo', {
                    onChange: handlePhotoChange,
                  })}
                />
              </label>
            </div>
            {errors.photo && (
              <p className="mt-1 text-sm text-red-600">{errors.photo.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="headline" className="block text-sm font-medium text-gray-700 mb-1">
              Headline
            </label>
            <input
              id="headline"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a catchy headline"
              {...register('headline', {
                required: 'Headline is required',
                maxLength: {
                  value: 100,
                  message: 'Headline cannot exceed 100 characters',
                },
              })}
            />
            {errors.headline && (
              <p className="mt-1 text-sm text-red-600">{errors.headline.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your photo..."
              {...register('description', {
                required: 'Description is required',
                maxLength: {
                  value: 500,
                  message: 'Description cannot exceed 500 characters',
                },
              })}
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}
          {success && (
            <p className="text-sm text-green-600 text-center">{success}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-lg text-white transition duration-200 ${isSubmitting
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
              }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Adminhome;