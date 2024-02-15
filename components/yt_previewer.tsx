import { useEffect, useState } from 'react';
import axios from 'axios';

interface VideoPreviewProps {
    videoId: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = ({ videoId }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        const fetchPreview = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=AIzaSyDYEHjrM4kHZc70QV6sNBa122Tsb4irYkc`
                );

                const duration = response.data.items[0].contentDetails.duration;
                const seconds = durationToSeconds(duration);

                setPreviewUrl(`https://www.youtube.com/watch?v=${videoId}&t=${seconds}s`);
            } catch (err) {
                console.error(err);
                setPreviewUrl(null);
            }
        };

        if (videoId) {
            fetchPreview();
        }
    }, [videoId]);

    if (!previewUrl) {
        return <div>Invalid video ID or unable to fetch video preview</div>;
    }

    return <iframe width="560" height="315" src={previewUrl} title="YouTube Video Preview" allowFullScreen />;
};

const durationToSeconds = (duration: string): number => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    if (!match) {
        return 0;
    }

    const hours = parseInt(match[1]?.replace('H', '') || '0', 10) * 3600;
    const minutes = parseInt(match[2]?.replace('M', '') || '0', 10) * 60;
    const seconds = parseInt(match[3]?.replace('S', '') || '0', 10);

    return hours + minutes + seconds;
};

export default VideoPreview;