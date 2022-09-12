import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinDatVe extends Component {
  render() {
    const { danhSachGheDangDat, delSeat } = this.props;
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
        <table className="price text-left">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Hủy</th>
            </tr>
          </thead>
          <tbody>
            {danhSachGheDangDat.map((value) => {
              return (
                <tr key={value.soGhe}>
                  <td>{value.soGhe}</td>
                  <td>{value.gia}</td>
                  <td>
                    <button
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

export default connect(mapStateToProps, null)(ThongTinDatVe);
