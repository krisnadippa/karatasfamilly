import type { Metadata } from "next";
import { LandingView } from "@/components/landing/landing-view";

export const metadata: Metadata = {
  title: "Karatas Family — Contemporary Living, Philosophy & Digital Ecosystem",
  description:
    "Karatas Family ecosystem, core philosophies, pillars of craft, and mindful digital sanctuaries including K4Book.",
};

export default function LandingPage() {
  return <LandingView />;
}
