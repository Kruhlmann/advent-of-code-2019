import { get_puzzle_input } from "../lib";

// Fuel required to launch a given module is based on its mass. Specifically,
// to find the fuel required for a module, take its mass, divide by three,
// round down, and subtract 2.
function mass_fuel_req(mass) {
    return Math.floor(mass / 3) - 2;
}

get_puzzle_input(1).then((input: string[]) => {
    let total_fuel_req = 0;
    for (const mass_str of input) {
        const mass_num = parseInt(mass_str);
        total_fuel_req += mass_fuel_req(mass_num);
    }
    console.log(`\tTask 1 answer: ${total_fuel_req}`);
});

