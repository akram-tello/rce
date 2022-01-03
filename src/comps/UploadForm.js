import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg', 'application/pdf'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg) OR a pdf file');
    }
  };

  return (
    <>
      <div className="header-banner bg-white">
        <div className="nk-banner">
          <div className="banner banner-single">
            <div className="banner-rounded-bg bg-theme-alt">
              <span className="banner-shade-1"><span className="banner-shade-2"><span className="banner-shade-3"></span></span></span>
            </div>
            <div className="banner-wrap h-100vh">
              <div className="container container-z">
                <div className="row align-items-center justify-content-center mb-6remm">
                  <div className="">
                    <h1 className="ak-title">Welcome to RCE Iskandar Sustainable and Low Carbon Schools Exhibition</h1>
                  </div>
                  <div className='bad-con'>
                    <span className='ak-badge'>RCE Iskandar <b>DASHBOARD</b></span>
                  </div>
                </div>
                <div className='row ak-box'>
                  <form>
                    <label>
                      <input className='ak-btn' type="file" onChange={handleChange} />
                      <span>upload file from here</span>
                    </label>
                    <div className="output">
                      {error && <div className="error">{error}</div>}
                      {file && <div>{file.name}</div>}
                      {file && <ProgressBar file={file} setFile={setFile} />}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-ovm ovm-top ovm-h-80 bg-theme-alt d-lg-none"></div>
        </div>
      </div>
    </>

  );
}

export default UploadForm;