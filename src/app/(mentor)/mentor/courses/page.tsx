import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { sampleCourse } from "@/lib/mock-data";

export default function MentorCoursesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Assigned Courses" subtitle="Courses currently assigned to you as a mentor." />

      <Card title={sampleCourse.name} description="Active course">
        <div className="space-y-2 font-mono text-body text-muted">
          <p>{sampleCourse.description}</p>
          <p>{sampleCourse.schedule}</p>
          <p>{sampleCourse.venue}</p>
          <p>
            Repository:{" "}
            <Link href={sampleCourse.githubRepoUrl} className="underline underline-offset-2">
              {sampleCourse.githubRepoUrl}
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
