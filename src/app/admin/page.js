"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import GlobalLoader from "@/components/shared/Loaders/GlobalLoader";

const page = () => {
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (pathname === "/admin") {
      router.push("/admin/dashboard");
    }
  }, []);
  return (
    <>
      <GlobalLoader />
    </>
  );
};

export default page;
