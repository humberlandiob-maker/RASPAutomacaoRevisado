# =============================================
# Rasp Automação — Push to GitHub
# Uso: .\push-to-github.ps1
# =============================================

$REPO_URL = "https://github.com/humberlandiob-maker/RASPAutomacaoRevisado.git"
$BRANCH  = "master"

Write-Host "==> Configurando remote origin..." -ForegroundColor Cyan
git remote add origin $REPO_URL

Write-Host "===> Enviando código para $REPO_URL (branch $BRANCH)..." -ForegroundColor Cyan
git push -u origin $BRANCH

if ($LASTEXITCODE -eq 0) {
    Write-Host "====> Push realizado com sucesso!" -ForegroundColor Green
} else {
    Write-Host "====> Falha no push. Verifique se o repositório remoto existe e você tem permissão de escrita." -ForegroundColor Red
}