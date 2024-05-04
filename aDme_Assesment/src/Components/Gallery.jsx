
import React, { useState, useEffect } from 'react';

const itemsPerPage = 10;

const GalleryItem = ({ item }) => (
  <div className="rounded-lg overflow-hidden shadow-lg">
    <img src={item.download_url} alt={item.author} className="w-full h-64 object-cover object-center" />
    <div className="p-4 bg-white">
      <p className="text-gray-800 font-semibold">{item.author}</p>
    </div>
  </div>
);

const Pagination = ({ pageCount, currentPage, onPageChange, pagesToShow }) => {
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= pageCount) {
      onPageChange(pageNumber);
    }
  };

  const startIndex = Math.max(0, currentPage - Math.floor(pagesToShow / 2) - 1);
  const endIndex = Math.min(pageCount, startIndex + pagesToShow);

  const pageNumbers = [];
  for (let i = startIndex; i < endIndex; i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <nav className="mt-8">
      <ul className="flex justify-center">
        <li>
          <button
            className={`px-4 py-2 rounded-full focus:outline-none ${
              currentPage === 1 ? 'bg-gray-200 text-gray-800 cursor-not-allowed' : 'bg-blue-500 text-white'
            }`}
            disabled={currentPage === 1}
            onClick={() => handlePageClick(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((pageNumber, index) => (
          <li key={index} className="mx-1">
            <button
              className={`px-4 py-2 rounded-full focus:outline-none ${
                currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        {endIndex < pageCount && (
          <li className="mx-1">...</li>
        )}
        <li>
          <button
            className={`px-4 py-2 rounded-full focus:outline-none ${
              currentPage === pageCount ? 'bg-gray-200 text-gray-800 cursor-not-allowed' : 'bg-blue-500 text-white'
            }`}
            disabled={currentPage === pageCount}
            onClick={() => handlePageClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

const Gallery = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://picsum.photos/v2/list?page=1&limit=100');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const pageCount = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="py-4 text-center">
        <img src="https://img.icons8.com/?size=96&id=jrKjulPYRCs0&format=gif" alt="Logo" className="h-12 inline-block" />
        <h1 className="text-3xl font-semibold text-gray-800 inline-block ml-2">Gallery App</h1>
      </div>
      <div className="mb-8">
        <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww" alt="Header" className="w-full rounded-lg shadow-lg" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((item) => (
          <GalleryItem key={item.id} item={item} />
        ))}
      </div>
      <Pagination pageCount={pageCount} currentPage={currentPage} onPageChange={handlePageChange} pagesToShow={3} />
    </div>
  );
};

export default Gallery;
