import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    sensorData(id: ID!, from: Int!, to: Int!): [Sensor]
  }

  type Sensor {
    id: ID!
    name: String!
    machine: Machine!
    data: [SensorDataPoint]
  }

  type SensorDataPoint {
    timestamp: Int!
    value: Float!
  }
`
