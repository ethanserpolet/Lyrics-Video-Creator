#!/usr/bin/env python3
import sys
import json
from moviepy.editor import VideoFileClip, AudioFileClip, ImageClip, CompositeVideoClip, TextClip


def main():
    try:
        job = json.load(sys.stdin)
        image = job['image']
        audio = job['audio']
        lrc = job['lrc']
        params = job['params']
    except Exception as e:
        print(json.dumps({'error': 'invalid input', 'details': str(e)}))
        sys.exit(1)

    # Placeholder minimal implementation
    try:
        audio_clip = AudioFileClip(audio)
        base = ImageClip(image).set_duration(audio_clip.duration)
        video = base.set_audio(audio_clip)
        out = params.get('output', 'output.mp4')
        video.write_videofile(out, fps=params.get('fps', 30))
        print(json.dumps({'output': out}))
    except Exception as e:
        print(json.dumps({'error': str(e)}))
        sys.exit(1)


if __name__ == '__main__':
    main()
