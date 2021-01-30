function firstNonConsecutive(arr) {
  for(let i = 1; i < arr.length; i++){
    if(arr[i-1] + 1 !== arr[i]){

      return arr[i];
    } 
  }
  //jika seluruh aray berurutan return null
  return null;
}

//tdk berurutan di angka 6 (angka yg tdk berurut dikembalikan)
console.log(firstNonConsecutive([1,2,3,4,6,7,8]));
//berurutan
console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]));

//breakdown
// function firstNonConsecutive(arr) {
//   // console.log(arr[0])
//   for(let i = 1; i < arr.length; i++){
//     console.log(i) //menampilkan value 1,2,3...
//     console.log(arr.length) //menampilkan jmlh array
//     console.log(arr[i-1]) //[1-1] hasil [0] menampilkan value 1,2,3 (agar dinamis bila hitung array selanjutnya [2-1]...)
//     console.log(arr[i-1]+1) //[1-1]+1 hasil 1(mulai index ke [1]) value 2. seterusnya [2-1]+1  index ke [2]) value 3...
//     console.log(arr[i]) // arr[1] index ke 1 value 2...
//     if(arr[i-1] + 1 !== arr[i]){
//       //perulangan index ke-1
//       //if(arr[1-1]) + 1 !== arr[1]
//       //if(arr[0]) + 1 !== arr[1] value arr[1] adalah 2
//       //if(arr[1]) !== arr[1]
//       //if(arr[value 2]) !== arr[value 2]
//       //i++

//       //perulangan index ke-2 i+1 = 2
//       //if(arr[2-1]) + 1 !== arr[2]
//       //if(arr[1]) + 1 !== arr[2] value arr[2] adalah 3
//       //if(arr[2]) !== arr[2]
//       //if(arr[value 3]) !== arr[value 3]

//       //perulangan index ke-3 i+1 = 3
//       //if(arr[3-1]) + 1 !== arr[3]
//       //if(arr[2]) + 1 !== arr[3] value arr[3] adalah 3
//       //if(arr[3]) !== arr[3]
//       //if(arr[value 4]) !== arr[value 4]

//       //s/d perulangan index ke-4 i+1 = 4
//       //if(arr[4-1]) + 1 !== arr[4]
//       //if(arr[3]) + 1 !== arr[4] value arr[4] adalah 6
//       //if(arr[4]) !== arr[2]
//       //if(arr[value 5]) !== arr[value 6]
//       console.log(firstNonConsecutive([1,2,3,4,6,7,8]));

//       console.log(arr[i])
//       console.log(arr[i-3])
//       console.log(arr[i])
//       return arr[i];
//     } 
//   }
//   //jika seluruh aray berurutan return null
//   return null;
// }

// //tdk berurutan di angka 6 (angka yg tdk berurut dikembalikan)
// console.log(firstNonConsecutive([1,2,3,4,6,7,8]));