import React, { Component } from "react";
import data from "./danhSachGhe.json";
import DanhSachGheNgoi from "./DanhSachGheNgoi";
import ThongTinDatVe from "./ThongTinDatVe";

export default class BTDatVe extends Component {
  render() {
    return (
      <div className="App container relative">
        <img src="./images/DatVe/bgmovie.jpg" className="absolute bgflim"></img>
        <div className="flex">
          <div className="w-3/5 ">
            <h1
              className="text-center font-bold text-[25px] mb-3"
              style={{ color: "#FFC107" }}
            >
              ĐẶT VÉ XEM PHIM CYBERLEARN.VN
            </h1>
            <p className="text-white font-bold text-s text-center">Màn hình</p>
            <div className="shape relative">
              <DanhSachGheNgoi data={data}></DanhSachGheNgoi>
            </div>
          </div>
          <div className="w-2/5 text-[30px] text-white text-center">
            <h1 className="text-center font-bold text-[25px] mb-3 text-white">
              ĐẶT VÉ XEM PHIM CYBERLEARN.VN
            </h1>
            <ThongTinDatVe></ThongTinDatVe>
          </div>
        </div>
      </div>
    );
  }
}
