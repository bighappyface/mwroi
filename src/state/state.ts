import { BlacReact } from 'blac'
import CalculatorCubit from './CalculatorCubit'

const state = new BlacReact([new CalculatorCubit()])

export const { useBloc, observer } = state
