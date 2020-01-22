import { fakeSensors } from 'fakeData'
import sensorMachineLoader from 'graphql/loaders/sensorMachineLoader'

export default {
  Query: {
    sensorData: (_, { sensorId, from = 0, to = Infinity }) =>
      fakeSensors
        .find(({ id }) => id === sensorId)
        .data.filter(({ timestamp }) => timestamp >= from && timestamp <= to)
  },
  Sensor: {
    machine: async parent => sensorMachineLoader.load({ parent })
  }
}
