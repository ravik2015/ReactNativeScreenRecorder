package com.reactrecorder;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.lang.ref.WeakReference;

/**
 * Created by vince on 9/24/16.
 */

public class RecordingManager extends ReactContextBaseJavaModule {

    private static final String TAG = "RecordingManager";
    private static WeakReference<MainActivity> mWeakActivity;

    private ReactApplicationContext mReactContext;
    private boolean mIsRecording = false;
    private boolean mHasRecord = false;

    public static void updateActivity(MainActivity activity) {
        mWeakActivity = new WeakReference<MainActivity>(activity);
    }

    public RecordingManager(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
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
        notifyStatusChanged();
    }

    @ReactMethod
    public void stopRecording() {
        if (!mIsRecording) return;

        Log.d(TAG, "stopRecording");
        mWeakActivity.get().stopRecording();
        mIsRecording = false;
        notifyStatusChanged();
    }

    @ReactMethod
    public void playRecording() {
        if (mIsRecording) return;
        if (!mHasRecord) return;

        Log.d(TAG, "playRecording");
        mWeakActivity.get().playRecording();
    }

    // Send status to javascript
    private void notifyStatusChanged() {
        WritableMap params = Arguments.createMap();
        params.putBoolean("isRecording", mIsRecording);
        params.putBoolean("hasRecord", mHasRecord);
        mReactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("StatusChanged", params);
    }
}
