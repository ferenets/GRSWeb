import DataApi from '../../api/data.api';
import {createAsyncAction} from '../../../client/libs/redux-helpers';

export const START_DATA_HOME_LOADING = 'START_DATA_HOME_LOADING';
export const DATA_HOME_SUCCESS = 'DATA_HOME_SUCCESS';
export const DATA_HOME_FAIL = 'DATA_HOME_FAIL';

const allocationData = (data) => {
    const allocationDataArray = (arr, propName) => {
        const result = {};
        arr.forEach(target => {
            let name = target[propName];
            if ([name] in result == false) {
                result[name] = [];
                result[name].push(target)
            } else if ([name] in result) {
                result[name].push(target)
            }
        });
        return result;
    };
    const createDisplayTree = (object) => {
        let result = object;
        for (let firstProp in result ) {
            let first = result[firstProp];
            for (let secondProp in first){
                let second = first[secondProp];
                for (let thirdProp in second){
                    let third = second[thirdProp];
                    for (let fourProp in third){
                        let four = third[fourProp];
                        result[firstProp][secondProp][thirdProp][fourProp] = null;
                    }
                };
            };
        };
        return result;
    };
    const buildFirstNestingDataTree = (resultArr, propName) => {
        let result = {};
        for (let key in resultArr) {
            result[key] = allocationDataArray(resultArr[key], propName);
        }
        return result;
    };
    const buildSecondNestingDataTree = (innerArr, innerPropName) => {
        let result = {};
        for (let key in innerArr) {
            const targetObject = innerArr[key];
            result[key] = buildFirstNestingDataTree(targetObject, innerPropName);
        }
        return result;
    };
    const buildThirdNestingDataTree = (innerArr, innerPropName) => {
        let result = {};
        for (let key in innerArr) {
            const targetObject = innerArr[key];
            result[key] = buildSecondNestingDataTree(targetObject, innerPropName);
        }
        return result;
    };

    const branchesOfTree = ['UTG', 'UMH', 'LVUMH', 'NAZVA'];
    const [firstTreeBranch, secondTreeBranch, thirdTreeBranch, fourTreeBranch] = branchesOfTree;

    const regionsPoints = allocationDataArray(data, firstTreeBranch);
    const areaPoints = buildFirstNestingDataTree(regionsPoints, secondTreeBranch);
    const localityPoints = buildSecondNestingDataTree(areaPoints, thirdTreeBranch);
    const inhabitedLocalityPoints = buildThirdNestingDataTree(localityPoints, fourTreeBranch);
    const displayTreeList = createDisplayTree(inhabitedLocalityPoints);

    return {
        points: data,
        regions: regionsPoints,
        area: areaPoints,
        locality: localityPoints,
        inhabitedLocality: inhabitedLocalityPoints,
        displayBranch: displayTreeList
    };
};

export const startLoading = () => ({type: START_DATA_HOME_LOADING});
export const getDataSheet = createAsyncAction({
    fn: DataApi.getPoints,
    success: (body) => {
        const dataSheet = allocationData(body.data);
        return ({type: DATA_HOME_SUCCESS, dataSheet})
    },
    error: (err) => ({type: DATA_HOME_FAIL, err})
});