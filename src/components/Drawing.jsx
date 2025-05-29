import React, { useState } from "react";
import ReactPainter from "react-painter";
import { Link } from "react-router-dom";

export const Drawing = () => {
  //const [color, setColor] = useState("");

  return (
    <>
     <h1 className="bg-danger text-light">Drawing</h1> <Link to="/"  className="btn btn-danger text-light"> Back</Link>
      <ReactPainter
        width={1000}
        height={1000}
        onSave={(blob) => console.log(blob)}
        render={({canvas, triggerSave, setLineCap,setLineWidth,setColor,setLineJoin,imageDownloadUrl  }) => (
          <div className="row d-flex flex-column">
            <div className="col">
              <div className="flex">
                <label htmlFor=""> Color</label> 
                <input
                  type="color"
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="flex">
                <label htmlFor=""> Line</label> 
                <input type="range"  min={1} max={50} onChange={e => setLineWidth(e.target.value)} />
              </div>
              <div className="col">  <select onChange={e => setLineCap(e.target.value)}>
        <option value="round">round</option>
        <option value="butt">butt</option>
        <option value="square">square</option>
      </select></div>  
      <div className="col">  <select onChange={e => setLineJoin(e.target.value)}>
        <option value="round">round</option>
        <option value="bevel">bevel</option>
        <option value="miter">miter</option>
      </select></div>
            </div><div className="bg-light border border-dark m-5">{canvas}</div>
            <button className="btn btn-danger" onClick={triggerSave}>Save</button>
            {imageDownloadUrl?<a className="btn btn-success" href={imageDownloadUrl} download>Download</a>:null}
          </div>
        )}
      ></ReactPainter>
    </>
  );
};
