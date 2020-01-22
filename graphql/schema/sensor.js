import { gql } from 'apollo-server-express'

export default gql`  
  type Query {
    sensorData(id: ID!, from: Int!, to: Int!): [SensorDataPoint]
  }

  type Sensor {
    name: String!
    machine: Machine!
  }

  type SensorDataPoint {
    timestamp: Int!
    value: Float!
  }
`
