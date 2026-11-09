import { Metadata } from "next";
import { ExploreView } from "@/components/k4book/explore/explore-view";
import {
  explorePopularBooks,
  newReleasesBooks,
  curatedBoxSets,
  clubSpotlight,
  currentUser,
} from "@/data/k4book";

export const metadata: Metadata = {
  title: "Explore & Discover Books - K4Book",
  description:
    "Immerse yourself in handpicked literary treasures, sweeping epics, and new voices crafted for slow, contemplative reading.",
};

export default function K4BookExplorePage() {
  return (
    <ExploreView
      user={currentUser}
      popularBooks={explorePopularBooks}
      newReleases={newReleasesBooks}
      boxSets={curatedBoxSets}
      spotlight={clubSpotlight}
    />
  );
}

