import React from 'react';
import { Svg, Circle, G, ForeignObject } from 'react-native-svg';
import { View, Text } from 'react-native';

const CENTER = 50;
const VIEWBOX_SIZE = 100;
const EPSILON = 0.5; // Small buffer for clean arc start

// Hardcoded Color Values
const PRIMARY_COLOR = '#ffffff'; // sky-950 (Progress Fill)
const TRACK_COLOR = '#104e64'; // gray-300 (Track)

// ARC CONFIGURATION
const ARC_PERCENTAGE = 0.7; // 70% of a full circle

// Rotation to position the 70% arc at the bottom-center (54deg to center gap + 90deg to rotate to bottom)
const FINAL_ARC_ROTATION = 144;

const ProgressBar = ({ value = 50, min = 0, max = 100, stroke = 12, size = 100 }) => {
  const absoluteValue = Math.abs(value);

  // The maximum magnitude for the progress bar is determined by max
  // We assume min is 0 or less, but for progress calculation, we treat the range as 0 to max.
  const progressMax = Math.abs(max);

  // 1. Calculate Progress (Clamped) based on absolute value
  let progressPercent = (absoluteValue - min) / (progressMax - min);
  progressPercent = Math.min(1, Math.max(0, progressPercent));

  // 2. SVG Math
  const normalizedRadius = CENTER - stroke / 2;
  const FULL_CIRCUMFERENCE = 2 * Math.PI * normalizedRadius;
  const VISIBLE_ARC_LENGTH = FULL_CIRCUMFERENCE * ARC_PERCENTAGE;
  const HIDDEN_GAP_LENGTH = FULL_CIRCUMFERENCE * (1 - ARC_PERCENTAGE);

  // 3. Calculate Offset
  let offset;

  // Strict boundary and calculation logic
  if (progressPercent <= 0) {
    offset = FULL_CIRCUMFERENCE; // Hide everything
  } else if (progressPercent >= 1) {
    offset = HIDDEN_GAP_LENGTH; // Show 70% arc length
  } else {
    let filledLength = VISIBLE_ARC_LENGTH * progressPercent;

    // Apply epsilon buffer for clean arc start, preventing small value bleed
    filledLength = Math.max(0, filledLength - EPSILON);

    // Offset = Hidden Gap + Remaining Unfilled Arc
    offset = HIDDEN_GAP_LENGTH + (VISIBLE_ARC_LENGTH - filledLength);
  }

  offset = parseFloat(offset.toFixed(4));

  // 4. Track Dash Array
  const trackDashArray = `${VISIBLE_ARC_LENGTH} ${HIDDEN_GAP_LENGTH}`;

  return (
    <View style={{ width: size, height: size, position: 'relative' }}>
      <Svg width="100%" height="100%" viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}>
        {/* Track Circle */}
        <Circle
          stroke={TRACK_COLOR}
          strokeWidth={stroke}
          strokeDasharray={trackDashArray}
          r={normalizedRadius}
          cx={CENTER}
          cy={CENTER}
          fill="transparent"
          style={{
            transform: [{ rotate: `${FINAL_ARC_ROTATION}deg` }],
            transformOrigin: '50% 50%',
          }}
        />

        {/* Progress Circle */}
        <Circle
          stroke={PRIMARY_COLOR}
          strokeWidth={stroke}
          strokeDasharray={FULL_CIRCUMFERENCE}
          strokeDashoffset={offset}
          r={normalizedRadius}
          cx={CENTER}
          cy={CENTER}
          fill="transparent"
          style={{
            transform: [{ rotate: `${FINAL_ARC_ROTATION}deg` }],
            transformOrigin: '50% 50%',
          }}
        />
      </Svg>

      {/* Text Layer - Uses original 'value' to display the correct sign */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: PRIMARY_COLOR, fontSize: 18, fontWeight: 'bold' }}>
          {/* Display original value, which includes the negative sign if present */}
          {value.toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default ProgressBar;
