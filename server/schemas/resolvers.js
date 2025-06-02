const { AuthenticationError } = require('apollo-server-express');
// @ts-ignore
const { User } = require('../src/models'); // fixed path
const { signToken } = require('../src/services/auth'); // fixed path

const resolvers = {
  Query: {
    // @ts-ignore
    me: async (parent, args, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');
      return await User.findById(context.user._id);
    },
  },

  Mutation: {
// @ts-ignore
     login: async (_parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user || !(await user.isCorrectPassword(password))) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // @ts-ignore
      const token = signToken(user);
      return { token, user };
    },

    // @ts-ignore
    addUser: async (parent, args) => {
      const user = await User.create(args);
      // @ts-ignore
      const token = signToken(user);
      return { token, user };
    },

    // @ts-ignore
    saveBook: async (parent, { input }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      return await User.findByIdAndUpdate(
        context.user._id,
        { $addToSet: { savedBooks: input } },
        { new: true, runValidators: true }
      );
    },

    // @ts-ignore
    removeBook: async (parent, { bookId }, context) => {
      if (!context.user) throw new AuthenticationError('Not logged in');

      return await User.findByIdAndUpdate(
        context.user._id,
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
