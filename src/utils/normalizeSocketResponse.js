const normalizeSocketResponse = (stockData, newStockData) => {
  const updatedStockData = { ...stockData };

  const newStockDataObj = {};

  for (let stock of newStockData) {
    newStockDataObj[stock[0]] = stock[1];
  }

  Object.keys(newStockDataObj).forEach((key) => {
    if (updatedStockData[key]) {
      updatedStockData[key].push({
        value: newStockDataObj[key],
        date: Date.now(),
      });
    } else {
      updatedStockData[key] = [
        { value: newStockDataObj[key], date: Date.now() },
      ];
    }
  });

  return updatedStockData;
};

export default normalizeSocketResponse;
