// lib/lastfm.ts

import LastFMTyped from "lastfm-typed";

const LASTFM_API_KEY = "6b80e497ca219bfb7fce91ff07c18acd";
const LASTFM_USERNAME = "Dani_Duese";

const lastFm = new LastFMTyped(LASTFM_API_KEY, { userAgent: undefined });

export interface LastFmStatus {
  song: {
    title: string;
    artist: string;
    album: string;
    albumImageUrl: string;
    lastfmUrl: string;
  };
  isPlaying: boolean;
  timestamp: string;
}

export async function fetchLastFmStatus(): Promise<LastFmStatus | null> {
  try {
    const recentTracks = await lastFm.user.getRecentTracks(LASTFM_USERNAME, { limit: 1 });
    
    if (recentTracks.tracks.length === 0) {
      return null;
    }

    const track = recentTracks.tracks[0];
    const artist = typeof track.artist === "string" ? track.artist : track.artist.name;

    return {
      song: {
        title: track.name,
        artist: artist,
        album: track.album?.name || "",
        albumImageUrl: track.image.find((image) => image.size === "large")?.url || "",
        lastfmUrl: track.url,
      },
      isPlaying: !!track.nowplaying,
      timestamp: track.date ? new Date(Number(track.date.uts) * 1000).toISOString() : new Date().toISOString(),
    };
  } catch (error) {
    console.error("Error fetching Last.fm status:", error);
    return null;
  }
}
