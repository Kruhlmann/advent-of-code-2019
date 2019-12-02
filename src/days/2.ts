import { get_puzzle_input } from "../lib";

function run_program(input: number[]) {
    for (let i = 0; i < input.length; i+= 4) {
        const opc = input[i];
        if (opc === 99) {
            break;
        }
        const res = opc === 1
            ? input[input[i + 1]] + input[input[i + 2]]
            : input[input[i + 1]] * input[input[i + 2]];
        input[input[i + 3]] = res;
    }
    return input[0];
}

get_puzzle_input(2).then((input_str_arr: string[]) => {
    const input = input_str_arr[0].split(",").map((i) => parseInt(i));

    // Task 1.
    input[1] = 12;
    input[2] = 2;
    const t_1_res = run_program(input);
    console.log(`\t Task 1: ${t_1_res}`)

    // Task 2.
});

