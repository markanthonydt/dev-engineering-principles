const sectionBlueprints = [
  {
    tag: "Foundation",
    slug: "systems-thinking",
    topics: [
      ["Thinking in Systems", "Good programs sit inside larger systems with users, infrastructure, data, and operational constraints."],
      ["Problem Framing", "The quality of an implementation is bounded by the quality of the problem definition."],
      ["Constraints as Design Inputs", "Deadlines, dependencies, compliance, and team capability should shape implementation decisions early."],
      ["Outcome-Driven Engineering", "The right metric is the system or user outcome, not how much code was produced."],
      ["Tradeoff Awareness", "Every design choice buys something and gives something up, so tradeoffs need to stay visible."],
      ["Long-Term Maintainability", "Short-term speed only counts if it does not create future drag that exceeds the gain."],
      ["Failure-Oriented Thinking", "Design is stronger when it starts by asking how the system can fail."],
      ["Engineering Judgment", "Strong engineers know when to follow patterns and when context justifies deviation."],
      ["Context Loading", "Good changes come from understanding the surrounding system before editing local code."],
      ["Working Agreements", "Shared defaults on quality, review, and delivery reduce friction across the team."]
    ],
    principles: [
      "Map the real system boundary before changing implementation details, including users, dependencies, operations, and failure handling.",
      "Name the main constraint so design tradeoffs stay explicit instead of being rediscovered halfway through implementation.",
      "Prefer decisions that remain legible to future maintainers, especially when the current team context is no longer available.",
      "Evaluate local fixes against end-to-end behavior so you do not optimize one subsystem while harming the wider system.",
      "Make the reason behind important decisions visible in code, tests, or docs rather than leaving it as tribal knowledge."
    ],
    codex: [
      "Ask Codex to summarize architecture, dependencies, and likely blast radius before proposing changes.",
      "Use prompts that require explicit assumptions and verification steps.",
      "Have the assistant compare at least two approaches when the tradeoff is not obvious."
    ],
    risks: [
      "Solving the local symptom while missing the system cause.",
      "Treating AI fluency as design certainty.",
      "Optimizing one dimension while degrading the rest of the system."
    ]
  },
  {
    tag: "Planning",
    slug: "requirements",
    topics: [
      ["Requirements Before Code", "Most wasted engineering effort starts with building efficiently before confirming what should be built."],
      ["Acceptance Criteria", "Clear acceptance criteria prevent hidden disagreement about what done means."],
      ["Non-Goals", "Explicit non-goals keep scope controlled and reduce accidental product expansion."],
      ["Delivery Slicing", "Breaking work into valuable increments improves feedback and lowers change risk."],
      ["Dependency Mapping", "Upstream and downstream dependencies should be known before major implementation begins."],
      ["Risk-Based Planning", "High-risk unknowns should be explored before low-risk implementation details."],
      ["Definition of Done", "Completion requires behavior, verification, documentation, and operational readiness where needed."],
      ["Migration Planning", "State transitions and rollout sequencing matter as much as the end architecture."],
      ["Backlog Hygiene", "Vague tasks generate vague code and vague outcomes."],
      ["Estimation Discipline", "Estimate uncertainty honestly instead of compressing it into false precision."]
    ],
    principles: [
      "Separate user outcomes from implementation ideas so the team can change approach without reopening the whole problem statement.",
      "Define what success and failure look like before writing code, including edge conditions and non-goals.",
      "Use smaller slices when uncertainty is high so feedback arrives before architecture hardens around wrong assumptions.",
      "Treat scope as a risk-control tool; when a change grows, re-cut the work instead of normalizing drift.",
      "Resolve ambiguous requirements into observable acceptance criteria that reviewers and testers can verify consistently."
    ],
    codex: [
      "Use Codex to turn rough goals into testable acceptance criteria.",
      "Ask it to list missing constraints, hidden dependencies, and risky assumptions.",
      "Have it propose phased delivery options rather than one large rollout."
    ],
    risks: [
      "Starting scaffolding before the job is clear.",
      "Confusing backlog motion with progress.",
      "Allowing generated implementation to set product scope."
    ]
  },
  {
    tag: "Code Quality",
    slug: "code-quality",
    topics: [
      ["Readability and Local Simplicity", "Code needs to be understood quickly, especially during incidents and handoffs."],
      ["Naming as Design", "Good names compress intent and lower the cognitive load of understanding behavior."],
      ["Controlling Complexity", "Complexity should be isolated, not allowed to leak through the codebase."],
      ["Abstraction Boundaries", "Abstractions are useful only when they remove repeated complexity without hiding important behavior."],
      ["Module Cohesion", "Units of code should group behavior that changes together for the same reason."],
      ["Coupling Management", "Reducing hidden dependencies makes systems easier to test, change, and reason about."],
      ["State Discipline", "The more shared mutable state exists, the harder a system becomes to predict."],
      ["Refactoring Strategy", "Refactoring is safest when it preserves behavior and reduces one kind of complexity at a time."],
      ["Code Comments", "Comments should explain intent or non-obvious constraints, not narrate obvious syntax."],
      ["Deletion as Improvement", "Removing unnecessary code is often higher leverage than rewriting it."]
    ],
    principles: [
      "Prefer straightforward control flow and obvious ownership so a reader can understand behavior without mentally simulating too much context.",
      "Keep abstractions proportional to the problem; introduce layers only when they remove repeated complexity or isolate volatility.",
      "Reduce hidden state and implicit behavior because surprise is one of the main drivers of maintenance cost.",
      "Use names, module boundaries, and comments to clarify intent where the code alone would force unnecessary reverse engineering.",
      "Bias toward deleting or simplifying code before inventing new structure to manage existing complexity."
    ],
    codex: [
      "Ask Codex to explain a module in plain language before changing it.",
      "Request minimal diffs aligned with existing repository patterns.",
      "Use the assistant to identify places where abstraction is obscuring behavior."
    ],
    risks: [
      "Premature abstraction that adds indirection without value.",
      "Large rewrites that erase useful historical context.",
      "Clever helper layers that distribute responsibility."
    ]
  },
  {
    tag: "Verification",
    slug: "verification",
    topics: [
      ["Correctness and Tests", "Confidence should come from executable evidence rather than intuition."],
      ["Boundary Testing", "Bugs often live at limits, empty states, malformed inputs, and transition points."],
      ["Regression Prevention", "Each real bug is an opportunity to add a focused safeguard against recurrence."],
      ["Test Pyramid Judgment", "Fast unit checks and slower integration coverage should be balanced by risk."],
      ["Deterministic Tests", "Tests that fail for one clear reason are easier to trust and maintain."],
      ["Fixtures and Test Data", "Data setup should support clarity rather than hide the conditions under test."],
      ["Contract Testing", "Contracts between services or modules deserve direct verification when breakage is costly."],
      ["Manual Verification", "Some risks are better checked through targeted manual flows than artificial automation."],
      ["Quality Gates", "Checks should block the failures that matter, not every stylistic disagreement."],
      ["Test Maintenance", "A test suite is production infrastructure and needs active pruning and care."]
    ],
    principles: [
      "Test behavior that matters to users and system safety rather than only exercising internal code paths.",
      "Add coverage where change risk or failure cost is highest, especially boundaries, migrations, and shared contracts.",
      "Keep failures easy to diagnose by making assertions specific and test setup readable.",
      "Use regression tests to preserve lessons learned from real bugs instead of trusting memory alone.",
      "Prefer deterministic tests that fail for one clear reason over broad tests that are hard to interpret."
    ],
    codex: [
      "Ask Codex to derive tests from acceptance criteria and bug reports before implementation starts.",
      "Use it to enumerate missing edge cases, adversarial inputs, and migration risks before code is merged.",
      "Have it critique whether assertions check behavior or just mirror the implementation, and keep tests in the same change when practical."
    ],
    risks: [
      "Happy-path coverage creating false confidence.",
      "Generated tests that lock in implementation details.",
      "Skipping verification because the change looks small."
    ]
  },
  {
    tag: "Execution",
    slug: "execution",
    topics: [
      ["Debugging by Evidence", "Fast debugging depends on reducing uncertainty in a deliberate sequence."],
      ["Reproduction First", "You should be able to trigger or model a failure before trusting a fix."],
      ["Instrumentation Strategy", "Logs, traces, and temporary probes are how you turn guesses into evidence."],
      ["Hypothesis Ranking", "Debugging gets faster when likely causes are ranked by probability and blast radius."],
      ["Minimal Reproduction", "A small failing case separates the bug from surrounding system noise."],
      ["Change Isolation", "One change at a time makes it possible to learn from outcomes."],
      ["Root Cause Analysis", "A complete fix addresses the cause chain, not only the visible symptom."],
      ["Incident Discipline", "Production incidents need structure: stabilize, assess, communicate, then learn."],
      ["Rollback Judgment", "Sometimes the best fix is to remove the new risk instead of patching live."],
      ["Postmortem Quality", "A useful postmortem improves the system and the team’s future decisions."]
    ],
    principles: [
      "Reproduce first, instrument second, patch last so the team learns from evidence rather than from accidental correlation.",
      "Make every debugging step shrink the search space instead of scattering changes across multiple hypotheses at once.",
      "Prefer reversible actions during uncertainty, especially in production or shared environments.",
      "Write down the leading hypotheses and what evidence would disprove each one to keep debugging disciplined.",
      "Distinguish root cause from visible symptom so the final fix removes recurrence rather than cosmetically masking the failure."
    ],
    codex: [
      "Use Codex to propose hypotheses ranked by likelihood and impact.",
      "Ask it for a logging or reproduction plan instead of an immediate fix.",
      "Require explicit verification after each suggested change."
    ],
    risks: [
      "Changing multiple variables at once.",
      "Following a stack trace without tracing state history.",
      "Applying shotgun patches generated from vague symptoms."
    ]
  },
  {
    tag: "Engineering",
    slug: "engineering",
    topics: [
      ["Performance with Measurement", "Performance work should start with data, not assumptions."],
      ["Profiling and Bottlenecks", "The slowest part of the system is often not the part that looks busy."],
      ["Algorithmic Thinking", "Complexity choices dominate syntax-level optimizations in most real systems."],
      ["Concurrency Safety", "Parallelism can improve throughput while making correctness dramatically harder."],
      ["Caching Strategy", "Caching trades freshness and complexity for speed, so invalidation has to be designed upfront."],
      ["Resource Efficiency", "CPU, memory, network, and storage limits all shape production behavior differently."],
      ["Scalability Boundaries", "Systems scale by removing bottlenecks, not by assuming horizontal growth solves everything."],
      ["Latency Budgets", "Response-time expectations should be allocated across components deliberately."],
      ["Resilience Patterns", "Timeouts, retries, and backpressure need discipline or they create new failure modes."],
      ["Technical Debt Management", "Debt is manageable only when it is visible, bounded, and intentionally repaid."]
    ],
    principles: [
      "Measure before optimizing and verify after so performance work is tied to actual bottlenecks rather than folklore.",
      "Keep readability unless the performance gain is meaningful enough to justify the added complexity permanently.",
      "Treat concurrency as a correctness problem first and a throughput optimization second.",
      "Model the operational cost of retries, caches, queues, and background work instead of assuming they are free abstractions.",
      "Use latency, throughput, and resource budgets to decide which optimization work is materially worth doing."
    ],
    codex: [
      "Ask Codex for a benchmark plan before changing implementation.",
      "Use it to compare algorithmic and operational tradeoffs.",
      "Have it call out complexity introduced by any optimization."
    ],
    risks: [
      "Optimizing code paths users do not feel.",
      "Adding caches or retries without failure modeling.",
      "Trusting generic performance advice without workload context."
    ]
  },
  {
    tag: "Design",
    slug: "design",
    topics: [
      ["Interfaces and API Design", "Clear interfaces reduce misuse and make systems composable."],
      ["Contract Clarity", "Consumers should understand how to use an interface without reading implementation."],
      ["Versioning Strategy", "Compatibility decisions compound, so versioning needs intent rather than drift."],
      ["Error Design", "Errors should guide diagnosis and recovery rather than merely signal failure."],
      ["Schema Evolution", "Data contracts need planned migration paths when systems or teams change independently."],
      ["Idempotency", "Repeatable operations reduce risk in distributed and user-driven flows."],
      ["State Machines", "Explicit states and transitions make complex workflows safer to implement."],
      ["Configuration Design", "Config is part of the product surface and should be constrained carefully."],
      ["CLI and Tool UX", "Developer-facing tools deserve the same usability discipline as end-user interfaces."],
      ["Documentation as Interface", "Examples, constraints, and defaults are part of the API, not add-ons."]
    ],
    principles: [
      "Design for the caller’s clarity rather than the implementer’s convenience.",
      "Keep contracts stable and invalid states difficult to express.",
      "Prefer explicitness when misuse would be costly."
    ],
    codex: [
      "Use Codex to critique naming, parameter shapes, and consistency.",
      "Ask for examples of ambiguous or dangerous usage.",
      "Generate docs from the contract and compare them against actual behavior."
    ],
    risks: [
      "Leaky abstractions that expose internal sequencing.",
      "Boolean flags that overload one surface with many behaviors.",
      "Breaking compatibility through casual cleanup."
    ]
  },
  {
    tag: "Reliability",
    slug: "reliability",
    topics: [
      ["Operations and Observability", "If you cannot see behavior in production, you do not control the system."],
      ["Logging for Decisions", "Logs should answer questions that matter during diagnosis, not merely produce noise."],
      ["Metrics and SLOs", "Metrics become useful when paired with ownership, thresholds, and action."],
      ["Tracing and Causality", "Distributed systems need tooling that can connect one user action across components."],
      ["Rollout Safety", "Feature flags, phased rollouts, and canaries reduce blast radius when behavior is uncertain."],
      ["Recovery Planning", "Reliability includes how fast and safely the system can recover from bad states."],
      ["Alert Design", "Alerts should call people only when action is needed and clear."],
      ["Operational Runbooks", "Known failure patterns deserve documented diagnosis and response steps."],
      ["Security Basics", "Secure engineering starts with least privilege, input validation, and dependency awareness."],
      ["Compliance and Auditability", "Systems in regulated contexts need change and access decisions to remain explainable."]
    ],
    principles: [
      "Design observability for diagnosis, not just collection, so emitted signals answer real questions during incidents.",
      "Plan rollback and recovery before shipping risky changes rather than treating reversibility as emergency work.",
      "Make operational ownership explicit so alerts, dashboards, and runbooks have clear maintainers.",
      "Emit errors, metrics, and traces that preserve context across service boundaries instead of forcing manual reconstruction.",
      "Treat production safety as part of feature completeness, not a separate concern that can wait until later."
    ],
    codex: [
      "Ask Codex which signals are missing for a feature or incident class, and separate user-visible symptoms from underlying causes.",
      "Use it to draft rollout checklists, runbooks, and black-box versus white-box monitoring plans.",
      "Have it identify silent failures, weak alert conditions, and missing trace, metric, or log context."
    ],
    risks: [
      "Verbose telemetry with no operational value.",
      "Metrics without thresholds, ownership, or response plans.",
      "Shipping changes that cannot be safely reversed."
    ]
  },
  {
    tag: "Teamwork",
    slug: "teamwork",
    topics: [
      ["Collaboration and Review", "Engineering quality compounds when teams share context and review discipline."],
      ["Small Diffs", "Focused changes are easier to review accurately and safer to deploy."],
      ["Review Priorities", "Correctness, regression risk, and maintainability matter more than stylistic preferences."],
      ["Commit Hygiene", "Commits should preserve coherent intent and useful history."],
      ["Knowledge Sharing", "Teams move faster when important context is written once and reused."],
      ["Handoffs", "Transitions between people or time zones should not require reverse engineering the work."],
      ["Mentoring Through Code", "Reviews and pairing are opportunities to raise judgment, not just merge code."],
      ["Decision Records", "Important design choices need just enough record to remain understandable later."],
      ["Cross-Functional Alignment", "Product, design, operations, and engineering assumptions need explicit synchronization."],
      ["Sustainable Pace", "Systems and teams degrade when speed is extracted without recovery and discipline."]
    ],
    principles: [
      "Keep changes focused so intent stays obvious and reviewers can evaluate correctness without reconstructing multiple concerns at once.",
      "Review for risk and behavior before style because regressions and blind spots are more expensive than formatting disagreements.",
      "Write context for future readers, not only current collaborators, in commits, pull requests, and decision notes.",
      "Use handoffs and documentation to preserve momentum when ownership changes or work pauses.",
      "Treat code review as a quality and learning mechanism rather than just a merge gate."
    ],
    codex: [
      "Use Codex to pre-review diffs for bugs, regressions, missing tests, and accidental complexity.",
      "Ask it to summarize likely reviewer questions and whether the change should be split into smaller reviewable units.",
      "Generate clearer handoff notes, commit messages, CL descriptions, and documentation drafts."
    ],
    risks: [
      "Large generated diffs that nobody can inspect properly.",
      "Review time spent on nits while correctness issues remain.",
      "Low-context collaboration that slows every future change."
    ]
  },
  {
    tag: "AI Workflow",
    slug: "ai-workflow",
    topics: [
      ["Using Codex Well", "Codex works best as leverage for analysis, implementation, and review rather than as a substitute for judgment."],
      ["Prompt Precision", "Better prompts reduce thrash by making scope, constraints, and success criteria concrete."],
      ["Context Loading for AI", "Assistant output improves when the relevant codebase and operational context are loaded first."],
      ["Scoped Generation", "Smaller generated changes are easier to inspect, verify, and trust."],
      ["AI-Assisted Refactoring", "Refactoring with an assistant works best when behavior boundaries and tests are already clear."],
      ["AI for Reviews", "Assistants are strong at surfacing risks and inconsistencies when asked to review instead of author."],
      ["AI for Documentation", "Codex can convert code and plans into explanation, examples, and checklists quickly."],
      ["Hallucination Management", "You should assume uncertainty until claims are verified against code, docs, or execution."],
      ["Verification Loops", "The safest workflow is inspect, propose, implement, verify, and only then expand scope."],
      ["Human Judgment Remains Primary", "Architecture, risk tolerance, and final acceptance still belong to the engineer."]
    ],
    principles: [
      "Give Codex concrete scope, local context, and verification expectations so the assistant solves the actual problem instead of a generic one.",
      "Use iterative loops instead of one giant generation request because smaller checkpoints are easier to validate and redirect.",
      "Keep prompts simple and direct for reasoning models; do not rely on chain-of-thought prompting when clear task framing is enough.",
      "Treat fluent output as a draft until checked against code, tests, docs, or execution, and pin model snapshots when consistency matters.",
      "Back important prompt or model changes with evals that include normal cases, edge cases, and adversarial cases."
    ],
    codex: [
      "Start with inspection, then ask for options, then implementation, then verification.",
      "Request findings-first reviews and explicit uncertainty when confidence is low.",
      "Have the assistant explain why a change is safe, not just what it changed, and rerun evals when prompts or models change."
    ],
    risks: [
      "Letting the assistant set architecture without constraints.",
      "Skipping local checks because the patch looks coherent.",
      "Using AI-generated volume as a proxy for progress."
    ]
  }
];

