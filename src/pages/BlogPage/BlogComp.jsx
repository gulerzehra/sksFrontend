import React, { useState } from 'react';
import { BlogContainer } from './BlogComp-styled';

function BlogComp() {
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
  };

  return (
    <div>
      <h2 style={{ marginTop: '30px', marginLeft: '10px' }}>Add new Post</h2>

      <BlogContainer>
        <div className="addPost">
          <div>
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
            <div class="yatay-cizgi"></div>

            <input
              type="text"
              placeholder="Post Title"
              style={{
                width: '300px',
                height: '40px',
                borderRadius: '10px',
                border: '2px solid #E5E5E5',
              }}
            />
            <p>
              When naming an post, be clear, concise, relevant, memorable, avoid
              jargon, offensive language, and check for availability and legal
              issues.
            </p>
            <div class="yatay-cizgi"></div>

            <textarea
              className="place"
              placeholder="Post..."
              style={{
                width: '300px',
                height: '100px',
                borderRadius: '10px',
                border: '2px solid #E5E5E5',
                resize: 'none',
              }}
            />
            <br></br>
            <button className="send-button">Send Request</button>
          </div>
        </div>
      </BlogContainer>
    </div>
  );
}

export default BlogComp;
