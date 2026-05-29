import React from "react";
import { Text } from "react-native";
import ICONS from "./icon.js"

function Icon({ icon, width = 24, height = 24 }) {
  const SvgIcon = ICONS[icon];

  if (!SvgIcon) return <Text>?</Text>;

  return <SvgIcon width={width} height={height} />;
}

export default Icon;