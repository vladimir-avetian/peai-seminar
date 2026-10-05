/* Words from past ACSS Public Governance seminar abstracts.
 * https://acss-dig.psl.eu/fr/seminaires/public-governance
 * This animation runs entirely in the browser; no AI service or API is used.
 */
(() => {
  'use strict';

  const WORD_INTERVAL_MS = 200;
  const BURST_WORDS = 10;
  const REST_MS = 3000;
  const themes = {
    "institutions": [
      "Access",
      "Accountability",
      "Acquisition",
      "Agenda",
      "Agglomerations",
      "Allocation",
      "Amalgamation",
      "Army",
      "Assemblies",
      "Authority",
      "Autocracy",
      "Autonomy",
      "Ban",
      "Bargaining",
      "Benefits",
      "Business",
      "Campaign",
      "Candidates",
      "Capital",
      "Censorship",
      "Centralization",
      "Chambers",
      "Charters",
      "Citizenship",
      "Committees",
      "Communism",
      "Competition",
      "Concentration",
      "Consolidation",
      "Consumers",
      "Consumption",
      "Contracts",
      "Contributions",
      "Convict",
      "Corporations",
      "Corruption",
      "Costs",
      "Councils",
      "Court",
      "Crimes",
      "Demand",
      "Democracies",
      "Democracy",
      "Democratization",
      "Dictatorship",
      "Distribution",
      "Donations",
      "Economy",
      "Election",
      "Elections",
      "Elite",
      "Elites",
      "Empire",
      "Employees",
      "Enforcement",
      "Enfranchisement",
      "Entrepreneurs",
      "Externalities",
      "Extraction",
      "Factions",
      "Farmers",
      "Fraud",
      "Globalization",
      "Governance",
      "Governors",
      "Hierarchy",
      "Imperialism",
      "Incentives",
      "Income",
      "Incorporation",
      "Incumbency",
      "Independence",
      "Industry",
      "Inequality",
      "Instability",
      "Institutions",
      "Investment",
      "Investments",
      "Judiciary",
      "Justice",
      "Labor",
      "Labour",
      "Land",
      "Landlord",
      "Landlords",
      "Landowners",
      "Law",
      "Lawfare",
      "Laws",
      "Legislators",
      "Legitimacy",
      "Lobbying",
      "Lottery",
      "Market",
      "Municipalities",
      "Nation",
      "Obligations",
      "Officials",
      "Opposition",
      "Oversight",
      "Ownership",
      "Parliament",
      "Parties",
      "Penalty",
      "Petitions",
      "Police",
      "Policy",
      "Policymaking",
      "Politicians",
      "Politics",
      "Populism",
      "Poverty",
      "Power",
      "Prefectures",
      "President",
      "Prisons",
      "Privacy",
      "Privileges",
      "Procurement",
      "Provision",
      "Realignment",
      "Redistribution",
      "Reformers",
      "Reforms",
      "Regimes",
      "Representation",
      "Repression",
      "Restrictions",
      "Revenues",
      "Revocations",
      "Revolution",
      "Rights",
      "Serfs",
      "Service",
      "Shares",
      "Slavery",
      "Soldiers",
      "Spending",
      "Spillovers",
      "Stakeholders",
      "Statelessness",
      "Substitution",
      "Suffrage",
      "Supply",
      "Suppression",
      "Surplus",
      "Tax",
      "Taxes",
      "Trade",
      "Transition",
      "Unemployment",
      "Urbanisation",
      "Voters",
      "Wage",
      "Wages",
      "Welfare",
      "Workforce"
    ],
    "technology": [
      "Applications",
      "Audiences",
      "Books",
      "Classification",
      "Climate",
      "Combustion",
      "Comments",
      "Communication",
      "Complexity",
      "Contagion",
      "Convergence",
      "Corpora",
      "Crowdsourcing",
      "Curricula",
      "Dictionaries",
      "Diffusion",
      "Disasters",
      "Discourse",
      "Domains",
      "Drugs",
      "Education",
      "Emergence",
      "Emissions",
      "Energy",
      "Engineering",
      "Environment",
      "Evolution",
      "Expertise",
      "Exposure",
      "Footprints",
      "Framing",
      "Fuel",
      "Guns",
      "Hallucination",
      "Healthcare",
      "History",
      "Hospitals",
      "Ideas",
      "Infections",
      "Information",
      "Innovation",
      "Internet",
      "Inventor",
      "Journalism",
      "Journalists",
      "Knowledge",
      "Language",
      "Learning",
      "Loanwords",
      "Manufacturing",
      "Media",
      "Medicine",
      "Metaphors",
      "Misinformation",
      "Moderation",
      "Modernization",
      "Music",
      "Narratives",
      "Network",
      "Networks",
      "News",
      "Newspaper",
      "Newspapers",
      "Nuclear",
      "Patenting",
      "Patents",
      "Platforms",
      "Pollution",
      "Productivity",
      "Propaganda",
      "Publications",
      "Publishers",
      "Quality",
      "Readership",
      "Reliability",
      "Retrieval",
      "Retweets",
      "Schooling",
      "Schools",
      "Scientists",
      "Skills",
      "Slant",
      "Speech",
      "Speeches",
      "Textbooks",
      "Transmission",
      "Tweets",
      "Virality",
      "Visibility",
      "Websites"
    ],
    "behaviour": [
      "Abortion",
      "Abortions",
      "Affiliation",
      "Affiliations",
      "Agency",
      "Allegiance",
      "Approval",
      "Assimilation",
      "Associations",
      "Attention",
      "Attitudes",
      "Backlash",
      "Baptism",
      "Belief",
      "Beliefs",
      "Bias",
      "Birth",
      "Brutality",
      "Cognition",
      "Cohesion",
      "Collaboration",
      "Commitment",
      "Commitments",
      "Competence",
      "Compliance",
      "Conflict",
      "Connections",
      "Consensus",
      "Consent",
      "Coordination",
      "Crises",
      "Culture",
      "Deaths",
      "Debates",
      "Deliberation",
      "Disappearance",
      "Discrimination",
      "Disparities",
      "Displacement",
      "Dissent",
      "Effort",
      "Emotion",
      "Engagement",
      "Ethnicity",
      "Expression",
      "Fairness",
      "Fertility",
      "Gender",
      "Generation",
      "Harassment",
      "Hate",
      "Health",
      "Hero",
      "Homogenization",
      "Hostility",
      "Identity",
      "Ideology",
      "Immigrants",
      "Immigration",
      "Inclusion",
      "Inertia",
      "Integration",
      "Invasion",
      "Marches",
      "Marriage",
      "Membership",
      "Migration",
      "Minority",
      "Mobility",
      "Mobilization",
      "Mortality",
      "Nationalism",
      "Natives",
      "Neighborhoods",
      "Norms",
      "Opinion",
      "Opinions",
      "Outgroup",
      "Participation",
      "Passivity",
      "Peers",
      "Perception",
      "Persecution",
      "Persistence",
      "Persuasion",
      "Polarization",
      "Population",
      "Preferences",
      "Promises",
      "Protest",
      "Protests",
      "Purpose",
      "Refugee",
      "Refugees",
      "Religion",
      "Religiosity",
      "Remembrance",
      "Repatriates",
      "Reputation",
      "Resettlement",
      "Resilience",
      "Resistance",
      "Revival",
      "Risk",
      "Safety",
      "Salience",
      "Settlers",
      "Survival",
      "Teams",
      "Uncertainty",
      "Upheavals",
      "Uprootedness",
      "Values",
      "Veterans",
      "Victim",
      "Villain",
      "Violence",
      "Wars",
      "Women"
    ]
  };
  const themeNames = ['institutions', 'technology', 'behaviour'];

  function createWordMachine(random = Math.random) {
    const decks = { institutions: [], technology: [], behaviour: [] };
    const last = {};
    let themeIndex = Math.floor(random() * themeNames.length);
    let untilPair = 7 + Math.floor(random() * 5);
    let previousPair = '';

    function draw(theme) {
      if (!decks[theme].length) {
        const deck = [...themes[theme]];
        for (let i = deck.length - 1; i > 0; i -= 1) {
          const j = Math.floor(random() * (i + 1));
          [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        if (deck[deck.length - 1] === last[theme]) {
          [deck[0], deck[deck.length - 1]] = [deck[deck.length - 1], deck[0]];
        }
        decks[theme] = deck;
      }
      const word = decks[theme].pop();
      last[theme] = word;
      return word;
    }

    return {
      next() {
        const theme = themeNames[themeIndex];
        themeIndex = (themeIndex + 1) % themeNames.length;
        untilPair -= 1;
        if (untilPair === 0) {
          untilPair = 7 + Math.floor(random() * 5);
          const firstWords = themes[theme].filter(word => word.length <= 7);
          const first = firstWords[Math.floor(random() * firstWords.length)];
          const secondWords = themes[themeNames[themeIndex]].filter(word =>
            first.length + word.length + 3 <= 16 &&
            first + ' & ' + word !== previousPair
          );
          const second = secondWords[Math.floor(random() * secondWords.length)];
          const text = first + ' & ' + second;
          previousPair = text;
          return text;
        }
        return draw(theme);
      },
    };
  }

  const button = document.querySelector('.ai-title__answer');
  const wordElement = document.querySelector('.ai-title__word');
  const announcement = document.querySelector('.ai-title__label');
  if (!button || !wordElement || !announcement) return;

  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobilePreference = window.matchMedia('(max-width: 600px), (hover: none) and (pointer: coarse)');
  const machine = createWordMachine();
  let mode = null;
  let status = 'idle';
  let current = '?';
  let pointerHandled = false;
  let reducedMotion = false;
  let mobile = false;
  let hovered = false;
  let manuallyPaused = false;
  let inView = true;
  let timer;
  let generation = 0;

  function clearTimer() {
    clearTimeout(timer);
    timer = undefined;
    // Guard against callbacks that were already queued before cancellation.
    generation += 1;
  }

  function show(text, nextState) {
    current = text;
    status = nextState;
    wordElement.textContent = text;
    button.dataset.state = nextState;
    button.dataset.question = String(text === '?');
    button.setAttribute('aria-label', reducedMotion
      ? 'Show another word from past seminar abstracts'
      : nextState === 'caught'
        ? 'Resume automatic archive words'
        : 'Pause automatic archive words');
  }

  function stop() {
    clearTimer();
    mode = null;
    show('?', 'idle');
    announcement.textContent = '';
  }

  function startAuto() {
    if (reducedMotion || manuallyPaused || document.hidden || !inView) return;
    if (mode === 'auto' && timer !== undefined) return;
    clearTimer();
    const cycle = generation;
    mode = 'auto';
    announcement.textContent = '';

    function rest() {
      if (cycle !== generation) return;
      show('?', 'resting');
      timer = setTimeout(() => burst(0), REST_MS);
    }

    function burst(count) {
      if (cycle !== generation) return;
      if (count >= BURST_WORDS && !hovered) return rest();
      show(machine.next(), 'running');
      timer = setTimeout(() => burst(count + 1), WORD_INTERVAL_MS);
    }

    burst(0);
  }

  function syncAuto() {
    if (reducedMotion) return;
    if (document.hidden || !inView) {
      hovered = false;
      if (manuallyPaused) clearTimer();
      else stop();
    } else if (!manuallyPaused) startAuto();
  }

  function activate() {
    if (reducedMotion) {
      clearTimer();
      mode = 'activated';
      show(machine.next(), 'caught');
      announcement.textContent = current + '. Activate again for another word.';
      return;
    }
    manuallyPaused = !manuallyPaused;
    if (manuallyPaused) {
      clearTimer();
      mode = 'auto';
      show(current, 'caught');
      announcement.textContent = current + '. Paused. Activate again to resume.';
    } else startAuto();
  }

  function updatePreferences() {
    mobile = mobilePreference.matches;
    reducedMotion = preference.matches;
    if (mobile) hovered = false;
    if (reducedMotion) {
      manuallyPaused = false;
      stop();
    } else syncAuto();
  }

  button.addEventListener('pointerenter', event => {
    if (mobile || event.pointerType === 'touch' || reducedMotion) return;
    hovered = true;
    if (manuallyPaused) return;
    if (status === 'resting') clearTimer();
    startAuto();
  });
  button.addEventListener('pointerleave', event => {
    if (event.pointerType !== 'touch') hovered = false;
  });
  button.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    pointerHandled = true;
    activate();
  });
  button.addEventListener('pointercancel', () => {
    pointerHandled = false;
    if (mode === 'auto') {
      manuallyPaused = false;
      startAuto();
    } else stop();
  });
  button.addEventListener('click', () => {
    if (!pointerHandled) activate();
    pointerHandled = false;
  });
  button.addEventListener('blur', () => {
    if (mode !== 'auto') stop();
  });
  button.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    stop();
    if (!reducedMotion) {
      manuallyPaused = true;
      mode = 'auto';
      show('?', 'caught');
      announcement.textContent = 'Paused. Activate again to resume.';
    }
  });
  document.addEventListener('visibilitychange', syncAuto);
  document.addEventListener('pointerdown', event => {
    if (mode === 'activated' && !button.contains(event.target)) stop();
  });
  window.addEventListener('blur', () => {
    // Mobile browser chrome may blur a visible page without refocusing it.
    if (!mobile) {
      hovered = false;
      if (!manuallyPaused) stop();
    }
  });
  window.addEventListener('focus', syncAuto);
  preference.addEventListener('change', updatePreferences);
  mobilePreference.addEventListener('change', updatePreferences);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      syncAuto();
    });
    observer.observe(button);
  }

  window.addEventListener('pagehide', () => {
    hovered = false;
    if (manuallyPaused) clearTimer();
    else stop();
  });
  window.addEventListener('pageshow', syncAuto);

  button.disabled = false;
  updatePreferences();
})();
