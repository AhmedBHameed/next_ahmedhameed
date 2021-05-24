export function groupBy<T>(collection, property): T[] {
  let i = 0;
  let val;
  let index;
  const values = [];
  const result = [];
  for (; i < collection.length; i += 1) {
    val = collection[i][property];
    index = values.indexOf(val);
    if (index > -1) result[index].push(collection[i]);
    else {
      values.push(val);
      result.push([collection[i]]);
    }
  }
  return result;
}
