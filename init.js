module.exports = () => {
    const { Command, Option } = require("commander");
    const program = new Command();
    const options = program
        .addOption(
            new Option("-e, --env-name <string>", "env name")
                .makeOptionMandatory(true))
        .parse().opts();

    require("dotenv-expand").expand(require("dotenv").config({
        path: `./envs/.env.${options.envName}`
    }));

    process.argv.slice(2).forEach(arg => {
        const [key, value] = arg.split("=");
        if (key && value) {
            process.env[key] = value;
        }
    });

    console.log(JSON.stringify(options), " - Project start with this option");
};