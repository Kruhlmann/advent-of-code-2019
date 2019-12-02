import * as fs from "fs"
import * as request from "request"

export async function get_puzzle_input (day: string): Promise<string> {
    return new Promise((resolve, reject) => {
        const cookie_file = fs.readFileSync("../cookie.secret", "utf8");
        const cookie = request.cookie(`session=${cookie_file}`);
        const cookie_jar = request.jar();
        const url = `https://adventofcode.com/2019/day/${day}/input`;
        cookie_jar.setCookie(cookie, url);
        request({url: url, jar: cookie_jar}, (error, response, body) => error ? reject(error) : resolve(body.split(/\n/g)));
    }).catch(error => console.error(error));
}

