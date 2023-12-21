import { createStore } from 'redux'
import dataReducer from '../reducer/reducer'

const store = createStore(dataReducer)

export default store