function PageContainer({ children }) {
  return (
    <div className="lg:container mx-auto p-2 flex flex-col items-center">
      {children}
    </div>
  );
}

export default PageContainer;
