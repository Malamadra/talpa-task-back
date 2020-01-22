import { fakeMachines } from 'fakeData'
import machinesSensorsLoader from 'graphql/loaders/machinesSensorsLoader'

export default {
  Query: {
    machine: async (_, { id }) =>
      fakeMachines.find(machine => id === machine.id),
    machines: () => {
      return fakeMachines
    }
  },
  Machine: {
    sensors: async (parent, params) =>
      machinesSensorsLoader.load({
        parent,
        params
      })
  }
}
