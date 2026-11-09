import { BookDetail } from "@/types/k4book";
import { SafeImage } from "@/components/ui/safe-image";

interface SpecificationsCardProps {
  book: BookDetail;
}

export function SpecificationsCard({ book }: SpecificationsCardProps) {
  return (
    <section
      className="flex-1 bg-white rounded-t-[36px] shadow-sm px-6 sm:px-10 py-10"
      aria-label="Book Information and Specifications"
    >
      <div className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {/* Left Column: Description & Reviews (7 Columns) */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-[#1f2428] text-[15px] mb-3">
              Description
            </h3>
            <div className="space-y-3.5 text-xs text-[#686b6e] leading-relaxed">
              {book.descriptionParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Reader Review Highlight */}
          <div className="mt-8 flex items-start gap-3.5 pt-4 border-t border-neutral-100">
            <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 relative">
              <SafeImage
                src={book.highlightReview.reviewerAvatar}
                alt={book.highlightReview.reviewerName}
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold text-[#1f2428]">
                {book.highlightReview.reviewerName}
              </p>
              <blockquote className="text-[11.5px] text-[#686b6e] italic mt-1 leading-snug">
                {book.highlightReview.quote}
              </blockquote>
            </div>
          </div>
        </div>

        {/* Right Column: Editors, Language, Paperback Specs (5 Columns) */}
        <div className="col-span-12 md:col-span-5 space-y-6 md:pl-6 md:border-l border-neutral-100">
          {/* Editors */}
          <div>
            <h4 className="font-semibold text-[#1f2428] text-[13px] mb-1.5">
              Editors
            </h4>
            <p className="text-xs text-[#686b6e] leading-relaxed">
              {book.editors}
            </p>
          </div>

          {/* Language */}
          <div>
            <h4 className="font-semibold text-[#1f2428] text-[13px] mb-1.5">
              Language
            </h4>
            <p className="text-xs text-[#686b6e]">{book.language}</p>
          </div>

          {/* Paperback specifications */}
          <div>
            <h4 className="font-semibold text-[#1f2428] text-[13px] mb-1.5">
              Paperback
            </h4>
            <p className="text-xs text-[#686b6e] leading-relaxed">
              {book.paperbackSpecs.details}, {book.paperbackSpecs.pages} pages
              <br />
              ISBN: {book.paperbackSpecs.isbn}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

