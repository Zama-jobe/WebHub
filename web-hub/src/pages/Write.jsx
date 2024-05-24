import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content" action="/" method="POST">
        <input type="text" placeholder="Title" name="title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
            name="input"
          />
        </div>
      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> Public
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button className="firstChild">Save as a draft </button>
            <button className="secondChild">Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Catagory</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="science">Science</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="technolgy">Technolgy</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
