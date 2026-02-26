import Navbar from "../Navbar";
import Footer from "../Footer";

interface Props {
  children: React.ReactNode;
}

export default function AppShell({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-(--bg-main) text-(--text-primary)">
      <Navbar />
      {/*<main className="flex-1 w-full px-6 sm:px-10 lg:px-16 xl:px-24 py-8">*/}
        {children}
      {/*</main>*/}
      <Footer />
    </div>
  );
}