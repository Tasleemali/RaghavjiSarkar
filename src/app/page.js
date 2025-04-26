'use client'
import { useEffect, useState } from "react";
import Contact from "@/components/compo-ui/contact";
import Facilities from "@/components/compo-ui/facilities";
import Gallery from "@/components/compo-ui/gallery";
import Hero from "@/components/compo-ui/hero";
import Rooms from "@/components/compo-ui/rooms";

// Optional: your page skeleton layout
const PageSkeleton = () => (
  <div className="animate-pulse space-y-6 px-4 py-10 text-[#6b0f1a]">
    <div className="h-48 bg-[#e0dccc] rounded-xl" />
    <div className="h-40 bg-[#e0dccc] rounded-xl" />
    <div className="h-32 bg-[#e0dccc] rounded-xl" />
    <div className="h-80 bg-[#e0dccc] rounded-xl" />
  </div>
)

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500) // simulate 1.5s load
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-screen-2xl text-black mx-auto">
      {loading ? (
        <PageSkeleton />
      ) : (
        <>
          <Hero />
          <Rooms />
          <Facilities />
          <Gallery />
          <Contact />
        </>
      )}
    </div>
  );
}
