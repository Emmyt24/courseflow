import { PageHeader } from "@/components/layout/PageHeader";
import { ClassmateGrid } from "@/components/students/ClassmateGrid";
import { sampleClassmates } from "@/lib/mock-data";

export default function MentorStudentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Students" subtitle="All students across courses assigned to you." />
      <section className="space-y-3" aria-labelledby="mentor-student-list">
        <h2 id="mentor-student-list" className="font-mono text-label uppercase tracking-[0.08em] text-muted">
          Student Directory
        </h2>
        <ClassmateGrid classmates={sampleClassmates} />
      </section>
    </div>
  );
}
