import RootLayout from "@/components/layout/root";
import React from "react";

export default function Builder() {
  return <div>Builder</div>;
}
Builder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
