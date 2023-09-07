interface HighlightedTextProps {
  part: string;
  query: string;
}

export const HighlightedText: React.FC<HighlightedTextProps> = ({
  part,
  query,
}) => {
  return part.toLowerCase() === query.toLowerCase() ? (
    <strong className="font-extrabold">{part}</strong>
  ) : (
    <span>{part}</span>
  );
};
