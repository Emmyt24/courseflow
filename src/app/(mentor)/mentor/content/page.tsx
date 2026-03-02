import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export default function MentorContentPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Course Content" subtitle="Upload assignments and course materials for your students." />

      <Card title="Upload Course Material" description="Share links and references with your cohort.">
        <form className="space-y-4">
          <Input label="Material Title" name="materialTitle" placeholder="e.g. Ownership Notes Week 3" />
          <Input label="Material URL" name="materialUrl" type="url" placeholder="https://..." />
          <div>
            <Button type="submit">Publish Material</Button>
          </div>
        </form>
      </Card>

      <Card title="Publish Assignment" description="Create assignment briefs and due dates.">
        <form className="space-y-4">
          <Input label="Assignment Title" name="assignmentTitle" placeholder="e.g. Build enrollment API endpoint" />
          <Textarea label="Assignment Brief" name="assignmentBrief" placeholder="Describe scope, expected output, and rubric." />
          <Input label="Due Date" name="dueDate" type="date" />
          <Input label="PR Instructions" name="prInstructions" placeholder="e.g. Open PR against cohort repo and tag mentor" />
          <div>
            <Button type="submit">Publish Assignment</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
