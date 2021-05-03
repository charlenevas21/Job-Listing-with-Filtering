import React, { useState, useEffect } from "react";
import data from "./data.json";
import JobListing from "./components/JobListing";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  const filterJobsByTags = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [role, level];

    if (languages) {
      tags.push(...languages);
    }
    if (tools) {
      tags.push(...tools);
    }
    return tags.some((tag) => filters.includes(tag));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;

    setFilters([...filters, tag]);
  };

  const filteredJobs = jobs.filter(filterJobsByTags);

  const handleFilterClick = (filter) => {
    setFilters(filters.filter((item) => item !== filter));
  };

  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="App">
      <header className="bg-blue-100 relative">
        <img src={"./images/jobfinder-header.jpg"} alt="" className="w-full" />

        <h1 className={`font-bold text-xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:text-5xl`}>JobFinder</h1>

      </header>
      {filters.length > 0 && (
        <div className={`lg:container md:mx-auto`}>
          <div
            className={`bg-white shadow-md pt-6 pb-0 px-6 mx-4 mx-4 mb-12 -m-6 rounded z-20 relative flex flex-wrap`}
          >
            {filters.map((filter) => (
              <div key={filter} className="mb-5 mr-5">
                <div className="flex flex-wrap">
                  <span className="bg-blue-50 text-blue-900 px-2 font-bold text-base rounded">
                    {filter}
                  </span>
                  <span
                    onClick={() => handleFilterClick(filter)}
                    className="bg-blue-900 text-xl font-bold text-white rounded-r px-2 cursor-pointer hover:bg-black"
                  >
                    &#215;
                  </span>
                </div>
              </div>
            ))}

            <button
              onClick={clearFilters}
              className="font-bold text-gray-700 ml-auto mb-5 mr-5 "
            >
              Clear
            </button>
          </div>
        </div>
      )}
      <div className="lg:container md:mx-auto">
        {jobs.length === 0 ? (
          <p>There are no Jobs</p>
        ) : (
          filteredJobs.map((job) => (
            <JobListing
              job={job}
              key={job.id}
              handleTagClick={handleTagClick}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
