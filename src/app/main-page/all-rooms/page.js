'use client';
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GlobaleContext } from "@/context";

export default function AllRooms() {
  const {rooms, setRooms} = useContext(GlobaleContext)
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    async function fetchProducts() {
      try {
        const res = await fetch("/api/get");
        const data = await res.json();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Skeleton for loading state
  if (loading) {
    return (
      <div className="bg-[#fefae0] text-[#6b0f1a] min-h-screen px-4 md:px-6 py-5">
        <div className="animate-pulse space-y-3">
        <div className='text-center mb-6'>
            <div className='h-8 w-32 mx-auto bg-gray-300 rounded'></div>
          </div>{/* Skeleton for the heading */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="animate-pulse space-y-3">
                <div className="bg-gray-300 h-52 w-full rounded-sm"></div>
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-8 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fefae0] text-[#6b0f1a]">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-6 py-5">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5">
          Our Rooms
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {rooms.map((rom, idx) => (
            <div key={idx}>
              <img
                src={rom.image}
                className="w-full h-52 object-cover rounded-sm"
              />
              <div>
                <h1 className="font-semibold text-lg">{rom.name}</h1>
                <p>{rom.desc}</p>
                <p>₹{rom.price}</p>
                
                  <button className="mt-2 px-3 py-1 border-2 border-[#6b0f1a] rounded-md hover:text-[#fefae0] hover:bg-[#6b0f1a]">
                    Book now
                  </button>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
