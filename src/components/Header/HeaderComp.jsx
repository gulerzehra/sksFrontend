import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useEffect, useState } from 'react';
import {
  Header,
  HeaderLogo,
  HeaderLogoImg,
  HeaderLogoText,
  HeaderNav,
  HeaderNavItem,
  HeaderNavList,
  HeaderUserPanel,
  HeaderUserPanelSwitch,
  HeaderUserPanelSwitchInput,
  HeaderUserPanelSwitchSlider,
  HeaderUserPanelUser,
  HeaderUserPanelUserItem,
  HeaderUserPanelUserItemUnreadBadge,
  HeaderUserPanelUserItemNotifications,
  HeaderUserPanelUserItemNotificationsTitle,
  HeaderUserPanelUserItemNotificationsNotification,
  HeaderUserPanelUserItemNotificationsNotificationTitle,
  HeaderUserPanelUserItemNotificationsNotificationDescription,
} from './HeaderComp-styled';
import PropTypes from 'prop-types';
import { DUMMY_DATA_NOTIFICATIONS as DUMMY_DATA } from '../../data/notifications';
import { useSelector } from 'react-redux';
import { getNotifications } from '../../data/data';
import {
  ROLE_CLUB_MANAGER,
  ROLE_REGISTERED_USER,
  ROLE_SKS_ADMIN,
} from '../../utils/constants';
import { store } from '../../data/store';
import { fetchNotifications } from '../../data/notificationSlice';
import { logout } from '../../data/userSlice';

DUMMY_DATA.sort((a, b) => b.id - a.id);

function Switch() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <HeaderUserPanelSwitch htmlFor="switch">
      <HeaderUserPanelSwitchInput
        type="checkbox"
        name="switch"
        id="switch"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <HeaderUserPanelSwitchSlider className="switch-slider"></HeaderUserPanelSwitchSlider>
    </HeaderUserPanelSwitch>
  );
}

function Notification({ club, description }) {
  return (
    <HeaderUserPanelUserItemNotificationsNotification>
      <Link to="/">
        <HeaderUserPanelUserItemNotificationsNotificationTitle>
          New announcment from {club}
        </HeaderUserPanelUserItemNotificationsNotificationTitle>
        <HeaderUserPanelUserItemNotificationsNotificationDescription>
          {description}
        </HeaderUserPanelUserItemNotificationsNotificationDescription>
      </Link>
    </HeaderUserPanelUserItemNotificationsNotification>
  );
}

Notification.propTypes = {
  club: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function User() {
  const [showNotifications, setShowNotifications] = useState(false);
  const { isLoggedIn, role, accessToken } = useSelector((state) => state.user);
  const { notifications, unreadCount } = useSelector(
    (state) => state.notification,
  );

  function handleShowNotifications() {
    setShowNotifications((showNotifications) => !showNotifications);
  }

  useEffect(() => {
    if (!isLoggedIn || role === ROLE_REGISTERED_USER) return;
    async function notificationsHandler() {
      const response = await getNotifications(accessToken);
      store.dispatch(fetchNotifications(response, response.length));
    }
    notificationsHandler();
  }, [accessToken, isLoggedIn, role]);

  return (
    <HeaderUserPanelUser>
      <HeaderUserPanelUserItem onClick={handleShowNotifications}>
        Minthe
        {unreadCount > 0 && (
          <HeaderUserPanelUserItemUnreadBadge>
            {unreadCount > 9 ? '9+' : unreadCount}
          </HeaderUserPanelUserItemUnreadBadge>
        )}
        {showNotifications && (
          <HeaderUserPanelUserItemNotifications
            onClick={(e) => e.stopPropagation()}
          >
            <HeaderUserPanelUserItemNotificationsTitle>
              Messages
            </HeaderUserPanelUserItemNotificationsTitle>
            {unreadCount > 0 ? (
              notifications.map((notification) => (
                <Notification
                  key={notification.id}
                  club={`Event: ${notification.post}`}
                  description={notification.message}
                />
              ))
            ) : (
              <p>No new notifications</p>
            )}
          </HeaderUserPanelUserItemNotifications>
        )}
      </HeaderUserPanelUserItem>
      <HeaderUserPanelUserItem
        className="divider"
        onClick={() => {
          store.dispatch(logout());
        }}
      >
        <Link to="/login">Logout</Link>
      </HeaderUserPanelUserItem>
    </HeaderUserPanelUser>
  );
}

function HeaderComp() {
  const { role } = useSelector((state) => state.user);

  return (
    <Header>
      <Link to="/" className="header__logo">
        <HeaderLogo>
          <HeaderLogoImg src="/kunefe.png" alt="Kunefe Logo" />
          <HeaderLogoText>Künefe</HeaderLogoText>
        </HeaderLogo>
      </Link>
      <HeaderNav>
        <HeaderNavList>
          <HeaderNavItem>
            <Link to="/clubs">Clubs</Link>
          </HeaderNavItem>
          <HeaderNavItem>
            <Link to="/events">Events</Link>
          </HeaderNavItem>
          {role === ROLE_CLUB_MANAGER && (
            <HeaderNavItem>
              <Link to="/manage">Manage</Link>
            </HeaderNavItem>
          )}
          {role === ROLE_SKS_ADMIN && (
            <HeaderNavItem>
              <Link to="/admin">Admin</Link>
            </HeaderNavItem>
          )}
        </HeaderNavList>
      </HeaderNav>
      <HeaderUserPanel>
        <Switch />
        <User />
      </HeaderUserPanel>
    </Header>
  );
}

export default HeaderComp;
