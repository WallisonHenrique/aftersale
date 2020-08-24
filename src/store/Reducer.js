import { ActionTypes } from './Types';

export const StoreReducer = (storeData, action) => {
	switch (action.type) {
		case ActionTypes.DATA_LOAD:
			return {
				...storeData,
				[action.payload.dataType]: action.payload.data.results
			};
		case ActionTypes.LAMPS_LOAD:
			return {
				...storeData,
				[action.payload.dataType]: action.payload.data
			};
		case ActionTypes.LAMPS_SET:
			const newLamps = storeData.lamps.map((floor) => floor.map((lamp) => action.payload));
			return { ...storeData, lamps: newLamps };
		case ActionTypes.LAMP_SET:
			const { floor, lamp, data } = action.payload;
			const tmp = Object.assign([], storeData.lamps);
			tmp.[floor][lamp] = data;
			return { ...storeData, lamps: tmp };
		case ActionTypes.SWITCHER_SET:
			return { ...storeData, switcher: action.payload };
		case ActionTypes.LAMPSON_LOAD:
			let count = 0, total = 0;
			storeData.lamps.forEach((floor) => floor.forEach((lamp) => {
				if (lamp) {
					count++;
				}
				total++;
			}));
			return { 
				...storeData, 
				[action.payload]: { count, total } 
			};
		default:
			return storeData || {};
	}
}