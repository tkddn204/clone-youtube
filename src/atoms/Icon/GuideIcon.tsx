import * as React from "react";

function SvgGuideIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
  );
}

const MemoSvgGuideIcon = React.memo(SvgGuideIcon);
export default MemoSvgGuideIcon;
