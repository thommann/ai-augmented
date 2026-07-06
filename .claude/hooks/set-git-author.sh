#!/usr/bin/env bash
# PreToolUse-Hook (Bash): setzt vor Git-Befehlen die Commit-Identität.
# Nötig, weil die Ausführungsumgebung ephemer ist und `git config` je Container
# neu gesetzt werden muss. Idempotent, blockiert nie.
git config user.name "Thomas Mannhart" 2>/dev/null
git config user.email "thomas@mannhart.ai" 2>/dev/null
exit 0
