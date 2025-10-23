// components/VirtualTour.tsx
export default function VirtualTour() {
  return (
    <div className="h-full w-full bg-red-500 md:aspect-video">
      <iframe
        src="https://www.elo3d.com.br/FOCO_CONSUTORIA/FOCO_ATUAL/tour.html"
        title="Virtual Tour"
        className="h-full w-full border-0"
        allow="fullscreen; xr-spatial-tracking; autoplay"
        allowFullScreen
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
