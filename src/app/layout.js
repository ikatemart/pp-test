import 'styles/global.css';
import favicon from 'images/favicon.png';

const metadata = {
  title: 'Acme Corp',
  description: 'Test task for PixelPoint',
};

const Layout = ({ children }) => {
  return (
    <html className="text-16 text-primary font-roboto bg-black overflow-x-hidden" lang="en">
      <head>
        <link rel="icon" href={favicon.src} sizes="any" />
        <Fonts/>
      </head>
      <body>{children}</body>
    </html>
  );
};

const Fonts = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&family=Poppins:wght@200;400&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

export default Layout;
export { metadata };
