import Image from "next/image";
import Link from "next/link";
import Style from "./BottomMenu.module.scss";
const BottomMenu = ({ props }) => {


  return (
    <div className={`${Style.menu}`}>
      <ul>
        <li>
          <a>
          <img src="/images/icon_home.svg" />
            <p className="mb-0">Home</p>
          </a>
        </li>

        <li>
          <a>
          <img src="/images/icon_cart.svg" />
            <p className="mb-0">My Cart</p>
          </a>
        </li>


        <li>
          <a>
          <img src="/images/icon_contact.svg" />
            <p className="mb-0">Contact</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default BottomMenu;
