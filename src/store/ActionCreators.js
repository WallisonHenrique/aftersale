import { GetData } from './RestData';
import { ActionTypes } from './Types';

export const loadData = (dataType, params) => ({
	type: ActionTypes.DATA_LOAD,
	payload: GetData(dataType, params).then((response) => ({
		dataType,
		data: response.data
	}))
});

export const loadLamps = (dataType, data) => ({
	type: ActionTypes.LAMPS_LOAD,
	payload: {
		dataType,
		data
	}
});

export const setLamps = (data) => ({
	type: ActionTypes.LAMPS_SET,
	payload: data
});

export const setLamp = (floor, lamp, lampOn) => ({
	type: ActionTypes.LAMP_SET,
	payload: { 
		floor,
		lamp,
		data: lampOn 
	}
});

export const setSwitcher = (data) => ({
	type: ActionTypes.SWITCHER_SET,
	payload: data
});

export const loadLampson = (dataType) => ({
	type: ActionTypes.LAMPSON_LOAD,
	payload: dataType
});