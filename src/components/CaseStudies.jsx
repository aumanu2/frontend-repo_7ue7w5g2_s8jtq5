import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const studies = [
  {
    title: 'AI-Powered Document Processing Platform',
    challenge: 'Manual document classification and data extraction created a week-long backlog and compliance risk.',
    solution: [
      'Event-driven pipeline with OCR microservice and embedding-based retrieval',
      'Vector DB for semantic search; autoscaling workers with queue-based backpressure',
      'Human-in-the-loop review tooling with audit trails',
    ],
    impact: [
      'Cut processing time from 3 days to under 2 hours (96% faster)',
      'Reduced error rate by 72% via assisted labeling',
      'Saved ~$120k/year in manual ops costs',
    ],
  },
  {
    title: 'Multi-Region E‑commerce Platform Modernization',
    challenge: 'Monolithic app struggled with peak traffic and slow deployments risking revenue during campaigns.',
    solution: [
      'Modularized core domains; introduced API gateway and edge caching',
      'Blue/green deployments with automated smoke tests',
      'Rate-limited, idempotent payment workflows',
    ],
    impact: [
      '99.95% availability during peak (10k+ concurrent users)',
      'Deployment time reduced by 70% with rollback under 3 minutes',
      'Checkout latency down 38% at P95',
    ],
  },
  {
    title: 'Observability Platform for Platform Team',
    challenge: 'Fragmented dashboards and low signal-to-noise slowed incident response and hampered reliability goals.',
    solution: [
      'Unified tracing, metrics, and logs with SLO-driven alerts',
      'Service ownership model and golden signals per service',
      'Error budgets aligned to product priorities',
    ],
    impact: [
      'MTTR reduced by 54%',
      'Alert fatigue down 60% while catching more regressions',
      'Incident postmortems produce 30% faster fixes',
    ],
  },
  {
    title: 'Cost-Optimized Data Lake',
    challenge: 'Exploding analytics costs and unreliable ETL jobs delayed insights for stakeholders.',
    solution: [
      'Lakehouse architecture; table formats with ACID guarantees',
      'Serverless batch with spot instances and incremental compaction',
      'Data contracts and schema evolution controls',
    ],
    impact: [
      'Cut monthly spend by 43% while improving freshness to hourly',
      'Failed job rate down 68%',
      'Stakeholder NPS up 22 points',
    ],
  },
  {
    title: 'Developer Platform (Internal PaaS)',
    challenge: 'Inconsistent app scaffolding and infra provisioning slowed feature teams.',
    solution: [
      'Golden paths with templates; paved road for CI/CD and IaC',
      'Runtime contracts, policy-as-code, and self-serve environments',
      'Preview deployments for every PR',
    ],
    impact: [
      'Lead time for changes reduced 4x',
      'Onboarding time from weeks to days',
      'Service reliability improved with standardized SLOs',
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl text-[#1A1A1A]">Case Studies</h2>
          <p className="mt-2 text-sm text-[#1A1A1A]/80">Challenge • Solution • Impact with quantified outcomes.</p>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {studies.map((s) => (
          <CaseStudyCard
            key={s.title}
            title={s.title}
            challenge={s.challenge}
            impact={s.impact[0]}
            onClick={() => {}}
          />
        ))}
      </div>

      <div className="mt-10 p-5 rounded-xl bg-white border border-[#BDBDBD]/50">
        <h3 className="font-serif text-xl text-[#1A1A1A]">Architectural Diagram (Example)</h3>
        <p className="mt-2 text-sm text-[#1A1A1A]/80">High-level C4-style: Client SPA → API Gateway → Service Tier → DB/Cache/Queue. Edge caching and observability integrated end-to-end.</p>
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
