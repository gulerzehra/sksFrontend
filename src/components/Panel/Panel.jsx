import PropTypes from 'prop-types';
import { createContext } from 'react';
import { MagnifyingGlassIcon } from '../Icons/MagnifyingGlassIcon';

const panelContext = createContext();

function PanelComp({ children }) {
  return <div className="panel">{children}</div>;
}

PanelComp.propTypes = {
  children: PropTypes.node.isRequired,
};

function Search({ searchQuery, onChangeHandler }) {
  return (
    <div className="search">
      <div className="search-icon-frame">
        <MagnifyingGlassIcon />
      </div>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={onChangeHandler}
      />
    </div>
  );
}

Search.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

function Table({ children }) {
  return <table className="table">{children}</table>;
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

function TableHead({ children }) {
  return <thead className="thead">{children}</thead>;
}

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
};

function TableBody({ children }) {
  return <tbody className="tbody">{children}</tbody>;
}

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

function TableRow({ children }) {
  return <tr className="tbody-row">{children}</tr>;
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

function TableCell({ children }) {
  return <td className="tbody-col">{children}</td>;
}

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
};

function TableCellFlex({ children, status }) {
  return <td className={`tbody-col tbody-col--flex ${status}`}>{children}</td>;
}

TableCellFlex.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string.isRequired,
};

function TableCellTools({ children }) {
  return <td className="tbody-col tbody-col--tools">{children}</td>;
}

TableCellTools.propTypes = {
  children: PropTypes.node.isRequired,
};

function TableFoot({ children }) {
  return <tfoot className="tfoot">{children}</tfoot>;
}

TableFoot.propTypes = {
  children: PropTypes.node.isRequired,
};

function Filter({ children }) {
  return <aside className="filters">{children}</aside>;
}

Filter.propTypes = {
  children: PropTypes.node.isRequired,
};

function FilterGroup({ children }) {
  return <div className="filters-group">{children}</div>;
}

FilterGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

function FilterGroupTitle({ children }) {
  return <h4 className="filters-group-title">{children}</h4>;
}

FilterGroupTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

function FilterGroupOption({ children, status, onClickHandler }) {
  return (
    <p className={`filters-group-option ${status}`} onClick={onClickHandler}>
      {children}
    </p>
  );
}

FilterGroupOption.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export {
  panelContext,
  Search,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableCellFlex,
  TableCellTools,
  TableFoot,
  Filter,
  FilterGroup,
  FilterGroupTitle,
  FilterGroupOption,
};

export default PanelComp;

// import { useState } from 'react';
// import Button from '../../../components/Button/Button';
// import { CheckCircleIcon } from '../../../components/Icons/CheckCircleIcon';
// import { ExclamationCircleIcon } from '../../../components/Icons/ExclamationCircleIcon';
// import { MagnifyingGlassIcon } from '../../../components/Icons/MagnifyingGlassIcon';
// import { PencilIcon } from '../../../components/Icons/PencilIcon';
// import { XCircleIcon } from '../../../components/Icons/XCircleIcon';
// import { DUMMY_DATA_EVENTS as DUMMY_DATA } from '../../../data/events';
// import { InnerContainer } from './ManagerEventsComp-styled';
// import { TABLE_RESULTS_PER_PAGE } from '../../../utils/constants';

// DUMMY_DATA.sort((a, b) => a.date.localeCompare(b.date));

// const data = DUMMY_DATA.filter((event) => event.type === 'club');

// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

// function labelEnumToColor(label) {
//   switch (label) {
//     case 'Pending':
//       return 'color-secondary';
//     case 'Approved':
//       return 'color-success';
//     case 'Rejected':
//       return 'color-danger';
//     default:
//       return 'color-secondary';
//   }
// }

// function labelEnumToIcon(label) {
//   switch (label) {
//     case 'Pending':
//       return <ExclamationCircleIcon />;
//     case 'Approved':
//       return <CheckCircleIcon />;
//     case 'Rejected':
//       return <XCircleIcon />;
//     default:
//       return <ExclamationCircleIcon />;
//   }
// }

// /**
//  * @description Add empty rows to the data array
//  * (This is a patch for the table component due to the lack of a virtualized table)
//  * @param {Array} data - Array of objects
//  * @param {Number} maxRows - Maximum number of rows
//  * @returns {Array} - Array of objects
//  */
// function addEmptyRows(data, maxRows) {
//   const emptyRows = maxRows - data.length - 2;
//   if (emptyRows <= 0) return data;
//   return Array(emptyRows).fill({});
// }

