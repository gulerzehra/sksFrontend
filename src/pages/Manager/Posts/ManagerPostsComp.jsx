import { useState } from 'react';
import Button from '../../../components/Button/Button';
import { CheckCircleIcon } from '../../../components/Icons/CheckCircleIcon';
import { ExclamationCircleIcon } from '../../../components/Icons/ExclamationCircleIcon';
import { MagnifyingGlassIcon } from '../../../components/Icons/MagnifyingGlassIcon';
import { PencilIcon } from '../../../components/Icons/PencilIcon';
import { XCircleIcon } from '../../../components/Icons/XCircleIcon';
import { DUMMY_DATA_POSTS as DUMMY_DATA } from '../../../data/posts';
import { InnerContainer } from './ManagerPostsComp-styled';
import { TABLE_RESULTS_PER_PAGE } from '../../../utils/constants';

DUMMY_DATA.sort((a, b) => a.date.localeCompare(b.date));

const data = DUMMY_DATA;

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
  const emptyRows = maxRows - data.length - 3;
  if (emptyRows <= 0) return data;
  return Array(emptyRows).fill({});
}

function ManagerPostsComp() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState([
    'pending',
    'approved',
    'rejected',
  ]);
  const [dateFilter, setDateFilter] = useState(['today', 'past7']);

  const filteredData = data
    .filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
    .filter((post) => statusFilter.includes(post.status.toLowerCase()))
    .filter((post) => {
      const postDate = new Date(post.date);
      const today = new Date();
      const past7 = new Date(today - 7 * 24 * 60 * 60 * 1000);
      if (dateFilter.includes('today')) {
        if (postDate.toDateString() === today.toDateString()) return true;
      }
      if (dateFilter.includes('past7')) {
        if (postDate >= past7 && postDate <= today) return true;
      }
      return false;
    });

  function handleSearch(post) {
    setSearch(post.target.value);
  }

  function filterOnClickHandler(filter, type) {
    if (type === 'status') {
      if (statusFilter.includes(filter)) {
        setStatusFilter(statusFilter.filter((item) => item !== filter));
      } else {
        setStatusFilter([...statusFilter, filter]);
      }
    } else if (type === 'date') {
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
        <h1 className="title">Posts Manage Panel</h1>
        <Button linkTo="add">Add Post</Button>
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
              <th className="thead-column">Post</th>
              <th className="thead-column">Status</th>
              <th className="thead-column">Date</th>
              <th className="thead-column"></th>
            </tr>
          </thead>
          <tbody className="tbody">
            {filteredData.map((post, index) => (
              <tr key={index} className="tbody-row">
                <td className="tbody-col">{post.title}</td>
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
                  <a className="tbody-col--tools-tool">
                    <div className="tbody-col--tools-tool-icon-frame">
                      <PencilIcon />
                    </div>
                    <p>Change</p>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="tfoot">
            <tr className="tfoot-row">
              <td className="tfoot-col" colSpan="4">
                <p>
                  Showing {filteredData.length} of {filteredData.length} posts
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
              <h4 className="filters-group-title">Status</h4>
              <p
                className="filters-group-option color-secondary"
                onClick={() => filterOnClickHandler('pending', 'status')}
              >
                Pending
              </p>
              <p
                className="filters-group-option color-success"
                onClick={() => filterOnClickHandler('approved', 'status')}
              >
                Approved
              </p>
              <p
                className="filters-group-option color-danger"
                onClick={() => filterOnClickHandler('rejected', 'status')}
              >
                Rejected
              </p>
            </div>
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

export default ManagerPostsComp;
