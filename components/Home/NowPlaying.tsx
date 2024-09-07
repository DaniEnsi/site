// components/NowPlayingWidget.tsx

import { formatDistanceToNowStrict } from "date-fns";
import { LastFmStatus } from "../../lib/lastfm";
import Badge from "../Badge";
import MediaCard from "../MediaCard";

interface NowPlayingProps {
  lastFmStatus: LastFmStatus;
  loading?: boolean;
}

export default function NowPlayingWidget(props: NowPlayingProps) {
  if (props.loading) {
    return (
      <dl className="list-container">
        <dt className="list-title">
          <h3 className="text-neutral-500 dark:text-silver-dark">
            <div className="flex items-center gap-2">Listening</div>
          </h3>
        </dt>
        <dd className="list-content animate-pulse">
          <MediaCard loading={true} />
        </dd>
      </dl>
    );
  }

  if (!props.lastFmStatus?.song) {
    return null;
  }

  const { song, isPlaying, timestamp } = props.lastFmStatus;
  const { album, albumImageUrl, title, artist, lastfmUrl } = song;

  return (
    <dl className="list-container">
      <dt className="list-title">
        <h3 className="text-neutral-500 dark:text-silver-dark">
          <div className="flex items-center gap-2">
            Listening
            {isPlaying ? (
              <Badge isLive>Live</Badge>
            ) : (
              <Badge>
                {formatDistanceToNowStrict(new Date(timestamp), {
                  addSuffix: true,
                })}
              </Badge>
            )}
          </div>
        </h3>
      </dt>

      <dd className="list-content">
        <MediaCard
          title={title}
          subtitle={`${artist}${album ? ` · ${album}` : ""}`}
          image={{
            alt: album || "Album cover",
            title: album || null,
            src: albumImageUrl || "",
            width: 56,
            height: 56,
          }}
          href={lastfmUrl}
          hrefLabel="View on Last.fm"
        />
      </dd>
    </dl>
  );
}
