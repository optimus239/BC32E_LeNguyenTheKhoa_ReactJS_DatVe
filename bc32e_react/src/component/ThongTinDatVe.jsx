import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinDatVe extends Component {
  render() {
    const { danhSachGheDangDat, delSeat } = this.props;
    let tongTien = 0;
    return (
      <div>
        <div className="text-left">
          <button className="gheDaDat"></button> Ghế đã đặt
        </div>
        <div className="text-left">
          <button className="gheDangChon"></button> Ghế đang chọn
        </div>
        <div className="text-left">
          <button className="gheChuaDat"></button> Ghế chưa đặt
        </div>
        <table className="price text-left font-black">
          <thead>
            <tr>
              <td className="pl-2">Số ghế</td>
              <td className="pl-2">Giá</td>
              <td className="pl-2">Hủy</td>
            </tr>
          </thead>
          <tbody>
            {danhSachGheDangDat.map((value) => {
              return (
                <tr key={value.soGhe}>
                  <td className="text-amber-500 pl-2">{value.soGhe}</td>
                  <td className="text-amber-500 pl-2">
                    {value.gia.toLocaleString()}
                  </td>
                  <td>
                    <button
                      className=" text-red-600 pl-2"
                      onClick={() => {
                        this.props.dispatch({
                          type: "HUY_VE",
                          ghe: value.soGhe,
                        });
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="pl-2">Tổng tiền</td>
              <td className="pl-2">
                {danhSachGheDangDat
                  .reduce((value1, value2) => {
                    return (value1 += value2.gia);
                  }, 0)
                  .toLocaleString()}
              </td>
              <td></td>
            </tr>
          </tfoot>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     delSeat: (seat) => {
//       dispatch({
//         type: "HUY_VE",
//         ghe: seat,
//       });
//     },
//   };
// };

export default connect(mapStateToProps)(ThongTinDatVe);
