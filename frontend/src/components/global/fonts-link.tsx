type Props = {
  font: string;
};

const fontsMap: Record<string, string> = {
  Poppins: 'Poppins:wght@300;400;500;600;700;800;900',
  'Public Sans': 'Public+Sans:wght@400;500;600;700;800',
  'Space Grotesk': 'Space+Grotesk:wght@300;400;500;600;700&display=swap',
  Roboto: 'Roboto:wght@300;400;500;700;900',
};

export function FontsLink({ font }: Props) {
  const selectedFont = fontsMap[font];

  if (!selectedFont) return null;

  return (
    <link
      id="google-font-imports"
      href={`https://fonts.googleapis.com/css2?family=${selectedFont}`}
      rel="stylesheet"
    />
  );
}
