import React from "react";
import ICONS from "./icon.js"

function Icon({ icon, width = 24, height = 24 }) {
  const SvgIcon = ICONS[icon];

  if (!SvgIcon) return <p>?</p>;

  return <SvgIcon width={width} height={height} />;
}

export default Icon;