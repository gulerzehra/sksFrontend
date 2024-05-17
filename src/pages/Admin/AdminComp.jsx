// import { Link } from 'react-router-dom';
import { PencilIcon } from '../../components/Icons/PencilIcon';
import { InnerContainer } from './AdminComp-styled';
import { MagnifyingGlassIcon } from '../../components/Icons/MagnifyingGlassIcon';
import { ExclamationCircleIcon } from '../../components/Icons/ExclamationCircleIcon';
import { CheckCircleIcon } from '../../components/Icons/CheckCircleIcon';
import { XCircleIcon } from '../../components/Icons/XCircleIcon';
import { useState } from 'react';
import { TABLE_RESULTS_PER_PAGE } from '../../utils/constants';
import { DUMMY_DATA_EVENTS } from '../../data/events';
import { DUMMY_DATA_POSTS } from '../../data/posts';
import { DUMMY_DATA_CLUBS } from '../../data/clubs';
import Button from '../../components/Button/Button';
import { HiOutlineTrash } from 'react-icons/hi2';

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

function EventsPanelComp({ events }) {
  const [search, setSearch] = useState('');

  function handleSearch(event) {
    setSearch(event.target.value);
  }

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
              <th className="thead-column">Club</th>
              <th className="thead-column">Status</th>
              <th className="thead-column">Date</th>
              <th className="thead-column"></th>
            </tr>
          </thead>
          <tbody className="tbody">
            {events
              .filter(
                (event) =>
                  event.title.toLowerCase().includes(search.toLowerCase()) ||
                  event.status.toLowerCase().includes(search.toLowerCase()),
              )
              .map((event, index) => (
                <tr key={index} className="tbody-row">
                  <td className="tbody-col">{event.title}</td>
                  <td className="tbody-col">Club ID</td>
                  <td
                    className={`tbody-col tbody-col--flex ${labelEnumToColor(
                      capitalizeFirstLetter(event.status),
                    )}`}
                  >
                    <div className="tbody-col-icon-frame">
                      {labelEnumToIcon(capitalizeFirstLetter(event.status))}
                    </div>
                    <p>{capitalizeFirstLetter(event.status)}</p>
                  </td>
                  <td className="tbody-col">
                    {new Date(event.date).toLocaleDateString()}
                  </td>
                  <td className="tbody-col tbody-col--tools">
                    {event.status === 'pending' && (
                      <a className="tbody-col--tools-tool">
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
              <td className="tfoot-col" colSpan="4">
                <p>
                  Showing {events.length} of {events.length} events
                </p>
              </td>
            </tr>
            {addEmptyRows(events, TABLE_RESULTS_PER_PAGE).map((_, index) => (
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

EventsPanelComp.propTypes = {
  events: DUMMY_DATA_EVENTS,
};

function PostsPanelComp({ posts }) {
  const [search, setSearch] = useState('');

  function handleSearch(event) {
    setSearch(event.target.value);
  }

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
              <th className="thead-column">Club</th>
              <th className="thead-column">Status</th>
              <th className="thead-column">Date</th>
              <th className="thead-column"></th>
            </tr>
          </thead>
          <tbody className="tbody">
            {posts
              .filter(
                (post) =>
                  post.title.toLowerCase().includes(search.toLowerCase()) ||
                  post.status.toLowerCase().includes(search.toLowerCase()),
              )
              .map((post, index) => (
                <tr key={index} className="tbody-row">
                  <td className="tbody-col">{post.title}</td>
                  <td className="tbody-col">Club ID</td>
                  <td
                    className={`tbody-col tbody-col--flex ${labelEnumToColor(
                      capitalizeFirstLetter(post.status),
                    )}`}
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
                      <a className="tbody-col--tools-tool">
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
              <td className="tfoot-col" colSpan="4">
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
      </div>
    </>
  );
}

PostsPanelComp.propTypes = {
  posts: DUMMY_DATA_POSTS,
};

function ClubsPanelComp({ clubs }) {
  const [search, setSearch] = useState('');

  function handleSearch(event) {
    setSearch(event.target.value);
  }

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
                  <td className="tbody-col tbody-col--tools">
                    <a className="tbody-col--tools-tool">
                      <div className="tbody-col--tools-tool-icon-frame">
                        <PencilIcon />
                      </div>
                      <p>Review</p>
                    </a>
                    <a className="tbody-col--tools-tool color-danger">
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

ClubsPanelComp.propTypes = {
  clubs: DUMMY_DATA_CLUBS,
};

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
