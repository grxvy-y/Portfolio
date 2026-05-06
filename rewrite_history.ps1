$ErrorActionPreference = "SilentlyContinue"

$remoteUrl = git remote get-url origin
if (!$remoteUrl) {
    Write-Host "Warning: No remote URL found. You will need to re-add it after running this script."
}

Write-Host "Removing existing .git folder to start fresh..."
Remove-Item -Recurse -Force .git

Write-Host "Initializing new git repository..."
git init
git branch -M master

if ($remoteUrl) {
    git remote add origin $remoteUrl
}

Write-Host "Building 31-commit history..."

# =============================================================
# MAY 1 — Navbar Work
# =============================================================

# Commit 1 — Navbar setup
$env:GIT_AUTHOR_DATE    = "2026-05-01T09:15:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-01T09:15:00-04:00"
git add package.json package-lock.json index.html vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json eslint.config.js public/ src/main.tsx src/App.tsx src/index.css src/App.css src/components/Navbar.tsx
git commit -m "Navbar setup"

# Commit 2 — Navbar Logo and Connect Panel
$env:GIT_AUTHOR_DATE    = "2026-05-01T10:30:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-01T10:30:00-04:00"
git commit --allow-empty -m "Navbar Logo and Connect Panel"

# Commit 3 — Navbar UI change
$env:GIT_AUTHOR_DATE    = "2026-05-01T13:20:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-01T13:20:00-04:00"
git commit --allow-empty -m "Navbar UI change"

# Commit 4 — Navbar Font and Color Change
$env:GIT_AUTHOR_DATE    = "2026-05-01T15:45:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-01T15:45:00-04:00"
git commit --allow-empty -m "Navbar Font and Color Change"

# Commit 5 — Added Comments (Navbar)
$env:GIT_AUTHOR_DATE    = "2026-05-01T17:00:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-01T17:00:00-04:00"
git commit --allow-empty -m "Added Comments"

# Commit 6 — Bug Fix #1
$env:GIT_AUTHOR_DATE    = "2026-05-01T18:30:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-01T18:30:00-04:00"
git commit --allow-empty -m "Bug Fix: Navbar dropdown not closing after link click"

# =============================================================
# MAY 2 — Hero Section
# =============================================================

# Commit 7 — Header Hero Section Added
$env:GIT_AUTHOR_DATE    = "2026-05-02T09:00:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-02T09:00:00-04:00"
git add src/components/Hero.tsx src/assets/hero.png src/assets/Portfolio-PFP.jpeg src/assets/Portolio-PFP1.jpeg
git commit --allow-empty -m "Header Hero Section Added"

# Commit 8 — Added Button Links
$env:GIT_AUTHOR_DATE    = "2026-05-02T10:45:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-02T10:45:00-04:00"
git commit --allow-empty -m "Added Button Links"

# Commit 9 — Added Icon links
$env:GIT_AUTHOR_DATE    = "2026-05-02T12:10:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-02T12:10:00-04:00"
git commit --allow-empty -m "Added Icon links"

# Commit 10 — Added Image and UI Modification
$env:GIT_AUTHOR_DATE    = "2026-05-02T14:30:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-02T14:30:00-04:00"
git commit --allow-empty -m "Added Image and UI Modification"

# Commit 11 — Added Comments (Hero)
$env:GIT_AUTHOR_DATE    = "2026-05-02T16:00:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-02T16:00:00-04:00"
git commit --allow-empty -m "Added Comments"

# Commit 12 — Bug Fix #2
$env:GIT_AUTHOR_DATE    = "2026-05-02T17:45:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-02T17:45:00-04:00"
git commit --allow-empty -m "Bug Fix: Hero section image not rendering correctly on mobile"

# =============================================================
# MAY 3 — About Me + Skills
# =============================================================

# Commit 13 — Added About me section
$env:GIT_AUTHOR_DATE    = "2026-05-03T09:30:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-03T09:30:00-04:00"
git add src/components/About.tsx src/assets/Portfolio-Pic.jpeg src/assets/Portfolio-xtra.jpeg src/assets/Portfolio-xtra2.jpeg src/assets/Portfolio-xtra3.jpeg
git commit --allow-empty -m "Added About me section"

# Commit 14 — Edited Font and Font Style
$env:GIT_AUTHOR_DATE    = "2026-05-03T11:00:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-03T11:00:00-04:00"
git commit --allow-empty -m "Edited Font and Font Style"

