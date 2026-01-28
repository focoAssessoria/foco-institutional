"use client";

import { createPortal } from "react-dom";

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
  if (typeof document === "undefined") return null;
  if (!isOpen) return null;

  const modal = (
    <div className="fixed inset-0 z-[9999] flex w-full items-center justify-center p-4">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 z-[100] bg-black/80 backdrop-blur"
        aria-label="Fechar"
      />
      <div className="relative z-[120] rounded-lg bg-black p-4 shadow-lg">
        <iframe
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video w-[90vw] max-w-4xl rounded-lg sm:w-[70vw] md:w-[50vw]"
        />
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
