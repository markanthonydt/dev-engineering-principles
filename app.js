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
      "Map the real system boundary before changing implementation details.",
      "Name the main constraint so design tradeoffs stay explicit.",
      "Prefer decisions that remain legible to future maintainers."
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
      "Separate user outcomes from implementation ideas.",
      "Define what success and failure look like before writing code.",
      "Use smaller slices when uncertainty is high."
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
      "Prefer straightforward control flow and obvious ownership.",
      "Keep abstractions proportional to the problem.",
      "Reduce hidden state and implicit behavior."
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
      "Test behavior that matters to users and system safety.",
      "Add coverage where change risk or failure cost is highest.",
      "Keep failures easy to diagnose."
    ],
    codex: [
      "Ask Codex to derive tests from acceptance criteria and bug reports.",
      "Use it to enumerate missing edge cases before implementation.",
      "Have it critique whether assertions check behavior or just mirror the code."
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
      "Reproduce first, instrument second, patch last.",
      "Make every debugging step shrink the search space.",
      "Prefer reversible actions during uncertainty."
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
      "Measure before optimizing and verify after.",
      "Keep readability unless the performance gain is meaningful.",
      "Treat concurrency as a correctness problem first."
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
      "Design observability for diagnosis, not just collection.",
      "Plan rollback and recovery before shipping risky changes.",
      "Make operational ownership explicit."
    ],
    codex: [
      "Ask Codex which signals are missing for a feature or incident class.",
      "Use it to draft rollout checklists and runbooks.",
      "Have it identify silent failures and weak alert conditions."
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
      "Keep changes focused so intent stays obvious.",
      "Review for risk and behavior before style.",
      "Write context for future readers, not only current collaborators."
    ],
    codex: [
      "Use Codex to pre-review diffs for bugs, regressions, and missing tests.",
      "Ask it to summarize likely reviewer questions.",
      "Generate clearer handoff notes, commit messages, and documentation drafts."
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
      "Give Codex concrete scope, local context, and verification expectations.",
      "Use iterative loops instead of one giant generation request.",
      "Treat fluent output as a draft until checked."
    ],
    codex: [
      "Start with inspection, then ask for options, then implementation, then verification.",
      "Request findings-first reviews and explicit uncertainty when confidence is low.",
      "Have the assistant explain why a change is safe, not just what it changed."
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

const searchInput = document.querySelector("#search-input");
const topicList = document.querySelector("#topic-list");
const contentGrid = document.querySelector("#content-grid");
const matchCount = document.querySelector("#match-count");
const resultsTitle = document.querySelector("#results-title");
const resultsSummary = document.querySelector("#results-summary");
const template = document.querySelector("#section-template");
const contentPanel = document.querySelector(".content");

let activeSectionId = "";

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
    li.textContent = item;
    listElement.append(li);
  });
}

function renderSections(items, query) {
  contentGrid.innerHTML = "";

  if (!items.length) {
    resultsTitle.textContent = "No matching sections";
    resultsSummary.textContent = `No sections matched "${query}".`;
    const empty = document.createElement("article");
    empty.className = "empty-state";
    empty.innerHTML = `
      <h3>No sections match.</h3>
      <p>Try broader terms like <code>testing</code>, <code>review</code>, <code>debugging</code>, or <code>Codex</code>.</p>
    `;
    contentGrid.append(empty);
    return;
  }

  items.forEach((section, index) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.id = section.id;
    card.querySelector(".section-tag").textContent = section.tag;
    card.querySelector(".section-anchor").textContent = `Section ${String(index + 1).padStart(3, "0")}`;
    card.querySelector(".section-title").textContent = section.title;
    card.querySelector(".section-summary").textContent = section.summary;
    fillList(card.querySelector(".principles-list"), section.principles);
    fillList(card.querySelector(".codex-list"), section.codex);
    fillList(card.querySelector(".risk-list"), section.risks);
    contentGrid.append(card);
  });

  resultsTitle.textContent = query ? "Filtered sections" : "All sections";
  resultsSummary.textContent = query
    ? `Showing ${items.length} section${items.length === 1 ? "" : "s"} matching "${query}".`
    : "Browse 100 sections on principles, engineering practices, and Codex workflows.";
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

function render(queryText = "") {
  const query = normalize(queryText.trim());
  const filtered = sections.filter((section) => matchesSection(section, query));

  matchCount.textContent = `${filtered.length} match${filtered.length === 1 ? "" : "es"}`;
  activeSectionId = filtered[0]?.id ?? "";
  renderNav(filtered);
  renderSections(filtered, queryText.trim());
  updateActiveNav();
  contentPanel.scrollTo({ top: 0, behavior: "auto" });
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

contentPanel.addEventListener("scroll", () => {
  syncActiveSection();
});

render();
