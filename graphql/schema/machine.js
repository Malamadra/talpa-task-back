import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    machine(id: ID!): Machine
    machines: [Machine!]
  }

  type GPSPosition {
    latitude: Float!
    longitude: Float!
  }

  type Machine {
    id: ID!
    name: String!
    sensors: [Sensor!]
    lastKnownPosition: GPSPosition
  }
`
