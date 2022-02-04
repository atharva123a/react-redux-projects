import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const [isError, setIsError] = useState(false);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // rendered when loading:
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <h1>Error...</h1>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  // rendered when we finally fetch data:
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
