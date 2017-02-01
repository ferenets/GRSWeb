import geolib from 'geolib';

export const selectionPoints = (array) => {
  return array.map(row => ({
      lat: geolib.sexagesimal2decimal(row['SHYROTA']),
      lng: geolib.sexagesimal2decimal(row['DOLHOTA']),
      id: row['GRS_ID'],
      label: row['NAZVA'],
    }));
};

export const selectionTargetPoints = (dataSheet, selectionLabel) => {
  const filteredPoints = [];
  const draft = selectionLabel.map(label => dataSheet.filter(obj => obj['NAZVA'] == label));
  draft.map(arr => filteredPoints.push(arr[0]));

  return selectionPoints(filteredPoints);
};