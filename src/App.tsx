import { FloatingContact } from "./components/FloatingContact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NotFound } from "./components/NotFound";
import { AboutPage } from "./pages/AboutPage";
import { CapabilitiesPage } from "./pages/CapabilitiesPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { QuotePage } from "./pages/QuotePage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ServicesPage } from "./pages/ServicesPage";
import { usePathname } from "./routing/router";

function App() {
  const path = usePathname();

  return (
    <>
      <Header />
      {renderRoute(path)}
      <Footer />
      <FloatingContact />
    </>
  );
}

function renderRoute(path: string) {
  if (path === "/") return <HomePage />;
  if (path === "/gioi-thieu") return <AboutPage />;
  if (path === "/dich-vu") return <ServicesPage />;
  if (path.startsWith("/dich-vu/")) return <ServiceDetailPage slug={path.replace("/dich-vu/", "")} />;
  if (path === "/nang-luc") return <CapabilitiesPage />;
  if (path === "/du-an") return <ProjectsPage />;
  if (path.startsWith("/du-an/")) return <ProjectDetailPage slug={path.replace("/du-an/", "")} />;
  if (path === "/bao-gia") return <QuotePage />;
  if (path === "/lien-he") return <ContactPage />;

  return <NotFound />;
}

export default App;
