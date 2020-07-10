export default {
  Query: {
    users: (parent, args, { models }) => {
      return Object.values(models.users);
    },
    user: (parent, { id }, { models }) => {
      return models.users[id];
    },
    me: (parent, args, { me }) => {
      return me;
    },
  },

  User: {
    username: (user, args, { models }) => {
      return models.user.username;
    },

    messages: (user, args, { models }) => {
      return Object.values(models.messages).filter(
        (message) => message.userId === user.id
      );
    },
  },
};
