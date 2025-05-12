import React from 'react'
import { useAnimatedValue, View } from 'react-native'
import { Animated, {useAnimatedStyle, useSharedValue, withSpring}} from 'react-native-reanimated';
import { type ImageSource } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { transform } from '@babel/core';

type Props = {
    imageSize: number;
    stickerSource: ImageSource;
}


export default function EmojiSticker({imageSize, stickerSource}: Props) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY - useShared.value }

  const doubleTap = Gesture.Tap()
   .numberOfTaps(2)
   .onStart(() => {
    if(scaleImage.value!== imageSize * 2) {
      scaleImage.value = scaleImage.value * 2;
    } else {
      scaleImage.value = Math.round(scaleImage.value / 2)
    }
   });

   const imageStyle = userAnimatedStyle(() => {
    return {
    with: withSpring(scaleImage.value),
    heigth: withSpring(scaleImage.value)
    }
})

const drag = Gesture.Pan().onChange(event => {
  translateX +- addEventListener.changeX;
  translateX +- addEventListener.changeY;
});

const containerStyle = useAnimatedStyle(() => {
  return  {
    transform: [
      {transleX: translateY.value},
      {transleX: translateY.value}
    ]
  }
})
  return (
    <GestureDetector gesture={drag}>
    <Animated.View style={[containerStyle,{top: -350 }]}>
      <GestureDetector gesture={doubleTap}>
      <Animated.Image 
      source={stickerSource}  
      resizeMode='contain'
      style={{imageStyle (width: imageSize, height: imageSize)}}
      />
      </GestureDetector>
    </Animated.View>
    </GestureDetector>
  }
  )