const sections = sectionBlueprints.flatMap((blueprint) =>
  blueprint.topics.map(([title, summary], index) => ({
    id: `${blueprint.slug}-${index + 1}`,
    slug: blueprint.slug,
    tag: blueprint.tag,
    topicIndex: index,
    title,
    summary,
    principles: blueprint.principles,
    codex: blueprint.codex,
    risks: blueprint.risks
  }))
);

const moduleOverviews = {
  Foundation: "How to frame engineering work as a system problem instead of a local code problem.",
  Planning: "How to turn intent into scoped, testable, low-surprise implementation work.",
  "Code Quality": "How to keep code readable, bounded, and sustainable under change.",
  Verification: "How to create confidence through tests, checks, and explicit evidence.",
  Execution: "How to debug, investigate, and respond without widening uncertainty.",
  Engineering: "How to reason about performance, scale, resilience, and long-term code health.",
  Design: "How to shape interfaces, APIs, workflows, and contracts so they are hard to misuse.",
  Reliability: "How to observe, deploy, recover, and operate systems safely in production.",
  Teamwork: "How to review, document, and coordinate changes so quality compounds across people.",
  "AI Workflow": "How to use Codex and reasoning models as leverage without giving up engineering judgment."
};

const topicDeepening = {
  Foundation: [
    {
      build: "Start by identifying the real system boundary. That includes users, data stores, external services, deployment shape, support workflow, and operational constraints, not just the file you are editing.",
      why: "This matters because most costly mistakes happen when engineers solve the nearest symptom while the real leverage sits somewhere else in the system.",
      example: "If a page is slow, the cause may be query design, cache invalidation, a queue backlog, or an API dependency rather than the component doing the rendering."
    },
    {
      build: "A problem statement should describe the failure or opportunity in observable terms. Avoid jumping straight to implementation language before the problem is stable.",
      why: "Teams that frame problems well can change approach without reopening the whole conversation every time a design idea fails.",
      example: "Instead of saying 'we need Redis here', say 'we need repeated reads to stay under 100ms without stale results causing incorrect user balances'."
    },
    {
      build: "Constraints are not annoyances to work around later. They are inputs that shape architecture, rollout strategy, staffing needs, and acceptable complexity from the start.",
      why: "Naming the dominant constraint early prevents wasted design work on solutions that cannot survive the real environment.",
      example: "A compliance deadline, mobile bandwidth limit, or thin support team may justify a simpler design than the one that looks most elegant in isolation."
    },
    {
      build: "Outcome-driven engineering asks what changed for the user or system after the work shipped. It separates visible value from engineering activity.",
      why: "This prevents teams from mistaking code volume, issue count, or refactor size for actual progress.",
      example: "A successful reliability project reduces incident count, mean recovery time, or failed orders, not just adds retries and dashboards."
    },
    {
      build: "Tradeoff awareness means saying what a design buys and what it costs: latency, readability, portability, operability, or team learning curve.",
      why: "When tradeoffs stay implicit, teams drift into accidental complexity and later argue about symptoms instead of decisions.",
      example: "Caching may reduce latency but can increase stale-data risk, invalidation logic, and operational debugging cost."
    },
    {
      build: "Maintainability is the cost curve of future change. A fast solution can still be bad if every follow-up requires heroic understanding to modify safely.",
      why: "Long-lived systems are changed more often than they are first written, so structural clarity compounds over time.",
      example: "A duplicated but readable path can be cheaper long-term than a clever abstraction that every new teammate misreads."
    },
    {
      build: "Failure-oriented thinking starts by asking how the system breaks: partial outage, malformed input, duplicate delivery, timeout, bad migration, or human error.",
      why: "This produces stronger designs because failure handling gets designed in before it becomes production improvisation.",
      example: "Before adding a new payment retry, decide what happens if the first request succeeded but the confirmation response was lost."
    },
    {
      build: "Engineering judgment is the ability to choose when to follow a pattern and when local context justifies an exception.",
      why: "Pattern obedience without context can be as dangerous as ad hoc design with no standards at all.",
      example: "A microservice split may match a fashionable pattern but still be wrong if the team lacks the observability and ownership model to operate it."
    },
    {
      build: "Context loading means understanding history, neighboring systems, and current operational reality before editing code or proposing architecture.",
      why: "Without context, even well-written code changes can be aimed at a stale model of the system.",
      example: "Read the incident notes, migration docs, or recent PR discussions before refactoring a path that has repeatedly failed in production."
    },
    {
      build: "Working agreements are explicit shared defaults on quality, review, testing, ownership, and deployment safety.",
      why: "Good teams reduce friction not only with skill but with stable expectations that prevent the same coordination debate from recurring.",
      example: "Agreeing that risky changes require rollback notes and tests in the same change prevents last-minute disagreement during release."
    }
  ],
  Planning: [
    {
      build: "Requirements before code means pinning down behavior and constraints before scaffolding. It does not require full specification, but it does require a stable target.",
      why: "This reduces rework because the first version is aimed at the right problem rather than merely being fast to produce.",
      example: "Before building an approval flow, define who can approve, what states exist, which actions are reversible, and which actions must be audited."
    },
    {
      build: "Acceptance criteria turn a fuzzy request into observable checks. They should say what must happen, under what conditions, and what counts as failure.",
      why: "They improve alignment across engineering, product, QA, and review because everyone can test the same claim.",
      example: "A good criterion says 'draft saves without notifying approvers' rather than 'draft mode works as expected'."
    },
    {
      build: "Non-goals protect the work from accidental expansion. They tell the team what will intentionally remain out of scope in this iteration.",
      why: "This is useful because many projects slip not from one big decision but from small, reasonable extras that accumulate unnoticed.",
      example: "A v1 reporting project might explicitly exclude custom export formats, cross-team permissions, or historical backfill."
    },
    {
      build: "Delivery slicing means breaking work into increments that are independently valuable, testable, and reviewable.",
      why: "Smaller slices create earlier feedback and lower rollback cost when a direction turns out to be wrong.",
      example: "Ship read-only visibility first, then editing, then notifications, instead of one giant feature branch."
    },
    {
      build: "Dependency mapping identifies what must exist before the change works and what downstream systems will react to it once it ships.",
      why: "This prevents surprises during rollout, integration, and ownership handoff.",
      example: "A schema change may affect ETL jobs, dashboards, exports, mobile clients, and operational runbooks, not just the writing service."
    },
    {
      build: "Risk-based planning means proving the scariest assumptions first. Unknowns that could kill the whole design deserve attention before safe implementation details.",
      why: "This improves execution because the team learns early whether the plan is viable instead of discovering it after most of the code is written.",
      example: "Prototype the third-party rate limit or browser performance limit before polishing internal abstractions."
    },
    {
      build: "Definition of done should include behavior, checks, documentation, and operational readiness where appropriate.",
      why: "Without this, teams stop at 'code exists' and leave the expensive last 20 percent to whoever touches the feature next.",
      example: "A deployment is not done if the feature works locally but has no alerting, no migration notes, and no reviewer can explain the rollback path."
    },
    {
      build: "Migration planning is about how the system moves from old shape to new shape without corrupting data or breaking consumers mid-transition.",
      why: "Transition failures are common because engineers over-focus on the target design and under-design the path to get there.",
      example: "Run a dual-write period, backfill old records, verify parity, then remove the legacy path only after consumers have switched."
    },
    {
      build: "Backlog hygiene means tasks are written clearly enough that someone else can start the work without inventing the requirement from scratch.",
      why: "Poor backlog quality creates false progress: tickets move, meetings happen, but the system learns very little.",
      example: "Rewrite 'improve onboarding' into concrete slices like validation errors, step persistence, analytics gaps, and confirmation emails."
    },
    {
      build: "Estimation discipline is about expressing uncertainty honestly. Good estimates communicate confidence range and risk, not fake precision.",
      why: "This helps stakeholders make better decisions about sequencing and scope instead of relying on optimistic guesses dressed up as plans.",
      example: "Say 'two to four days depending on migration risk' when the dependency is real instead of committing to one exact number too early."
    }
  ],
  "Code Quality": [
    {
      build: "Readability and local simplicity mean a future reader can explain the code path without loading half the system into their head first.",
      why: "This matters because incident response, reviews, and maintenance all happen under time pressure, not ideal calm conditions.",
      example: "A direct conditional with named branches is often better than a compact abstraction that hides why a case is special."
    },
    {
      build: "Naming is design because names decide how quickly a reader can recover intent from code. A weak name forces readers to inspect implementation every time.",
      why: "Good names reduce cognitive overhead and make bugs easier to spot because mismatches become visible sooner.",
      example: "Rename `processData` to `reconcileInvoiceTotals` if that is what the function really does."
    },
    {
      build: "Controlling complexity means isolating it where it is unavoidable and removing it where it is accidental.",
      why: "Complexity compounds. A little hidden branching, a little shared state, and a little vague ownership quickly become a fragile system.",
      example: "Move special-case branching into one explicit policy object instead of scattering flags through unrelated helpers."
    },
    {
      build: "Abstraction boundaries should hide repeated complexity, not important behavior. The reader should still know what guarantees and costs exist.",
      why: "Bad abstractions make code shorter while making reasoning harder, which is usually the wrong trade.",
      example: "A helper that silently retries, swallows errors, and mutates shared state is not an abstraction; it is hidden behavior."
    },
    {
      build: "Module cohesion means code that changes for the same reason stays together. Mixed responsibilities usually point to a weak boundary.",
      why: "High cohesion lowers surprise because readers can trust that a unit has one main job.",
      example: "Do not place pricing rules, email formatting, and database cleanup in the same service object just because the same endpoint calls them."
    },
    {
      build: "Coupling management is about reducing how much one piece of code must know about another piece's internals.",
      why: "Lower coupling makes testing easier and lets teams change local behavior without global fear.",
      example: "Depend on a clear interface that returns domain-level results instead of reaching through multiple layers of object internals."
    },
    {
      build: "State discipline means being deliberate about where mutable data lives, who owns it, and when it can change.",
      why: "Loose state is one of the main sources of heisenbugs, race conditions, and hard-to-reproduce behavior.",
      example: "Prefer deriving UI state from a single source of truth instead of letting several components each maintain slightly different copies."
    },
    {
      build: "Refactoring strategy works best when the behavior boundary is clear and the structural change is narrow.",
      why: "This keeps the team learning from each change instead of hiding structural and behavioral changes inside one large rewrite.",
      example: "First extract a dependency boundary, then rename concepts, then move logic across files, rather than doing all three at once."
    },
    {
      build: "Code comments are most valuable when they preserve intent, invariants, or caveats that are not obvious from syntax alone.",
      why: "Good comments reduce archaeology work. Bad comments duplicate code and become stale.",
      example: "Explain that a timeout value matches an external provider contract instead of commenting that a variable stores a timeout."
    },
    {
      build: "Deletion as improvement means recognizing when removing code, options, or branches increases quality more than refining them.",
      why: "Every line has a maintenance cost. A smaller system is often safer than a more flexible but less understood one.",
      example: "Drop an unused configuration mode rather than carrying permanent branching for a workflow nobody uses."
    }
  ],
  Verification: [
    {
      build: "Correctness and tests are about proving behavior from the outside in, not just exercising lines of code.",
      why: "A test suite only creates confidence if it checks the things users and operators actually depend on.",
      example: "Verify that a failed payment is retried exactly once and logged, not just that the retry helper was invoked."
    },
    {
      build: "Boundary testing targets limits, empty cases, malformed input, and transition edges where assumptions often break.",
      why: "Bugs cluster at edges because those are the places least exercised by optimistic mental models.",
      example: "Test zero items, one item, maximum items, duplicate items, and expired items instead of only a normal list."
    },
    {
      build: "Regression prevention means every real bug teaches the system how not to fail the same way again.",
      why: "This builds durable knowledge into the codebase rather than leaving it only in people’s memories.",
      example: "After fixing a timezone parsing bug, add a test with the exact failing locale and boundary date."
    },
    {
      build: "Test pyramid judgment is about balancing fast feedback with realistic coverage. Not everything belongs in one layer.",
      why: "Too many slow tests kill iteration speed; too many shallow tests create false confidence.",
      example: "Use unit tests for branching rules, integration tests for persistence contracts, and a few end-to-end tests for critical flows."
    },
    {
      build: "Deterministic tests fail for one clear reason and produce the same result under the same inputs every time.",
      why: "Flaky tests teach engineers to ignore signals, which quietly destroys trust in the suite.",
      example: "Control time, randomness, and external calls instead of letting tests depend on wall clock timing or network state."
    },
    {
      build: "Fixtures and test data should expose the condition under test rather than bury it in giant helper setup.",
      why: "Readable tests are easier to debug and safer to change when the implementation evolves.",
      example: "Name a fixture `expiredSubscription` if expiration is the point of the test instead of loading a huge generic account blob."
    },
    {
      build: "Contract testing focuses on what one system promises another, especially where teams deploy independently.",
      why: "It catches interface drift before production becomes the first integration environment.",
      example: "Verify that the consumer still handles optional fields, error shapes, and versioned responses correctly."
    },
    {
      build: "Manual verification is still valuable when the risk is visual, experiential, or hard to simulate cheaply.",
      why: "Not every high-value check needs automation immediately, especially if the workflow is new or still changing quickly.",
      example: "Walk the onboarding flow on mobile after a CSS or state-management change even if unit tests are green."
    },
    {
      build: "Quality gates should block expensive failures, not force noise-level perfection on every edit.",
      why: "A gate that stops real regressions is useful. A gate that encourages meaningless busywork gets bypassed mentally if not technically.",
      example: "Require tests and lint on critical services, but do not block a docs fix because an unrelated flaky integration suite failed."
    },
    {
      build: "Test maintenance means pruning duplication, clarifying failing assertions, and updating the suite as the system evolves.",
      why: "Untended tests become another legacy system: expensive, fragile, and poorly understood.",
      example: "Delete three overlapping UI tests after adding a single clearer integration test that covers the same user outcome."
    }
  ],
  Execution: [
    {
      build: "Debugging by evidence means collecting signals that narrow uncertainty before reaching for a patch.",
      why: "It reduces the risk of solving the wrong problem and helps future engineers understand why the fix was correct.",
      example: "Capture inputs, state, and downstream responses from a failing request before changing retry logic."
    },
    {
      build: "Reproduction first means establishing a stable failing case or at least a credible simulation before trusting any fix.",
      why: "Without reproduction, it is hard to know whether the change solved the bug or simply changed the conditions around it.",
      example: "Create a fixture or CLI call that triggers the malformed record instead of re-running the full job blindly."
    },
    {
      build: "Instrumentation strategy is the temporary or permanent observability you add to answer the next unknown question.",
      why: "Good instrumentation shortens incident time because it converts guesses into evidence with each step.",
      example: "Add correlation IDs and branch-specific logs around the suspected path rather than spraying generic print statements everywhere."
    },
    {
      build: "Hypothesis ranking means ordering likely causes by evidence, probability, and blast radius of being wrong.",
      why: "This prevents debugging sessions from turning into random walks through the system.",
      example: "Test 'cache entry never invalidates' before 'database driver is fundamentally broken' if the symptoms fit and the check is cheap."
    },
    {
      build: "Minimal reproduction strips the failing behavior away from unrelated application noise.",
      why: "A smaller failure surface makes it easier to isolate the real assumption that broke.",
      example: "Reduce a data import bug to one bad row and one parsing function instead of re-running the entire partner feed."
    },
    {
      build: "Change isolation means modifying one meaningful thing at a time so you can learn from the outcome.",
      why: "When several variables move at once, you lose the ability to tell which intervention mattered.",
      example: "Do not change timeout values, retry counts, and cache keys in one incident patch unless you truly have no safer alternative."
    },
    {
      build: "Root cause analysis asks what condition made the visible failure possible in the first place.",
      why: "This matters because symptom fixes often reduce noise temporarily while leaving recurrence intact.",
      example: "If a worker crashes on null input, the root cause may be missing upstream validation, not just the uncaught exception itself."
    },
    {
      build: "Incident discipline is the operating rhythm for production trouble: stabilize, narrow impact, communicate clearly, then learn.",
      why: "A structured response reduces panic and prevents communication debt from becoming its own operational problem.",
      example: "Assign one person to mitigation, one to evidence gathering, and one to communication during a live incident."
    },
    {
      build: "Rollback judgment means recognizing when restoring the last good state is safer than forcing a patch under pressure.",
      why: "Rolling back preserves time and optionality when confidence is low and user impact is rising.",
      example: "If a deployment corrupted queue processing and the root cause is still unclear, revert first and investigate second."
    },
    {
      build: "Postmortem quality is about producing changes in systems and process, not just a written timeline.",
      why: "A good postmortem turns one painful event into durable operational improvement.",
      example: "End with concrete actions like adding a runbook, changing an alert threshold, or redesigning a risky migration step."
    }
  ],
  Engineering: [
    {
      build: "Performance with measurement starts by identifying whether the problem is latency, throughput, cost, memory pressure, or variability.",
      why: "Without a target metric, optimization often produces complexity without meaningful gain.",
      example: "Decide whether users feel slow response time or operators feel queue buildup before tuning code paths."
    },
    {
      build: "Profiling and bottleneck analysis find the real limiting step instead of the loudest or most visible function.",
      why: "The intuition about where time goes is frequently wrong in systems with I/O, allocation, or serialization overhead.",
      example: "Profile the request path and discover that JSON encoding dominates time rather than the domain calculation you were about to rewrite."
    },
    {
      build: "Algorithmic thinking asks how work grows as data size, concurrency, or fan-out grows.",
      why: "Big wins usually come from eliminating unnecessary work, not micro-optimizing the final loop.",
      example: "Replace repeated linear scans with pre-indexing when the request touches thousands of records."
    },
    {
      build: "Concurrency safety is about preserving correctness when work overlaps in time.",
      why: "Parallel execution can improve throughput while making ordering, locking, and state visibility much harder to reason about.",
      example: "A background job and a user action updating the same record need a conflict strategy, not just more workers."
    },
    {
      build: "Caching strategy means choosing what to store, how fresh it must be, who invalidates it, and what happens on misses or stale reads.",
      why: "Cache complexity is justified only when the read gain outweighs the correctness and debugging cost.",
      example: "Cache a derived product catalog for minutes, but keep payment eligibility live if stale answers would create financial risk."
    },
    {
      build: "Resource efficiency covers CPU, memory, network, disk, and external service quotas as first-class constraints.",
      why: "Systems often fail because they waste a limited resource long before the business logic itself is wrong.",
      example: "A chatty API may look correct in tests but collapse under mobile bandwidth limits and rate caps in production."
    },
    {
      build: "Scalability boundaries identify the part of the design that will fail first as load grows: locking, data shape, coordination, or human operations.",
      why: "This lets teams plan targeted redesign instead of assuming horizontal scale will save a fundamentally serialized path.",
      example: "A nightly batch with one global lock will not scale just because the workers run in more containers."
    },
    {
      build: "Latency budgets allocate response-time expectations across subsystems so the team knows where time can be spent safely.",
      why: "Without budgets, each layer behaves reasonably in isolation while the end-to-end experience still becomes slow.",
      example: "If the page budget is 300ms, the API, query, and render layers cannot each casually consume 250ms."
    },
    {
      build: "Resilience patterns like retries, timeouts, and backpressure need coordination or they amplify failure instead of reducing it.",
      why: "Poorly designed resilience can turn a partial outage into a cascading one.",
      example: "Three services each retrying aggressively can triple load on the one dependency that is already struggling."
    },
    {
      build: "Technical debt management means deciding which compromises are intentional, visible, and worth paying down.",
      why: "Debt becomes dangerous when it is invisible or denied, because then it cannot be scheduled against other priorities.",
      example: "Record that a temporary denormalized write path exists because migration speed mattered more than elegance, and set the condition for revisiting it."
    }
  ],
  Design: [
    {
      build: "Interfaces and API design shape how safely and clearly the rest of the system can use a capability.",
      why: "A confusing boundary forces every caller to rediscover rules that should have been made explicit once.",
      example: "An endpoint that mixes creation, update, and side effects behind flags is harder to reason about than two clearer operations."
    },
    {
      build: "Contract clarity means consumers can understand required inputs, outputs, failure modes, and invariants without reading implementation internals.",
      why: "Clear contracts reduce integration errors and make refactoring safer because the real promises are visible.",
      example: "Document whether missing data is returned as null, an empty collection, or a typed error before clients guess differently."
    },
    {
      build: "Versioning strategy decides how the system evolves without surprising existing consumers.",
      why: "Change is inevitable; accidental breaking change is optional.",
      example: "Add new fields in a backward-compatible way first, then deprecate old ones with a migration window rather than flipping both at once."
    },
    {
      build: "Error design treats failures as part of the interface, not just exceptional noise.",
      why: "Good errors shorten diagnosis and help callers decide whether to retry, correct input, or surface a user message.",
      example: "Return a validation error with field-level detail instead of a generic 400 that forces client-side guesswork."
    },
    {
      build: "Schema evolution is about changing stored or transmitted data while multiple versions of the system coexist.",
      why: "Data shapes outlive single deployments, so transitions need forward and backward tolerance.",
      example: "Write new fields in an additive way, backfill old records, and keep readers tolerant until the migration is complete."
    },
    {
      build: "Idempotency ensures repeated requests do not accidentally duplicate important effects.",
      why: "Retries, user refreshes, and network uncertainty are normal, so repeating a safe action should stay safe.",
      example: "A payment confirmation endpoint should recognize a repeated request key and return the original result rather than charge twice."
    },
    {
      build: "State machines make workflows explicit by defining allowed states and valid transitions.",
      why: "They reduce hidden edge cases because the workflow is modeled directly instead of being scattered across conditionals.",
      example: "An order cannot jump from draft to shipped if approval and payment states are explicit and enforced."
    },
    {
      build: "Configuration design should make valid setups obvious and dangerous combinations hard to express.",
      why: "Operational mistakes often enter through configuration because it is treated as less important than code.",
      example: "Prefer enum-style modes and validated ranges over a loose set of booleans that interact in undocumented ways."
    },
    {
      build: "CLI and tool UX matter because internal tools are part of the engineering system and shape daily error rate.",
      why: "A hard-to-use tool increases accidental misuse, slows onboarding, and creates hidden support cost.",
      example: "Provide dry-run output, clear failure messages, and consistent subcommand naming for deployment or migration tools."
    },
    {
      build: "Documentation as interface means examples, caveats, and defaults are part of the product surface.",
      why: "Most consumers learn by trying examples before they deeply understand the abstraction.",
      example: "Show one good request, one invalid request, and one migration note next to the API rather than hiding all nuance in prose."
    }
  ],
  Reliability: [
    {
      build: "Operations and observability begin with the assumption that production behavior must be explainable after the fact, not only while coding.",
      why: "If the system cannot answer basic runtime questions, every incident becomes manual archaeology.",
      example: "A request path should let you trace who triggered it, what dependencies were called, and where latency accumulated."
    },
    {
      build: "Logging for decisions means logs are written to answer likely operational questions, not merely to mirror control flow.",
      why: "Useful logs reduce diagnosis time because they preserve the branching context and identifiers needed to follow a failure.",
      example: "Log account ID, request ID, and decision reason when rejecting a workflow step, not just 'validation failed'."
    },
    {
      build: "Metrics and SLOs connect system behavior to thresholds and ownership. A metric alone is only a number.",
      why: "Attaching service expectations to metrics helps teams know when to act and what 'good enough' means.",
      example: "Track checkout success rate against an agreed SLO rather than watching raw request counts with no decision rule."
    },
    {
      build: "Tracing and causality let you understand one user action as it crosses multiple services or asynchronous steps.",
      why: "This is useful because distributed systems fail through interactions, not just isolated functions.",
      example: "A single trace can show whether slowness came from auth, a downstream pricing call, or a retry storm in the worker layer."
    },
    {
      build: "Rollout safety means exposure happens gradually enough that bad behavior can be detected before it becomes a full incident.",
      why: "Safer rollouts reduce blast radius and preserve time to respond while confidence is still low.",
      example: "Release to internal users, then 5 percent of traffic, verify health signals, then expand instead of flipping globally."
    },
    {
      build: "Recovery planning is the explicit design of how the system returns to a good state after partial failure.",
      why: "A system that can fail safely and recover predictably is more valuable than one that only looks good on the happy path.",
      example: "Know how to replay missed jobs, revert a migration, or pause consumers before the first bad deploy happens."
    },
    {
      build: "Alert design is about making operational interruption precise and actionable.",
      why: "Noisy or vague alerts train teams to distrust the channel that should protect production quality.",
      example: "Alert on sustained checkout error rate above threshold with service ownership and dashboard links, not every isolated 500."
    },
    {
      build: "Operational runbooks package diagnosis and mitigation steps for recurring classes of problems.",
      why: "They shorten recovery time and reduce dependency on the one engineer who happens to remember the incident history.",
      example: "Include what to check first, how to verify impact, rollback steps, and what signals indicate the system is healthy again."
    },
    {
      build: "Security basics are foundational reliability concerns because insecure systems become unavailable, corrupted, or untrustworthy systems.",
      why: "Least privilege, validation, and dependency hygiene reduce both exploit risk and operational chaos.",
      example: "Validate external payloads, limit service credentials, and review dependency updates instead of assuming internal traffic is always safe."
    },
    {
      build: "Compliance and auditability require change history and access decisions to remain reconstructable later.",
      why: "This matters not only for regulators but for internal trust when sensitive workflows or data changes are questioned.",
      example: "Record who approved a privileged action, what data changed, and what version of the system performed it."
    }
  ],
  Teamwork: [
    {
      build: "Collaboration and review treat software quality as a shared activity rather than a solo coding outcome.",
      why: "Most costly failures survive because no one outside the author could quickly understand or challenge the change in time.",
      example: "A reviewer should be able to restate what changed, why it is safe, and what would break if the assumptions are wrong."
    },
    {
      build: "Small diffs are easier to reason about because intent and risk stay visible.",
      why: "Review quality drops sharply when unrelated concerns, broad refactors, and behavior changes are mixed together.",
      example: "Split renaming, structural cleanup, and feature logic into separate reviews if doing so makes correctness easier to inspect."
    },
    {
      build: "Review priorities should start with correctness, regressions, and maintainability before style preferences.",
      why: "The point of review is to improve system safety and team understanding, not only to enforce aesthetic consistency.",
      example: "Ask whether the change handles retry behavior correctly before debating variable naming or blank-line style."
    },
    {
      build: "Commit hygiene means each commit preserves a coherent idea that future engineers can inspect or revert meaningfully.",
      why: "Good history reduces debugging and rollback pain because the past remains legible.",
      example: "Do not bury a migration fix inside the same commit as formatting cleanup and documentation changes."
    },
    {
      build: "Knowledge sharing is the process of moving important context out of one person’s head and into reusable team artifacts.",
      why: "Teams scale by reducing private knowledge dependency, especially in critical systems.",
      example: "Write down the weird cache invariant or rollout caveat once instead of re-explaining it in every future review thread."
    },
    {
      build: "Handoffs should preserve not just status but reasoning: what was tried, what remains risky, and what assumptions are still open.",
      why: "This lowers restart cost when work moves across time zones, priorities, or ownership changes.",
      example: "A useful handoff says which logs were checked, what repro exists, and what rollback state is safe, not only 'still debugging'."
    },
    {
      build: "Mentoring through code means using implementation and review as vehicles for teaching judgment, not just fixing the current patch.",
      why: "This compounds team quality because better reasoning scales beyond the immediate task.",
      example: "Explain why a change increases coupling or hides state instead of only asking for a different function name."
    },
    {
      build: "Decision records capture the why behind non-obvious choices so future refactors do not casually undo important constraints.",
      why: "Without some lightweight record, teams repeat old debates or remove safeguards they no longer recognize.",
      example: "Note why an eventually consistent path was chosen so a later engineer does not mistake it for accidental looseness."
    },
    {
      build: "Cross-functional alignment keeps engineering from solving the wrong problem beautifully.",
      why: "Product, design, operations, and compliance assumptions shape what good engineering looks like in practice.",
      example: "Before redesigning approval flow states, confirm whether support, audit, and UX requirements agree on what 'rejected' means."
    },
    {
      build: "Sustainable pace is an engineering quality concern because exhausted teams create fragile systems and poor decision loops.",
      why: "Pace that depends on constant urgency usually borrows reliability and maintainability from the future.",
      example: "A team shipping every week with focused scope and clear rollback beats a team shipping heroically after recurring crunch."
    }
  ],
  "AI Workflow": [
    {
      build: "Using Codex well means treating it as a fast collaborator that still needs scoped prompts, codebase context, and verification.",
      why: "When the request is well-framed, assistants can accelerate implementation and review without replacing judgment.",
      example: "Ask for architecture summary, likely blast radius, and safest small change before requesting a direct code edit."
    },
    {
      build: "Prompt precision reduces wasted iteration by making the problem, constraints, and expected output shape explicit.",
      why: "Vague prompts invite generic output, which then has to be corrected in expensive back-and-forth.",
      example: "Specify files, behavioral goals, test expectations, and what not to change instead of asking to 'improve this feature'."
    },
    {
      build: "Context loading for AI means giving the assistant the right local code, docs, and operational constraints before asking it to act.",
      why: "The quality of the output is bounded by the quality of the context you allow it to reason over.",
      example: "Have the model inspect the relevant service, schema, and existing tests before proposing a migration plan."
    },
    {
      build: "Scoped generation keeps changes reviewable and lowers the chance that one prompt rewrites more of the system than intended.",
      why: "Smaller generated diffs are easier to validate and safer to reject or refine if assumptions are wrong.",
      example: "Generate one endpoint update and its tests first, not the whole feature plus unrelated refactors in a single step."
    },
    {
      build: "AI-assisted refactoring works best when behavior is already protected by tests or clear acceptance criteria.",
      why: "Otherwise the assistant may improve structure while quietly altering behavior nobody explicitly locked down.",
      example: "Before asking for a large extract-and-rename refactor, add tests that describe the current invariants and failure cases."
    },
    {
      build: "AI for reviews is often higher leverage than AI for authorship because models are good at surfacing inconsistencies and missing checks.",
      why: "Review prompts tend to narrow the task and reduce the risk of sprawling unsupported invention.",
      example: "Ask the assistant to list likely regressions, missing tests, and assumptions in a diff before requesting any rewrite."
    },
    {
      build: "AI for documentation can convert implementation knowledge into explanations, examples, and handoff notes quickly.",
      why: "This is useful when the code is correct but the surrounding context is still too expensive for humans to restate from scratch.",
      example: "Generate a rollout checklist or module overview from the accepted design and then edit it for accuracy."
    },
    {
      build: "Hallucination management means assuming confidence and correctness are separate until proven otherwise.",
      why: "Fluent incorrect output is still incorrect, and models are especially risky around unstated assumptions or stale context.",
      example: "Verify every claim about APIs, configs, migrations, or tests against the repository and actual execution before trusting it."
    },
    {
      build: "Verification loops are the structured cycle of inspect, propose, implement, and verify before widening scope again.",
      why: "This keeps AI use grounded in evidence and prevents momentum from outrunning correctness.",
      example: "After a generated patch, run the relevant tests, inspect the changed files, and only then ask for the next increment."
    },
    {
      build: "Human judgment remains primary for architecture, risk tolerance, and final acceptance even when the assistant produced most of the draft.",
      why: "Responsibility for safety and fitness still belongs to the engineer, not the tool.",
      example: "Use Codex to surface options, but choose the design based on business context, operational reality, and maintainability tradeoffs."
    }
  ]
};

