import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CASES = {
  'ai-docs': {
    title: 'AI-Powered Document Processing Platform',
    challenge: 'Manual classification and data extraction caused a week-long backlog and compliance risk.',
    solution: [
      'Event-driven pipeline with OCR microservice and embedding-based retrieval',
      'Vector DB for semantic search; autoscaling workers with queue-based backpressure',
      'Human-in-the-loop review tooling with audit trails',
    ],
    impact: [
      'Processing time from 3 days to < 2 hours (96% faster)',
      'Error rate reduced 72% via assisted labeling',
      'Saved ~$120k/year in manual ops costs',
    ],
  },
  'ecom-modernization': {
    title: 'Multi-Region E‑commerce Platform Modernization',
    challenge: 'Monolith struggled with peak traffic and slow deployments risking revenue during campaigns.',
    solution: [
      'Modularized domains; introduced API gateway and edge caching',
      'Blue/green deployments with automated smoke tests',
      'Idempotent payment workflows with rate limiting',
    ],
    impact: [
      '99.95% availability during peak (10k+ concurrent users)',
      'Deployment time reduced 70% with rollback < 3 minutes',
      'Checkout latency down 38% at P95',
    ],
  },
  'observability': {
    title: 'SLO-Centric Observability Platform',
    challenge: 'Fragmented dashboards and low signal-to-noise slowed incident response.',
    solution: [
      'Unified tracing, metrics, and logs with SLO-driven alerts',
      'Service ownership model with golden signals per service',
      'Error budgets aligned to product priorities',
    ],
    impact: [
      'MTTR reduced 54%',
      'Alert fatigue down 60% while catching more regressions',
      'Incident postmortems produced 30% faster fixes',
    ],
  },
  'lakehouse': {
    title: 'Cost-Optimized Lakehouse',
    challenge: 'Analytics costs ballooned and ETL reliability lagged.',
    solution: [
      'Table formats with ACID guarantees and incremental compaction',
      'Serverless batch with spot instances',
      'Data contracts and schema evolution controls',
    ],
    impact: [
      'Monthly spend cut 43%, freshness to hourly',
      'Failed job rate down 68%',
      'Stakeholder NPS up 22 points',
    ],
  },
  'internal-paas': {
    title: 'Internal PaaS (Developer Platform)',
    challenge: 'Inconsistent scaffolding and infra provisioning slowed teams.',
    solution: [
      'Golden paths with templates and paved road CI/CD',
      'Runtime contracts, policy-as-code, self-serve envs',
      'Preview deployments per PR',
    ],
    impact: [
      'Lead time for changes improved 4x',
      'Onboarding time from weeks to days',
      'Reliability improved with standardized SLOs',
    ],
  },
};

export default function CaseStudyView() {
  const { slug } = useParams();
  const data = CASES[slug];
  if (!data) return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <p className="text-[#1A1A1A]/80">Case study not found.</p>
      <Link to="/case-studies" className="text-[#004D40] hover:underline">Back to Case Studies</Link>
    </section>
  );

  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <Link to="/case-studies" className="text-[#004D40] hover:underline">← Back to Case Studies</Link>
      <h1 className="mt-4 font-serif text-3xl text-[#1A1A1A]">{data.title}</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 rounded-xl bg-white border border-[#BDBDBD]/50 p-6">
          <h2 className="font-serif text-xl text-[#1A1A1A]">Solution</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-[#1A1A1A]/85">
            {data.solution.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
          <h2 className="mt-6 font-serif text-xl text-[#1A1A1A]">Challenge</h2>
          <p className="mt-2 text-sm text-[#1A1A1A]/85">{data.challenge}</p>
        </div>
        <aside className="rounded-xl bg-white border border-[#BDBDBD]/50 p-6">
          <h3 className="font-serif text-lg text-[#1A1A1A]">Impact</h3>
          <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-[#1A1A1A]/85">
            {data.impact.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </aside>
      </div>
      <div className="mt-8 rounded-xl border border-[#BDBDBD]/50 p-6 bg-white">
        <h3 className="font-serif text-lg text-[#1A1A1A]">High-level Diagram</h3>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
          <div className="rounded-lg border border-[#BDBDBD]/60 p-3">Client SPA</div>
          <div className="rounded-lg border border-[#BDBDBD]/60 p-3">API Gateway</div>
          <div className="rounded-lg border border-[#BDBDBD]/60 p-3">Auth</div>
          <div className="rounded-lg border border-[#BDBDBD]/60 p-3">Services</div>
          <div className="rounded-lg border border-[#BDBDBD]/60 p-3">Queue</div>
          <div className="rounded-lg border border-[#BDBDBD]/60 p-3">DB / Cache</div>
        </div>
      </div>
    </section>
  );
}
