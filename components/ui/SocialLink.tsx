interface SocialLinkProps {
  href: string;
  label: string;
  children: React.ReactNode;
}

export function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
    >
      {children}
    </a>
  );
}
