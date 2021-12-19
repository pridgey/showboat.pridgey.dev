import { FlexContainer } from "../components";
import { useState, ChangeEvent, useEffect } from "react";
import { Show } from "./../types";

export const ShowSearch = () => {
  const [input, setInput] = useState("");
  const [shows, setShows] = useState<Show[]>([]);

  let searchTimeout: NodeJS.Timeout;

  // Wait 3 seconds, then query for shows and show them
  useEffect(() => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      fetch(`https://api.tvmaze.com/search/shows?q=${encodeURI(input)}`)
        .then((res) => res.json())
        .then((shows: Show[]) => {
          setShows(shows);
        });
    }, 3000);
  }, [input]);

  return (
    <FlexContainer Direction="column" AlignItems="flex-start">
      <input value={input} type="text" onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
      <div>
        {shows.map((show, index) => (
          <div key={index}>{show.show.name}</div>
        ))}
      </div>
    </FlexContainer>
  );
};
