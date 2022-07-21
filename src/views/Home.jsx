import logo from "../assets/cafeLogo.png";
import chef from "../assets/chef.png";
import waiter from "../assets/waiter.png";

const Home = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="cafe logo" />
      <input type="text" placeholder="Server´s name" />
      <div className="btn-container">
      <button>
        <img className="main-icons"
          src={chef}
          alt="chef icon"
        />
      </button>
      <button>
        <img className="main-icons"
          src={waiter}
          alt="waiter icon"
        />
      </button>
      </div>
    </div>
  );
};

export default Home;