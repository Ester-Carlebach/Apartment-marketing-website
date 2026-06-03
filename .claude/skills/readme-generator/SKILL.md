---
name: readme-generator
description: Generate a technically accurate, architecturally documented GitHub README.md for a software project. Trigger this skill whenever the user asks to write, generate, or refine a README, repository documentation, or technical project overview — including when they mention architecture, GitHub, recruiters, or portfolio review. Produces output through three sequential phases: draft, editorial refinement, and architectural polish.
---

# README Generator

Produces a reviewer-oriented GitHub README through three sequential passes: draft → editorial refinement → architectural polish.

Documentation must reflect the actual repository. Do not invent infrastructure, scalability claims, CI/CD pipelines, caching layers, message queues, RBAC systems, microservices, or testing frameworks unless explicitly confirmed by the user.

---

## Required Inputs

Before starting, collect from the user:

- **Project purpose** — what problem it solves and for whom
- **Tech stack** — languages, frameworks, databases
- **Architecture style** — layered, Clean Architecture, modular monolith, etc.
- **Authentication approach** — if present
- **Folder structure** — paste or describe
- **Operational constraints** — deployment environment, known limitations
- **Notable technical decisions** — trade-offs, patterns chosen and why
- **Screenshots** — optional

If information is missing, make conservative assumptions. Do not fill gaps with invented infrastructure.

---

## Phase 1 — Draft

Write the README as a senior software architect documenting a real system.

**Tone:** Technical, direct, architecture-focused. No marketing language, no emojis, no hype.

**Section order:**
1. Project title
2. One-line system description
3. Highlights
4. Key features
5. Overview — system purpose, problem context, high-level technical flow
6. Technical challenges
7. Architecture — request lifecycle, backend layering, async processing if present, Mermaid diagram
8. Architectural decisions
9. Usage
10. Installation
11. Screenshots
12. Project structure
13. Future improvements
14. Contributing
15. License

**Architecture section must cover:**
- Request lifecycle end-to-end
- Dependency direction and separation of concerns
- Where business logic lives
- Authentication and persistence flow where applicable
- Async/background processing if present

**Mermaid diagram** is required. Include:
- Subgraphs per layer (Client, API, Application, Infrastructure, Database, External Services as applicable)
- Labeled arrows showing data flow
- Technology names on nodes
- Styles and colors for readability

**Technical depth** — discuss where applicable to the actual stack:
- Layered backend architecture and dependency direction
- Technology-specific architectural patterns (repository pattern, CQRS, mediator, etc.)
- Authentication middleware flow
- Frontend state management decisions and trade-offs
- Database choices and persistence model
- Modular monolith vs. distributed architecture reasoning
- Operational simplicity trade-offs

---

## Phase 2 — Editorial Refinement

Review the draft as a senior engineer focused on documentation quality.

**Principles:**
- Write as an engineer describing a system, not as a document explaining itself
- Remove self-referential, workflow-oriented, or AI-sounding phrasing
- Avoid words that minimise the work without technical justification: "small", "simple", "basic"
- Avoid unearned claims: "production-ready", "enterprise-grade", "portfolio-quality"
- Keep trade-off discussions and scope limitations — state them once, clearly
- Ensure natural flow: Context → Architecture → Decisions → Usage

**Preserve:**
- All verified technical details
- Honest documentation of architectural choices and their consequences
- Acknowledgment of infrastructure boundaries
- Operational constraints

---

## Phase 3 — Architectural Polish

Final pass focused on language precision and document cohesion.

**Strengthen:**
- Use precise architectural vocabulary: request lifecycle, persistence model, authoritative layer, consistency invariant, operational trade-off, ownership enforcement, state flow
- Remove any remaining meta or specification-style language
- Tighten dense paragraphs; keep bullets parallel
- Ensure headings read as documentation, not task descriptions

**Do not add or imply** anything not confirmed by the user: Docker, Redis, queues, caching, CI/CD, RBAC, microservices, advanced testing infrastructure, or production-scale metrics.

---

## Output

Deliver the final result as a single clean Markdown file.

If the user provides an existing draft, skip Phase 1 and begin at Phase 2.
