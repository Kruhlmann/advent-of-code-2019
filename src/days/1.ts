import { get_puzzle_input } from "../lib";

// Fuel required to launch a given module is based on its mass. Specifically,
// to find the fuel required for a module, take its mass, divide by three,
// round down, and subtract 2.
function mass_fuel_req(mass) {
    return Math.max(0, Math.floor(mass / 3) - 2);
}

function mass_fuel_req_recursive(mass) {
    let total_fuel_req = 0;
    let fuel_req;

    while (fuel_req === undefined || fuel_req > 0) {
        fuel_req = mass_fuel_req(mass);
        mass = fuel_req;
        total_fuel_req += fuel_req;
    }
    return total_fuel_req;


}

get_puzzle_input(1).then((input_str_arr: string[]) => {
    const input = input_str_arr.map((i) => parseInt(i));

    // Task 1.
    const total_fuel_req = input.reduce((total, mass) => {
        return total + mass_fuel_req(mass)
    });
    console.log(`\tTask 1 answer: ${total_fuel_req}`);

    // Task 2.
    const total_fuel_req_recursive = input.reduce((total, mass) => {
        return total + mass_fuel_req_recursive(mass)
    });
    console.log(`\tTask 2 answer: ${total_fuel_req_recursive}`);
});

