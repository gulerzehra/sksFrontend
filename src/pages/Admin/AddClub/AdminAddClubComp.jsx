import { useState } from 'react';
import { BlogContainer } from './AdminAddClubComp-styled';
import ButtonComp from '../../../components/Button/Button';
import { useSelector } from 'react-redux';
import { createClub } from '../../../data/data';
import toast from 'react-hot-toast';
import { store } from '../../../data/store';
import { addClub } from '../../../data/clubSlice';

function AdminAddClubComp() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [clubName, setClubName] = useState('');
  const [managerId, setManagerId] = useState('');
  const { accessToken } = useSelector((state) => state.user);
  // const { clubs } = useSelector((state) => state.club);

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

  const addClubHandler = async () => {
    const response = await createClub(accessToken, clubName, managerId);
    console.log(response);
    store.dispatch(addClub(response));
    toast.success('Club added successfully');
  };

  return (
    <div>
      <h2 style={{ marginTop: '30px', marginLeft: '10px' }}>Add new Post</h2>

      <BlogContainer>
        <div className="addPost">
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
              placeholder="Club Name"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
              style={{
                width: '300px',
                height: '40px',
                borderRadius: '10px',
                border: '2px solid #E5E5E5',
              }}
            />
            <p>
              Please enter the name of the club you want to add to the system.
            </p>
            <div className="yatay-cizgi"></div>

            <input
              type="number"
              placeholder="Manager Id"
              value={managerId}
              onChange={(e) => setManagerId(e.target.value)}
              style={{
                width: '300px',
                height: '40px',
                borderRadius: '10px',
                border: '2px solid #E5E5E5',
              }}
            />
            <p>
              Please enter the ID of the manager you want to assign to the club.
            </p>
            <br></br>
            <ButtonComp className="send-button" onClick={addClubHandler}>
              Send Request
            </ButtonComp>
          </div>
        </div>
      </BlogContainer>
    </div>
  );
}

export default AdminAddClubComp;