const glossaryEntries = [
  {
    id: "acceptance-criteria",
    term: "Acceptance Criteria",
    aliases: ["definition of done", "success conditions"],
    summary: "Explicit statements that define the observable behavior needed for a change to count as complete.",
    detail: "Good acceptance criteria remove ambiguity between product intent, engineering interpretation, and test coverage. They are concrete enough to verify and narrow enough to avoid accidental scope growth."
  },
  {
    id: "abstraction",
    term: "Abstraction",
    aliases: ["wrapper", "interface layer"],
    summary: "A simplified boundary that hides lower-level detail so callers can work at a clearer level.",
    detail: "Abstractions help when they remove repeated complexity or isolate volatility. They hurt when they obscure important behavior, ownership, or performance costs."
  },
  {
    id: "api",
    term: "API",
    aliases: ["APIs", "interface", "contract surface"],
    summary: "A defined way for one piece of software to interact with another through functions, endpoints, commands, or schemas.",
    detail: "A good API is predictable, constrained, and documented with behavior rather than implementation detail. It should make the safe path obvious and misuse difficult."
  },
  {
    id: "backlog-motion",
    term: "Backlog Motion",
    aliases: ["ticket churn", "task movement"],
    summary: "Work appearing active because tickets are being updated or moved, even though meaningful progress is limited.",
    detail: "Backlog motion is a planning smell. It often means tasks are vague, blocked, or being re-described instead of being reduced to validated engineering outcomes."
  },
  {
    id: "blast-radius",
    term: "Blast Radius",
    aliases: ["impact radius", "change impact"],
    summary: "The scope of systems, users, or workflows that could be affected when a change fails.",
    detail: "Blast radius is how engineers reason about risk. Smaller rollout steps, feature flags, and modular changes all help contain it."
  },
  {
    id: "caching",
    term: "Caching",
    aliases: ["cache", "memoized storage"],
    summary: "Storing previously computed or fetched data so future access is faster.",
    detail: "Caching trades correctness complexity for speed. The hard part is invalidation, freshness guarantees, and what happens when cached data disagrees with source truth."
  },
  {
    id: "concurrency",
    term: "Concurrency",
    aliases: ["parallel work", "parallelism"],
    summary: "Multiple operations making progress during overlapping periods of time.",
    detail: "Concurrency can improve throughput and responsiveness, but it also introduces coordination, ordering, and shared-state hazards that are easy to underestimate."
  },
  {
    id: "contract",
    term: "Contract",
    aliases: ["service contract", "behavioral agreement"],
    summary: "The promises a module or service makes about inputs, outputs, and behavior.",
    detail: "Contracts are stronger when they stay stable, document failure behavior, and can be verified directly through tests or examples."
  },
  {
    id: "dependency-mapping",
    term: "Dependency Mapping",
    aliases: ["dependency graph", "upstream dependencies", "downstream dependencies"],
    summary: "Identifying what a system relies on and what relies on it before making a change.",
    detail: "Dependency mapping reduces surprises. It helps engineers understand blast radius, rollout sequencing, ownership boundaries, and likely integration risks before implementation starts."
  },
  {
    id: "coupling",
    term: "Coupling",
    aliases: ["dependency linkage", "tight coupling"],
    summary: "The degree to which one part of a system depends on the details of another.",
    detail: "High coupling makes change harder because local edits require wider coordination. Reducing hidden coupling usually improves maintainability and testability."
  },
  {
    id: "debugging",
    term: "Debugging",
    aliases: ["fault isolation", "bug investigation"],
    summary: "The process of finding the actual cause of incorrect behavior.",
    detail: "Effective debugging is about shrinking uncertainty. Reproduction, instrumentation, and hypothesis ranking usually matter more than fast guessing."
  },
  {
    id: "edge-case",
    term: "Edge Case",
    aliases: ["boundary case", "corner case"],
    summary: "An uncommon but valid condition where behavior often differs from the normal path.",
    detail: "Edge cases reveal assumptions. Empty input, retries, malformed data, concurrency races, and limits are common places where hidden bugs appear."
  },
  {
    id: "idempotency",
    term: "Idempotency",
    aliases: ["repeat-safe operation", "replay safe"],
    summary: "A property where repeating the same operation produces the same effect as doing it once.",
    detail: "Idempotency matters in distributed systems, retries, and user-submitted actions. It reduces the damage from duplicate delivery or accidental re-execution."
  },
  {
    id: "latency",
    term: "Latency",
    aliases: ["response time", "delay"],
    summary: "The time it takes for a request or operation to complete.",
    detail: "Latency is what users feel directly. Breaking down latency budgets across components helps teams find where performance work will matter."
  },
  {
    id: "observability",
    term: "Observability",
    aliases: ["telemetry visibility", "runtime visibility"],
    summary: "The ability to understand system behavior from outputs like logs, metrics, and traces.",
    detail: "Observability is stronger than raw monitoring because it supports explanation, not just detection. The goal is to answer unknown questions during incidents."
  },
  {
    id: "refactoring",
    term: "Refactoring",
    aliases: ["structural cleanup", "code reshaping"],
    summary: "Improving internal code structure while preserving external behavior.",
    detail: "Safe refactoring depends on stable behavior boundaries and verification. The best refactors reduce complexity one dimension at a time."
  },
  {
    id: "regression",
    term: "Regression",
    aliases: ["behavioral breakage", "reintroduced bug"],
    summary: "A previously correct behavior becoming broken after a change.",
    detail: "Regression prevention is one of the highest-value uses of tests. Each real production bug should pressure the suite toward better coverage."
  },
  {
    id: "rollout",
    term: "Rollout",
    aliases: ["deployment rollout", "phased release"],
    summary: "The controlled process of exposing a change to real environments or users.",
    detail: "A good rollout is staged, observable, and reversible. It is where feature flags, canaries, migration sequencing, and rollback planning meet operational risk management."
  },
  {
    id: "rollback",
    term: "Rollback",
    aliases: ["revert deployment", "backout"],
    summary: "Returning a system to an earlier known-good state after a risky change causes problems.",
    detail: "Rollback is a reliability tool, not a failure of discipline. The easier it is to reverse a change safely, the more aggressively you can reduce production risk."
  },
  {
    id: "runbook",
    term: "Runbook",
    aliases: ["operational playbook", "response guide"],
    summary: "A practical document that explains how to diagnose, mitigate, or operate a known workflow or incident.",
    detail: "Runbooks are most useful when they are specific, tested against real incidents, and written for the person under time pressure rather than the original author."
  },
  {
    id: "scope",
    term: "Scope",
    aliases: ["work boundary", "change surface"],
    summary: "The explicit limits of what a task or change includes and excludes.",
    detail: "Clear scope controls delivery risk. It prevents a useful change from ballooning into a multi-problem rewrite."
  },
  {
    id: "state-transition",
    term: "State Transition",
    aliases: ["state transitions", "workflow transition", "state change"],
    summary: "A change from one defined condition or workflow state to another.",
    detail: "State transitions matter because bugs often appear between stable states rather than inside them. Explicit transitions make workflows easier to validate, migrate, and reason about."
  },
  {
    id: "technical-debt",
    term: "Technical Debt",
    aliases: ["debt", "maintenance drag"],
    summary: "The future cost created by a shortcut, workaround, or deferred structural improvement.",
    detail: "Not all debt is bad. The key question is whether it was taken intentionally, is visible, and has a realistic repayment strategy."
  },
  {
    id: "telemetry",
    term: "Telemetry",
    aliases: ["logs", "metrics", "traces"],
    summary: "Runtime signals emitted by a system so humans and tools can inspect its behavior.",
    detail: "Telemetry becomes useful when it maps to decisions. Collecting more data is not the same as collecting the right evidence."
  },
  {
    id: "throughput",
    term: "Throughput",
    aliases: ["work rate", "capacity"],
    summary: "How much work a system can complete in a period of time.",
    detail: "Throughput matters for batch systems, queues, and heavily used APIs. A system can have high throughput and still have poor latency, so both need separate attention."
  }
];

