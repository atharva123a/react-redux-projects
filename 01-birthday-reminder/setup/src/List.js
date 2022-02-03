import React from "react";

import { useState } from "react";

const List = (props) => {
  const [data, setData] = useState(props.data);

  return (
    <>
      <h3>{data.length} birthdays today!</h3>
      {data.map((item) => {
        return (
          <div className="person">
            <img src={item.image} />
            <h4>
              {item.name}
              <p>{item.age}</p>
            </h4>
          </div>
        );
      })}
      {/* calling setData and passing in an empty array! */}
      <button onClick={() => setData([])}>Clear All</button>
    </>
  );
};

export default List;
