import { fakeSensors } from 'fakeData'
import sensorMachineLoader from 'graphql/loaders/sensorMachineLoader'

export default {
  Query: {
    sensorData: (_, { id, from, to }) => {
      return ''
    }
  },
  Sensor: {
    machine: async parent => sensorMachineLoader.load({ parent })
  }
}
