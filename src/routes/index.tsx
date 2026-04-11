import { createFileRoute } from "@tanstack/react-router";
import LinkHub from "@/components/LinkHub";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Community Link Hub — All Your Links in One Place" },
      { name: "description", content: "Connect with our community across all platforms. Find our Discord, YouTube, blog, podcast and more." },
      { property: "og:title", content: "Community Link Hub" },
      { property: "og:description", content: "Connect with our community across all platforms." },
    ],
  }),
  component: Index,
});

function Index() {
  return <LinkHub />;
}
