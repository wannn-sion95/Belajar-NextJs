// CSS / SCSS / LESS
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.less";

// Gambar
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.bmp";
declare module "*.tiff";
declare module "*.ico";
declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

// Font
declare module "*.woff";
declare module "*.woff2";
declare module "*.ttf";
declare module "*.eot";

// Media
declare module "*.mp3";
declare module "*.wav";
declare module "*.ogg";
declare module "*.mp4";
declare module "*.webm";
declare module "*.mov";

// JSON (kalau kamu import JSON langsung)
declare module "*.json";
