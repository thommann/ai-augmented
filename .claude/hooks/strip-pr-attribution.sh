#!/usr/bin/env bash
# PostToolUse-Hook für mcp__github__create_pull_request und
# mcp__github__update_pull_request.
#
# Das PR-Tool kann dem Body eine KI-Attributionszeile hinzufügen
# ("Generated with Claude Code", 🤖, "Co-Authored-By: Claude", Session-Link).
# Da der PR zu diesem Zeitpunkt bereits existiert, wird der Body per GitHub-API
# nachträglich gelesen, bereinigt und – nur bei Änderung – zurückgeschrieben.
set -o pipefail

INPUT=$(cat)

TOKEN="${GITHUB_TOKEN:-$GH_TOKEN}"
[ -z "$TOKEN" ] && exit 0

owner=$(printf '%s' "$INPUT" | jq -r '.tool_input.owner // empty')
repo=$(printf '%s' "$INPUT" | jq -r '.tool_input.repo // empty')
num=$(printf '%s' "$INPUT" | jq -r '.tool_input.pullNumber // empty')
# Bei der PR-Erstellung steht keine Nummer im Input – aus der Tool-Antwort
# (…/pull/N) ziehen.
if [ -z "$num" ]; then
  num=$(printf '%s' "$INPUT" | grep -oE 'pull/[0-9]+' | head -1 | grep -oE '[0-9]+')
fi
{ [ -z "$owner" ] || [ -z "$repo" ] || [ -z "$num" ]; } && exit 0

CACERT=()
[ -n "$GIT_SSL_CAINFO" ] && CACERT=(--cacert "$GIT_SSL_CAINFO")
api="https://api.github.com/repos/$owner/$repo/pulls/$num"
auth=(-H "Authorization: Bearer $TOKEN"
      -H "Accept: application/vnd.github+json"
      -H "X-GitHub-Api-Version: 2022-11-28")

body=$(curl -sS "${CACERT[@]}" "${auth[@]}" "$api" | jq -r '.body // ""')

clean=$(printf '%s' "$body" | jq -Rrs '
  split("\n")
  | map(select(test("(?i)(generated (with|by).*claude code|co-authored-by:\\s*claude|claude-session|claude\\.(ai|com)/(code|claude-code)|🤖)") | not))
  | join("\n")
  | gsub("\\s*(-{3,}[ \t]*)?\\s*$"; "")')

if [ "$clean" != "$body" ]; then
  payload=$(jq -n --arg b "$clean" '{body:$b}')
  curl -sS "${CACERT[@]}" "${auth[@]}" -X PATCH "$api" -d "$payload" >/dev/null
  printf '{"systemMessage":"KI-Attribution aus PR #%s entfernt"}\n' "$num"
fi
exit 0
