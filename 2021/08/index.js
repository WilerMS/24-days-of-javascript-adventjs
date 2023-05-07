function maxProfit (prices) {
  let maxSum = 0
  for (let i = 0; i <= prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const diff = prices[j] - prices[i]
      if (diff > maxSum) maxSum = diff
    }
  }
  return maxSum > 0 ? maxSum : -1
}

module.exports = {
  maxProfit
}
