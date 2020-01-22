import faker from 'faker'
import { getTime } from 'date-fns'

export const fakeMachines = Array(10)
  .fill(null)
  .map(() => ({
    id: faker.random.uuid(),
    name: faker.internet.userName(),
    lastKnownPosition: {
      latitude: '50.4249879',
      longitude: '30.531965'
    }
  }))

export const fakeSensors = fakeMachines.reduce((acc, { id: machineId }) => {
  const belongedSensors = Array(10)
    .fill(null)
    .map(() => {
      const data = Array(10)
        .fill(null)
        .map(() => ({
          timestamp: getTime(faker.date.past()),
          value: faker.random.number()
        }))

      return {
        id: faker.random.uuid(),
        machineId,
        data
      }
    })

  return [...acc, ...belongedSensors]
}, [])
