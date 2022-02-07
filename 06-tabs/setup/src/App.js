import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

// everything happens in the app component itself!!
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [value, setValue] = useState(0);

  const [jobs, setJobs] = useState([]);

  const getJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (isLoading) {
    return (
      <main className="section loading">
        <h1>Loading...</h1>
      </main>
    );
  }

  const { title, dates, company, duties } = jobs[value];

  return (
    <main>
      <div className="section">
        {/* button container! */}
        <div className="title">
          <h2>Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <div className="btn-container">
            {jobs.map((job, index) => {
              return (
                <button
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && "active-btn"}`}
                  key={job.id}
                >
                  {job.company}
                </button>
              );
            })}
          </div>
          <div className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button className="btn">more info</button>
      </div>
    </main>
  );
}

export default App;
