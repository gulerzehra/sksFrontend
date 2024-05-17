// import { Link } from 'react-router-dom';
import { PencilIcon } from '../../components/Icons/PencilIcon';
import { InnerContainer } from './AdminComp-styled';
import { MagnifyingGlassIcon } from '../../components/Icons/MagnifyingGlassIcon';
import { ExclamationCircleIcon } from '../../components/Icons/ExclamationCircleIcon';
import { CheckCircleIcon } from '../../components/Icons/CheckCircleIcon';
import { XCircleIcon } from '../../components/Icons/XCircleIcon';
import { useEffect, useState } from 'react';
import { TABLE_RESULTS_PER_PAGE } from '../../utils/constants';
import { DUMMY_DATA_EVENTS } from '../../data/events';
import { DUMMY_DATA_POSTS } from '../../data/posts';
import { DUMMY_DATA_CLUBS } from '../../data/clubs';
import Button from '../../components/Button/Button';
import { HiOutlineArrowsRightLeft, HiOutlineTrash } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import {
  deleteClub,
  getClubs,
  getEvents,
  getPosts,
  reviewEvent,
  reviewPost,
  toggleClub,
  updateManagerOfClub,
} from '../../data/data';
import { store } from '../../data/store';
import { fetchClubs } from '../../data/clubSlice';
import toast from 'react-hot-toast';
import { fetchEvents } from '../../data/eventSlice';
import { fetchPosts } from '../../data/postSlice';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function labelEnumToColor(label) {
  switch (label) {
    case 'Pending':
      return 'color-secondary';
    case 'Approved':
      return 'color-success';
    case 'Rejected':
      return 'color-danger';
    default:
      return 'color-secondary';
  }
}

function labelEnumToIcon(label) {
  switch (label) {
    case 'Pending':
      return <ExclamationCircleIcon />;
    case 'Approved':
      return <CheckCircleIcon />;
    case 'Rejected':
      return <XCircleIcon />;
    default:
      return <ExclamationCircleIcon />;
  }
}

/**
 * @description Add empty rows to the data array
 * (This is a patch for the table component due to the lack of a virtualized table)
 * @param {Array} data - Array of objects
 * @param {Number} maxRows - Maximum number of rows
 * @returns {Array} - Array of objects
 */
function addEmptyRows(data, maxRows) {
  const emptyRows = maxRows - data.length - 9;
  if (emptyRows <= 0) return Array(data.length);
  return Array(emptyRows).fill({});
}

