'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { fetchInternships, Internship } from './data/internships';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const InternshipCard = ({ internship }: { internship: Internship }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-4"
  >
    <div className="p-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <Image 
            src={internship.logo}
            alt={`${internship.company} logo`}
            width={40}
            height={40}
            className="mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold text-indigo-700 mb-2">{internship.position}</h3>
            <p className="text-gray-600 mb-2">{internship.company}</p>
            <p className="text-gray-500 text-sm mb-4">{internship.location}</p>
          </div>
        </div>
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
          Deadline: {internship.deadline}
        </span>
      </div>
      <a
        href={internship.application_link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition duration-300 mt-4"
      >
        Apply Now
      </a>
    </div>
  </motion.div>
);

const InternshipList = ({ internships, searchTerm }: { internships: Internship[], searchTerm: string }) => {
  const filteredInternships = internships.filter(
    (internship) =>
      internship.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AnimatePresence>
      {filteredInternships.map((internship) => (
        <InternshipCard key={internship.id} internship={internship} />
      ))}
    </AnimatePresence>
  );
};

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
  </div>
);

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [internships, setInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInternships().then((data) => {
      setInternships(data);
      setLoading(false);
    });
  }, []);

  // Sort internships by id in descending order
  const sortedInternships = internships.sort((a, b) => b.id - a.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <span className="text-sm text-gray-600">Created by Krish Shroff</span>
        <a href="https://www.linkedin.com/in/krish--shroff/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/KR15H-5" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
          <FaGithub size={20} />
        </a>
      </div>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
        >
          UK Software Engineering Internships
        </motion.h1>
        
        <div className="mb-8">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              className="pl-10 pr-4 py-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md text-gray-900 placeholder-gray-500"
              placeholder="Search internships..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {loading ? (
            <LoadingSpinner />
          ) : (
            <Suspense fallback={<LoadingSpinner />}>
              <InternshipList internships={sortedInternships} searchTerm={searchTerm} />
            </Suspense>
          )}
        </motion.div>
        
        <footer className="mt-12 text-center text-gray-600">
          <p>Created by Krish Shroff</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.linkedin.com/in/krish--shroff/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              LinkedIn
            </a>
            <a href="https://github.com/KR15H-5" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}