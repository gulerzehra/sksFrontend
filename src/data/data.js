import { API_URL } from '../utils/constants';

export async function refreshToken(token) {
  const data = await fetch(`${API_URL}/token/refresh/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}

export async function login(username, password) {
  const data = await fetch(`${API_URL}/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  return data.json();
}

export async function register(username, password) {
  const data = await fetch(`${API_URL}/user/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  return data.json();
}

export async function getClubs(token) {
  const data = await fetch(`${API_URL}/clubs/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}

export async function getClub(token, id) {
  const data = await fetch(`${API_URL}/clubs/${id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}

export async function createClub(token, name, managerId) {
  const data = await fetch(`${API_URL}/clubs/create/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, manager: managerId }),
  });
  return data.json();
}

export async function toggleClub(token, id) {
  const data = await fetch(`${API_URL}/clubs/toggle-status/${id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}

export async function updateManagerOfClub(token, id) {
  const data = await fetch(`${API_URL}/clubs/update-manager/${id}/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ new_manager_id: id }),
  });
  return data.json();
}

export async function deleteClub(token, id) {
  const data = await fetch(`${API_URL}/clubs/delete/${id}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}

export async function getPosts(token) {
  const data = await fetch(`${API_URL}/posts/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}

export async function getPost(token, id) {
  const data = await fetch(`${API_URL}/posts/${id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}

export async function getApprovedPosts() {
  const data = await fetch(`${API_URL}/posts/approved/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.json();
}

export async function getApprovedPost(id) {
  const data = await fetch(`${API_URL}/posts/approved/?club_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.json();
}

export async function getPendingPosts(token) {
  const data = await fetch(`${API_URL}/posts/pending/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}

export async function createPost(token, tag, category, content) {
  const data = await fetch(`${API_URL}/posts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ tag, category, content }),
  });
  return data.json();
}

export async function reviewPost(
  token,
  id,
  status = 'approved', // or 'rejected'
  rejectionReason = '', // required if status is 'rejected'
) {
  const data = await fetch(`${API_URL}/posts/${id}/approve-reject/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status, rejection_reason: rejectionReason }),
  });
  return data.json();
}

export async function getEvents(token) {
  const data = await fetch(`${API_URL}/events/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}

export async function getEvent(token, id) {
  const data = await fetch(`${API_URL}/events/${id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}

export async function getApprovedEvents() {
  const data = await fetch(`${API_URL}/events/approved/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.json();
}

export async function getApprovedEvent(id) {
  const data = await fetch(`${API_URL}/events/approved/?club_id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data.json();
}

export async function getPendingEvents(token) {
  const data = await fetch(`${API_URL}/events/pending/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}

export async function createEvent(token, name, content, date) {
  const data = await fetch(`${API_URL}/events/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, content, date }),
  });
  return data.json();
}

export async function reviewEvent(
  token,
  id,
  status = 'approved', // or 'rejected'
  rejectionReason = '', // required if status is 'rejected'
) {
  const data = await fetch(`${API_URL}/events/${id}/approve-reject/`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status, rejection_reason: rejectionReason }),
  });
  return data.json();
}

export async function getNotifications(token) {
  const data = await fetch(`${API_URL}/notifications/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  return data.json();
}
