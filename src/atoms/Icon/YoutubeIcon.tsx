import * as React from "react";

function SvgYoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="100%"
      height="100%"
      {...props}
    >
      <path d="M21.78 8s-.2-1.37-.8-1.97c-.75-.8-1.6-.8-2-.85C16.2 4.98 12 5 12 5s-4.18-.02-6.97.18c-.4.05-1.24.05-2 .85-.6.6-.8 1.97-.8 1.97s-.2 1.63-.23 3.23v1.7c.03 1.6.23 3.2.23 3.2s.2 1.4.8 2c.76.8 1.75.76 2.2.85 1.57.15 6.6.18 6.77.18 0 0 4.2 0 7-.2.38-.04 1.23-.04 2-.84.6-.6.8-1.98.8-1.98s.2-1.6.2-3.22v-1.7c-.02-1.6-.22-3.22-.22-3.22zm-11.8 7V9.16l5.35 3.03L9.97 15z" />
    </svg>
  );
}

const MemoSvgYoutubeIcon = React.memo(SvgYoutubeIcon);
export default MemoSvgYoutubeIcon;
