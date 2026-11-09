import { siGithub, siGitlab } from "simple-icons";

type BrandIconProps = {
  className?: string;
  title?: string;
};

function BrandGlyph({
  path,
  className,
  title,
}: BrandIconProps & { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label={title}
      focusable="false"
    >
      <path d={path} fill="currentColor" />
    </svg>
  );
}

export function GithubIcon({
  className,
  title = "GitHub",
}: BrandIconProps) {
  return <BrandGlyph path={siGithub.path} className={className} title={title} />;
}

export function GitlabIcon({
  className,
  title = "GitLab",
}: BrandIconProps) {
  return <BrandGlyph path={siGitlab.path} className={className} title={title} />;
}
