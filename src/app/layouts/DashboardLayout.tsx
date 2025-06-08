import NavBar from "../_components/Navbar";

interface Params {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Params) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
