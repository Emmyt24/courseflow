import { MentorShell } from "@/components/layout/MentorShell";

export default function MentorLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <MentorShell>{children}</MentorShell>;
}
