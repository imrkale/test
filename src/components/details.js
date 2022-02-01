import React from 'react';
import '../assets/css/list.css'
import staticData from '../constants'

function Details() {
  return <div className="details">
      <h2>
          Multiple Nobel Price Winners
      </h2>
      <div>
        {
            staticData.map((data)=>(
                <div className="detailsList">
                    <div className="detailsHeader">
                        <div>
                            <h3>{data.firstname}</h3>
                            <span>{data.surname}</span>
                        </div>
                        <img src={data.img} alt={data.firstname}/>
                    </div>
                    <div className="detailsBody">
                        <div>
                            <strong>Category: </strong>{data.category}
                        </div>
                        <div>
                            <strong>Years: </strong>{data.year.join(",")}
                        </div>
                        <div>
                            <strong>Motivation: </strong>{data.motivation.join(",")}
                        </div>
                    </div>
                </div>
            ))
        }
      </div>
  </div>;
}

export default Details;
