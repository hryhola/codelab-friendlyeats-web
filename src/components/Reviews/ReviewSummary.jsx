export async function GeminiSummary({ restaurantId }) {
  try {
      const text = 'Review text lol 123';

      return (
          <div className="restaurant__review_summary">
              <p>{text}</p>
              <p>✨ Summarized with Gemini</p>
          </div>
      );
  } catch (e) {
      console.error(e);
      return <p>Error contacting Gemini</p>;
  }
}
export function GeminiSummarySkeleton() {
  return (
    <div className="restaurant__review_summary">
      <p>✨ Summarizing reviews with Gemini...</p>
    </div>
  );
}
