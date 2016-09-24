package com.reactrecorder;

import android.util.Log;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.lang.ref.WeakReference;

/**
 * Created by vince on 9/24/16.
 */

public class RecordingManager extends ReactContextBaseJavaModule {

    private static final String TAG = "RecordingManager";
    private static WeakReference<MainActivity> mWeakActivity;

    public static void updateActivity(MainActivity activity) {
        mWeakActivity = new WeakReference<MainActivity>(activity);
    }

    public RecordingManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RecordingManager";
    }

    @ReactMethod
    public void startRecording() {
        Log.d(TAG, "startRecording");
        mWeakActivity.get().startRecording();
    }

    @ReactMethod
    public void stopRecording() {
        Log.d(TAG, "stopRecording");
        mWeakActivity.get().stopRecording();
    }

    @ReactMethod
    public void playRecording() {
        Log.d(TAG, "playRecording");
        mWeakActivity.get().playRecording();
    }

}
