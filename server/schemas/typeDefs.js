const typeDefs = `#graphql
    type User {
    _id: ID!
    username: String!
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getUser: User!
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPlaylist(name: String!, tracks: [ID]!): Auth
  }, 
`;

module.exports = typeDefs;