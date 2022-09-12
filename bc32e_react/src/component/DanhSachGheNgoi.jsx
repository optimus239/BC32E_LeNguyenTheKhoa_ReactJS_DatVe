import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachGheNgoi extends Component {
  render() {
    const { data, handleSeat, danhSachGheDangDat } = this.props;
    return (
      <div>
        <div className="relative tableSeat">
          {data.map((item) => {
            return (
              <div key={item.hang}>
                <button className="rowsSeat">{item.hang}</button>
                {item.danhSachGhe.map((value) => {
                  let classGheDaDat =
                    value.daDat === true ? "gheDaDat" : "gheChuaDat";
                  let classGheDangDat = "";
                  let indexGheDangDat = danhSachGheDangDat.findIndex(
                    (gheDD) =>
                      gheDD.soGhe === value.soGhe && value.daDat === false
                  );
                  console.log("ds", danhSachGheDangDat);
                  if (indexGheDangDat !== -1) {
                    classGheDangDat = "gheDangChon";
                  }
                  {
                    return (
                      <button
                        disabled={value.daDat}
                        key={value.soGhe}
                        className={`${classGheDaDat} ${classGheDangDat}`}
                        onClick={() => handleSeat(value)}
                      >
                        {value.soGhe}
                      </button>
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducers) => {
  return {
    danhSachGheDangDat: rootReducers.baiTapDatVe.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSeat: (seat) => {
      dispatch({
        type: "DAT_VE",
        gheDuocChon: seat,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachGheNgoi);
