import { Block } from "../../models/ContentBlocks";

export const CodeEditor = ({ blok }: Block.CodeEditor) => {
  return (
    <iframe
      src={blok.src}
      className="w-full border-0 overflow-hidden"
      style={{
        height: "800px",
      }}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  );
};
