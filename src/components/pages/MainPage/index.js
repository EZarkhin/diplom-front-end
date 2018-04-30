import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import Component from './MainPage'
import { getUnits, getUnit } from '../../../store/actions/unit'
import { getTypes, getType } from '../../../store/actions/type'
import { getWorker, getWorkers } from '../../../store/actions/worker'
import { getFullUnitData } from '../../../store/selectors/unit'
import { getFullTypeData } from '../../../store/selectors/type'
import { getFullWorkerData } from '../../../store/selectors/worker'

const selector = createStructuredSelector({
  unit: getFullUnitData,
  type: getFullTypeData,
  worker: getFullWorkerData
})

const action = {
  onGetUnits: getUnits,
  onGetUnit: getUnit,
  onGetTypes: getTypes,
  onGetType: getType,
  onGetWorkers: getWorkers,
  onGetWorker: getWorker
}

export default connect(selector, action)(Component)