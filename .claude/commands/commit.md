---
description: Stage, commit (Semantic Commit Messages standard), then pull and push only after my approval
---

Stage changes, create a git commit following the Semantic Commit Messages
standard (https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716),
then pull and push — but **only push after explicit user confirmation**.

## Format

`<type>(<scope>): <subject>`

The `(<scope>)` is optional. Example: `feat: add hat wobble`,
`fix(auth): reject expired refresh tokens`.

## Allowed types

- **feat** — new user-facing feature
- **fix** — user-facing bug fix
- **docs** — documentation only
- **style** — formatting / whitespace, no production code change
- **refactor** — production code refactor with no behavior change
- **test** — add or refactor tests, no production code change
- **chore** — tooling / config / non-production code
- **build** — build system or external dependency changes
- **ci** — CI configuration only
- **perf** — performance improvement
- **revert** — revert a previous commit

When the diff mixes categories, pick the dominant one by user-visible impact
in this order: `feat > fix > perf > refactor > style > test > docs > build > ci > chore`.

## Rules

1. Subject is **imperative present tense** ("add", not "added" / "adds").
2. Subject lowercase after the colon; type lowercase; no trailing period.
3. Subject under 72 characters.
4. **English only** — never Hebrew (per project CLAUDE.md).
5. **No emojis** anywhere in the message (per project CLAUDE.md).
6. Scope (optional) is the area touched: e.g. `auth`, `reports`, `hangfire`,
   `worker-form`, `frontend`, `backend`. Pick from filenames in the diff.
7. If the change is non-trivial, add a body (blank line, then wrapped at ~72
   chars) explaining the **why**, not the what.
8. Do **not** add a `Co-Authored-By` trailer or any mention of an AI assistant.
9. Do **not** amend.
10. **Never push without explicit user confirmation in the current turn.**

## Steps

1. Run `git status` to see the working tree and what is staged.
2. Stage the changes with `git add` (stage all with `git add -A`, or only the
   files the user specified).
3. If, after staging, nothing is staged, stop and tell the user there is
   nothing to commit.
4. Run `git diff --cached` to see the staged change.
5. Run `git log -5 --pretty=format:"%s"` to sanity-check house style.
6. Pick the single best `type` and optional `scope` from the diff.
7. Write the subject (under 72 chars) describing the change.
8. If the change is non-trivial, draft a short body explaining motivation.
9. Commit using a HEREDOC for correct multi-line formatting:

```bash
git commit -m "$(cat <<'EOF'
<type>(<scope>): <subject>

<optional body>
EOF
)"
```

10. Run `git status` to confirm the commit landed.
11. Run `git pull origin master --rebase` to integrate remote changes.
    - If the rebase reports conflicts, stop and report them. Do **not** push.
12. **Stop and ask the user for explicit confirmation to push.** Show the commit
    subject and the target ref (`master:master`). Do not proceed until the user
    clearly approves (e.g. "yes", "push").
13. **Only after the user confirms**, run:

```bash
git push origin master:master
```

14. Run `git status` to confirm the push completed and the branch is up to date.

$ARGUMENTS