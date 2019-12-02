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
    const program = input.slice();
    program[1] = 12;
    program[2] = 2;
    const t_1_res = run_program(program);
    console.log(`\tTask 1: ${t_1_res}`);

    // Task 2.
    const target = 19690720;
    let found = false;

    for (let noun = 0; noun <= 99; noun ++) {
        for (let verb = 0; verb <= 99; verb ++) {
            const program = input.slice();
            program[1] = noun;
            program[2] = verb;
            const res = run_program(program);
            if (res === target) {
                found = true;
                console.log(`\tTask 2: ${100 * noun + verb}`)
                break;
            }
        }
        if (found) {
            break;
        }
    }

    if (!found) {
        console.log("\tTask 2: Not found!")
    }
});

