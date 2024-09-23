// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Video App',
  description: 'Aplicação para listagem de vídeos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Video App</h1>
        </header>
        <main>{children}</main>
        <footer>© 2024 Video App</footer>
      </body>
    </html>
  );
}
