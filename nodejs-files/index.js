const fs = require("fs").promises
const path = require("path");

async function calculateSalesTotal(salesFiles) {
    let salesTotal = 0;

    for (file of salesFiles) {
        const data = JSON.parse(await fs.readFile(file));
        salesTotal += data.total;
    }

    return salesTotal;
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


async function main() {
    const salesDir = path.join(__dirname,"stores");
    const salesTotalsDir = path.join(__dirname,"salesTotals");

    // creates salesTotal dir if non existant
    try {
        await fs.mkdir(salesTotalsDir);
    } catch(e) {
        //if (salesTotalDir === null) {
        //    console.log(`salesTotalDir already exists`);
        //} else {
            console.log(`${salesTotalsDir} already exists`);
        //}
    }

    // find all paths to sales files
    const salesFiles = await findSalesFiles(salesDir);

    const salesTotal = await calculateSalesTotal(salesFiles);

    // write total to file
    await fs.writeFile(
        path.join(salesTotalsDir, "totals.txt"),
        `${salesTotal}\r\n`,
        {flag: "a"}
    );

    console.log(`Wrote sales totals to ${salesTotalsDir}`);
}

main();