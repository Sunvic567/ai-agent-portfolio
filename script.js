const projects = [
  {
    "name": "Remem",
    "repo": "remem",
    "category": "AGENT MEMORY",
    "groups": [
      "memory"
    ],
    "tags": [
      "Python",
      "FastAPI",
      "Supabase",
      "pgvector"
    ],
    "description": "A memory API for AI agents, with semantic retrieval and transparent ranking across sessions.",
    "problem": "Agents lose useful user context between sessions, forcing people to repeat themselves.",
    "approach": "FastAPI exposes memory operations backed by Supabase and pgvector. Retrieval ranks candidates using semantic relevance, recency, and importance. The service includes duplicate detection, updates, expiry handling, and tenant, user, and agent scoping.",
    "output": "A REST API and Python SDK with synchronous and asynchronous clients for storing, searching, and loading agent context.",
    "demo": "https://dev.remem.online/",
    "status": "Beta"
  },
  {
    "name": "IntegrationOS",
    "repo": "IntegrationOS",
    "category": "MULTI-AGENT WORKFLOW",
    "groups": [
      "agents"
    ],
    "tags": [
      "Python",
      "LangGraph",
      "Pydantic",
      "Firecrawl",
      "Streamlit"
    ],
    "description": "A multi-agent prototype that researches API documentation and generates an onboarding plan, Python SDK, and integration guide.",
    "problem": "Moving from API documentation to a usable integration involves research, planning, testing, and writing.",
    "approach": "LangGraph coordinates research, structured planning, dependency-aware task dispatch, and review. Specialized workers generate code and documentation, while the tester performs limited reachability and metadata checks.",
    "output": "Generated Python SDK code, a Markdown integration guide, and structured task results. SDK syntax checks and limited API checks do not establish a fully working integration. Broader end-to-end validation remains necessary.",
    "status": "Prototype"
  },
  {
    "name": "Sunvic RAG Assistant",
    "repo": "RAG-Assistance",
    "category": "KNOWLEDGE RETRIEVAL",
    "groups": [
      "memory",
      "apps"
    ],
    "tags": [
      "Python",
      "LangChain",
      "Pinecone",
      "Gemini",
      "Hugging Face",
      "Supabase"
    ],
    "description": "A command-line research assistant that uses document retrieval to support answers about AI topics.",
    "problem": "A useful subject-specific assistant needs relevant reference information and continuity across conversations.",
    "approach": "Documents are chunked and embedded with Hugging Face, then stored in Pinecone. Semantic search retrieves passages that LangChain supplies to Gemini. Supabase stores conversation messages.",
    "output": "An interactive command-line question-answering pipeline. Generated answers require evaluation; reliable multi-user session handling and source citations are not demonstrated by the inspected entry point.",
    "status": "Prototype"
  },
  {
    "name": "Owed",
    "repo": "owed--credit-memory-agent",
    "category": "AI APPLICATION",
    "groups": [
      "agents",
      "apps"
    ],
    "tags": [
      "React",
      "Supabase",
      "Deno",
      "LLM integration"
    ],
    "description": "A credit memory agent that uses customer payment history to assess risk and suggest practical follow-up actions.",
    "problem": "Small businesses need a consistent way to understand outstanding customer credit and changing payment behavior.",
    "approach": "A customer ledger feeds an LLM assessment with explanations and recommended next steps. A rule-based fallback supports operation when the AI call is unavailable.",
    "output": "Customer assessments, a risk-prioritized dashboard, CSV imports, and suggested follow-up messages."
  },
  {
    "name": "Research Agent",
    "repo": "Research-agent",
    "category": "MULTI-AGENT RESEARCH",
    "groups": [
      "agents"
    ],
    "tags": [
      "LangGraph",
      "Gemini",
      "Tavily",
      "LangSmith"
    ],
    "description": "A coordinated research, analysis, and writing workflow that turns a question into a structured article.",
    "problem": "Producing an article from web research involves several distinct stages with different responsibilities.",
    "approach": "Research, analyzer, and writer agents work under an orchestrator that selects the required stages. Tavily supports web search and LangSmith supports tracing.",
    "output": "Research findings, analysis, and a generated article, with caching and memory components described in the repository."
  },
  {
    "name": "AI Question Generator",
    "repo": "AI-Question-Generator",
    "category": "DOCUMENT AUTOMATION",
    "groups": [
      "apps"
    ],
    "tags": [
      "Gemini",
      "Apify",
      "Document processing"
    ],
    "description": "An Apify Actor that turns documents into educational questions with configurable formats and difficulty.",
    "problem": "Creating varied educational questions from source documents takes repetitive reading and formatting work.",
    "approach": "Gemini analyzes content from PDF, DOCX, TXT, and Markdown documents. Users configure question types, quantity, difficulty, and export format.",
    "output": "Multiple-choice, true/false, essay, and fill-in-the-blank questions exported as JSON, CSV, or Moodle XML."
  },
  {
    "name": "Reflect AI",
    "repo": "Reflet_ai",
    "category": "PLANNING PROTOTYPE",
    "groups": [
      "apps"
    ],
    "tags": [
      "JavaScript",
      "Node.js",
      "Supabase Auth",
      "Supabase"
    ],
    "description": "A personal goal planner that turns a deadline into daily actions and supports weekly, monthly, and end-of-goal reflections.",
    "problem": "A time-bound goal needs a realistic plan, a clear view of today’s actions, and a way to learn from progress.",
    "approach": "Editable planning templates and capacity-aware scheduling organize checkpoints and actions around workdays and a daily time budget. A reflection journal connects lessons to the next action.",
    "output": "Daily action tracking, progress and streaks, reflection journals, and export/import backups. The source includes Gmail-and-password signup, Supabase authentication, and private workspace sync. Hosting requires Supabase and Render configuration; the planner uses editable templates rather than a remote language model."
  }
];
const grid=document.querySelector('#projects');
function render(filter='all'){
 const shown=projects.filter(p=>filter==='all'||p.groups.includes(filter));
 grid.innerHTML=shown.map(p=>`<article class="project" data-repo="${p.repo}"><div class="project-top"><span class="project-num">${String(projects.indexOf(p)+1).padStart(2,'0')}</span><span class="project-category">${p.category}</span></div><div class="project-body"><h3>${p.name}</h3>${p.status?`<p class="project-status">${p.status}</p>`:""}<p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></div><div class="project-links"><button data-project="${p.repo}">Read project overview</button>${p.demo?`<a href="${p.demo}" target="_blank" rel="noopener noreferrer">Live website</a>`:""}<a href="https://github.com/Sunvic567/${p.repo}" target="_blank" rel="noopener noreferrer">View source</a></div></article>`).join('');
 document.querySelector('#results').textContent=`${shown.length} projects shown`;
}
document.querySelector('[data-filter="all"] span').textContent=projects.length;
render();
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(x=>{x.classList.toggle('active',x===b);x.setAttribute('aria-pressed',String(x===b))});render(b.dataset.filter)}));
document.querySelectorAll('nav a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{document.querySelectorAll('nav a').forEach(a=>a.removeAttribute('aria-current'));link.setAttribute('aria-current','location')}));
const dialog=document.querySelector('#detail');
grid.addEventListener('click',e=>{const button=e.target.closest('[data-project]');if(!button)return;const p=projects.find(p=>p.repo===button.dataset.project);document.querySelector('#detail-content').innerHTML=`<p class="eyebrow">${p.category}</p><h2 id="dialog-title">${p.name}</h2><h3>The problem</h3><p>${p.problem}</p><h3>The approach</h3><p>${p.approach}</p><h3>Output & current status</h3><p>${p.output}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><div class="actions">${p.demo?`<a class="button primary" href="${p.demo}" target="_blank" rel="noopener noreferrer">Visit live website</a>`:""}<a class="button secondary" href="https://github.com/Sunvic567/${p.repo}" target="_blank" rel="noopener noreferrer">Explore the repository</a></div>`;dialog.setAttribute('aria-labelledby','dialog-title');dialog.showModal()});
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
document.querySelector('#copy-email').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('sunvictor567@gmail.com');status.textContent='Email address copied.'}catch{status.textContent='Copy this address: sunvictor567@gmail.com'}});
document.querySelector('#year').textContent=new Date().getFullYear();
