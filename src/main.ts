import * as childProcess from "child_process";
import * as fs from "fs";
import * as path from "path";

function run(script): Promise<any> {
    return new Promise((resolve, reject) => {
        let invoked = false;
        const process = childProcess.fork(script);

        process.on("error", function (err) {
            if (invoked) {
                return;
            }
            invoked = true;
            reject(err);
        });

        process.on("exit", function (code: number) {
            if (invoked) {
                return;
            }
            invoked = true;
            const err = code === 0 ? null : new Error("exit code " + code);
            resolve(err);
        });
    })
}


(async () => {
    for (let i = 1; i < 25; i++) {
        const script = path.join(__dirname, `./days/${i}`);
        if (!fs.existsSync(`${script}.ts`)) {
            continue;
        }
        console.log(`Completing day ${i} 2019 ...`);
        await run(script);
    }
})();

