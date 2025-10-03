# Contributing Guide

This project follows a **Git Flow**-style branching model with:

- **`main`** — production-ready, stable; releases are cut from here.
- **`dev`** — integration branch for completed stories/features.
- **Feature branches** — long‑lived per feature/epic.
- **Story branches** — short‑lived branches for individual user stories **nested under a feature**.

We also enforce:

- **Commit messages** using [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).
- **Branch names** inspired by [conventional-branch](https://conventional-branch.github.io/).

> TL;DR
>
> 1. Branch off `dev` (or an existing `feature/*`). 2) Name your branch using the patterns below. 3) Commit using Conventional Commits. 4) Open a PR into `dev`. 5) When a feature is complete, merge the feature to `dev`, then promote `dev` → `main` via a release PR.

---

## 1) Branching model

### Protected branches

- `main` is protected: requires PR, approvals, passing CI, and linear history (squash or rebase merges).
- `dev` is protected: requires PR and CI green before merging.

### Story → feature(work) hierarchy

- **Story branches** (umbrella branch per user story):
  - Pattern: `story/<ticket-id>-<short-slug>`
  - Examples: `story/US-142-enable-mfa`, `story/GH-203-cancel-appointment`
  - Source branch: `dev`

- **Feature work branches** (short‑lived tasks under a story; use Conventional types/scopes):
  - Pattern (nested under story): `story/<ticket-id>-<short-slug>/<type>/<scope>/<short-task-slug>`
  - Examples:
    - `story/US-142-enable-mfa/feat/api/enrollment-endpoint`
    - `story/US-142-enable-mfa/fix/ui/double-submit`
    - `story/GH-203-cancel-appointment/refactor/core/domain-service`

### Flow of work

1. **Create / update issue** (link to the story/ticket). Define acceptance criteria.
2. **Create the story branch** from `dev`:
   - `git checkout -b story/US-142-enable-mfa`

3. **Create one or more feature work branches** off the story branch for tasks:
   - `git checkout -b story/US-142-enable-mfa/feat/api/enrollment-endpoint`

4. Commit with Conventional Commits (see §2) and push.
5. Open a **PR from each work branch → its story branch**.
6. After approvals & CI pass, **merge (squash recommended)** into the story branch.
7. When the story is complete (all tasks merged), open a **PR from story → `dev`**.
8. When `dev` is ready for a release, open a **Release PR `dev` → `main`** (tagged, changelog generated).

---

## 2) Conventional Commits

We use the following types (standardized, not exhaustive):

- `feat`: a new feature
- `fix`: a bug fix
- `docs`: documentation only changes
- `style`: formatting, missing semicolons, etc. (no code change)
- `refactor`: code change that neither fixes a bug nor adds a feature
- `perf`: performance improvements
- `test`: adding or correcting tests
- `build`: build system or external dependencies changes
- `ci`: CI configuration files and scripts
- `chore`: other changes that don’t modify src or test files
- `revert`: reverts a previous commit

**Format**

```
<type>[optional scope]: <short summary>

[optional body]

[optional footer(s)]
```

- Use **imperative** mood ("add…", "fix…").
- Keep the summary ≤ 72 chars.
- Use `BREAKING CHANGE:` in the footer to signal breaking changes.

**Examples**

```
feat(api): add MFA enrollment endpoint
fix(ui): prevent double submission on signup
refactor(core): extract domain services for appointment booking
perf(db): add indexes for patient lookups
chore: bump eslint and typescript

feat(auth)!: switch hashing algorithm to argon2

BREAKING CHANGE: user password hashes are now generated with argon2; bcrypt hashes are migrated at login.
```

> If your commit closes an issue, add `Closes #123` in the footer.

---

## 3) Branch naming convention

We follow a **conventional-branch** style to keep branch names meaningful and machine‑parsable.

### Story branches (parent)

```
story/<ticket-id>-<short-slug>
```

- `ticket-id`: tracker id (e.g., `US-142`, `GH-57`, `JIRA-321`)
- `short-slug`: kebab‑case summary (≤ 6 words)

