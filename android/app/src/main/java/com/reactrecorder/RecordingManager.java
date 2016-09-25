package com.reactrecorder;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.lang.ref.WeakReference;

/**
 * Created by Vince Yuan on 9/24/16.
 */

public class RecordingManager extends ReactContextBaseJavaModule {

    private static final String TAG = "RecordingManager";
    private static WeakReference<MainActivity> mWeakActivity;

    private static ReactApplicationContext mReactContext;

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
        //Log.d(TAG, "startRecording");
        mWeakActivity.get().startRecording();
    }

    @ReactMethod
    public void stopRecording() {
        //Log.d(TAG, "stopRecording");
        mWeakActivity.get().stopRecording();
    }

    @ReactMethod
    public void playRecording() {
        //Log.d(TAG, "playRecording");
        mWeakActivity.get().playRecording();
    }

    // Send status to javascript
    public static void notifyStatusChanged() {
        WritableMap params = Arguments.createMap();
        params.putBoolean("isRecording", mWeakActivity.get().isRecording());
        params.putBoolean("hasRecord", mWeakActivity.get().hasRecord());
        mReactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("StatusChanged", params);
    }

}
