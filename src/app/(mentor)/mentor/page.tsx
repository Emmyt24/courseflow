import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { sampleAttendanceSession, sampleClassmates, sampleCourse } from "@/lib/mock-data";

export default function MentorDashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Mentor Overview"
        subtitle="View your assigned courses, track student attendance, and manage learning content."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card title="Assigned Courses" headerTone="inverse">
          <p className="font-mono text-h3 text-foreground">1</p>
          <p className="font-mono text-caption text-muted">{sampleCourse.name}</p>
        </Card>
        <Card title="Total Students" headerTone="inverse">
          <p className="font-mono text-h3 text-foreground">{sampleClassmates.length}</p>
          <p className="font-mono text-caption text-muted">Across assigned cohorts</p>
        </Card>
        <Card title="Present Today" headerTone="inverse">
          <p className="font-mono text-h3 text-foreground">{sampleAttendanceSession.presentCount}</p>
          <p className="font-mono text-caption text-muted">Live attendance count</p>
        </Card>
        <Card title="Pending Check-ins" headerTone="inverse">
          <p className="font-mono text-h3 text-foreground">{sampleAttendanceSession.pendingCount}</p>
          <p className="font-mono text-caption text-muted">Follow up before class ends</p>
        </Card>
      </div>

      <Card title="Assigned Course" description="Current delivery schedule">
        <p className="font-mono text-body text-muted">{sampleCourse.name}</p>
        <p className="font-mono text-body text-muted">{sampleCourse.schedule}</p>
        <p className="font-mono text-body text-muted">{sampleCourse.venue}</p>
      </Card>
    </div>
  );
}
