import { useState } from "react";
import InfinityScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import useVideoList from '../hooks/useVideoList';
import Video from './Video';


export default function Videos() {
    const [page, setPage] = useState(1);
    const { loading, error, videos, hasMore } = useVideoList(page);

    return (
        <div>
            {videos.length > 0 && (
                <InfinityScroll
                    dataLength={videos.length}
                    loader="Loading...."
                    hasMore={hasMore}
                    next={() => setPage(page + 8)}>
                    {videos.map((video) =>
                        video.noq > 0 ? (
                            <Link to={{
                                pathname: `/quiz/${video.youtubeID}`,
                                state: {
                                    videoTitle: video.title
                                }
                            }}
                                key={video.youtubeID}>
                                <Video title={video.title}
                                    id={video.youtubeID}
                                    noq={video.noq} />
                            </Link>
                        ) : (
                            <Video title={video.title}
                                id={video.youtubeID}
                                noq={video.noq}
                                key={video.youtubeID} />
                        )
                    )}
                </InfinityScroll>
            )}
            {!loading && videos.length === 0 && (
                <div>
                    No data found!
                </div>
            )}

            {error && <div>There was an error!</div>}
            {loading && <div>Loading!!!!</div>}
        </div>
    )
}