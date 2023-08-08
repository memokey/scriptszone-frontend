import React from "react";
import AdminHeader from "./AdminHeader";
import Footer from "../../Layout/Footer";
import AdBlockerDetector from "../../AdBlockerDetector";

export type AdminLayoutType = {
  children: any;
}

const AdminLayout = (props: AdminLayoutType) => {
  return (
    <AdBlockerDetector>
      <div>
        <AdminHeader />
        <div className="h-[calc(100vh-309px)] overflow-auto">
          {props.children}
        </div>
        <Footer />
      </div>
    </AdBlockerDetector>
  );
}

export default AdminLayout;