const glossaryLookup = new Map();
const glossaryPatterns = [];

glossaryEntries.forEach((entry) => {
  [entry.term, ...entry.aliases].forEach((phrase) => {
    glossaryLookup.set(phrase.toLowerCase(), entry);
    glossaryPatterns.push(phrase);
  });
});

const glossaryRegex = new RegExp(`\\b(${glossaryPatterns.sort((a, b) => b.length - a.length).map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "gi");

const searchInput = document.querySelector("#search-input");
const topicList = document.querySelector("#topic-list");
const moduleGrid = document.querySelector("#module-grid");
const glossaryGrid = document.querySelector("#glossary-grid");
const matchCount = document.querySelector("#match-count");
const resultsTitle = document.querySelector("#results-title");
const resultsSummary = document.querySelector("#results-summary");
const template = document.querySelector("#section-template");
const moduleTemplate = document.querySelector("#module-template");
const glossaryTemplate = document.querySelector("#glossary-template");
const contentPanel = document.querySelector(".content");
const backToTopButton = document.querySelector("#back-to-top");

let activeSectionId = "";
let highlightedGlossaryId = "";
let highlightedModuleId = "";

function usesPageScroll() {
  return window.matchMedia("(max-width: 1080px)").matches;
}

function currentScrollTop() {
  return usesPageScroll() ? window.scrollY : contentPanel.scrollTop;
}

function scrollToTop() {
  if (usesPageScroll()) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  contentPanel.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToElement(target) {
  if (!target) return;

  if (usesPageScroll()) {
    const top = window.scrollY + target.getBoundingClientRect().top - 16;
    window.scrollTo({ top, behavior: "smooth" });
    return;
  }

  const panelRect = contentPanel.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const top = contentPanel.scrollTop + (targetRect.top - panelRect.top) - 16;
  contentPanel.scrollTo({ top, behavior: "smooth" });
}

function normalize(value) {
  return value.toLowerCase();
}

function matchesSection(section, query) {
  if (!query) return true;

  const haystack = [
    section.tag,
    section.title,
    section.summary,
    ...section.principles,
    ...section.codex,
    ...section.risks
  ].join(" ");

  return normalize(haystack).includes(query);
}

function matchesGlossary(entry, query) {
  if (!query) return true;

  return normalize([entry.term, ...entry.aliases, entry.summary, entry.detail].join(" ")).includes(query);
}

function linkifyText(text) {
  return text.replace(glossaryRegex, (match) => {
    const entry = glossaryLookup.get(match.toLowerCase());
    if (!entry) return match;

    return `<a class="term-link" href="#glossary-${entry.id}" data-glossary-id="${entry.id}">${match}</a>`;
  });
}

function updateActiveNav() {
  const links = topicList.querySelectorAll("a");
  links.forEach((link) => {
    const isActive = link.dataset.sectionId === activeSectionId;
    link.classList.toggle("active", isActive);

    if (isActive) {
      const details = link.closest("details");
      if (details) {
        details.open = true;
      }
    }
  });
}

function groupSectionsByTag(items) {
  const groups = new Map();

  items.forEach((section) => {
    if (!groups.has(section.tag)) {
      groups.set(section.tag, []);
    }

    groups.get(section.tag).push(section);
  });

  return [...groups.entries()];
}

function getTopicDeepening(section) {
  return topicDeepening[section.tag]?.[section.topicIndex] ?? {
    build: section.summary,
    why: "This topic matters because it changes how safely and clearly future engineering work can be carried out.",
    example: `Apply ${section.title.toLowerCase()} to one real workflow and document what becomes easier to explain, test, or operate afterward.`
  };
}

function renderNav(items) {
  topicList.innerHTML = "";

  groupSectionsByTag(items).forEach(([tag, groupedSections], groupIndex) => {
    const li = document.createElement("li");
    li.className = "module-group";

    const details = document.createElement("details");
    details.open = window.innerWidth > 720 || groupIndex === 0;

    const summary = document.createElement("summary");
    summary.className = "module-nav-summary";
    summary.innerHTML = `<span>${tag}</span><span class="module-meta">${groupedSections.length} sections</span>`;

    const subList = document.createElement("ul");
    subList.className = "module-links";

    groupedSections.forEach((section) => {
      const subItem = document.createElement("li");
      const link = document.createElement("a");
      link.href = `#${section.id}`;
      link.dataset.sectionId = section.id;
      link.textContent = section.title;
      subItem.append(link);
      subList.append(subItem);
    });

    details.append(summary, subList);
    li.append(details);
    topicList.append(li);
  });

  updateActiveNav();
}

