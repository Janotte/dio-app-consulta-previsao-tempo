import { createReducer, on } from '@ngrx/store';

import * as fromConfigActions from './config.actions';
import { Units } from './../../models/units.enum';


export interface ConfigState {
    unit: Units;
}

export const configInitialState: ConfigState = {
    unit: Units.Metric,
}

export const configReducer = createReducer(
    configInitialState,
    on(fromConfigActions.updateUnit, (state, { unit }) => ({
        ...state,
        unit,
    })),
);