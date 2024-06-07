import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Read = () => {
  const [data, setData] = useState([]);
 

  const getData = async () => {
    const data = await axios.get("http://localhost:3000/api/user");
    setData(data.data);
  };

  useEffect(() => {
    getData();
    //console.log(data);
  }, []);


  const handledelete = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/api/user/${id}`);
        alert("data deleted successfully");
        getData();
    } catch(err) {
        console.log(err);
    }
    
  }

  return (
    <div className="container">
  <h1>All Data</h1>
  <div className="row">
    {data && data.map((ele) => (
      <div key={ele._id} className="col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{ele.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
            <p className="card-text">{ele.age}</p>
            <a href="#" className="card-link" onClick={() => handledelete(ele._id)}>
              Delete
            </a>
            <Link to={`/${ele._id}`} className="card-link">
              Edit
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Read;
