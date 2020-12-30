export const isObjectEmpty = (obj) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const isNegative = (stockDetails) => {
  return (
    stockDetails.length > 1 &&
    stockDetails[stockDetails.length - 1].value <
      stockDetails[stockDetails.length - 2].value
  );
};

export const isPositive = (stockDetails) => {
  return (
    stockDetails.length > 1 &&
    stockDetails[stockDetails.length - 1].value >
      stockDetails[stockDetails.length - 2].value
  );
};

export const changePercentage = (stockDetails) => {
  let percentage = "";
  if (stockDetails.length > 1) {
    const currentPrice = stockDetails[stockDetails.length - 1].value;
    const previousPrice = stockDetails[stockDetails.length - 2].value;
    if (currentPrice !== 0) {
      if (previousPrice !== 0) {
        percentage = ((currentPrice - previousPrice) / previousPrice) * 100;
      } else {
        percentage = currentPrice * 100;
      }
    } else {
      percentage = -previousPrice * 100;
    }
  }
  return Math.floor(percentage);
};
