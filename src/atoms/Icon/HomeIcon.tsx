import * as React from "react";

function SvgHomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="100%"
      height="100%"
      {...props}
    >
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" />
    </svg>
  );
}

const MemoSvgHomeIcon = React.memo(SvgHomeIcon);
export default MemoSvgHomeIcon;
