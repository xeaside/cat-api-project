import "./api.css";
import { useState } from "react";

const CatApi = () => {
  const [cat, setCat] = useState("");
  const [loading, setLoading] = useState(false);

  const options = {
    method: "GET",
    headers: {
      "x-api-key":
        "live_TvvrOxpGYTgo69yXhf0LjUge7ykJz2Q5sLnNEcHmGtflkIPim3mnCEpVEbnvZeN6",
    },
  };

  const catApiReq = () => {
    setLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search", options)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data[0].url;
        setCat(imageUrl);
        setLoading(false);
      });
  };

  return (
    <div className="requestPos">
      <div className="requestText">
        <h1>Добро пожаловать на сайт GetCatPic.</h1>
        <p>Нажми на кнопку чтобы получить картинку котика.</p>
        <div className='requestButtonPos'>
          <button className='requestButton' onClick={catApiReq}>Получить одного котика</button>
        </div> 
    

      {loading ? (
        <div className="cssload-container">
          <div className="cssload-speeding-wheel"></div>
        </div>
      ) : null}
  </div>
      <div>
        {cat ? (
          <img className='requestImage'
            src={cat}
            alt="image"
          />
        ) : null}
      </div>
    </div>
  );
};

export default CatApi;
