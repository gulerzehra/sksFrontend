/*
{
  user: {
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1ODg3MTAyLCJpYXQiOjE3MTU4ODUzMDIsImp0aSI6IjE5MmRkYjBiZmE3YjRmZDhiNjFlNjRlYTE5ODA2ZTAzIiwidXNlcl9pZCI6Mn0.sz3jKva9njPLejL-3h3utD_ojN9Y6Qw7wuH-8N3jIbg',
    refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNTk3MTcwMiwiaWF0IjoxNzE1ODg1MzAyLCJqdGkiOiI3ZTY0M2NmNTExMjY0ZDI5YjYzN2Y0Zjg3ZjE2NDViZCIsInVzZXJfaWQiOjJ9.vosAESYkjVshTJN6T7hyU-A7c73MXwnbzUs0iIUZdzk',
    role: 'CLUB_MANAGER',
    isLoggedIn: true
  },
  notification: {
    notifications: [
      {
        id: 17,
        message: 'Your post \'Exciting news for our sports fans!\' has been approved.',
        read: false,
        created_at: '2024-04-25T21:31:16.066992Z',
        event: null,
        post: 10
      },
      {
        id: 18,
        message: 'Your post \'New Exciting news for our sports fans!\' has been approved.',
        read: false,
        created_at: '2024-04-29T14:54:29.054972Z',
        event: null,
        post: 11
      },
      {
        id: 19,
        message: 'Your event \'One Piece\' has been approved.',
        read: false,
        created_at: '2024-05-06T06:57:34.955952Z',
        event: 3,
        post: null
      },
      {
        id: 20,
        message: 'Your post \'New Exciting news for our sports fans!\' has been approved.',
        read: false,
        created_at: '2024-05-15T17:31:50.377169Z',
        event: null,
        post: 11
      },
      {
        id: 21,
        message: 'Your event \'One Piece 2\' has been approved.',
        read: false,
        created_at: '2024-05-16T14:08:43.079140Z',
        event: 4,
        post: null
      }
    ],
    unreadCount: 5
  },
  club: {
    clubs: [
      {
        id: 2,
        name: 'Araba Klubu',
        slug: 'araba-klubu',
        manager: 2,
        is_active: true
      },
      {
        id: 3,
        name: 'Test Club',
        slug: 'test-club',
        manager: 4,
        is_active: true
      },
      {
        id: 4,
        name: 'Anime Lovers',
        slug: 'anime-lovers',
        manager: 3,
        is_active: true
      },
      {
        id: 5,
        name: 'Google Developers Club',
        slug: 'google-developers-club',
        manager: 10,
        is_active: true
      }
    ],
    selectedClub: {
      id: 2,
      name: 'Araba Klubu',
      slug: 'araba-klubu',
      manager: 2,
      is_active: true
    }
  },
  event: {
    events: [
      {
        id: 3,
        name: 'One Piece',
        content: 'Luffy, Nami, Zoro and more!',
        date: '2024-05-06T10:00:00.456946Z',
        club_id: 2,
        club_name: 'Araba Klubu',
        club_slug: 'araba-klubu',
        status: 'approved',
        rejection_reason: ''
      },
      {
        id: 4,
        name: 'One Piece 2',
        content: 'Luffy, Nami, Zoro and more!',
        date: '2024-05-16T10:00:00.456946Z',
        club_id: 2,
        club_name: 'Araba Klubu',
        club_slug: 'araba-klubu',
        status: 'approved',
        rejection_reason: ''
      }
    ],
    selectedEvent: null
  }
}
*/

import { useSelector } from 'react-redux';
import ClubInfo from '../../../components/ClubInfo/ClubInfo'; // ClubInfo bileşenini içe aktar
import { Blog } from './ClubComp-styled';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { getApprovedEvents } from '../../../data/data';
import { store } from '../../../data/store';
import { fetchEvents } from '../../../data/eventSlice';
import { getApprovedPosts } from '../../../data/data';
import { fetchPosts } from '../../../data/postSlice';

function BlogComp(name, content) {
  return (
    <div className="blog">
      <p>
        <strong>{name}: </strong> {content}
      </p>

      <img
        src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_1280.jpg"
        alt=""
      />
    </div>
  );
}

BlogComp.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

function ClubPage() {
  const { selectedClub } = useSelector((state) => state.club);
  const { events } = useSelector((state) => state.event);
  const { posts } = useSelector((state) => state.post);

  const clubEvents = events.filter(
    (event) => event.club_id === selectedClub?.id,
  );

  useEffect(() => {
    async function eventsHandler() {
      const response = await getApprovedEvents();
      store.dispatch(fetchEvents(response));
    }
    eventsHandler();
  }, []);

  useEffect(() => {
    async function postsHandler() {
      const response = await getApprovedPosts();
      store.dispatch(fetchPosts(response));
    }
    postsHandler();
  }, []);

  if (!selectedClub || clubEvents.length === 0)
    return (
      <>
        <ClubInfo selectedClub={selectedClub} />

        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.0286554248423!2d29.036204075514743!3d41.02462901841864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7e4b7ef3051%3A0x12642495a675cc0c!2s%C3%9Csk%C3%BCdar%20%C3%9Cniversitesi%20Merkez%20Yerle%C5%9Fke%20C%20Blok!5e0!3m2!1str!2str!4v1711360435430!5m2!1str!2str"
          width="100%"
          height="300px"
        ></iframe>
      </>
    );

  return (
    <>
      <ClubInfo selectedClub={selectedClub} posts={posts} />

      <Blog>
        <h2>BLOG</h2>

        <div className="blogs">
          {clubEvents.map((event) => BlogComp(event.name, event.content))}
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
