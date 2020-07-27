const fs = require("fs").promises

async function main() {
    const salesFiles = await findSalesFiles("stores");
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
                await findFiles(`${folderName}/${item.name}`);
            } else {
                // make sure the file is sales.json
                if (item.name === "sales.json") {
                    // save the name if it matches
                    salesFiles.push(`${folderName}/${item.name}`);
                }
            }
        }
    }

    await findFiles(folderName);
    return salesFiles;
}

main();