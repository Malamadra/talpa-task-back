import DataLoader from 'dataloader'
import { fakeMachines } from 'fakeData'

const sensorMachineLoader = async data =>
  data.map(({ parent }) =>
    fakeMachines.find(({ id }) => id === parent.machineId)
  )

export default new DataLoader(sensorMachineLoader)
