'use client';
import '@/app/globals.css';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface FormData {
  name: string;
  restrictions: string;
  guestCount: number;
  guestNames: string;
}

interface RSVPFormProps {
  eventTitle?: string;
  eventDate?: string;
  eventLocation?: string;
}

function RSVP({
  eventTitle = 'Summer Cafe!',
  eventDate = 'June 29, 2025',
  eventLocation = '750 n Hudson Ave',
}: RSVPFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    restrictions: '',
    guestCount: 1,
    guestNames: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          guestCount: 1,
          restrictions: '',
          guestNames: '',
        });
      } else {
        throw new Error('Failed to submit RSVP');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error submitting RSVP:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guestCount' ? parseInt(value) || 1 : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="section-container p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{eventTitle}</h1>
          <div className="text-lg text-gray-600 space-y-1">
            <p className="font-semibold">{eventDate}</p>
            <p>{eventLocation}</p>
          </div>
        </div>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Please RSVP</h2>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Guest Count -*/}
        <div>
          <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Guests (including yourself)
          </label>
          <select
            id="guestCount"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          {errors.guestCount && <p className="text-red-500 text-sm mt-1">{errors.guestCount}</p>}
        </div>

        {/* Guest Names - Only show if attending */}
        {formData.guestCount !== 1 && (
          <div>
            <label htmlFor="guestNames" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Guests (including yourself)
            </label>
            <input
              type="text"
              id="guestNames"
              name="guestNames"
              value={formData.guestNames}
              onChange={handleInputChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter the full name of your guests (so theyre on the list)"
            />

            {errors.guestNames && <p className="text-red-500 text-sm mt-1">{errors.guestNames}</p>}
          </div>
        )}

        {/* Dietary Restrictions - Only show if attending */}
        <div>
          <label htmlFor="restrictions" className="block text-sm font-medium text-gray-700 mb-1">
            Dietary Restrictions or Allergies
          </label>
          <input
            type="text"
            id="restrictions"
            name="restrictions"
            value={formData.restrictions}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Please let us know of any dietary needs"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-md font-semibold text-white transition-colors ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit RSVP'}
        </button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
            Thank you! Your RSVP has been submitted successfully.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
            Sorry, there was an error submitting your RSVP. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
export default RSVP;
