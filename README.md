ReactRecorder is a demo React Native project. It records screen into a video on both iOS and Android. The purpose of this project is to show how to bridge between Javascript and iOS/Android code. It runs on iOS 8+ and Android 6.0+.

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

I didn't find perfect ways to record screen on iOS and Android. Screen recording on iOS is based on [ASScreenRecorder](https://github.com/alskipp/ASScreenRecorder). However, it does not work well in React Native app. Screen recording on Android is based on [this](http://www.truiton.com/2015/05/capture-record-android-screen-using-mediaprojection-apis/) post.

##Author:

Vince Yuan

##License:

###MIT License

Copyright (c) 2016 Vince Yuan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
