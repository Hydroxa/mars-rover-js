import React, { useEffect, useState } from "react";
import * as QuotationsApi from "../../api/QuotationsApi";
import "./Home.css";

export default function Home() {
  const [quotation, setQuotation] = useState();
  useEffect(getQuotationOfTheDay, []);

  return (
    <>
      <title>Mars Rover App</title>
      <main className="home-page page-container">
        <h1>Mars Rover</h1>
        <h2>Quotation of the day</h2>
        <p className="quotation">{quotation?.text}</p>
        <p className="attribution">—{quotation?.attribution}</p>
        <h2>What is Curiosity (MSL)</h2>
        <div className="CuriosityPic">
          <img src="\NASA's Curiosity (MSL).jpg" alt="Curosity picture" />
        </div>
        <p>
          NASA's Curiosity is the largest and most advanced rover ever sent to
          Mars. The car-sized rover is part of NASA's Mars Science Laboratory
          (MSL). Curiosity's ongoing mission is to study the ancient
          habitability and the potential for life on Mars.The rover began its
          first drive on Mars Aug. 29, 2012. The rover is about as tall as a
          basketball player and uses a 7-foot (2-meter) arm to place tools close
          to rocks for study.
        </p>
        <p>
          Key Dates:<p>Nov,26,2011:launched.</p>{" "}
          <p>Aug. 6, 2012:Mars landing</p>{" "}
          <p>Aug. 29, 2012​:Curiosity began its first drive</p>
        </p>
        <h2>What is Opportunity?</h2>
        <div className="OpportunityPic">
          <img src="\opportunity pic.jpg" alt="Opportunity picture" />
        </div>
        <p>
          Opportunity was the second of the two rovers launched in 2003 to land
          on Mars and begin traversing the Red Planet in search of signs of
          ancient water. NASA's Opportunity rover was one of the most successful
          and enduring interplanetary missions. Opportunity landed on Mars in
          early 2004 soon after its twin rover Spirit. Opportunity operated
          almost 15 years, setting several records and making a number of key
          discoveries.Opportunity and its twin Spirit were tasked with studying
          sites on Mars where conditions may once have been favorable for life.
          Opportunity found evidence that Mars may once have been able to
          sustain microbial life. Opportunity exceeded its life expectancy by 60
          times and had traveled more than 28 miles (45 kilometers) by the time
          it reached its appropriate final resting spot on Mars – Perseverance
          Valley.Opportunity stopped communicating with Earth after a severe
          Mars-wide dust storm blanketed its location in June 2018.
        </p>
        <h2> What was Spirit?</h2>
        <div className="SpiritPic">
          <img src="\SpiritPic.jpg" alt="Spirit picture" />
        </div>
        <ul>
          Spirit uncovered strong evidence that Mars was once much wetter than
          it is now. Described as a "wonderful workhorse"—Spirit operated for 6
          years, 2 months, and 19 days, more than 25 times its original intended
          lifetime. The rover traveled 4.8 miles (7.73 kilometers) across the
          Martian plains. On May 25, 2011, NASA ended efforts to contact the
          marooned rover and declared its mission complete. The rover had been
          silent since March 2010.Opportunity touched down on Mars on Jan. 25,
          2004. During the 15 years it spent trundling across the planet, the
          rover provided evidence confirming water once flowed on Mars.
        </ul>
      </main>
    </>
  );
  async function getQuotationOfTheDay() {
    try {
      const response = await QuotationsApi.getQuotationOfTheDay();
      setQuotation(response);
    } catch (e) {
      console.error(e);
      return (
        <>
          <title>Mars Rover App</title>
          <Header />
          <main className="home-page page-container">
            <h1>Mars Rover</h1>
            <h2>Quotation of the day</h2>
            <p className="quotation">{quotation?.text}</p>
            <p className="attribution">—{quotation?.attribution}</p>
          </main>
        </>
      );

      async function getQuotationOfTheDay() {
        try {
          const response = await QuotationsApi.getQuotationOfTheDay();
          setQuotation(response);
        } catch (e) {
          console.error(e);
        }
      }
    }
  }
}
