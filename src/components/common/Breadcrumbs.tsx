import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 text-sm text-slate-500">
      <ol className="flex items-center space-x-2 flex-wrap">
        <li>
          <Link
            href="/"
            className="flex items-center text-slate-500 hover:text-brand-blue transition-colors"
          >
            <Home className="w-3.5 h-3.5 mr-1" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-slate-500 hover:text-brand-blue transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-800 font-medium">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
