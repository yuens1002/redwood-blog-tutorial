import gql from 'graphql-tag'

export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    phone: String
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]!
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
    phone: String
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
    phone: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact
  }
`
