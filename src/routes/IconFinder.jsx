import { createSignal } from "solid-js";

function FoodIconFinder() {
  const [keyword, setKeyword] = createSignal("");
  const [iconUrl, setIconUrl] = createSignal(null);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal(null);

  const iconSets = ["mdi", "fa", "ic", "tabler", "fluent", "twemoji"];
  const fallbackFoodIcons = ["pizza", "burger", "apple", "bread", "carrot", "noodles", "cake", "egg", "ice-cream"];

  const findIconUrl = async (words) => {
    for (const word of words) {
      for (const set of iconSets) {
        const formatted = word.toLowerCase().replace(/\s+/g, "-");
        const url = `https://api.iconify.design/${set}:${formatted}.svg`;
        try {
          const res = await fetch(url, { method: "HEAD" });
          if (res.ok) return url;
        } catch (_) {}
      }
    }
    return null;
  };

  const handleClick = async () => {
    setLoading(true);
    setIconUrl(null);
    setError(null);

    const input = keyword().trim().toLowerCase();
    if (!input) {
      setError("Inserisci una parola.");
      setLoading(false);
      return;
    }

    const allWords = [input, ...fallbackFoodIcons];
    const found = await findIconUrl(allWords);

    if (found) {
      setIconUrl(found);
    } else {
      setError("Icona non trovata.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", "font-family": "Arial" }}>
      <h2>Icona di cibo</h2>
      <input
        type="text"
        value={keyword()}
        onInput={(e) => setKeyword(e.currentTarget.value)}
        placeholder="Es. pizza, mela, panino"
        style={{ padding: "8px", width: "250px", "margin-right": "10px" }}
      />
      <button onClick={handleClick} style={{ padding: "8px 16px" }}>
        Genera icona
      </button>

      <div style={{ "margin-top": "20px" }}>
        {loading() && <p>Caricamento...</p>}
        {error() && <p style={{ color: "red" }}>{error()}</p>}
        {iconUrl() && <img src={iconUrl()} alt="Icona cibo" width="100" height="100" />}
      </div>
    </div>
  );
}

export default FoodIconFinder;
