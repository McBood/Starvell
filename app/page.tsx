import CatalogHeader from "../entities/catalog/components/CatalogHeader";
import Container from "@/shared/ui/Container";
import FiltersBar from "@/features/catalog-filters/FiltersBar";
import Header from "@/widgets/Header";
import LotList from "@/entities/catalog/components/LotList";
import SeoSection from "@/entities/catalog/components/SeoSection";
import Footer from "@/widgets/Footer";
import Divider from "@/shared/ui/Divider";

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <CatalogHeader />
        <Divider mt="mt-[24px]" mb="mb-[16px]" />
        <FiltersBar />
        <LotList />
        <Divider mt="mt-[24px]" mb="mb-[16px]" />
        <SeoSection />
      </Container>
      <Footer />
    </div>
  );
}
