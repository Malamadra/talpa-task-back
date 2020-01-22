import DataLoader from 'dataloader'
import { fakeSensors } from 'fakeData'

const machinesSensorsLoader = async data =>
  data.map(({ parent }) =>
    fakeSensors.filter(({ machineId }) => machineId === parent.id)
  )

export default new DataLoader(machinesSensorsLoader)
