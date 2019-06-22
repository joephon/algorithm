fn insertion_sort(arr: Vec<i32>, sort: i32) -> Vec<i32> {
  let mut my_arr = arr;
  for j in 1..my_arr.len() {
    let mut next: i32 = my_arr[j];
    let mut i = j - 1;

    if sort == 1 {
      while i > 0 && my_arr[i] > next {
        my_arr[i + 1] = my_arr[i];
        i -= 1;
      }
    } else {
      while i > 0 && my_arr[i] < next {
        my_arr[i + 1] = my_arr[i];
        i -= 1;
      }
    }

    my_arr[i + 1] = next;
  }

  my_arr
}

fn print_arr(arr: Vec<i32>) {
  for i in 0..arr.len() {
    println!("Index: {}, Valye: {}", i, arr[i] );
  }
}

fn main() {
  let arr: Vec<i32> = vec![9, 2, 3, 4, 1, 6, 8, 7, 5];
  let final_arr = insertion_sort(arr, 1);
  print_arr(final_arr);
}