import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { motion } from 'framer-motion';

const studies = [
  {
    slug: 'ai-docs',
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
  {
    slug: 'ecom-modernization',
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
  {
    slug: 'observability',
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
  {
    slug: 'lakehouse',
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
  {
    slug: 'internal-paas',
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
        {studies.map((s, i) => (
          <motion.div key={s.slug} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i*0.05 }}>
            <CaseStudyCard title={s.title} challenge={s.challenge} impact={s.impact[0]} onClick={() => {}} />
          </motion.div>
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
