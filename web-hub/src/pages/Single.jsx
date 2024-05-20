import React from "react";
import "../style.css";
import Menu from "../components/Menu";
import Zama from "../img/zama-webhub.jpg";
import Edit from "../img/pen.svg";
import Delete from "../img/trash.svg";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img src={Zama} alt="" />

          <div className="info">
            <span>Zama</span>
            <p> Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=`}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi
          cras fermentum odio eu feugiat pretium nibh ipsum. Tincidunt lobortis
          feugiat vivamus at augue eget arcu dictum. Nullam eget felis eget nunc
          lobortis. Bibendum at varius vel pharetra vel turpis nunc eget.
          Ultricies integer quis auctor elit sed vulputate. Quam nulla porttitor
          massa id neque. Malesuada fames ac turpis egestas. Duis ultricies
          lacus sed turpis tincidunt. Mauris commodo quis imperdiet massa
          tincidunt nunc pulvinar sapien. Urna neque viverra justo nec ultrices
          dui sapien. Tincidunt id aliquet risus feugiat in ante metus. Ornare
          massa eget egestas purus viverra accumsan in nisl. Duis at consectetur
          lorem donec massa sapien. Cursus vitae congue mauris rhoncus aenean
          vel elit scelerisque mauris. A iaculis at erat pellentesque adipiscing
          commodo elit. Tellus integer feugiat scelerisque varius morbi enim
          nunc faucibus. Nunc congue nisi vitae suscipit tellus mauris. Duis
          tristique sollicitudin nibh sit amet. Eget mauris pharetra et ultrices
          neque ornare aenean euismod elementum. Adipiscing elit pellentesque
          habitant morbi. Integer quis auctor elit sed vulputate mi sit amet.
          Porttitor eget dolor morbi non arcu risus. Eu mi bibendum neque
          egestas congue. Massa tincidunt nunc pulvinar sapien et. Sed libero
          enim sed faucibus turpis in eu mi bibendum. Ultricies lacus sed turpis
          tincidunt id. Ac ut consequat semper viverra nam libero justo. Et
          malesuada fames ac turpis egestas sed tempus. Enim sit amet venenatis
          urna cursus eget nunc scelerisque viverra. Morbi tincidunt ornare
          massa eget egestas purus viverra accumsan in. Enim neque volutpat ac
          tincidunt vitae semper quis lectus. Auctor neque vitae tempus quam
          pellentesque nec nam. Sit amet nisl suscipit adipiscing bibendum est
          ultricies integer quis. Laoreet suspendisse interdum consectetur
          libero id faucibus. Eget lorem dolor sed viverra ipsum nunc aliquet
          bibendum enim. Et netus et malesuada fames ac turpis egestas.
          Dignissim enim sit amet venenatis urna cursus eget nunc. Euismod
          elementum nisi quis eleifend quam adipiscing. Vivamus arcu felis
          bibendum ut tristique et egestas quis. Elementum eu facilisis sed odio
          morbi quis commodo odio. Lacus luctus accumsan tortor posuere. Sed sed
          risus pretium quam vulputate dignissim suspendisse in. Varius vel
          pharetra vel turpis nunc eget lorem dolor. Amet massa vitae tortor
          condimentum lacinia quis vel eros donec.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