function fillList(listElement, items) {
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = linkifyText(item);
    listElement.append(li);
  });
}

function renderGuide(items) {
  moduleGrid.innerHTML = "";

  if (!items.length) {
    resultsTitle.textContent = "No matching topics";
    resultsSummary.textContent = "No topics matched the current search.";

    const empty = document.createElement("article");
    empty.className = "empty-state";
    empty.innerHTML = `
      <h3>No topics match.</h3>
      <p>Try broader terms like <code>testing</code>, <code>review</code>, <code>debugging</code>, or <code>Codex</code>.</p>
    `;
    moduleGrid.append(empty);
    return;
  }

  const groupedModules = groupSectionsByTag(items);

  groupedModules.forEach(([tag, groupedSections]) => {
    const blueprint = sectionBlueprints.find((entry) => entry.tag === tag);
    if (!blueprint) return;

    const moduleBlock = document.createElement("section");
    moduleBlock.className = "module-block";

    const card = moduleTemplate.content.firstElementChild.cloneNode(true);
    card.id = `module-${blueprint.slug}`;
    card.classList.toggle("is-target", card.id === highlightedModuleId);
    card.querySelector(".section-tag").textContent = `${tag} module`;
    card.querySelector(".module-count").textContent = `${groupedSections.length} matching topics`;
    card.querySelector(".module-title").textContent = tag;
    card.querySelector(".module-intro").textContent = moduleOverviews[tag] ?? `Shared guidance for the ${tag} topics.`;
    fillList(card.querySelector(".principles-list"), blueprint.principles);
    fillList(card.querySelector(".codex-list"), blueprint.codex);
    fillList(card.querySelector(".risk-list"), blueprint.risks);
    const topicGrid = document.createElement("div");
    topicGrid.className = "module-topic-grid";

    groupedSections.forEach((section, index) => {
      const card = template.content.firstElementChild.cloneNode(true);
      const deepening = getTopicDeepening(section);

      card.id = section.id;
      card.querySelector(".section-tag").textContent = section.tag;
      card.querySelector(".section-anchor").textContent = `Build ${String(index + 1).padStart(2, "0")}`;
      card.querySelector(".section-title").innerHTML = linkifyText(section.title);
      card.querySelector(".section-summary").innerHTML = linkifyText(section.summary);
      card.querySelector(".topic-context").innerHTML = linkifyText(deepening.build);
      card.querySelector(".topic-value").innerHTML = linkifyText(deepening.why);
      card.querySelector(".topic-example").innerHTML = linkifyText(deepening.example);
      topicGrid.append(card);
    });

    moduleBlock.append(card, topicGrid);
    moduleGrid.append(moduleBlock);
  });

  resultsTitle.textContent = items.length === sections.length ? "All modules" : "Filtered modules";
  resultsSummary.textContent = items.length === sections.length
    ? "Browse 10 modules with build-on entries that expand the fundamentals into practical engineering judgment."
    : `Showing ${groupedModules.length} module${groupedModules.length === 1 ? "" : "s"} and ${items.length} build-on entr${items.length === 1 ? "y" : "ies"}.`;
}

