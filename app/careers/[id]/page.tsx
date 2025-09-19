import jobs from "@/joblist.json";
import Link from "next/link";

interface JobPageProps {
  params: { id: string };
}

export default function JobPage({ params }: JobPageProps) {
  const job = jobs.find((j) => j.id === params.id);

  if (!job) {
    return <h1 className="p-12 text-2xl">Job not found</h1>;
  }

  return (
    <main className="p-12">
      <h1 className="text-5xl font-bold mb-6 text-white text-center">{job.title}</h1>
      <p className="text-lg text-neutral-300 mb-12">{job.description}</p>

{/*       <a href="/careers" className="inline-block px-6 py-3 bg-gradient-to-tr from-[#833ab4] to-[#fd1d1d] text-white rounded-lg hover:-translate-y-0.5 transition">
        Return to Apply Now →
      </a> */}
      <Link href={"/careers"} className="inline-block px-6 py-3 bg-gradient-to-tr from-[#833ab4] to-[#fd1d1d] text-white rounded-lg hover:-translate-y-0.5 transition">
        Return to Apply Now →
      </Link>
    </main>
  );
}
