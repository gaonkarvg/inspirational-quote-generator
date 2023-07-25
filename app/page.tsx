"use client";

import Image from "next/image";
import React, { useState } from "react";

// Components
import {
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  GradientBackGroundCon,
  QuoteGeneratorButton,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorQuote,
  QuoteGeneratorQuoteAuthor,
  QuoteGeneratorQuoteText,
  QuoteGeneratorSubTitle,
  QuoteGeneratorTitle,
} from "@/components/quoteGenerator/quoteGeneraateorElement";

// Assets
import Clouds from "@/assets/cloud.png";
import Rain from "@/assets/download_2.png";

export default function Home() {
  const [quotesGenerated, setQuotesGenerated] = useState<Number>(100);
  return (
    //  bancground gradient
    <GradientBackGroundCon>
      {/* Qouote generator Modal Pop-up */}
      {/* Quote generator Modal */}

      {/* Quote Generator */}
      <QuoteGeneratorCon>
        <QuoteGeneratorInnerCon>
          <QuoteGeneratorTitle>Quote Generator</QuoteGeneratorTitle>

          <QuoteGeneratorSubTitle>
            {/* A simple app to generate inspirational quotes, */}
            Generate a quote card with a random inspirational quote provided by
            ZenQuotes API.
          </QuoteGeneratorSubTitle>

          <QuoteGeneratorButton
            onClick={() => setQuotesGenerated(Number(quotesGenerated) + 1)}
          >
            Generate Quote
          </QuoteGeneratorButton>

          <QuoteGeneratorQuote>
            <QuoteGeneratorQuoteText>
              "The best way to predict the future is to create it."
            </QuoteGeneratorQuoteText>
            <QuoteGeneratorQuoteAuthor> - Abraham Lincoln </QuoteGeneratorQuoteAuthor>
          </QuoteGeneratorQuote>
        </QuoteGeneratorInnerCon>
      </QuoteGeneratorCon>

      {/* background images */}
      <BackgroundImage1 src={Clouds} height="200" alt="Picture of the author" />
      <BackgroundImage2 src={Rain} height="200" alt="Picture of the author" />

      {/* footer */}
      <FooterCon>
        <>
          Quotes Generated: {quotesGenerated} <br />
          Developed by:{" "}
          <a
            href="https://www.linkedin.com/in/gaonkarvg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vigneshwar Gaonkar
          </a>
        </>
      </FooterCon>
    </GradientBackGroundCon>
  );
}
