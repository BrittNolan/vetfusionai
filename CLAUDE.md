# VetFusionai

This is the **VetFusionai** project at `C:\Users\britt\Desktop\AOS\VetFusionai` - its own isolated workspace.

## Scope
- Work only within this folder. Do not read, edit, or ask about sibling projects under `C:\Users\britt\Desktop\AOS\`.
- For parallel work on this project, spin up a git worktree per task instead of running several chats in this same folder.

## Project notes
- **Stack:** Next.js 16 (App Router, Turbopack) + Tailwind CSS v4 (`@theme` tokens in `app/globals.css`, no tailwind.config) + TypeScript. Static marketing site — no backend yet (client has a Supabase backend to integrate later).
- **What it is:** Marketing site for VetFusion — a setup-and-support service for AI-assisted veterinary records (SOAPs, treatment sheets, care continuity). Positioning per the client developer brief v4: NOT a rescue donation page, NOT an AI-hype product, never overpromise time savings, "AI drafts. Veterinarians decide."
- **Design system ("the well-kept chart"):** warm paper bg, pine-green ink, copper accent; Fraunces (display) + Instrument Sans (body) + IBM Plex Mono (labels/data); ledger-numbered section eyebrows, stamp badges, mock chart UIs. Tokens live in `app/globals.css`.
- **Routes:** `/` (one-page marketing) + platform placeholder pages `/soap`, `/tracker`, `/import`, `/timeline`, `/dashboard` (brief requires these routes stay intact).
- **Verify with:** `npm run build` (typecheck + static gen). No tests.
- **Contact email** is a placeholder: `hello@vetfusionai.com` — confirm with client.

<!-- Auto-created by ~/.claude/hooks/scaffold-aos-project.ps1 on first run. Safe to edit; it will not be overwritten. -->