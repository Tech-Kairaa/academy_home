import dynamic from "next/dynamic";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

const GalleryIsotope = dynamic(
  () => import("../src/components/isotope/GalleryIsotope"),
  {
    ssr: false,
  }
);

const Gallery = () => {
  return (
    <Layout>
      <PageBanner pageName={"Gallery"} />
      <GalleryIsotope />
    </Layout>
  );
};
export default Gallery;
