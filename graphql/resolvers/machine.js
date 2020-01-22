import { fakeMachines } from 'fakeData'

export default {
  Query: {
    machine: (_, { id }) => {
      const machine = fakeMachines.find(machine => id === machine.id)

      return {
        sensors: [],
        ...machine
      }
    }
  }
}
