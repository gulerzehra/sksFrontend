import { Link } from 'react-router-dom';
import { PencilIcon } from '../../components/Icons/PencilIcon';
import { PlusIcon } from '../../components/Icons/PlusIcon';
import { InnerContainer } from './ManagerComp-styled';
import { HiOutlineEye } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { ROLE_CLUB_MANAGER } from '../../utils/constants';
import { useEffect } from 'react';
import { getClub, getClubs } from '../../data/data';
import { store } from '../../data/store';
import { fetchClubs, selectClub } from '../../data/clubSlice';

function ManagerComp() {
  const { isLoggedIn, role, accessToken, user_id } = useSelector(
    (state) => state.user,
  );
  const { clubs } = useSelector((state) => state.club);
  // find the clubs that the user is a manager of
  const userClub = clubs.find((club) => club.manager === user_id);
  console.log(userClub);

  useEffect(() => {
    if (!isLoggedIn || role !== ROLE_CLUB_MANAGER) return;
    async function clubsHandler() {
      const response = await getClubs(accessToken);
      store.dispatch(fetchClubs(response));
    }
    clubsHandler();
  }, [accessToken, isLoggedIn, role]);

  if (!isLoggedIn || role !== ROLE_CLUB_MANAGER) {
    return (
      <InnerContainer>
        <h1 className="title">Manager Panel</h1>
        <p>You must be logged in as a club manager to view this page.</p>
      </InnerContainer>
    );
  }

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
              <td className="tbody-col">Club Page</td>
              <td className="tbody-col tbody-col--tools">
                <Link
                  to={`/clubs/${userClub.slug}`}
                  className="tbody-col--tools-tool"
                  onClick={async () => {
                    const response = await getClub(accessToken, userClub.id);
                    store.dispatch(selectClub(response));
                  }}
                >
                  <div className="tbody-col--tools-tool-icon-frame">
                    <HiOutlineEye />
                  </div>
                  <p>View Club</p>
                </Link>
                {/* <a className="tbody-col--tools-tool">
                  <div className="tbody-col--tools-tool-icon-frame">
                    <PencilIcon />
                  </div>
                  <p>Change</p>
                </a> */}
              </td>
            </tr>
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
              <td className="tbody-col">Notifications</td>
              <td className="tbody-col tbody-col--tools">
                {/* <a className="tbody-col--tools-tool">
                  <div className="tbody-col--tools-tool-icon-frame">
                    <PlusIcon />
                  </div>
                  <p>Make an Announcement</p>
                </a> */}
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
