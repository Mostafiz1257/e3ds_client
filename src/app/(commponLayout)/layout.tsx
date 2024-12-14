import Contract from "@/src/components/contract/Contract";
import Footer from "@/src/components/footer/Footer";
import Navbar from "@/src/components/navabr/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Contract />
      <Footer />
    </div>
  );
};
export default layout;
