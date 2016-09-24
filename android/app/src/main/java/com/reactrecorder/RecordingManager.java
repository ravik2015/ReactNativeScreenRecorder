package com.reactrecorder;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by vince on 9/24/16.
 */

public class RecordingManager extends ReactContextBaseJavaModule {

    public RecordingManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RecordingManager";
    }

    @ReactMethod
    public void startRecording() {
        Log.d("RecordingManager", "startRecording");
    }

    @ReactMethod
    public void stopRecording() {
        Log.d("RecordingManager", "stopRecording");
    }

    @ReactMethod
    public void playRecording() {
        Log.d("RecordingManager", "playRecording");
    }

}
