import { get_puzzle_input } from "../lib";

get_puzzle_input(3).then((input_str_arr: string[]) => {
    const wires = input_str_arr.map((s) => s.split(","));

    // Task 1.
    const used_positions = {};
    const intersections = [];
    for (let w_idx = 0; w_idx < wires.length; w_idx++) {
        let x = 0;
        let y = 0;
        let steps = 0;
        for (const instruction of wires[w_idx]) {
            const length = parseInt(instruction.replace(/[U,R,D,L]/g, ""));

            for (let i = 0; i < length; i++) {
                if (instruction[0] === "R") {
                    x ++;
                }
                if (instruction[0] === "L") {
                    x --;
                }
                if (instruction[0] === "U") {
                    y ++;
                }
                if (instruction[0] === "D") {
                    y --;
                }
                steps ++;

                if (`${x};${y}` in used_positions) {

                    if (!(`${w_idx}` in used_positions[`${x};${y}`])) {
                        used_positions[`${x};${y}`][`${w_idx}`] = steps;
                    }

                    if (Object.keys(used_positions[`${x};${y}`]).length > 1) {
                        intersections.push({ x, y });
                    }
                } else {
                    used_positions[`${x};${y}`] = { [w_idx]: steps };
                }
            }
        }
    }
    const closest_intersection_dist = intersections
        .map((i) => Math.abs(i.x) + Math.abs(i.y))
        .sort((a, b) => a - b)[0]
    console.log(`\tTask 1: ${closest_intersection_dist}`)

    // Task 2.
    const closest_intersection_logic = intersections
        .map((i) => Object.values(used_positions[`${i.x};${i.y}`]).reduce((t: number, p: number) => t + p))
        .sort((a: number, b: number) => a - b)[0]

    console.log(`\tTask 2: ${closest_intersection_logic}`);
});

