// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  
  const superbowlWin = (record) => {
    const isWin = record.find(record => record.result === "W");
    return isWin ? isWin.year : undefined;
}
  // console.log(record.find(superbowlWin))
  
