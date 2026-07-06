#!/usr/bin/env bash
# PreToolUse-Hook (mcp__github__create/update_pull_request):
# Entfernt KI-Attributions-Zeilen (z. B. "Generated with Claude Code", 🤖,
# "Co-Authored-By: Claude", Session-Links) aus dem PR-Body, BEVOR der PR
# erstellt/aktualisiert wird. Gibt nur bei tatsaechlicher Aenderung
# `updatedInput` zurueck; sonst nichts (Tool laeuft unveraendert weiter).
out=$(jq -c '
  (.tool_input.body // "") as $orig
  | if $orig == "" then empty
    else
      ( $orig
        | split("\n")
        | map(select(test("(?i)(generated with .*claude code|co-authored-by:\\s*claude|claude-session|claude\\.ai/code|🤖)") | not))
        | join("\n")
        | gsub("\\s+$"; "") ) as $clean
      | if $clean == $orig then empty
        else {hookSpecificOutput:{hookEventName:"PreToolUse", updatedInput:(.tool_input + {body:$clean})}}
        end
    end' 2>/dev/null) || true
[ -n "$out" ] && printf '%s\n' "$out"
exit 0
