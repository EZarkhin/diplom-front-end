import { API_CALL } from '../middleware/ids'

export const apiCall = fields => ({
  type: API_CALL,
  fields
})
