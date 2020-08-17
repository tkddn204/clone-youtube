import * as React from "react";

function SvgShareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="currentColor"
      {...props}
    >
      <path d="M11.733 8.267V4l7.467 7.467-7.467 7.466V14.56C6.4 14.56 2.667 16.267 0 20 1.067 14.667 4.267 9.333 11.733 8.267z" />
    </svg>
  );
}

const MemoSvgShareIcon = React.memo(SvgShareIcon);
export default MemoSvgShareIcon;
