const arr = [9, 2, 3, 4, 1, 6, 8, 7, 5];

function mergeSort(arr = arr, sort = 1) {
  const isEven = arr.length % 2 === 0 ? true : false;
  

  return arr;
}

function print(arr) {
  arr.forEach((item, index) => console.log(`Indxe: ${index} Value: ${item}`))
}

const finalArr = mergeSort(arr, 1);
print(finalArr);