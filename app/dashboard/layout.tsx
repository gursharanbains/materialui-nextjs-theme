import Navbar from "@/ui/dashboard/navbar/Navbar";
import Sidebar from "@/ui/dashboard/sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
