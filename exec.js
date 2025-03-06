const { exec } = require('child_process');
const path = require('path');

// Função para executar comandos no terminal
function runCommand(command, callback) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o comando: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        if (callback) callback();
    });
}

// Caminho do diretório onde o repositório será inicializado
const repoPath = "D:/DevQuest - Javascript";

// 1. Acessa a pasta local
console.log('Acessando a pasta...');
process.chdir(repoPath);

// 2. Inicializa o repositório Git
runCommand('git init', () => {
    // 3. Adiciona todos os arquivos ao repositório
    runCommand('git add .', () => {
        // 4. Faz o commit das alterações
        runCommand('git commit -m "Atualizar Curso Upload"', () => {
            // 5. Cria ou edita o arquivo .gitignore e adiciona .env
            runCommand('echo .env >> .gitignore', () => {
                // 6. Adiciona o repositório remoto
                runCommand('git remote add origin https://github.com/JOAO11092005/DevQuest-Javascript.git', () => {
                    // 7. Envia os arquivos para o GitHub
                    runCommand('git push -u origin main', () => {
                        console.log('Processo concluído com sucesso!');
                    });
                });
            });
        });
    });
});
