import { useEffect, useState } from "react";

export const useFetch = (url, key) => {
  // Opretter tilstande for loading, error og apiData
  const [loading, setLoading] = useState(true); // Tilstand for at angive om data indlæses eller ej
  const [error, setError] = useState(null); // Tilstand for at håndtere eventuelle fejl under hentning af data
  const [apiData, setApiData] = useState(null); // Tilstand for at gemme den hentede data

  useEffect(() => {
    const fetchData = async () => {
      // Henter data fra den angivne URL
      const res = await fetch(url);
      const data = await res.json();

      try {
        if (data) {
          console.log(data); // Logger den hentede data til konsollen

          // Opdaterer apiData afhængigt af om key er angivet eller ej
          key ? setApiData(data[key]) : setApiData(data);

          setLoading(false); // Indlæsning er færdig, sætter loading til false
          // console.log("hej" ,data[key]);
        }
      } catch (error) {
        setError(error); // Opdaterer fejltilstanden med fejlmeddelelsen
        setLoading(false); // Indlæsning er færdig, sætter loading til false
        console.error(error); // Logger fejlen til konsollen
      }
    };

    fetchData(); // Kalder fetchData-funktionen for at starte datahentningen
  }, [url, key]); // Kører useEffect igen, når url eller key ændres

  // Returnerer loading, error og apiData som et objekt
  return {
    loading,
    error,
    apiData,
  };
};
