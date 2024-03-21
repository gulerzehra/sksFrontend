import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useState } from 'react';
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

const DUMMY_DATA = [
  {
    id: 1,
    club: 'AICLUB',
    description:
      'Dear participant, starting from tomorrow we change our schedule',
  },
  {
    id: 2,
    club: 'Gaming Club',
    description: 'Great News! In upcoming gamescom we gonna our STAND!',
  },
  {
    id: 3,
    club: 'Rockstar',
    description:
      'Dear Participants, you can join as beta tester for upcoming GTA',
  },
];

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

  function handleShowNotifications() {
    setShowNotifications((showNotifications) => !showNotifications);
  }

  return (
    <HeaderUserPanelUser>
      <HeaderUserPanelUserItem onClick={handleShowNotifications}>
        Minthe
        {DUMMY_DATA.length > 0 && (
          <HeaderUserPanelUserItemUnreadBadge>
            {DUMMY_DATA.length}
          </HeaderUserPanelUserItemUnreadBadge>
        )}
        <HeaderUserPanelUserItemNotifications
          className={showNotifications ? '' : 'hidden'}
        >
          <HeaderUserPanelUserItemNotificationsTitle>
            Messages
          </HeaderUserPanelUserItemNotificationsTitle>
          {DUMMY_DATA.map((notification) => (
            <Notification
              key={notification.id}
              club={notification.club}
              description={notification.description}
            />
          ))}
        </HeaderUserPanelUserItemNotifications>
      </HeaderUserPanelUserItem>
      <HeaderUserPanelUserItem className="divider">
        <Link to="/">Logout</Link>
      </HeaderUserPanelUserItem>
    </HeaderUserPanelUser>
  );
}

function HeaderComp() {
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
