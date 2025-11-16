interface Props {
  svg: string;
  loading: boolean;
  image: File | null;
}

export default function SvgResult({ svg, loading, image }: Props) {

  const download = () => {
    if (!svg || !image) return;

    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = image.name.replace(/\.[^/.]+$/, "") + ".svg";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">

      {!svg && !loading && (
        <div className="border-2 border-dashed border-border bg-card/50 rounded-xl h-[400px] flex items-center justify-center">
          <p className="text-muted-foreground">Aguardando conversão...</p>
        </div>
      )}

      {loading && (
        <div className="border bg-card rounded-xl h-[400px] flex items-center justify-center">
          <p className="text-primary animate-pulse">Convertendo...</p>
        </div>
      )}

      {svg && (
        <>
          <div className="bg-card border rounded-xl overflow-hidden">
            <div className="aspect-square p-8 flex items-center justify-center bg-muted/30">
              <div dangerouslySetInnerHTML={{ __html: svg }} />
            </div>
          </div>

          <button
            onClick={download}
            className="w-full bg-secondary text-white font-semibold py-3 px-6 rounded-lg"
          >
            Download SVG
          </button>
        </>
      )}
    </div>
  );
}