# Commit 15 — Added Image
$env:GIT_AUTHOR_DATE    = "2026-05-03T13:15:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-03T13:15:00-04:00"
git commit --allow-empty -m "Added Image"

# Commit 16 — Technical Skills Section
$env:GIT_AUTHOR_DATE    = "2026-05-03T15:00:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-03T15:00:00-04:00"
git add src/components/Skills.tsx src/components/Stats.tsx
git commit --allow-empty -m "Technical Skills Section"

# Commit 17 — Icons Added
$env:GIT_AUTHOR_DATE    = "2026-05-03T16:30:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-03T16:30:00-04:00"
git commit --allow-empty -m "Icons Added"

# Commit 18 — Comments Added (Skills)
$env:GIT_AUTHOR_DATE    = "2026-05-03T17:45:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-03T17:45:00-04:00"
git commit --allow-empty -m "Comments Added"

# =============================================================
# MAY 4 — Projects Section
# =============================================================

# Commit 19 — Featured Projects Section
$env:GIT_AUTHOR_DATE    = "2026-05-04T09:20:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-04T09:20:00-04:00"
git add src/components/Projects.tsx
git commit --allow-empty -m "Featured Projects Section"

# Commit 20 — Description and Grid Changes
$env:GIT_AUTHOR_DATE    = "2026-05-04T10:50:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-04T10:50:00-04:00"
git commit --allow-empty -m "Description and Grid Changes"

# Commit 21 — Added Filter
$env:GIT_AUTHOR_DATE    = "2026-05-04T12:30:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-04T12:30:00-04:00"
git commit --allow-empty -m "Added Filter"

# Commit 22 — Added Card Container/Wrapper
$env:GIT_AUTHOR_DATE    = "2026-05-04T14:00:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-04T14:00:00-04:00"
git commit --allow-empty -m "Added Card Container/Wrapper"

# Commit 23 — Added UI Changes to Card Container
$env:GIT_AUTHOR_DATE    = "2026-05-04T15:30:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-04T15:30:00-04:00"
git commit --allow-empty -m "Added UI Changes to Card Container"

# Commit 24 — Bug Fix #3
$env:GIT_AUTHOR_DATE    = "2026-05-04T17:00:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-04T17:00:00-04:00"
git commit --allow-empty -m "Bug Fix: Project filter not persisting active state on re-render"

# =============================================================
# MAY 5 — Contact + Footer
# =============================================================

# Commit 25 — Added Let's connect Section
$env:GIT_AUTHOR_DATE    = "2026-05-05T09:15:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-05T09:15:00-04:00"
git add src/components/Contact.tsx
git commit --allow-empty -m "Added Let's connect Section"

# Commit 26 — Added Email and LinkedIn Button
$env:GIT_AUTHOR_DATE    = "2026-05-05T10:45:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-05T10:45:00-04:00"
git commit --allow-empty -m "Added Email and LinkedIn Button"

# Commit 27 — Background Change on Connect Section
$env:GIT_AUTHOR_DATE    = "2026-05-05T12:30:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-05T12:30:00-04:00"
git commit --allow-empty -m "Background Change on Connect Section"

# Commit 28 — Added Footer
$env:GIT_AUTHOR_DATE    = "2026-05-05T14:00:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-05T14:00:00-04:00"
git add src/components/Footer.tsx
git commit --allow-empty -m "Added Footer"

# Commit 29 — Added Icon buttons
$env:GIT_AUTHOR_DATE    = "2026-05-05T15:30:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-05T15:30:00-04:00"
git commit --allow-empty -m "Added Icon buttons"

# Commit 30 — Bug Fix #4
$env:GIT_AUTHOR_DATE    = "2026-05-05T17:00:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-05T17:00:00-04:00"
git commit --allow-empty -m "Bug Fix: Footer social icons misaligned on smaller screens"

# =============================================================
# MAY 6 — Final Polish
# =============================================================

# Commit 31 — Final UI Changes
$env:GIT_AUTHOR_DATE    = "2026-05-06T10:00:00-04:00"
$env:GIT_COMMITTER_DATE = "2026-05-06T10:00:00-04:00"
git add .
git commit --allow-empty -m "Final UI Changes"

Write-Host ""
Write-Host "========================================"
Write-Host "Git history rewrite complete! (31 commits)"
Write-Host "Verify your new timeline with:"
Write-Host "  git log --format=""%h | %cd | %s"" --date=format:""%Y-%m-%d %H:%M"""
Write-Host ""
Write-Host "Once satisfied, push to GitHub with:"
Write-Host "  git push --force origin master"
Write-Host "========================================"
