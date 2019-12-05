import { get_puzzle_input } from "../lib";

get_puzzle_input(3).then((input_str_arr: string[]) => {
    // const wires = input_str_arr.map((s) => s.split(","));
    const wires = [
        "R75,D30,R83,U83,L12,D49,R71,U7,L72",
        "U62,R66,U55,R34,D71,R55,D58,R83",
    ].map((s) => s.split(","));

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
                    if (used_positions[`${x};${y}`] !== w_idx) {
                        intersections.push({ x, y });
                    }
                } else {
                    used_positions[`${x};${y}`] = w_idx;
                }
            }
        }
    }
    const closest_intersection_dist = intersections
        .map((i) => Math.abs(i.x) + Math.abs(i.y))
        .sort((a, b) => a - b)[0]
    console.log(`\tTask 1: ${closest_intersection_dist}`)

    // Task 2.
    console.log(`\tTask 2: None`);
});

