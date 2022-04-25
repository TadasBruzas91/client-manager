import test from "../config/config.test.json"
import dev from "../config/config.dev.json"
import prod from "../config/config.prod.json"
import defaultconf from "../config/config.default.json"

const loadConfig = () => {
    const appState = process.env.NODE_ENV
    let cfg;
    if (appState === "development") cfg = dev
    if (appState === "production") cfg = prod
    if (appState === "test") cfg = test

    return { ...defaultconf, ...cfg }
};

export const config = loadConfig();