import React, { useContext } from "react";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../assets/amazon_logo_full.png";
import Image from "next/image";
import { IoMdSearch } from "react-icons/io";
import { AmazonContext } from "../context/AmazonContext";
import { FaCoins } from "react-icons/fa";
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from "react-simple-hook-modal";
import "react-simple-hook-modal/dist/styles.css";
import BuyModal from "./BuyModal";

const Header = () => {
  const styles = {
    container: `h-[60px] w-full flex items-center gap-5 px-16`,
    logo: `flex items-center ml-[20px] cursor-pointer flex-1`,
    search: `p-[25px] mr-[30px] w-[400px] h-[40px] bg-white rounded-full shadow-lg flex flex items-center border border-black`,
    searchInput: `bg-transparent focus:outline-none border-none flex-1 items-center flex`,
    menu: `flex items-center gap-6`,
    menuItem: `flex items-center text-md font-bold cursor-pointer`,
    coins: `ml-[10px]`,
  };

  const { balance, buyTokens, getBalance } = useContext(AmazonContext);
  const { openModal, isModalOpen, closeModal } = useModal();

  return <div>Header</div>;
};

export default Header;
