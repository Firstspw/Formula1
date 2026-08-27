"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export default function withAuth(Component) {
  return function ProtectedRoute(props) {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        Swal.fire({
          background: "#09090b",
          color: "#ffffff",
          icon: "warning",
          title: "ACCESS RESTRICTED",
          text: "กรุณาเข้าสู่ระบบก่อนเข้าใช้งานหน้านี้",
          confirmButtonColor: "#E10600",
          confirmButtonText: "ไปยังหน้าเข้าสู่ระบบ",
        }).then(() => {
          router.push("/login");
        });
      } else {
        setIsAuthenticated(true);
      }
    }, [router]);

    if (!isAuthenticated) {
      return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 border-4 border-[#E10600] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs font-mono text-zinc-400 tracking-widest uppercase">
              Verifying Telemetry Pass...
            </span>
          </div>
        </div>
      );
    }

    return <Component {...props} />;
  };
}