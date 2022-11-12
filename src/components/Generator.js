import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRandomQuote } from "./../api/quotesApi";
import { useState } from "react";

const Generator = () => {
  const [incrementor, setIncrementor] = useState(0);

  const { data: quote, isLoading } = useQuery(
    ["queryQuote", incrementor],
    getRandomQuote
  );

  console.log(quote);

  return (
    <div className="Generator">
      <div className="QuoteLine">
        {isLoading ? "Loading..." : quote.content}
      </div>
      <div className="Button">
        <button onClick={() => setIncrementor((oldValue) => oldValue + 1)}>
          Generate a quote
        </button>
      </div>
    </div>
  );
};

export default Generator;
