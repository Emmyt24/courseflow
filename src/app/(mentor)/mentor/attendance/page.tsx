import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { sampleAttendanceSession } from "@/lib/mock-data";

export default function MentorAttendancePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Attendance Records" subtitle="Latest attendance status for students in your assigned classes." />

      <Card title="Current Session Snapshot" description={`Started at ${sampleAttendanceSession.startedAt}`}>
        <div className="grid gap-2 font-mono text-body text-muted md:grid-cols-3">
          <p>Present: {sampleAttendanceSession.presentCount}</p>
          <p>Absent: {sampleAttendanceSession.absentCount}</p>
          <p>Pending: {sampleAttendanceSession.pendingCount}</p>
        </div>
      </Card>

      <div className="overflow-x-auto border border-border" aria-live="polite">
        <table className="min-w-full border-collapse font-mono text-caption">
          <thead className="bg-primary text-inverse-fg">
            <tr>
              <th className="px-4 py-3 text-left">Student Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Time Checked In</th>
            </tr>
          </thead>
          <tbody>
            {sampleAttendanceSession.records.map((record) => (
              <tr key={record.studentId} className="border-t border-divider">
                <td className="px-4 py-3">{record.name}</td>
                <td className="px-4 py-3">{record.email}</td>
                <td className="px-4 py-3 uppercase">{record.status}</td>
                <td className="px-4 py-3">{record.checkedInAt ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
