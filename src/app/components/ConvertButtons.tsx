interface Props {
  loading: boolean;
  onConvert: () => void;
  onReset: () => void;
}

export default function ConvertButtons({ loading, onConvert, onReset }: Props) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onConvert}
        disabled={loading}
        className="flex-1 bg-primary text-white font-semibold py-3 px-6 rounded-lg"
      >
        {loading ? "Convertendo..." : "Converter para SVG"}
      </button>

      <button
        onClick={onReset}
        className="px-4 py-3 border rounded-lg hover:bg-muted"
      >
        Limpar
      </button>
    </div>
  );
}
