// lib/literal.ts

const LITERAL_BASE_URL = "https://literal.club/graphql/";
const LITERAL_TOKEN = process.env.NEXT_PUBLIC_LITERAL_TOKEN;
const LITERAL_USER_ID = process.env.NEXT_PUBLIC_LITERAL_USER_ID;
const LITERAL_USER_HANDLE = process.env.NEXT_PUBLIC_LITERAL_USER_HANDLE;

export interface LiteralBook {
  title: string;
  author: string;
  url: string;
  coverUrl: string;
  readingDate: string;
  fallbackColors: string[];
}

const LITERAL_QUERY = `
  query booksByReadingStateAndProfile($profileId: String!) {
    booksByReadingStateAndProfile(
      limit: 3
      offset: 0
      readingStatus: IS_READING
      profileId: $profileId
    ) {
      slug
      title
      publishedDate
      cover
      authors {
        id
        name
      }
      gradientColors
    }
  }
`;

export async function fetchLiteralBooks(): Promise<LiteralBook[]> {
  if (typeof window === 'undefined') {
    console.log('Server-side rendering, skipping Literal API call');
    return [];
  }

  if (!LITERAL_USER_ID) {
    console.error('LITERAL_USER_ID is not set');
    return [];
  }

  try {
    const response = await fetch(LITERAL_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LITERAL_TOKEN}`,
      },
      body: JSON.stringify({
        query: LITERAL_QUERY,
        variables: {
          profileId: LITERAL_USER_ID,
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.errors) {
      console.error('GraphQL Errors:', data.errors);
      return [];
    }

    const isReading = data.data.booksByReadingStateAndProfile;

    if (!isReading) return [];

    const books: LiteralBook[] = isReading.map((book: any) => ({
      title: book.title,
      author: book.authors.map((a: any) => a.name).join(", "),
      url: `https://literal.club/${LITERAL_USER_HANDLE}/book/${book.slug}`,
      coverUrl: book.cover,
      readingDate: book.publishedDate,
      fallbackColors: book.gradientColors,
    }));

    return books;
  } catch (error) {
    console.error('Error fetching Literal books:', error);
    return [];
  }
}
