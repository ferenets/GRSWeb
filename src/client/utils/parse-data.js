import _ from 'lodash';

export const allocationDataArray = (arr, propName) => {
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

export const createDisplayTree = (object) => {
  let result = object;
  for (let firstProp in result) {
    let first = result[firstProp];
    for (let secondProp in first){
      let second = first[secondProp];
      for (let thirdProp in second){
        let third = second[thirdProp];
        for (let fourProp in third){
          result[firstProp][secondProp][thirdProp][fourProp] = null;
        }
      }
    }
  }
  return result;
};

export const buildFirstNestingDataTree = (resultArr, propName) => {
  const keys = _.keys(resultArr);
  return _.zipObject(keys, keys.map(key => allocationDataArray(resultArr[key], propName)));
};

export const buildSecondNestingDataTree = (innerArr, innerPropName) => {
  const keys = _.keys(innerArr);
  return _.zipObject(keys, keys.map(key => buildFirstNestingDataTree(innerArr[key], innerPropName)));
};

export const buildThirdNestingDataTree = (innerArr, innerPropName) => {
  const keys = _.keys(innerArr);
  return _.zipObject(keys, keys.map(key => buildSecondNestingDataTree(innerArr[key], innerPropName)));
};