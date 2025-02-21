interface HistoryVideosModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}
export function HistoryVideosModal({
  isOpen,
  onClose,
  videoUrl,
}: HistoryVideosModalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-0 z-[100] flex w-full items-center justify-center text-center transition-opacity duration-300 ease-in-out">
          <button
            onClick={() => onClose()}
            className="absolute z-[100] h-full w-full bg-black/80 backdrop-blur"
          />
          <div className="z-[120] rounded-lg bg-black bg-cover bg-no-repeat p-4 shadow-lg">
            <iframe
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video w-[50vw] rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
