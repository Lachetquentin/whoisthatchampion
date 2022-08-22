import Footer from 'lol/components/shared/footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen overflow-auto">
      <div className="max-w-[720px] mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
