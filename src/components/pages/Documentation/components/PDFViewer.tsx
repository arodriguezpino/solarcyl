import { Viewer, Worker } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PDFViewerProps {
  fileUrl: string;
}

export const PDFViewer = ({ fileUrl }: PDFViewerProps) => {
  const zoomPluginInstance = zoomPlugin();
  const { Zoom } = zoomPluginInstance;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "900px",
      }}
    >
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid rgba(0, 0, 0, .3)",
          padding: "0.25rem 0",
          justifyContent: "center",
        }}
      >
        <Zoom levels={[0.4, 0.8, 1.2, 1.6, 2.4, 3.2]} />
      </div>
      <div
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={fileUrl}
            enableSmoothScroll
            plugins={[zoomPluginInstance]}
          />
        </Worker>
      </div>
    </div>
  );
};
