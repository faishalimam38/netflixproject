import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from "./Cards";
import Sdata from "./Sdata"


// function ncard(val, index, arr) {

// }

ReactDOM.render(
  <>

    <h1 className="heading_style"> List of top 3 Netflix Series in 2021 </h1>

    {Sdata.map((val) => {
      return (
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}




  </>,


  document.getElementById('root')
);


