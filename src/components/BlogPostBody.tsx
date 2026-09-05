import type { BlogBlock } from "@/lib/blogPosts";

export default function BlogPostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        if (block.type === "heading") {
          return (
            <h2 key={i} className="text-2xl font-extrabold text-neutral-900 pt-2">
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={i} className="space-y-3">
              {block.items?.map((item, j) => (
                <li key={j} className="flex items-start gap-3 bg-neutral-50 rounded-xl p-4">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-neutral-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p key={i} className="text-neutral-600 text-lg leading-relaxed">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
