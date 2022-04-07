import React from "react";
import Main from "../../components/Main/Main";
import "./Arbetsgivare.css";
import Services from "../../components/Services/Services";
const Arbetsgivare = () => {
  return (
    <div>
      <Main
        btn={"Börja rekrytera"}
        title={"Rekrytera nya talanger rekordsnabbt!"}
        desc={
          "Få access till vår databas full med vård, transport och tech talanger som är öppna för nya utmaningar. Kontakta, få ansökningar och träffa kanididater."
        }
      />

      <Services />
    </div>
  );
};

export default Arbetsgivare;
