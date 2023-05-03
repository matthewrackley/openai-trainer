import React, { useState } from 'react';
export const Form = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <form className="row" id="formDataEvent" nonce="" action="#" onSubmit={ handleSubmit }>
      <div id="chat-area" className="chat-area">
        <div id="app"></div>
      </div>
      <div className="message-area" >
        <textarea id="message" name="message" className="form-control resizable" aria-label="With textarea" onChange={ handleChange }></textarea>
      </div>
      <div className="resize-area">
        <div className="resizer">
          <div id="resizeIt" onMouseDown={ init } className="badge rounded-pill bg-warning text-dark">
            <div id="resizeItheader">
              <img src="./lib/images/box-arrow-in-up-right.svg " alt="^" aria-disabled="true" />
            </div>
          </div>
        </div>
      </div>
      <div className="options column" id="opt-left">
        <div className="input-group mb-3">
          <input type="file" placeholder="Upload" accept="all" name="file" className="form-control" onChange={ handleChange } nonce="" id="fileInput" />
        </div>
      </div>
      <div className="options mini column" id="opt-middle">
        <div id="tempinput" className="input-group mb-3">
          <div className="form-label-item">
            <label className="form-label" htmlFor="temperature" aria-label="Temp">Temperature:</label>
            <div className="invisible">&#8192</div><output htmlFor="temperature" id="tempvalue"></output>
          </div>
          <input name="temperature" min="0.0" max="2.0" value="1.5" step="0.1" type="range" className="form-range" id="temperature" onChange={ handleChange } />
        </div>
      </div>
      <div className="options mini column" id="opt-right">
        <div className="form-label-item">
          <button className="btn btn-warning" nonce="" type="submit" value="Submit">Send Message</button>
        </div>
      </div>
    </form>
  );
};
