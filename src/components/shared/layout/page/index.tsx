interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#FAFAFA] w-full h-full">
      <div className="max-w-[720px] mx-auto pt-[16px]">{children}</div>
    </div>
  );
};

export default PageLayout;