**Examples**

- `story/US-142-enable-mfa`
- `story/GH-57-deadlock-on-appointments`

### Feature work branches (children under a story)

```
story/<ticket-id>-<short-story-slug>/<type>/<scope>/<short-task-slug>
```

- `type`: same as Conventional Commits (`feat`, `fix`, `docs`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`)
- `scope`: area affected (`api`, `ui`, `db`, `infra`, `core`, `auth`, etc.)
- `short-task-slug`: concise task description

**Examples**

- `story/US-142-enable-mfa/feat/api/enrollment-endpoint`
- `story/US-142-enable-mfa/fix/db/index-deadlock`
- `story/GH-57-deadlock-on-appointments/refactor/core/retry-policy`

> Keep work branches short‑lived; merge them into the story branch frequently.

---

## 4) Pull Requests

- **PR targets**:
  - Work branch → **story**
  - Story → **`dev`**
  - Release → **`main`**

- **Title** must follow Conventional Commits (e.g., `feat(api): enable MFA enrollment`).
- **Description template** (include):
  - Context / Why
  - What changed
  - Screenshots (if UI)
  - How to test (steps)
  - Linked issues (e.g., `Closes #123`)
  - Risk & Rollback plan

- **Checks required**: lint, tests, build, type check, security scan (as configured).
- **Merge strategy**: **Squash & merge** for work → story PRs; **Rebase or merge commit** acceptable for story → `dev` if history is meaningful.

---

## 5) Releases & tagging

- We use **semantic versioning**: `MAJOR.MINOR.PATCH`.
- Optionally use **semantic‑release** to automate versioning and changelogs from Conventional Commits.
- Create a **Release PR** from `dev` → `main`, verify CHANGELOG, bump version, and tag.

---

## 6) Commit hygiene

- Commit early and often, but keep each commit **atomic**.
- Don’t mix unrelated changes.
- Keep WIP off shared branches; use local commits or draft PRs if needed.
- Rebase interactively to clean up before opening a PR (or squash on merge).

---

## 7) Issue triage & labels (suggested)

- **Type**: `type:feature`, `type:bug`, `type:docs`, `type:refactor`, …
- **Scope**: `scope:api`, `scope:ui`, `scope:db`, `scope:infra`, …
- **Status**: `status:ready`, `status:in-progress`, `status:blocked`, `status:needs-review`
- **Impact**: `impact:breaking`, `impact:security`, `impact:perf`
- **Size (Fibonacci)**: `size:1`, `size:2`, `size:3`, `size:5`, `size:8`, `size:13`

---

## 8) Local development checklist

- [ ] Run `lint` and `format`
- [ ] Run unit/integration tests
- [ ] Update docs/README
- [ ] Add or update migrations (if DB changes)
- [ ] Add feature flags or toggles if needed
- [ ] Ensure telemetry/logging is adequate

---

## 9) Examples

**Create a story and a work branch**

```bash
# from dev
git checkout dev && git pull

# create story branch for the ticket
git checkout -b story/US-142-enable-mfa

# create a work branch under the story
git checkout -b story/US-142-enable-mfa/feat/api/enrollment-endpoint
```

**Make commits**

```bash
git add .
git commit -m "feat(api): add MFA enrollment endpoint"
```

**Open PRs**

- Work PR → `story/US-142-enable-mfa`
- Story PR → `dev`
- Release PR → `main`

---

## 10) Code of Conduct

Please follow our Code of Conduct. Be respectful, inclusive, and collaborative.

---

## 11) FAQ

**Q: Can I open a work branch directly from `dev`?**
A: No. Create a `story/<ticket>` branch from `dev`, then branch your work off that story.

**Q: What if my change spans multiple scopes?**
A: Prefer multiple work branches/PRs under the same story to keep changes atomic.

**Q: How do I mark a breaking change?**
A: Use `!` after the type in the subject (e.g., `feat!:`) and add a `BREAKING CHANGE:` footer explaining the impact.

---

Happy shipping! 🚀
