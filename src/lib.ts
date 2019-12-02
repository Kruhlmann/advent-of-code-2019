import * as fs from "fs";
import * as request from "request";
import * as path from "path";

export async function get_puzzle_input (day: string | number): Promise<any> {
    return new Promise((resolve, reject) => {
        const cookie_path = path.resolve(__dirname, "../cookie.secret");
        const cookie_file = fs.readFileSync(cookie_path, "utf8");
        const cookie = request.cookie(`session=${cookie_file}`);
        const cookie_jar = request.jar();
        const url = `https://adventofcode.com/2019/day/${day}/input`;
        cookie_jar.setCookie(cookie, url);
        request({
            url: url,
            jar: cookie_jar
        }, (error, response, body) => {
            if (error) {
                reject("error");
            }
            resolve(body.split(/\n/g).filter((l) => l && l !== ""));
        });
    }).catch((error) => console.error(error));
}

