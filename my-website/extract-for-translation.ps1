# PowerShell script to extract content for translation
param (
    [string]$OutputPath = 'extracted_content_for_translation.json',
    [string]$DocsPath = 'docs',
    [string]$I18nPath = 'i18n/en'
)

$ErrorActionPreference = 'Stop'

function Get-MarkdownContent {
    param ([string]$Path)
    $mdContent = @{}
    Get-ChildItem -Path $Path -Recurse -Filter "*.md" | ForEach-Object {
        $relativePath = (Resolve-Path $_.FullName).Path.Replace((Resolve-Path (Join-Path $PSScriptRoot $Path)).Path + '\', '')
        $mdContent[$relativePath] = (Get-Content $_.FullName | Out-String).Trim()
    }
    return $mdContent
}

function Get-JsonContent {
    param ([string]$Path)
    $jsonContent = @{}
    Get-ChildItem -Path $Path -Recurse -Filter "*.json" | ForEach-Object {
        $relativePath = (Resolve-Path $_.FullName).Path.Replace((Resolve-Path (Join-Path $PSScriptRoot $Path)).Path + '\', '')
        $jsonContent[$relativePath] = (Get-Content $_.FullName | ConvertFrom-Json)
    }
    return $jsonContent
}

try {
    $currentDir = Get-Location


    $markdownContent = Get-MarkdownContent -Path $DocsPath
    $uiStrings = Get-JsonContent -Path $I18nPath

    $extractedContent = @{
        "markdown" = $markdownContent
        "ui_strings" = $uiStrings
    }

    $extractedContent | ConvertTo-Json -Depth 10 | Set-Content $OutputPath

    Write-Host "Successfully extracted content for translation to $(Join-Path $PSScriptRoot $OutputPath)"
}
catch {
    Write-Error "An error occurred: $($_.Exception.Message)"
}
finally {

}
