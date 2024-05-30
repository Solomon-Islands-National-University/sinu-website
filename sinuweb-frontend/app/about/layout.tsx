import BreadCrumb from "@/components/breadcrumb/breadcrumb";

function Layout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (  
        <>
        <BreadCrumb/>
        {children}
        </>
    );
}

export default Layout;