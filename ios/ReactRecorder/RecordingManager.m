//
//  RecordingManager.m
//  ReactRecorder
//
//  Created by Vince Yuan on 9/21/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RecordingManager.h"
#import "RCTLog.h"
#import "ASScreenRecorder.h"
#import "AppDelegate.h"
#import <AudioToolbox/AudioToolbox.h>
@import AVFoundation;
@import AVKit;

@interface RecordingManager () {

}

@property (nonatomic, assign) BOOL isRecording;
@property (nonatomic, assign) BOOL hasRecord;

@end

@implementation RecordingManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(startRecording) {
  if (_isRecording) return;

  dispatch_async(dispatch_get_main_queue(), ^{

    ASScreenRecorder *recorder = [ASScreenRecorder sharedInstance];
    if (recorder.isRecording) {
      [recorder stopRecordingWithCompletion:nil];
    }

    NSString *tmpDirectory = NSTemporaryDirectory();
    NSString *tempVideoPath = [tmpDirectory stringByAppendingPathComponent:@"video.mp4"];
    recorder.videoURL = [NSURL fileURLWithPath:tempVideoPath];

    // If the file already exists, delete it, otherwise recording will fail.
    [self removeTempFilePath:tempVideoPath];

    [recorder startRecording];
    RCTLogInfo(@"startRecording");

    _isRecording = YES;
    _hasRecord = YES;
  });
}

RCT_EXPORT_METHOD(stopRecording) {
  if (!_isRecording) return;

  dispatch_async(dispatch_get_main_queue(), ^{

    ASScreenRecorder *recorder = [ASScreenRecorder sharedInstance];
    [recorder stopRecordingWithCompletion:^{
      RCTLogInfo(@"stopRecording");
      _isRecording = NO;
    }];
  });
}

RCT_EXPORT_METHOD(playRecording) {
  if (_isRecording) return;
  if (!_hasRecord) return;

  dispatch_async(dispatch_get_main_queue(), ^{
    RCTLogInfo(@"playRecording");

    ASScreenRecorder *recorder = [ASScreenRecorder sharedInstance];

    // create an AVPlayer
    AVPlayer *player = [AVPlayer playerWithURL:recorder.videoURL];
    // create a player view controller
    AVPlayerViewController *controller = [[AVPlayerViewController alloc]init];
    controller.player = player;
    [player play];

    // show the view controller
    UIViewController *rootViewController = [[(AppDelegate *)[UIApplication sharedApplication].delegate window] rootViewController];
    [rootViewController presentViewController:controller animated:NO completion:nil];
  });
}

- (void)removeTempFilePath:(NSString*)filePath
{
  NSFileManager* fileManager = [NSFileManager defaultManager];
  if ([fileManager fileExistsAtPath:filePath]) {
    NSError* error;
    if ([fileManager removeItemAtPath:filePath error:&error] == NO) {
      NSLog(@"Could not delete old recording:%@", [error localizedDescription]);
    }
  }
}

@end
