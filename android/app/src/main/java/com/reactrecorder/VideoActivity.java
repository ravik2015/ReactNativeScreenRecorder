package com.reactrecorder;

import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.VideoView;

public class VideoActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_video);
        VideoView videoView = (VideoView)findViewById(R.id.videoView);
        videoView.setVideoPath(Environment
                .getExternalStoragePublicDirectory(Environment
                        .DIRECTORY_DOWNLOADS) + "/video.mp4");
        videoView.start();
    }
}
