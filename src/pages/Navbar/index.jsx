import { NavLink, useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import { AiTwotoneHome, AiTwotoneHeart } from "react-icons/ai";
import { FaRegistered } from "react-icons/fa";

export default function Navbar() {
  const classNameActive = ({ isActive }) => {
    return isActive ? styles.active : styles.noActive;
  };

  return (
    <nav className={styles.nav}>
      <NavLink className={classNameActive} to="/">
        <AiTwotoneHome className={styles.icon} />
      </NavLink>
      <NavLink className={classNameActive} to="/favorites">
        <AiTwotoneHeart className={styles.icon} />
      </NavLink>
      <NavLink className={classNameActive} to="/logOut">
        <FaRegistered className={styles.icon} />
      </NavLink>
    </nav>
  );
}

//  <NavLink className={`${classNameActive} ${isactive ? styles.active : styles.noActive} ${blabla}`} to="/">

// const Navigate = useNavigate();
// const onClick = () => {
//   //code
//   //code
//   //code
//   Navigate("/playlist");
// };
