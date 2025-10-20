




import React, { ReactNode, useRef } from 'react';
import {
  Animated,
  StatusBar,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';

type ParallaxProps = {
  headerBackgroundColor?: { light: string; dark: string };
  headerImage?: ReactNode;
  children: ReactNode;
  headerHeight?: number;
};

export default function ParallaxScrollView({
  headerBackgroundColor = { light: '#A1CEDC', dark: '#3f3c3cff' },
  headerImage,
  children,
  headerHeight = 220,
}: ParallaxProps) {
  const scrollY = useRef(new Animated.Value(0)).current;
  const { height: screenHeight } = useWindowDimensions();


  const translateY = scrollY.interpolate({
    inputRange: [-headerHeight, 0, headerHeight],
    outputRange: [-headerHeight / 2, 0, headerHeight * 0.75],
  });

  const scale = scrollY.interpolate({
    inputRange: [-headerHeight, 0],
    outputRange: [1.3, 1],
    extrapolateRight: 'clamp',
  });

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <StatusBar barStyle="light-content" />
      {/* Header dengan efek parallax */}
      <Animated.View
        style={[
          styles.header,
          {
            height: headerHeight,
            transform: [{ translateY }, { scale }],
            backgroundColor: headerBackgroundColor.light,
          },
        ]}
      >
        {headerImage}
        {/* Overlay gradasi agar teks terlihat jelas */}
        <View style={styles.overlay} />
      </Animated.View>

      {/* Konten utama */}
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={[
          styles.scrollContent,
          { minHeight: screenHeight + headerHeight },
        ]}
      >
        <View style={[styles.innerContent, { paddingTop: headerHeight * 0.8 }]}>
          {children}
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    width: '100%',
    top: 0,
    overflow: 'hidden',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  scrollContent: {
    flexGrow: 1,
  },
  innerContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
});
