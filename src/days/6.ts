import { get_puzzle_input } from "../lib";

get_puzzle_input(6).then((input_str_arr: string[]) => {
    const obj = [];
    const obj_parents = {};
    const obj_conn = {};

    for (const orbit of input_str_arr) {
        const [a, b] = orbit.split(")");
        obj.push(a);
        obj.push(b);
        obj_parents[b] = a;

        if (!obj_conn.hasOwnProperty(a)) {
            obj_conn[a] = [b];
        } else {
            obj_conn[a].push(b)
        }

        if (!obj_conn.hasOwnProperty(b)) {
            obj_conn[b] = [a];
        } else {
            obj_conn[b].push(a)
        }
    }

    let count = 0;
    for (let o of obj.filter((_o,_i) => obj.indexOf(_o) === _i)) {
        while (o !== "COM") {
            o = obj_parents[o];
            count ++;
        }
    }

    console.log(`Task 1: ${count}`);

    let a = obj_parents["YOU"];
    let b = obj_parents["SAN"];
    let closest_int;
    const possible_int = [];

    while (a !== "COM") {
        possible_int.push(a);
        a = obj_parents[a]
    }

    while (b !== "COM") {
        if (possible_int.includes(b)) {
            closest_int = b;
            break;
        }
        b = obj_parents[b];
    }

    count = 0;
    a = obj_parents["YOU"];
    b = obj_parents["SAN"];
    while (a !== closest_int) {
        count ++;
        a = obj_parents[a];
    }
    while (b !== closest_int) {
        count ++;
        b = obj_parents[b];
    }

    console.log(`Task 2: ${count}`);


});

