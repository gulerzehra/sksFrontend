import { useState } from 'react';
import { AddEventContainer } from './ManagerAddEventComp-styled';
import CalendarComp from '../../../../components/Calendar/CalendarComp';
import ButtonComp from '../../../../components/Button/Button';

function ManagerAddEventComp() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
    alert('File uploaded successfully: ' + selectedFile.name); // NOTE: TEMPORARY
  };

  return (
    <div>
      <h2 style={{ marginTop: '30px', marginLeft: '10px' }}>Add new Event</h2>

      <AddEventContainer>
        <div className="addEvent">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label
              htmlFor="fileInput"
              style={{
                width: '180px',
                height: '180px',
                display: 'block',
                border: '2px dashed blue',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Yüklenen Resim"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <span
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  Resim Yükle
                </span>
              )}
            </label>
            <input
              type="file"
              id="fileInput"
              className="hidden-input"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />

            <p>
              Please choose only one image; its size should not exceed 20 MB.
            </p>
            <div className="yatay-cizgi"></div>

            <input
              type="text"
              placeholder="Activity Name"
              style={{
                width: '300px',
                height: '40px',
                borderRadius: '10px',
                border: '2px solid #E5E5E5',
                marginBottom: '0px',
              }}
            />
            <p>
              When naming an activity or event, be clear, concise, relevant,
              memorable, avoid jargon, offensive language, and check for
              availability and legal issues.
            </p>
            <div className="yatay-cizgi"></div>

            <textarea
              className="place"
              placeholder="Activity Description"
              style={{
                width: '300px',
                height: '100px',
                borderRadius: '10px',
                border: '2px solid #E5E5E5',
                resize: 'none',
              }}
            />
            <div className="yatay-cizgi"></div>

            <input
              type="text"
              placeholder="Category"
              style={{
                width: '300px',
                height: '40px',
                borderRadius: '10px',
                border: '2px solid #E5E5E5',
              }}
            />
            <div className="yatay-cizgi"></div>

            <input
              type="text"
              placeholder="URL"
              style={{
                width: '300px',
                height: '40px',
                borderRadius: '10px',
                border: '2px solid #E5E5E5',
              }}
            />
            <div className="yatay-cizgi"></div>

            <h5>DATE: </h5>
            <CalendarComp />
            <div className="yatay-cizgi" style={{ marginTop: '10px' }}></div>

            <p style={{ marginTop: '10px' }}>Announcement</p>
            <input
              type="text"
              placeholder="Annoucement"
              style={{
                width: '300px',
                height: '40px',
                borderRadius: '10px',
                border: '2px solid #E5E5E5',
                marginBottom: '10px',
              }}
            />
            <br></br>
            <input
              type="text"
              placeholder="Annoucement Message"
              style={{
                width: '300px',
                height: '40px',
                borderRadius: '10px',
                border: '2px solid #E5E5E5',
              }}
            />
            <br></br>
            <ButtonComp className="send-button">Send Request</ButtonComp>
          </div>
        </div>
      </AddEventContainer>
    </div>
  );
}

export default ManagerAddEventComp;
