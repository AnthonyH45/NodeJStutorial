const fs = require("fs").promises
const path = require("path");

async function main() {
    const salesDir = path.join(__dirname,"stores");
    const salesFiles = await findSalesFiles(salesDir);
    console.log(salesFiles);
}

async function findSalesFiles(folderName) {
    // array to save sales.jsons to
    let salesFiles = [];

    async function findFiles(folderName) {
        // read all items in the current dir
        const items = await fs.readdir(folderName, { withFileTypes: true});

        // iterate (enumerate) all found items
        for (item of items) {
            if (item.isDirectory()) {
                // recursion
                await findFiles(path.join(folderName, item.name));
            } else {
                // make sure the file is sales.json
                if (path.extname(item.name) === ".json") {
                    // save the name if it matches
                    await salesFiles.push(path.join(folderName, item.name));
                }
            }
        }
    }

    await findFiles(folderName);
    return salesFiles;
}

main();