//
//  GReactManager.m
//  GogoTV
//
//  Created by 朱国清 on 17/4/20.
//  Copyright © 2017年 朱国清. All rights reserved.
//

#import "GBridgeManager.h"



#ifdef DEBUG
#define RN_DEV //RN调试，模拟器要打开
#endif


static GBridgeManager * bridgeManager;

@implementation GBridgeManager{
    NSMutableDictionary<NSString*,JSReturnValueBlock> * invokeMap;
}
#pragma mark - 静态函数
+(instancetype)shareInstance{
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        bridgeManager = [[GBridgeManager alloc]init];
    });
    return bridgeManager;
}
+(RCTBridge*)shareBridge{
    return [GBridgeManager shareInstance].bridge;
}
#pragma mark - 成员函数
-(instancetype)init{
    if (self=[super init]) {
        invokeMap = [[NSMutableDictionary alloc]init];
        
        [self createBridge];
    }
    return self;
}
-(void)createBridge{
    _bridge = [[RCTBridge alloc]initWithDelegate:self launchOptions:NULL];
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(javaScriptDidLoad:)
                                                 name:RCTJavaScriptDidLoadNotification
                                               object:_bridge];
}
- (void)enqueueJSCall:(NSString *)module
               method:(NSString *)method
                 args:(NSArray *)args{
    [_bridge enqueueJSCall:module method:method args:args completion:nil];
}
-(RCTRootView *) genRnViewWithModule:(NSString *)moduleName initProps:(NSDictionary *)initProps{
    return [[RCTRootView alloc]initWithBridge:[self bridge] moduleName:moduleName initialProperties:initProps];
}

#pragma mark - RCTBridgeDelegate
-(NSURL *)sourceURLForBridge:(RCTBridge *)bridge{

    NSURL * rnPath;
#ifdef RN_DEV
    rnPath = [NSURL URLWithString:@"http://127.0.0.1:8081/index.bundle?platform=ios"];
#else
    rnPath = [NSURL URLWithString:[[NSBundle mainBundle] pathForResource:@"main" ofType:@"jsbundle"]];
#endif
    return rnPath;
}

#pragma mark - javaScript notification
- (void)javaScriptDidLoad:(NSNotification *)notification{
    if (self.javaScriptDidLoadBlock) {
        self.javaScriptDidLoadBlock();
    }
}

@end
