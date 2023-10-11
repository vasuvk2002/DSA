//Read about the Tower of Hanoi algorithm. Write a program to implement it

function towerOfHanoi(n, sourceRod, auxiliaryRod, destinationRod) {
    if (n === 1) {
      console.log(`Move disk 1 from ${sourceRod} to ${destinationRod}`);
      return;
    }
    towerOfHanoi(n - 1, sourceRod, destinationRod, auxiliaryRod);
  
    console.log(`Move disk ${n} from ${sourceRod} to ${destinationRod}`);
  
    towerOfHanoi(n - 1, auxiliaryRod, sourceRod, destinationRod);
  }
  const numberOfDisks = 3;
  const sourceRod = 'A';
  const auxiliaryRod = 'B';
  const destinationRod = 'C';
  
  console.log(`Tower of Hanoi with ${numberOfDisks} disks:`);
  towerOfHanoi(numberOfDisks, sourceRod, auxiliaryRod, destinationRod);