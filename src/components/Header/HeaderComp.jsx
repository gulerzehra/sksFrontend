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

function User() {
  const [showNotifications, setShowNotifications] = useState(false);

  function handleShowNotifications() {
    setShowNotifications((showNotifications) => !showNotifications);
  }

  return (
    <HeaderUserPanelUser>
      <HeaderUserPanelUserItem onClick={handleShowNotifications}>
        Minthe
        <HeaderUserPanelUserItemUnreadBadge>
          3
        </HeaderUserPanelUserItemUnreadBadge>
        <HeaderUserPanelUserItemNotifications
          className={showNotifications ? '' : 'hidden'}
        >
          <HeaderUserPanelUserItemNotificationsTitle>
            Messages
          </HeaderUserPanelUserItemNotificationsTitle>
          <HeaderUserPanelUserItemNotificationsNotification>
            <Link to="/">
              <HeaderUserPanelUserItemNotificationsNotificationTitle>
                New announcment from AICLUB
              </HeaderUserPanelUserItemNotificationsNotificationTitle>
              <HeaderUserPanelUserItemNotificationsNotificationDescription>
                Dear participant, starting from tomorrow we change our schedule
              </HeaderUserPanelUserItemNotificationsNotificationDescription>
            </Link>
          </HeaderUserPanelUserItemNotificationsNotification>
          <HeaderUserPanelUserItemNotificationsNotification>
            <Link to="/">
              <HeaderUserPanelUserItemNotificationsNotificationTitle>
                New announcment from Gaming Club
              </HeaderUserPanelUserItemNotificationsNotificationTitle>
              <HeaderUserPanelUserItemNotificationsNotificationDescription>
                Great News! In upcoming gamescom we gonna our STAND!
              </HeaderUserPanelUserItemNotificationsNotificationDescription>
            </Link>
          </HeaderUserPanelUserItemNotificationsNotification>
          <HeaderUserPanelUserItemNotificationsNotification>
            <Link to="/">
              <HeaderUserPanelUserItemNotificationsNotificationTitle>
                New announcment from Rockstar
              </HeaderUserPanelUserItemNotificationsNotificationTitle>
              <HeaderUserPanelUserItemNotificationsNotificationDescription>
                Dear Participants, you can join as beta tester for upcoming GTA
              </HeaderUserPanelUserItemNotificationsNotificationDescription>
            </Link>
          </HeaderUserPanelUserItemNotificationsNotification>
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
          <HeaderLogoImg src="/kunefe.svg" alt="Kunefe Logo" />
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
