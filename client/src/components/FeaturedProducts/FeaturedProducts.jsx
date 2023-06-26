import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Leid flsdi dkao dfkdfooa fadk dfls sdlfina, jmdoid dkihna mdoie aldij.
          Sdlfka aldsop erdfog gkd dok erjfg jute ndikd kdolo fjkrbe ieb irnd nd
          kkdn dkoe kdpa. Erpgir wie fopclre itm df rmdier keid kdld irld, kldoe
          lsdi lrufn riunf eo iem.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
