import React from "react";

const JobListing = ({ job, handleTagClick }) => {
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }
  if (job.tools) {
    tags.push(...job.tools);
  }

  return (
    <div
      className={`bg-white shadow-md my-16 mx-4 p-6 rounded sm:my-8 ${
        job.featured && "border-l-8 border-blue-900"
      } sm:flex`}
    >
      <div>
        <img
          className="w-16 h-16 -mt-14 sm:w-32 sm:h-32 sm:m-0 sm:mr-6"
          src={job.logo}
          alt={job.company}
        />
      </div>
      <div className="pb-4 pt-2 border-b-2 sm:border-0 sm:flex sm:flex-col sm:justify-between">
        <h3 className="text-blue-900 text-lg font-bold my-1">
          {job.company}
          {job.new && (
            <span className="bg-blue-light font-bold text-white ml-4 rounded-full text-sm py-1 px-2">
              NEW!
            </span>
          )}
          {job.featured && (
            <span className="bg-black font-bold text-white ml-2 rounded-full text-sm py-1 px-2">
              FEATURED
            </span>
          )}
        </h3>
        <h2 className="font-bold text-xl my-2 sm:text-2xl">{job.position}</h2>
        <p className="text-gray-600 my-1">
          {job.postedAt} · {job.contract} · {job.location}
        </p>
      </div>
      <div className="flex-wrap flex sm:ml-auto sm:items-center">
        {tags
          ? tags.map((tag) => (
              <span
                onClick={() => handleTagClick(tag)}
                key={tag}
                className="py-1 mt-4 px-2 bg-blue-50 text-blue-900 font-bold text-base mr-2 rounded cursor-pointer sm:mt-0"
              >
                {tag}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default JobListing;
