import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  background-color: var(--color-header);
  box-shadow: 0 15px 10px -15px rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: var(--color-title);
`;

export const HeaderLogoImg = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const HeaderLogoText = styled.h1`
  font-size: 1.5rem;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  list-style: none;
`;

export const HeaderNavItem = styled.li`
  margin-right: 20px;
`;

export const HeaderUserPanel = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;

export const HeaderUserPanelSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
  user-select: none;
`;

export const HeaderUserPanelSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .switch-slider:before {
    -webkit-transform: translateX(16px);
    -ms-transform: translateX(16px);
    transform: translateX(16px);
  }
`;

export const HeaderUserPanelSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-switcher);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 20px;

  &::before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: var(--color-switcher-circle);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const HeaderUserPanelUser = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
`;

export const HeaderUserPanelUserItem = styled.li`
  position: relative;
  user-select: none;
  color: var(--color-title);

  &.divider::after {
    content: '';
    position: absolute;
    height: 24px;
    width: 1px;
    background-color: var(--color-title);
    left: -10px;
  }
`;

export const HeaderUserPanelUserItemUnreadBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 16px;
  height: 16px;
  background-color: var(--color-unread-count);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #000;
  user-select: none;
`;

export const HeaderUserPanelUserItemNotifications = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
  background-image: linear-gradient(to bottom, #fff 0%, #e3e3e3 100%);
  box-shadow: 0 15px 10px -15px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  border: 1px solid #000;
`;

export const HeaderUserPanelUserItemNotificationsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: normal;
  color: #000;
`;

export const HeaderUserPanelUserItemNotificationsNotification = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderUserPanelUserItemNotificationsNotificationTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: normal;
  color: #000;
`;

export const HeaderUserPanelUserItemNotificationsNotificationDescription = styled.p`
  font-size: 0.6rem;
  color: #7b7b7b;
`;
