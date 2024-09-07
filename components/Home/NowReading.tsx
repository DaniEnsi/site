// components/NowReading.tsx

import { LiteralBook } from "../../lib/literal";
import MediaCard, { MediaCardImageRadius } from "../MediaCard";
import BookSkeleton from "../BookSkeleton";

interface NowReadingProps {
  books: LiteralBook[];
  loading?: boolean;
}

export default function NowReading({ books, loading }: NowReadingProps) {
  return (
    <dl className="list-container">
      <dt className="list-title">
        <h3 className="text-neutral-500 dark:text-silver-dark">Reading</h3>
      </dt>

      <dd className="list-content grid gap-4 sm:gap-6">
        {loading ? (
          <>
            <BookSkeleton />
          </>
        ) : books.length > 0 ? (
          books.map(({ title, author, coverUrl, url, fallbackColors }) => (
            <MediaCard
              key={url}
              title={title}
              subtitle={author}
              image={{
                alt: title && author ? `${title} by ${author}` : "Book cover",
                title: title && author ? `${title} by ${author}` : null,
                src: coverUrl ? coverUrl : "",
                width: 56,
                height: 80,
                radius: MediaCardImageRadius.Book,
              }}
              href={url}
              hrefLabel="View on Literal"
            />
          ))
        ) : (
          <p>No books currently being read.</p>
        )}
      </dd>
    </dl>
  );
}
