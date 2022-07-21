import logo from "../assets/CafeLogo.png";
import chef from "../assets/chef.png";
import waiter from "../assets/waiter.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireBurner } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="container">
      <img src={logo} alt="cafe logo" />
      <input type="text" placeholder="Server´s name" />
      <button>
        {/* <FontAwesomeIcon icon={faFireBurner} /> */}
        <img
          src={chef}
          alt="chef icon"
          style={{ width: "90px", height: "90px" }}
        />
      </button>
      <button>
        {/* <FontAwesomeIcon icon={faUtensils} /> */}
        <img
          src={waiter}
          alt="waiter icon"
          style={{ width: "90px", height: "90px" }}
        />
      </button>
    </div>
  );
};

export default Home;