function EventsPanelComp() {
  const [search, setSearch] = useState('');
  const { accessToken } = useSelector((state) => state.user);
  const { posts } = useSelector((state) => state.post);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    async function postsHandler() {
      const response = await getPosts(accessToken);
      store.dispatch(fetchPosts(response));
    }
    postsHandler();
  }, [accessToken]);

  if (!posts || posts.length === 0) return null;

  return (
    <>
      <h2 className="subtitle">Events</h2>
      <div className="panel panel-fix">
        <div className="search">
          <div className="search-icon-frame">
            <MagnifyingGlassIcon />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div></div>
        <table className="table">
          <thead className="thead">
            <tr className="thead-row">
              <th className="thead-column">Event</th>
              <th className="thead-column">Club ID</th>
              <th className="thead-column">Status</th>
              <th className="thead-column">Date</th>
              <th className="thead-column"></th>
            </tr>
          </thead>
          <tbody className="tbody">
            {posts
              .filter(
                (post) =>
                  post.content.toLowerCase().includes(search.toLowerCase()) ||
                  post.status.toLowerCase().includes(search.toLowerCase()),
              )
              .map((post, index) => (
                <tr key={index} className="tbody-row">
                  <td className="tbody-col">{post.content}</td>
                  <td className="tbody-col">
                    {post.club_id ? post.club_id : 'N/A'}
                  </td>
                  <td
                    className={`tbody-col tbody-col--flex ${labelEnumToColor(
                      capitalizeFirstLetter(post.status),
                    )}`}
                    onClick={() => {
                      if (post.status === 'rejected') {
                        toast.error(
                          `Rejection reason: ${post.rejection_reason}`,
                        );
                      }
                    }}
                  >
                    <div className="tbody-col-icon-frame">
                      {labelEnumToIcon(capitalizeFirstLetter(post.status))}
                    </div>
                    <p>{capitalizeFirstLetter(post.status)}</p>
                  </td>

                  <td className="tbody-col">
                    {new Date(post.created_at).toLocaleDateString()}
                  </td>
                  <td className="tbody-col tbody-col--tools">
                    {post.status === 'pending' && (
                      <a
                        className="tbody-col--tools-tool"
                        onClick={async () => {
                          const msg = prompt(
                            'Enter "approved" for approve, "rejected" for reject',
                          );
                          if (msg === 'approved') {
                            await reviewPost(accessToken, post.id);
                            toast.success('Event approved successfully');
                          } else if (msg === 'rejected') {
                            const rejectionMsg = prompt(
                              'Enter rejection message',
                            );
                            if (rejectionMsg) {
                              await reviewPost(
                                accessToken,
                                post.id,
                                'rejected',
                                rejectionMsg,
                              );

                              toast.success('Event rejected successfully');
                            }
                          } else {
                            toast.error('Invalid input');
                          }
                        }}
                      >
                        <div className="tbody-col--tools-tool-icon-frame">
                          <PencilIcon />
                        </div>
                        <p>Review</p>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot className="tfoot">
            <tr className="tfoot-row">
              <td className="tfoot-col" colSpan="5">
                <p>
                  Showing {posts.length} of {posts.length} posts
                </p>
              </td>
            </tr>
            {addEmptyRows(posts, TABLE_RESULTS_PER_PAGE).map((_, index) => (
              <tr key={index} className="tbody-row--empty"></tr>
            ))}
          </tfoot>
        </table>
        {/* <aside className="filters">
          <div className="filters-header-frame">
            <h3 className="filters-header">Manage</h3>
          </div>
          <div className="filters-area">
            <a className="manage-link">
              <div className="manage-link-icon-frame">
                <PencilIcon />
              </div>
              <p>Manage Notifications</p>
            </a>
            <a className="manage-link">
              <div className="manage-link-icon-frame">
                <PencilIcon />
              </div>
              <p>Manage Clubs & Managers</p>
            </a>
          </div>
        </aside> */}
      </div>
    </>
  );
}

function PostsPanelComp() {
  const [search, setSearch] = useState('');
  const { accessToken } = useSelector((state) => state.user);
  const { events } = useSelector((state) => state.event);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    async function eventsHandler() {
      const response = await getEvents(accessToken);
      store.dispatch(fetchEvents(response));
    }
    eventsHandler();
  }, [accessToken]);

  if (!events || events.length === 0) return null;

  return (
    <>
      <h2 className="subtitle">Posts</h2>
      <div className="panel panel-fix">
        <div className="search">
          <div className="search-icon-frame">
            <MagnifyingGlassIcon />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <table className="table">
          <thead className="thead">
            <tr className="thead-row">
              <th className="thead-column">Post</th>
              <th className="thead-column">Club ID</th>
              <th className="thead-column">Status</th>
              <th className="thead-column">Date</th>
              <th className="thead-column"></th>
            </tr>
          </thead>
          <tbody className="tbody">
            {events
              .filter(
                (post) =>
                  post.name.toLowerCase().includes(search.toLowerCase()) ||
                  post.status.toLowerCase().includes(search.toLowerCase()),
              )
              .map((post, index) => (
                <tr key={index} className="tbody-row">
                  <td className="tbody-col">{post.name}</td>
                  <td className="tbody-col">{post.club_id}</td>
                  <td
                    className={`tbody-col tbody-col--flex ${labelEnumToColor(
                      capitalizeFirstLetter(post.status),
                    )}`}
                    onClick={() => {
                      if (post.status === 'rejected') {
                        toast.error(
                          `Rejection reason: ${post.rejection_reason}`,
                        );
                      }
                    }}
                  >
                    <div className="tbody-col-icon-frame">
                      {labelEnumToIcon(capitalizeFirstLetter(post.status))}
                    </div>
                    <p>{capitalizeFirstLetter(post.status)}</p>
                  </td>
                  <td className="tbody-col">
                    {new Date(post.date).toLocaleDateString()}
                  </td>
                  <td className="tbody-col tbody-col--tools">
                    {post.status === 'pending' && (
                      <a
                        className="tbody-col--tools-tool"
                        onClick={async () => {
                          const msg = prompt(
                            'Enter "approved" for approve, "rejected" for reject',
                          );
                          if (msg === 'approved') {
                            await reviewEvent(accessToken, post.id);
                            toast.success('Post approved successfully');
                          } else if (msg === 'rejected') {
                            const rejectionMsg = prompt(
                              'Enter rejection message',
                            );
                            if (rejectionMsg) {
                              await reviewEvent(
                                accessToken,
                                post.id,
                                'rejected',
                                rejectionMsg,
                              );

                              toast.success('Post rejected successfully');
                            }
                          } else {
                            toast.error('Invalid input');
                          }
                        }}
                      >
                        <div className="tbody-col--tools-tool-icon-frame">
                          <PencilIcon />
                        </div>
                        <p>Review</p>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot className="tfoot">
            <tr className="tfoot-row">
              <td className="tfoot-col" colSpan="5">
                <p>
                  Showing {events.length} of {events.length} posts
                </p>
              </td>
            </tr>
            {addEmptyRows(events, TABLE_RESULTS_PER_PAGE).map((_, index) => (
              <tr key={index} className="tbody-row--empty"></tr>
            ))}
          </tfoot>
        </table>
      </div>
    </>
  );
}

function ClubsPanelComp() {
  const [search, setSearch] = useState('');
  const { accessToken } = useSelector((state) => state.user);
  const { clubs } = useSelector((state) => state.club);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    async function clubsHandler() {
      const response = await getClubs(accessToken);
      store.dispatch(fetchClubs(response));
    }
    clubsHandler();
  }, [accessToken]);

  if (!clubs || clubs.length === 0) return null;

  return (
    <>
      <div className="title-line">
        <h2 className="subtitle">Clubs</h2>
        <Button size="small" linkTo="clubs/add">
          Add Club
        </Button>
      </div>
      <div className="panel panel-fix">
        <div className="search">
          <div className="search-icon-frame">
            <MagnifyingGlassIcon />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <table className="table">
          <thead className="thead">
            <tr className="thead-row">
              <th className="thead-column">Club</th>
              <th className="thead-column">Status</th>
              <th className="thead-column"></th>
            </tr>
          </thead>
          <tbody className="tbody">
            {clubs
              .filter((club) =>
                club.name.toLowerCase().includes(search.toLowerCase()),
              )
              .map((club, index) => (
                <tr key={index} className="tbody-row">
                  <td className="tbody-col">{club.name}</td>
                  <td
                    className={`tbody-col ${
                      club.is_active ? 'color-success' : 'color-danger'
                    }`}
                    onClick={async () => {
                      const msg = confirm(
                        'Are you sure you want to toggle status of this club?',
                      );
                      if (msg) {
                        await toggleClub(accessToken, club.id);
                        toast.success('Club status toggled successfully');
                      }
                    }}
                  >
                    {club.is_active ? 'Active' : 'Inactive'}
                  </td>
                  <td className="tbody-col tbody-col--tools">
                    <a
                      className="tbody-col--tools-tool"
                      onClick={async () => {
                        const msg = confirm(
                          'Are you sure you want to toggle status of this club?',
                        );
                        if (msg) {
                          await toggleClub(accessToken, club.id);
                          toast.success('Club status toggled successfully');
                        }
                      }}
                    >
                      <div className="tbody-col--tools-tool-icon-frame">
                        <HiOutlineArrowsRightLeft />
                      </div>
                      <p>Toggle</p>
                    </a>
                    <a
                      className="tbody-col--tools-tool"
                      onClick={async () => {
                        const msg = prompt('Enter the new manager ID');
                        if (msg) {
                          await updateManagerOfClub(accessToken, club.id, msg);
                          toast.success('Manager updated successfully');
                        }
                      }}
                    >
                      <div className="tbody-col--tools-tool-icon-frame">
                        <PencilIcon />
                      </div>
                      <p>Review</p>
                    </a>
                    <a
                      className="tbody-col--tools-tool color-danger"
                      onClick={async () => {
                        const msg = confirm(
                          'Are you sure you want to delete this club?',
                        );
                        if (msg) {
                          await deleteClub(accessToken, club.id);
                          toast.success('Club deleted successfully');
                        }
                      }}
                    >
                      <div className="tbody-col--tools-tool-icon-frame">
                        <HiOutlineTrash />
                      </div>
                      <p>Delete</p>
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot className="tfoot">
            <tr className="tfoot-row">
              <td className="tfoot-col" colSpan="3">
                <p>
                  Showing {clubs.length} of {clubs.length} clubs
                </p>
              </td>
            </tr>
            {addEmptyRows(clubs, TABLE_RESULTS_PER_PAGE).map((_, index) => (
              <tr key={index} className="tbody-row--empty"></tr>
            ))}
          </tfoot>
        </table>
      </div>
    </>
  );
}

function AdminComp() {
  return (
    <InnerContainer>
      <h1 className="title">Admin Panel</h1>
      <EventsPanelComp events={DUMMY_DATA_EVENTS} />
      <PostsPanelComp posts={DUMMY_DATA_POSTS} />
      <ClubsPanelComp clubs={DUMMY_DATA_CLUBS} />
    </InnerContainer>
  );
}

export default AdminComp;
