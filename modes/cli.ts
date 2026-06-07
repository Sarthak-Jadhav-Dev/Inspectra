import chalk from "chalk";
import { select, isCancel } from "@clack/prompts"
import { runAgentMode } from "./agents/orcharstrator";
import { runAskMode } from "./ask/orcharstrator";
import {runPlanMode} from "./plan/orcharstrator";
import {runStateModes} from "./stats/orcharstrator";

export async function runCliMode() {
    while (true) {
        const mode = await select({
            message: chalk.hex("#ffffcc").bold("What do you want to do?"),
            options: [
                { value: "Agent", label: "Agent" },
                { value: "Plan", label: "Plan" },
                { value: "Ask", label: "Ask" },
                { value: "Stats",label:"Stats" },
                { value: "Exit", label: "Exit" }
            ]
        })
        if (isCancel(mode) || mode === "Exit") {
            console.log(chalk.dim("Coming Back..."));
            return;
        }
        if (mode === "Agent") { 
            await runAgentMode();
        }
        if (mode === "Plan") { 
            await runPlanMode();
        }
        if (mode === "Ask") { 
            await runAskMode();
        }
        if (mode ==="Stats"){
            await runStateModes();
        }
        if (mode != "Agent" && mode != "Plan" && mode != "Ask" && mode!="Stats") {
            console.log(chalk.red("Invalide Mode, Please Try Again..."));
        }
    }
}