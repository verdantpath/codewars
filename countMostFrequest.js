function mostFrequentItemCount(collection) {
  if (collection.length == 0) {
    return 0
  } else {
    const count = {}
    collection.forEach(item => count[item] = (count[item] || 0) +1)
    const values = Object.values(count)
    return Math.max(...values)
  }
}