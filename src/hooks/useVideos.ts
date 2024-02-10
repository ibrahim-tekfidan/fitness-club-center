import { useQuery } from '@tanstack/react-query';
import apiYoutube from '../services/api-youtube';

export interface Video {
  videoId: string;
  channelName: string;
  title: string;
  thumbnails: { height: number; width: number; url: string }[];
  viewCountText: string;
  publishedTimeText: string;
}

interface FetchVideo {
  contents: { video: Video }[];
}

const useVideos = (query: string) => {
  return useQuery<FetchVideo, Error>({
    queryKey: ['query', query],
    queryFn: () =>
      apiYoutube
        .get<FetchVideo>('', {
          params: {
            query,
          },
        })
        .then(res => res.data),
  });
};

export default useVideos;
