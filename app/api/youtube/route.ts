import { NextResponse } from 'next/server';
import ytdl from 'ytdl-core';


export async function GET(req:Request) {
    const { searchParams } = new URL(req.url)
    const videoId = searchParams.get('videoId') || ""
    
  try {
    const info = await ytdl.getInfo(videoId);
    const formatVideo = ytdl.chooseFormat(info.formats, { quality: '135' });
    const formatAudio = ytdl.chooseFormat(info.formats, { filter: 'audioonly' })
    return NextResponse.json({ urlVideo: formatVideo.url , urlAudio:formatAudio.url  });
  } catch (error) {
    return NextResponse.json({ error: 'Failed server to fetch YouTube video' });
  }
}