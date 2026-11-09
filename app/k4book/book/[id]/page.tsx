import { Metadata } from "next";
import { BookDetailsView } from "@/components/k4book/book-details/book-details-view";
import { getBookDetailById, allBookDetails } from "@/data/k4book";
import { currentUser, featuredBook } from "@/data/k4book";

interface BookPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(allBookDetails).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { id } = await params;
  const book = getBookDetailById(id);

  return {
    title: `${book.title} - Book Details - K4Book`,
    description: book.synopsis,
  };
}

export default async function K4BookDetailPage({ params }: BookPageProps) {
  const { id } = await params;
  const book = getBookDetailById(id);

  return (
    <BookDetailsView
      user={currentUser}
      book={book}
      readerTemplate={featuredBook}
    />
  );
}

