import { get_puzzle_input } from "../lib";

get_puzzle_input(4).then((input_str_arr: string[]) => {
    const password_range = input_str_arr[0].split("-").map((i) => parseInt(i));
    const password_pool = [];
    for (let i = password_range[0]; i <= password_range[1]; i++) {
        password_pool.push(i);
    }

    let valid_pwds = 0;
    for (const _candidate of password_pool) {
        const candidate = `${_candidate}`;
        let valid = true;
        valid = valid && (`${candidate}` === candidate.split("").sort().join(""));
        valid = valid && (new Set(candidate.split("")).size !== candidate.length);
        valid = valid && [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((r, i) => r + (candidate.includes(`${i}${i}`) ? 1 : 0)) > 0

        if (valid) {
            valid_pwds ++;
        }
    }
    console.log(`\tTask 1: ${valid_pwds}`)

    valid_pwds = 0;
    for (const _candidate of password_pool) {
        const candidate = `${_candidate}`;
        let valid = true;
        valid = valid && (`${candidate}` === candidate.split("").sort().join(""));
        valid = valid && (new Set(candidate.split("")).size !== candidate.length);
        valid = valid && [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((r, i) => r + (candidate.includes(`${i}${i}`) && !candidate.includes(`${i}${i}${i}`) ? 1 : 0)) > 0

        if (valid) {
            valid_pwds ++;
        }
    }

    console.log(`\tTask 2: ${valid_pwds}`)
});