function renderGlossary(items, query) {
  glossaryGrid.innerHTML = "";

  if (!items.length) {
    const empty = document.createElement("article");
    empty.className = "empty-state";
    empty.innerHTML = `
      <h3>No glossary terms match.</h3>
      <p>Try searching for terms like <code>observability</code>, <code>scope</code>, or <code>rollback</code>.</p>
    `;
    glossaryGrid.append(empty);
    return;
  }

  items.forEach((entry, index) => {
    const card = glossaryTemplate.content.firstElementChild.cloneNode(true);
    card.id = `glossary-${entry.id}`;
    card.classList.toggle("is-target", entry.id === highlightedGlossaryId);
    card.querySelector(".glossary-anchor").textContent = `Term ${String(index + 1).padStart(2, "0")}`;
    card.querySelector(".glossary-title").textContent = entry.term;
    card.querySelector(".glossary-summary-text").textContent = entry.summary;
    card.querySelector(".glossary-detail").textContent = entry.detail;

    const aliases = card.querySelector(".glossary-aliases");
    entry.aliases.forEach((alias) => {
      const chip = document.createElement("span");
      chip.className = "alias-chip";
      chip.textContent = alias;
      aliases.append(chip);
    });

    glossaryGrid.append(card);
  });
}

function syncActiveSection() {
  const cards = [...moduleGrid.querySelectorAll(".section-card")];
  if (!cards.length) return;

  const panelTop = contentPanel.getBoundingClientRect().top;
  const visibleCard =
    cards.find((card) => card.getBoundingClientRect().top - panelTop >= -8) ?? cards[cards.length - 1];

  activeSectionId = visibleCard.id;
  updateActiveNav();
}

