import React from 'react';
import ClubInfo from '../../components/ClubInfo/ClubInfo'; // ClubInfo bileşenini içe aktar
import { Blog } from './ClubPage-styled';

function ClubPage() {
  return (
    <>
      <ClubInfo />

      <Blog>
        <h2>BLOG</h2>

        <div className="blogs">
          <div className="blog">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae itaque libero nesciunt debitis corrupti fuga non
              obcaecati, velit quae error cupiditate nostrum quas nobis facere
              et dolorum delectus consequatur mollitia.
            </p>
            <p style={{ paddingTop: '0px' }}>
              {' '}
              Lorem ipsum dolor sit amet. <button>Read More</button>
            </p>

            <img
              src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg"
              alt=""
            />
          </div>

          <div className="blog">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae itaque libero nesciunt debitis corrupti fuga non
              obcaecati, velit quae error cupiditate nostrum quas nobis facere
              et dolorum delectus consequatur mollitia.
            </p>
            <p style={{ paddingTop: '0px' }}>
              {' '}
              Lorem ipsum dolor sit amet. <button>Read More</button>
            </p>

            <img
              src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg"
              alt=""
            />
          </div>

          <div className="blog">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae itaque libero nesciunt debitis corrupti fuga non
              obcaecati, velit quae error cupiditate nostrum quas nobis facere
              et dolorum delectus consequatur mollitia.
            </p>
            <p style={{ paddingTop: '0px' }}>
              {' '}
              Lorem ipsum dolor sit amet. <button>Read More</button>
            </p>

            <img
              src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg"
              alt=""
            />
          </div>
        </div>
      </Blog>

      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.0286554248423!2d29.036204075514743!3d41.02462901841864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7e4b7ef3051%3A0x12642495a675cc0c!2s%C3%9Csk%C3%BCdar%20%C3%9Cniversitesi%20Merkez%20Yerle%C5%9Fke%20C%20Blok!5e0!3m2!1str!2str!4v1711360435430!5m2!1str!2str"
        width="100%"
        height="300px"
      ></iframe>
    </>
  );
}

export default ClubPage;
