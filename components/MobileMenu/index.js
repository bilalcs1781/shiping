import React from "react";
import styles from "./mobileMenu.module.scss";
// import { motion } from "framer-motion";
// import animations from "./MobileMenu.animate";
import { CgClose } from "react-icons/cg";

// import WalletConnect from "../Popups/WalletConnect";
import Link from "next/link";

const MobileMenu = ({ mobileMenuHandler }) => {
  return (
    <>
      {/* <WalletConnect
        togglePopup={togglePopup}
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
      /> */}
      <div className={styles.wrapper}>
        <div className={styles.closeRow} onClick={mobileMenuHandler}>
          <CgClose className={styles.closeIcon} />
        </div>
        <div className={styles.linksContainer}>
          <div className={styles.links}>
            <Link
              onClick={mobileMenuHandler}
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
              href={"/list-coins"}
            >
              List of coins
            </Link>
          </div>
          <div className={styles.links}>
            <Link
              onClick={mobileMenuHandler}
              className={({ isActive }) =>
                isActive ? styles.active : styles.inactive
              }
              href={"/list-coins"}
            >
              List of coins
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileMenu;
