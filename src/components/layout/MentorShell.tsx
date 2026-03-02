"use client";

import { BookOpen, CalendarCheck2, FileText, Home, Users } from "lucide-react";
import { Shell } from "@/components/layout/Shell";

const mentorNav = [
  { label: "Overview", href: "/mentor", icon: Home, match: "exact" as const },
  { label: "Courses", href: "/mentor/courses", icon: BookOpen },
  { label: "Students", href: "/mentor/students", icon: Users },
  { label: "Attendance", href: "/mentor/attendance", icon: CalendarCheck2 },
  { label: "Content", href: "/mentor/content", icon: FileText },
];

export function MentorShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Shell
      title="Mentor Dashboard"
      subtitle="Assigned Courses • Student Progress • Course Content"
      navItems={mentorNav}
      sidebarCollapsible
      sidebarHomeHref="/"
    >
      {children}
    </Shell>
  );
}
