import { useEffect, useState } from 'react';
import Button from '../../../components/Button/Button';
import { MagnifyingGlassIcon } from '../../../components/Icons/MagnifyingGlassIcon';
// import { PencilIcon } from '../../../components/Icons/PencilIcon';
import { InnerContainer } from './ManagerNotificationsComp-styled';
import {
  ROLE_CLUB_MANAGER,
  TABLE_RESULTS_PER_PAGE,
} from '../../../utils/constants';
import { useSelector } from 'react-redux';
import { getNotifications } from '../../../data/data';
import { store } from '../../../data/store';
import { fetchNotifications } from '../../../data/notificationSlice';

/**
 * @description Add empty rows to the data array
 * (This is a patch for the table component due to the lack of a virtualized table)
 * @param {Array} data - Array of objects
 * @param {Number} maxRows - Maximum number of rows
 * @returns {Array} - Array of objects
 */
function addEmptyRows(data, maxRows) {
  const emptyRows = maxRows - data.length - 9;
  if (emptyRows <= 0) return data;
  return Array(emptyRows).fill({});
}

function ManagerNotificationsComp() {
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState(['today', 'past7']);
  const { isLoggedIn, role, accessToken } = useSelector((state) => state.user);
  const { notifications } = useSelector((state) => state.notification);
  console.log(notifications);
  // find the posts that are related to the user
  // const userEvents = events.filter((post) => post.club_id === user_id);
  // console.log(userEvents);
  const userNotifications = notifications;

  useEffect(() => {
    if (!isLoggedIn || role !== ROLE_CLUB_MANAGER) return;
    async function notificationsHandler() {
      const response = await getNotifications(accessToken);
      store.dispatch(fetchNotifications(response));
    }
    notificationsHandler();
  }, [accessToken, isLoggedIn, role]);

  console.log(userNotifications);

  const filteredData = userNotifications
    .filter((notification) =>
      notification.message.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((notification) => {
      if (dateFilter.includes('today')) {
        return (
          new Date(notification.created_at).toDateString() ===
          new Date().toDateString()
        );
      } else if (dateFilter.includes('past7')) {
        return (
          new Date(notification.created_at) >
          new Date(new Date().setDate(new Date().getDate() - 7))
        );
      } else {
        return true;
      }
    });

  function handleSearch(notification) {
    setSearch(notification.target.value);
  }

  function filterOnClickHandler(filter, type) {
    if (type === 'date') {
      if (dateFilter.includes(filter)) {
        setDateFilter(dateFilter.filter((item) => item !== filter));
      } else {
        setDateFilter([...dateFilter, filter]);
      }
    }
  }

  return (
    <InnerContainer>
      <div className="title-line">
        <h1 className="title">Notification Center</h1>
        <Button>Add Notification</Button>
      </div>
      <div className="panel">
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
              <th className="thead-column">Notification</th>
              <th className="thead-column">Date</th>
              {/* <th className="thead-column"></th> */}
            </tr>
          </thead>
          <tbody className="tbody">
            {filteredData.map((notification, index) => (
              <tr key={index} className="tbody-row">
                <td className="tbody-col">{notification.message}</td>
                <td className="tbody-col">
                  {new Date(notification.created_at).toLocaleDateString()}
                </td>
                {/* <td className="tbody-col tbody-col--tools">
                    <a className="tbody-col--tools-tool">
                      <div className="tbody-col--tools-tool-icon-frame">
                        <PencilIcon />
                      </div>
                      <p>Change</p>
                    </a>
                  </td> */}
              </tr>
            ))}
          </tbody>
          <tfoot className="tfoot">
            <tr className="tfoot-row">
              <td className="tfoot-col" colSpan="3">
                <p>
                  Showing {filteredData.length} of {filteredData.length}{' '}
                  notifications
                </p>
              </td>
            </tr>
            {addEmptyRows(filteredData, TABLE_RESULTS_PER_PAGE).map(
              (_, index) => (
                <tr key={index} className="tbody-row--empty"></tr>
              ),
            )}
          </tfoot>
        </table>
        <aside className="filters">
          <div className="filters-header-frame">
            <h3 className="filters-header">Filter</h3>
          </div>
          <div className="filters-area">
            <div className="filters-group">
              <h4 className="filters-group-title">Date</h4>
              <p
                className="filters-group-option color-secondary"
                onClick={() => filterOnClickHandler('today', 'date')}
              >
                Today
              </p>
              <p
                className="filters-group-option color-secondary"
                onClick={() => filterOnClickHandler('past7', 'date')}
              >
                Past 7 years
              </p>
            </div>
          </div>
        </aside>
      </div>
    </InnerContainer>
  );
}

export default ManagerNotificationsComp;
