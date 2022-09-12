import React, { Component } from "react";
import { connect } from "react-redux";

class DanhSachGheNgoi extends Component {
  render() {
    const { data, handleSeat, danhSachGheDangDat } = this.props;
    return (
      <div>
        <table className="table relative">
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.hang}>
                  <td className="rowsSeat">{item.hang}</td>
                  {item.danhSachGhe.map((value, index) => {
                    let classGheDaDat =
                      value.daDat === true ? "gheDaDat" : "gheChuaDat";
                    let classGheDangDat = "";
                    let indexGheDangDat = danhSachGheDangDat.findIndex(
                      (gheDD) => gheDD.soGhe === value.soGhe
                    );
                    if (indexGheDangDat !== -1) {
                      classGheDangDat = "gheDangChon";
                    }
                    {
                      return (
                        <td
                          key={value.soGhe}
                          className={`${classGheDaDat} ${classGheDangDat}`}
                          onClick={() => handleSeat(value)}
                        >
                          {value.soGhe}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
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
