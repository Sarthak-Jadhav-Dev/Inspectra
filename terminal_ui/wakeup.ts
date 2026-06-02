import { select, isCancel } from "@clack/prompts"
import { runCliMode } from "../modes/cli"
import { runTelegramMode } from "../modes/telegram"

import chalk from "chalk"
import figlet from "figlet"

const BANNERFONT = "ANSI SHADOW"
const SHADOW = chalk.hex("#f3d6bfff");
const FACE = chalk.hex("#dfef77ff").bold

function printBannerWithShadow(ascii: string) {

    const bannerLines = ascii.replace(/\s+$/, '').split('\n');
    const maxLen = Math.max(...bannerLines.map((l) => l.length), 0);
    const rowWidth = maxLen + 2;

    for (const line of bannerLines) {
        console.log(SHADOW(('  ' + line).padEnd(rowWidth)));
    }
    process.stdout.write(`\x1b[${bannerLines.length}A`);
    for (const line of bannerLines) {
        console.log(FACE(line.padEnd(rowWidth)));
    }
    console.log();
}

export async function runWakeup() {
    let ascii: string;
    try {
        ascii = await figlet.textSync("Open-Claw", { font: BANNERFONT })
    } catch (error) {
        ascii = await figlet.textSync("Open-Claw", { font: "standard" })
    }
    printBannerWithShadow(ascii);

    const mode = await select({
        message: "Select one mode to start with :",
        options: [
            { value: "cli", label: "CLI" },
            { value: "telegram", label: "Telegram" },
            { value: "back", label: "Exit" }
        ]
    })

    if (isCancel(mode) || mode === "back") {
        console.log(chalk.dim("Exiting..."));
        return;
    }

    if (mode === "cli") {
        await runCliMode();
    } else {
        await runTelegramMode();
    }
}