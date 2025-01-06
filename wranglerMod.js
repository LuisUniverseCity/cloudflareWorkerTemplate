const fs = require('fs');
const filePath = './wrangler.json';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const logStyledMessage = () => {
    const version = "3.99.0";
    console.log("\x1b[32m%s\x1b[0m", "────────────────────────────────────────────────────────────────────────"); // Cyan color
    console.log("\x1b[36m%s\x1b[0m", "🙌 cloudflare_workers installed, please find your worker on src/index.js"); // Yellow color
    console.log("\x1b[32m%s\x1b[0m", "────────────────────────────────────────────────────────────────────────"); // Cyan color
};

readline.question("Please enter the name of your cloudflare worker: ", (workerName)=>{

    try {
        // Read the existing JSON file
        const data = fs.readFileSync(filePath, 'utf8');
        const json = JSON.parse(data);
    
        // Update the name field
        json.name = workerName;
    
        // Write the updated JSON back to the file
        fs.writeFileSync(filePath, JSON.stringify(json, null, 4), 'utf8');
    
        logStyledMessage();
    } catch (error) {
        console.error('Error updating the JSON file:', error.message);
    } finally {
        // Close the readline interface
        readline.close();
    }

})