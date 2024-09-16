const { User } = require('../models');
const { AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username });
    }
  },
  Mutation: {
    createUser: async (parent, { username, email, password}) => {
      const user = await User.create({ username, email, password })
      const token = signToken(user);
      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user) {
        throw new AuthenticationError('Incorrect email or password')
      }

      const correctPW = await user.isCorrectPassword(password);

      if (!correctPW){
        throw new AuthenticationError('Incorrect email or password')
      }

      const token = signToken(user);

      return { token, user }
    },
    saveBook: async (parent, { book }, context) => {
      if (context.user){
        const updateUser = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { savedBooks: book }},
          { new: true }
        );

        return updateUser.savedBooks.find(b => b.bookId === book.bookId)
      }
      throw new AuthenticationError('You need to be logged in!')
    },
    deleteBook: async (parent, { bookId }, context) => {
      if(context.user){
        const updateUser = await User.findByIdAndUpdate(
          context.user._id,
          { $pull: { savedBooks: { bookId }}},
          { new: true }
        );
        return updateUser = savedBooks.find(b => b.bookId === bookId)
      }
      throw new AuthenticationError('You need to be logged in!')
    }
  },
};

module.exports = resolvers;
