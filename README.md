ReactNativeScreenRecorder is a demo React Native project. It records screen into a video on both iOS and Android. The purpose of this project is to show how to bridge between Javascript and iOS/Android code. It runs on iOS 8+ and Android 6.0+.

##Screenshots:

![Screenshot](https://github.com/vinceyuan/ReactRecorder/raw/master/ReactRecorder-iOS.gif)

![Screenshot](https://github.com/vinceyuan/ReactRecorder/raw/master/ReactRecorder-Android.gif)

##Install:

```
git clone --recursive git@github.com:vinceyuan/ReactRecorder.git
cd ReactRecorder && npm install
```

##Run:

####Run on iOS:

1. Open `ios/ReactRecorder.xcodeproj` with Xcode.
2. Choose iPhone 6 (8.1) simulator, run.

####Run on Android:

1. Open `android/` with Android Studio.
2. Run the app in an Android 6.0 emulator.

##Notes:

The bridging works on iOS 8+ and Android 5.0+. But I didn't find perfect ways to record screen on iOS and Android. Screen recording on iOS is based on [ASScreenRecorder](https://github.com/alskipp/ASScreenRecorder). It does not work well in React Native app. I managed to modify it to let it work on iOS 8. On iOS 9 and 10, sometimes the recorded video does not animate, and sometimes it records only once. Screen recording on Android is based on [this](http://www.truiton.com/2015/05/capture-record-android-screen-using-mediaprojection-apis/) post. Though Android 5.0 provides MediaProjection API, it always crashes on my Android 5.0 emulator. It works well on Android 6.0.

