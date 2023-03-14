import { data } from "../data/tech";

export function searchFilter(searchStr) {
  // Creating an empty newData
  let newData = {
    lang: [],
    hosting: [],
    frameworks: [],
    servers: [],
    database: [],
    design: [],
    ml: [],
    others: [],
  };
  //   Filtering object using old school, for loop
  Object.keys(data).map(function (objectKey, index) {
    for (let i = 0; i < data[objectKey].length; i++) {
      let label = data[objectKey][i].label;
      //   converting search string to lowercase to avoid case errors
      let searchString = searchStr.toUpperCase();
      //   checking condition
      if (label.includes(searchString)) {
        newData[objectKey].push(data[objectKey][i]);
      }
    }
  });
  //   returns new data array (filtered)
  return newData;
}
