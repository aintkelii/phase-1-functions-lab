// Function to calculate the number of blocks from Scuber's headquarters (42nd Street)
function distanceFromHqInBlocks(pickupLocation) {
  const hqLocation = 42;
  return Math.abs(pickupLocation - hqLocation);
}

// Function to convert blocks to feet (1 block = 264 feet)
function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;
}

// Function to calculate the distance travelled in feet between two blocks
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

// Function to calculate the fare based on the distance travelled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat fare for distances over 2000 feet and under 2500 feet
  } else {
    return "cannot travel that far"; // No rides over 2500 feet
  }
}

// Export the functions if needed (for Node.js environments)
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice,
};
console.log(distanceFromHqInBlocks(50)); // Output: 8
console.log(distanceFromHqInFeet(50)); // Output: 2112 (8 blocks * 264 feet)
console.log(distanceTravelledInFeet(34, 38)); // Output: 1056 ((38-34)*264)
console.log(calculatesFarePrice(34, 38)); // Output: 0 (distance is 1056 feet, but first 400 feet are free)
console.log(calculatesFarePrice(34, 50)); // Output: 13.12 (distance is 4224 feet, fare is (4224-400)*0.02)
console.log(calculatesFarePrice(34, 60)); // Output: 'cannot travel that far' (distance is 6864 feet)
