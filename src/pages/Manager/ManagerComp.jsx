import { Link } from 'react-router-dom';
import { PencilIcon } from '../../components/Icons/PencilIcon';
import { PlusIcon } from '../../components/Icons/PlusIcon';
import { InnerContainer } from './ManagerComp-styled';

function ManagerComp() {
  return (
    <InnerContainer>
      <h1 className="title">Manager Panel</h1>
      <div className="panel">
        <table className="table">
          <thead className="thead">
            <tr className="thead-row">
              <th className="thead-column">Activity</th>
              <th className="thead-column"></th>
            </tr>
          </thead>
          <tbody className="tbody">
            <tr className="tbody-row">
              <td className="tbody-col">Events</td>
              <td className="tbody-col tbody-col--tools">
                <Link to="events/add" className="tbody-col--tools-tool">
                  <div className="tbody-col--tools-tool-icon-frame">
                    <PlusIcon />
                  </div>
                  <p>Add</p>
                </Link>
                <Link to="events" className="tbody-col--tools-tool">
                  <div className="tbody-col--tools-tool-icon-frame">
                    <PencilIcon />
                  </div>
                  <p>Manage</p>
                </Link>
              </td>
            </tr>
            <tr className="tbody-row">
              <td className="tbody-col">Club Page</td>
              <td className="tbody-col tbody-col--tools">
                <a className="tbody-col--tools-tool">
                  <div className="tbody-col--tools-tool-icon-frame">
                    <PencilIcon />
                  </div>
                  <p>Change</p>
                </a>
              </td>
            </tr>
            <tr className="tbody-row">
              <td className="tbody-col">Posts</td>
              <td className="tbody-col tbody-col--tools">
                <Link to="posts/add" className="tbody-col--tools-tool">
                  <div className="tbody-col--tools-tool-icon-frame">
                    <PlusIcon />
                  </div>
                  <p>Add</p>
                </Link>
                <Link to="posts" className="tbody-col--tools-tool">
                  <div className="tbody-col--tools-tool-icon-frame">
                    <PencilIcon />
                  </div>
                  <p>Manage</p>
                </Link>
              </td>
            </tr>
            <tr className="tbody-row">
              <td className="tbody-col">Notification</td>
              <td className="tbody-col tbody-col--tools">
                <a className="tbody-col--tools-tool">
                  <div className="tbody-col--tools-tool-icon-frame">
                    <PlusIcon />
                  </div>
                  <p>Make an Announcement</p>
                </a>
                <Link to="notifications" className="tbody-col--tools-tool">
                  <div className="tbody-col--tools-tool-icon-frame">
                    <PencilIcon />
                  </div>
                  <p>Manage</p>
                </Link>
              </td>
            </tr>
          </tbody>
          <tfoot className="tfoot"></tfoot>
        </table>
        <aside className="filters"></aside>
      </div>
    </InnerContainer>
  );
}

export default ManagerComp;
