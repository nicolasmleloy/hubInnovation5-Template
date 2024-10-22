
import fs from 'fs';
import path from 'path';

const isVercel = process.env.VERCEL === '1'; // Verifica se está em ambiente Vercel
const filePath = isVercel
    ? path.join('/tmp', 'data.json') // Usar /tmp no Vercel
    : path.join(process.cwd(), 'app', 'api', 'db', 'data.json'); // Usar localmente

export async function readJsonFile() {
    try {
        // Verifica se o arquivo existe antes de tentar ler
        if (fs.existsSync(filePath)) {
            const jsonData = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(jsonData);
        } else {
            console.warn("File does not exist, returning empty array.");
            return []; // Retorna um array vazio se o arquivo não existir
        }
    } catch (error) {
        console.error("Error reading JSON file:", error);
        return null;
    }
}

export async function writeJsonFile(data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log("JSON file updated successfully.");
    } catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
