import { gql } from 'apollo-server-express'

export default gql`
  type Query {
    sensorData(sensorId: ID!, from: Float, to: Float): [SensorDataPoint]
  }

  type Sensor {
    id: ID!
    name: String!
    machine: Machine!
    data: [SensorDataPoint]
  }

  type SensorDataPoint {
    id: ID!
    timestamp: Float!
    value: Float!
  }
`
