
import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const countDown = () => {
      let futureDate = new Date(targetDate).getTime();
      let currentDate = new Date().getTime();
      let myDate = futureDate - currentDate;

      if (myDate > 0) {
        let days = Math.floor(myDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor((myDate / (1000 * 60 * 60)) % 24);
        let min = Math.floor((myDate / (1000 * 60)) % 60);
        let sec = Math.floor((myDate / 1000) % 60);
        setTimeLeft({ days, hours, min, sec });
      } else {
        setTimeLeft({ days: 0, hours: 0, min: 0, sec: 0 });
      }
    };

    const interval = setInterval(countDown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <ul className="list-unstyled countdown-counter">
      <li>
        <span className="fs-1 d-block">{timeLeft.days}</span> Days
      </li>
      <li>
        <span className="fs-1 d-block">{timeLeft.hours}</span> Hr
      </li>
      <li>
        <span className="fs-1 d-block">{timeLeft.min}</span> Min
      </li>
      <li>
        <span className="fs-1 d-block">{timeLeft.sec}</span> Sec
      </li>
    </ul>
  );
};

const SpecialSale = () => {
  return (
    <section id="special" className="special">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="headline text-center mb-5">
              <h2 className="pb-3 position-relative d-inline-block">
                SUMMER SALE
              </h2>
            </div>
          </div>
          <div className="col-sm-12 col-lg-7 text-center text-lg-start">
            <div className="countdown-container">
              <h2 className="text-uppercase h1">Modren Stylish Dress</h2>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                temporibus veritatis adipisci, doloremque recusandae aliquid
                voluptas ipsam, itaque, quidem molestias voluptates quos
                aspernatur placeat harum tempora consequuntur ipsum repudiandae
                tenetur?
              </p>
              {/* Countdown Timer Component */}
              <CountdownTimer targetDate="March 1, 2025" />
              <span className="countdown-price h3 d-block mb-4">
                &#x20B9;420.00 <del>&#x20B9;670.00</del>
              </span>
              <button type="button" className="btn btn-danger">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-lg-5">
            <div className="special-img position-relative">
              <span className="sale">Sale</span>
              <img src="assets/ProjImages/p7.jpg" className="img-fluid" alt="Sale" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialSale;
