import type { ReactNode } from "react";

interface CardProps {
  title: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
}

export function Card({ title, content, footer }: CardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        <div className="mt-2 text-sm text-gray-600">{content}</div>
      </div>
      {footer ? (
        <div className="border-t border-gray-200 px-6 py-4">{footer}</div>
      ) : null}
    </article>
  );
}
