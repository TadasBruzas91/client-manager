import test from "../config/config.test.json"
import dev from "../config/config.dev.json"
import prod from "../config/config.prod.json"

const loadConfig = () => {
    const appState = process.env.NODE_ENV
    if (appState === "development") return dev
    if (appState === "production") return prod
    if (appState === "test") return test
};

export const config = loadConfig();