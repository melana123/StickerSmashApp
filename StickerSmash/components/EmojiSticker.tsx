import React from 'react'
import { View } from 'react-native'
import { Animated } from 'react-native-reanimated';
import { Image, type ImageSource } from 'react-native';

type Props = {
    imageSize: number;
    stickerSource: ImageSource;
}


export default function EmojiSticker({imageSize, stickerSource}: Props) {
  return (
    <View style={{top: -350 }}>
      <Animated.Image source={stickerSource} 
      resizeMode='contain'
      style={{ width: imageSize, height: imageSize}}/>
    </View>
  )
}