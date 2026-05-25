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
    tag: blueprint.tag,
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
const contentGrid = document.querySelector("#content-grid");
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

function renderNav(items) {
  topicList.innerHTML = "";

  groupSectionsByTag(items).forEach(([tag, groupedSections], groupIndex) => {
    const li = document.createElement("li");
    li.className = "module-group";

    const details = document.createElement("details");
    details.open = window.innerWidth > 720 || groupIndex === 0;

    const summary = document.createElement("summary");
    summary.className = "module-summary";
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

function renderModules(items) {
  moduleGrid.innerHTML = "";

  groupSectionsByTag(items).forEach(([tag, groupedSections], index) => {
    const blueprint = sectionBlueprints.find((entry) => entry.tag === tag);
    if (!blueprint) return;

    const card = moduleTemplate.content.firstElementChild.cloneNode(true);
    card.id = `module-${blueprint.slug}`;
    card.querySelector(".section-tag").textContent = `${tag} module`;
    card.querySelector(".module-count").textContent = `${groupedSections.length} matching topics`;
    card.querySelector(".module-title").textContent = tag;
    card.querySelector(".module-summary").textContent = moduleOverviews[tag] ?? `Shared guidance for the ${tag} topics.`;
    fillList(card.querySelector(".principles-list"), blueprint.principles);
    fillList(card.querySelector(".codex-list"), blueprint.codex);
    fillList(card.querySelector(".risk-list"), blueprint.risks);
    moduleGrid.append(card);
  });
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

function renderSections(items, query) {
  contentGrid.innerHTML = "";

  if (!items.length) {
    moduleGrid.innerHTML = "";
    resultsTitle.textContent = "No matching topics";
    resultsSummary.textContent = `No topics matched "${query}".`;
    const empty = document.createElement("article");
    empty.className = "empty-state";
    empty.innerHTML = `
      <h3>No topics match.</h3>
      <p>Try broader terms like <code>testing</code>, <code>review</code>, <code>debugging</code>, or <code>Codex</code>.</p>
    `;
    contentGrid.append(empty);
    return;
  }

  items.forEach((section, index) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.id = section.id;
    card.querySelector(".section-tag").textContent = section.tag;
    card.querySelector(".section-anchor").textContent = `Topic ${String(index + 1).padStart(3, "0")}`;
    card.querySelector(".section-title").innerHTML = linkifyText(section.title);
    card.querySelector(".section-summary").innerHTML = linkifyText(section.summary);
    card.querySelector(".topic-module-note").innerHTML = `Shared guidance for this topic lives in the <a class="term-link" href="#module-${section.id.replace(/-\d+$/, "")}">${section.tag}</a> module card above.`;
    contentGrid.append(card);
  });

  resultsTitle.textContent = query ? "Filtered topics" : "All topics";
  resultsSummary.textContent = query
    ? `Showing ${items.length} topic${items.length === 1 ? "" : "s"} matching "${query}".`
    : "Browse 10 modules and 100 topics on principles, engineering practices, and Codex workflows.";
}

function syncActiveSection() {
  const cards = [...contentGrid.querySelectorAll(".section-card")];
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
  renderModules(filtered);
  renderSections(filtered, queryText.trim());
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
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

contentPanel.addEventListener("click", (event) => {
  const glossaryLink = event.target.closest("a[data-glossary-id]");
  if (glossaryLink) {
    event.preventDefault();
    highlightedGlossaryId = glossaryLink.dataset.glossaryId;
    renderGlossary(glossaryEntries.filter((entry) => matchesGlossary(entry, normalize(searchInput.value.trim()))), searchInput.value.trim());

    const target = document.getElementById(`glossary-${highlightedGlossaryId}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return;
  }

  const internalLink = event.target.closest("a[href^='#module-']");
  if (!internalLink) return;

  event.preventDefault();
  const target = document.querySelector(internalLink.getAttribute("href"));
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
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
