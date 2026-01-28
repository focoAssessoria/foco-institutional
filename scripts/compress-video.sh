#!/bin/bash
# Script opcional: comprime focosite.mp4 para carregamento mais rápido.
# Requer ffmpeg instalado: brew install ffmpeg (macOS) ou apt install ffmpeg (Linux)

set -e
INPUT="${1:-focosite.mp4}"
OUTPUT="public/focosite.mp4"

if ! command -v ffmpeg &> /dev/null; then
  echo "ffmpeg não encontrado. Instale com: brew install ffmpeg"
  exit 1
fi

echo "Comprimindo $INPUT -> $OUTPUT (H.264, CRF 28, 720p max)..."
ffmpeg -i "$INPUT" -vf "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease" \
  -c:v libx264 -crf 28 -preset medium -movflags +faststart \
  -an -y "$OUTPUT"

echo "Pronto. Vídeo otimizado em $OUTPUT"