// function ManagerEventsComp() {
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState([
//     'pending',
//     'approved',
//     'rejected',
//   ]);
//   const [dateFilter, setDateFilter] = useState(['today', 'past7', 'upcoming']);

//   const filteredData = data
//     .filter((event) => event.title.toLowerCase().includes(search.toLowerCase()))
//     .filter((event) => statusFilter.includes(event.status.toLowerCase()))
//     .filter((event) => {
//       const eventDate = new Date(event.date);
//       const today = new Date();
//       const past7 = new Date(today);
//       past7.setDate(past7.getDate() - 7);
//       if (
//         dateFilter.includes('today') &&
//         eventDate.toDateString() === today.toDateString()
//       ) {
//         return true;
//       }
//       if (
//         dateFilter.includes('past7') &&
//         eventDate >= past7 &&
//         eventDate <= today
//       ) {
//         return true;
//       }
//       if (dateFilter.includes('upcoming') && eventDate > today) {
//         return true;
//       }
//       return false;
//     });

//   function handleSearch(event) {
//     setSearch(event.target.value);
//   }

//   function filterOnClickHandler(filter, type) {
//     if (type === 'status') {
//       if (statusFilter.includes(filter)) {
//         setStatusFilter(statusFilter.filter((item) => item !== filter));
//       } else {
//         setStatusFilter([...statusFilter, filter]);
//       }
//     } else if (type === 'date') {
//       if (dateFilter.includes(filter)) {
//         setDateFilter(dateFilter.filter((item) => item !== filter));
//       } else {
//         setDateFilter([...dateFilter, filter]);
//       }
//     }
//   }

//   return (
//     <div className="panel">
//       <div className="search">
//         <div className="search-icon-frame">
//           <MagnifyingGlassIcon />
//         </div>
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Search"
//           value={search}
//           onChange={handleSearch}
//         />
//       </div>
//       <div></div>
//       <table className="table">
//         <thead className="thead">
//           <tr className="thead-row">
//             <th className="thead-column">Event</th>
//             <th className="thead-column">Status</th>
//             <th className="thead-column">Date</th>
//             <th className="thead-column"></th>
//           </tr>
//         </thead>
//         <tbody className="tbody">
//           {filteredData.map((event, index) => (
//             <tr key={index} className="tbody-row">
//               <td className="tbody-col">{event.title}</td>
//               <td
//                 className={`tbody-col tbody-col--flex ${labelEnumToColor(
//                   capitalizeFirstLetter(event.status),
//                 )}`}
//               >
//                 <div className="tbody-col-icon-frame">
//                   {labelEnumToIcon(capitalizeFirstLetter(event.status))}
//                 </div>
//                 <p>{capitalizeFirstLetter(event.status)}</p>
//               </td>
//               <td className="tbody-col">
//                 {new Date(event.date).toLocaleDateString()}
//               </td>
//               <td className="tbody-col tbody-col--tools">
//                 <a className="tbody-col--tools-tool">
//                   <div className="tbody-col--tools-tool-icon-frame">
//                     <PencilIcon />
//                   </div>
//                   <p>Change</p>
//                 </a>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot className="tfoot">
//           <tr className="tfoot-row">
//             <td className="tfoot-col" colSpan="4">
//               <p>
//                 Showing {filteredData.length} of {filteredData.length} events
//               </p>
//             </td>
//           </tr>
//           {addEmptyRows(filteredData, TABLE_RESULTS_PER_PAGE).map(
//             (event, index) => (
//               <tr key={index} className="tbody-row--empty"></tr>
//             ),
//           )}
//         </tfoot>
//       </table>
//       <aside className="filters">
//         <div className="filters-header-frame">
//           <h3 className="filters-header">Filter</h3>
//         </div>
//         <div className="filters-area">
//           <div className="filters-group">
//             <h4 className="filters-group-title">Status</h4>
//             <p
//               className="filters-group-option color-secondary"
//               onClick={() => filterOnClickHandler('pending', 'status')}
//             >
//               Pending
//             </p>
//             <p
//               className="filters-group-option color-success"
//               onClick={() => filterOnClickHandler('approved', 'status')}
//             >
//               Approved
//             </p>
//             <p
//               className="filters-group-option color-danger"
//               onClick={() => filterOnClickHandler('rejected', 'status')}
//             >
//               Rejected
//             </p>
//           </div>
//           <div className="filters-group">
//             <h4 className="filters-group-title">Date</h4>
//             <p
//               className="filters-group-option color-secondary"
//               onClick={() => filterOnClickHandler('today', 'date')}
//             >
//               Today
//             </p>
//             <p
//               className="filters-group-option color-secondary"
//               onClick={() => filterOnClickHandler('past7', 'date')}
//             >
//               Past 7 years
//             </p>
//             <p
//               className="filters-group-option color-secondary"
//               onClick={() => filterOnClickHandler('upcoming', 'date')}
//             >
//               Upcoming
//             </p>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// }

// export default ManagerEventsComp;
