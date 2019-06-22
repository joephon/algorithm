#include<stdio.h>
#include<stdbool.h>

int arr[] = {9, 2, 3, 4, 1, 6, 8, 7, 5};

int* insertion_sort(int arr[], int length, int sort)
{  
  for (int j = 1; j < length; j++)
  {
    int next = arr[j];
    int i = j - 1;
    while (sort == 1 ? i >= 0 && arr[i] > next : i >= 0 && arr[i] < next)
    {
      arr[i + 1] = arr[i];
      i -= 1;
    }
    arr[i + 1] = next;
  }

  return arr;
}

void print_arr(int arr[], int length) {
  for (int i = 0; i < length; i++)
  {
    printf("Index: %d Value: %d \n", i, arr[i]);
  }
}


int main(void)
{
  int length = sizeof(arr) / sizeof(int);
  int* final_arr = insertion_sort(arr, length, 1);
  print_arr(final_arr, length);
}