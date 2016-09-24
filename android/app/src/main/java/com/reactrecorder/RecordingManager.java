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

    private boolean mIsRecording = false;
    private boolean mHasRecord = false;

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
        if (mIsRecording) return;

        Log.d(TAG, "startRecording");
        mWeakActivity.get().startRecording();
        mIsRecording = true;
        mHasRecord = true;
    }

    @ReactMethod
    public void stopRecording() {
        if (!mIsRecording) return;

        Log.d(TAG, "stopRecording");
        mWeakActivity.get().stopRecording();
        mIsRecording = false;
    }

    @ReactMethod
    public void playRecording() {
        if (mIsRecording) return;
        if (!mHasRecord) return;

        Log.d(TAG, "playRecording");
        mWeakActivity.get().playRecording();
    }

}
