//
//  RecordingManager.m
//  ReactRecorder
//
//  Created by Vince Yuan on 9/21/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RecordingManager.h"
#import "RCTLog.h"

@implementation RecordingManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(startRecording) {
  RCTLogInfo(@"startRecording");
}

RCT_EXPORT_METHOD(stopRecording) {
  RCTLogInfo(@"startRecording");
}

RCT_EXPORT_METHOD(playRecording) {
  RCTLogInfo(@"playRecording");
}


@end
