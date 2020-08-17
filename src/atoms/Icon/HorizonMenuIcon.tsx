import * as React from "react";

function SvgHorizonMenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="currentColor"
      {...props}
    >
      <circle cx={5} cy={12} r={2} />
      <circle cx={12} cy={12} r={2} />
      <circle cx={19} cy={12} r={2} />
    </svg>
  );
}

const MemoSvgHorizonMenuIcon = React.memo(SvgHorizonMenuIcon);
export default MemoSvgHorizonMenuIcon;
