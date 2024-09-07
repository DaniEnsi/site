// components/BookSkeleton.tsx

export default function BookSkeleton() {
    return (
      <div className="flex items-center gap-4 animate-pulse">
        <div className="relative">
          <div className="w-[49px] h-[70px] bg-gray-200 dark:bg-zinc-800 rounded-l-sm rounded-r"></div>
        </div>
        <div className="flex-1">
          <div className="h-5 bg-gray-200 dark:bg-zinc-800 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-1/2"></div>
        </div>
      </div>
    );
  }
  