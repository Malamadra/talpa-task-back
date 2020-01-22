import { fakeMachines } from 'fakeData'
import machinesSensorsLoader from 'graphql/loaders/machinesSensorsLoader'

export default {
  Query: {
    machine: (_, { id }) => fakeMachines.find(machine => id === machine.id),
    machines: () => fakeMachines
  },
  Machine: {
    sensors: async parent =>
      machinesSensorsLoader.load({
        parent
      })
  }
}
