/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)


const newDistance = distance + (initialVelocity*(time/3600)) //calcultes new distance
const remaingFuel = initialFuel - (fuelBurnRate*time )//calculates remaining fuel

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (acceleration, initialVelocity, time) => { 
  // Convert initial velocity from km/h to m/s
  const initialVelocity_mps = initialVelocity * (1000 / 3600);

  // Calculate change in velocity in m/s
  const deltaVelocity_mps = acceleration * time;

  // Add change in velocity to initial velocity to get new velocity in m/s
  const newVelocity_mps = initialVelocity_mps + deltaVelocity_mps;

  // Convert new velocity from m/s to km/h
  const newVelocity_kmph = newVelocity_mps * (3600 / 1000);

  return newVelocity_kmph; // return new velocity in km/h
}
const newVelocity = calcNewVel(acceleration, initialVelocity, time) //calculates new velocity based on acceleration



console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remaingFuel} kg`);






