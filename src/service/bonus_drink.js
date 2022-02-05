export function bonusDrink(purchaseCount) {
  if (purchaseCount < 3) {
    return purchaseCount
  }
  if (purchaseCount % 2 === 0) {
    return purchaseCount + Math.floor(purchaseCount / 2 - 1)
  }else {
    return purchaseCount + Math.floor(purchaseCount / 2)
  }
}