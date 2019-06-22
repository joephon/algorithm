const arr = [9, 2, 3, 4, 1, 6, 8, 7, 5];

function insertionSort(arr = arr, sort = 1) {
  for (let j = 1; j < arr.length; j++) {
    const next = arr[j];
    let i = j - 1;

    while (sort === 1 ? i >= 0 && arr[i] > next : i >= 0 && arr[i] < next) {
      arr[i + 1] = arr[i];
      i -= 1;
    }

    arr[i + 1] = next;
  }

  return arr;
}

function print(arr) {
  arr.forEach((item, index) => console.log(`Indxe: ${index} Value: ${item}`))
}

const finalArr = insertionSort(arr, 1);
print(finalArr);