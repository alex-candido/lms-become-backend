export const ROUTES = {
  AUTH: {
    CONTROLLER: 'auth',
    REGISTER_USER: 'register-user',
    LOG_USER_IN: 'login-user',
    LOG_OUT: 'logout',
  },

  USERS: {
    CONTROLLER: 'users',
    FIND_ALL: '',
    FIND_ONE: ':userID',
    UPDATE_ONE: 'update',
    DELETE_ONE: 'delete',
    FOLLOW_UNFOLLOW: 'follow-unfollow/:userIDToPerformActionOn',
    FOLLOWERS: 'followers/:userIDToView',
    FOLLOWINGS: 'followings/:userIDToView',
  },

  POSTS: {
    CONTROLLER: 'posts',
    CREATE: '',
    FIND_ALL: '',
    FIND_ONE: ':postID',
    UPDATE_ONE: ':postID',
    DELETE_ONE: ':postID',
    FEED: 'feed',
  },
};

export const API_DESCRIPTION = (API_PORT: string) => {
  const data = {
    Message: `🚀 Server started ${API_PORT}! \n`,
    API: 'lms-become-backend',
    port: `${API_PORT}`,
    version: '1.0.0',
    description: 'LMS Api',
    author: 'Alex Cândido <alex.candido.tec@gmail.com>',
    environment: 'Development',
    operating_system: 'Linux',
    nodejs: 'v20.11.0',
    repository: ' https://github.com/alex-candido/lms-become-backend',
  };
  return `
    ${data.Message}
    Api: ${data.API}
    Port: ${data.port}
    Version: ${data.version}
    Description: ${data.description}
    Author: ${data.author}
    Environment: ${data.environment}
    Operating System: ${data.operating_system}
    NodeJS: ${data.nodejs}
    Repository: ${data.repository}\n`;
};
