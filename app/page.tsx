"use client";

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/Components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState(2023);
  const [fuel, setFuel] = useState("");
  const [limit, setLimit] = useState(15);
  const [loading, setLoading] = useState(false);
  const [allCars, setAllCars] = useState([]);

  const getCars = async () => {
    setLoading(false);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer,
        model: model,
        year: year,
        fuel: fuel,
        limit: limit,
      });

      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, year, limit, model, fuel]);


  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel} />
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>

            {
              loading && (
                <div className="w-full flex-center mt-16">
                <Image
                src='/loader.svg'
                width={50}
                height={50}
                alt='loading'
                className="object-contain"
                />
                </div>
              )
            }

            <ShowMore pageNumber={limit / 15} isNext={limit > allCars.length} setLimit={setLimit} />
          </section>
        ) : (
          <div className="home__error-container">
            <h1>Ooooops, no result found</h1>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