function syncBackToTopVisibility() {
  backToTopButton.classList.toggle("is-visible", currentScrollTop() > 520);
}

function render(queryText = "") {
  const query = normalize(queryText.trim());
  const filtered = sections.filter((section) => matchesSection(section, query));
  const filteredGlossary = glossaryEntries.filter((entry) => matchesGlossary(entry, query));

  matchCount.textContent = `${filtered.length} match${filtered.length === 1 ? "" : "es"}`;
  activeSectionId = filtered[0]?.id ?? "";
  renderNav(filtered);
  renderGuide(filtered);
  renderGlossary(filteredGlossary, queryText.trim());
  updateActiveNav();
  if (usesPageScroll()) {
    window.scrollTo({ top: 0, behavior: "auto" });
  } else {
    contentPanel.scrollTo({ top: 0, behavior: "auto" });
  }
  syncBackToTopVisibility();
}

searchInput.addEventListener("input", (event) => {
  render(event.target.value);
});

topicList.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-section-id]");
  if (!link) return;

  event.preventDefault();
  const target = document.getElementById(link.dataset.sectionId);
  if (!target) return;

  activeSectionId = link.dataset.sectionId;
  updateActiveNav();
  scrollToElement(target);
});

contentPanel.addEventListener("click", (event) => {
  const glossaryLink = event.target.closest("a[data-glossary-id]");
  if (glossaryLink) {
    event.preventDefault();
    highlightedGlossaryId = glossaryLink.dataset.glossaryId;
    renderGlossary(glossaryEntries.filter((entry) => matchesGlossary(entry, normalize(searchInput.value.trim()))), searchInput.value.trim());

    const target = document.getElementById(`glossary-${highlightedGlossaryId}`);
    if (target) {
      scrollToElement(target);
    }

    return;
  }
});

contentPanel.addEventListener("scroll", () => {
  if (usesPageScroll()) return;
  syncActiveSection();
  syncBackToTopVisibility();
});

backToTopButton.addEventListener("click", () => {
  scrollToTop();
});

window.addEventListener("scroll", () => {
  if (!usesPageScroll()) return;
  syncBackToTopVisibility();
});

window.addEventListener("resize", () => {
  syncBackToTopVisibility();
});

render();
