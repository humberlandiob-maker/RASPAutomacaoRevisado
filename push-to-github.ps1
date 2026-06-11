# =============================================
# Rasp Automação — Push to GitHub
# Uso: .\push-to-github.ps1
# =============================================

$REPO_URL = "https://github.com/humberlandiob-maker/RASPAutomacaoRevisado.git"
$BRANCH  = "master"

# Verifica se a remote origin já existe
$remoteExists = git remote get-url origin 2>$null
if (-not $remoteExists) {
    Write-Host "==> Configurando remote origin..." -ForegroundColor Cyan
    git remote add origin $REPO_URL
} else {
    Write-Host "==> Remote origin já configurada: $remoteExists" -ForegroundColor Yellow
    if ($remoteExists -ne $REPO_URL) {
        Write-Host "==> Atualizando remote origin para $REPO_URL ..." -ForegroundColor Cyan
        git remote set-url origin $REPO_URL
    }
}

Write-Host "===> Enviando código para $REPO_URL (branch $BRANCH)..." -ForegroundColor Cyan
git push -u origin $BRANCH

if ($LASTEXITCODE -eq 0) {
    Write-Host "====> Push realizado com sucesso!" -ForegroundColor Green
} else {
    Write-Host "====> Falha no push. Verifique:" -ForegroundColor Red
    Write-Host "      1. O repositório remoto existe em $REPO_URL" -ForegroundColor Red
    Write-Host "      2. Você tem permissão de escrita no repositório" -ForegroundColor Red
    Write-Host "      3. Suas credenciais do Git estão configuradas:" -ForegroundColor Red
    Write-Host "         git config --global user.name 'Seu Nome'" -ForegroundColor Red
    Write-Host "         git config --global user.email 'seu@email.com'" -ForegroundColor Red
}
