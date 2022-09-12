const stateDefault = {
  danhSachGheDangDat: [],
};

export const baiTapDatVe = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_VE": {
      const danhSachGheCapNhat = [...state.danhSachGheDangDat];
      const index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.soGhe === action.gheDuocChon.soGhe
      );
      if (index !== -1) {
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.gheDuocChon);
      }
      return { ...state, danhSachGheDangDat: danhSachGheCapNhat };
    }

    case "HUY_VE": {
      const data = [...state.danhSachGheDangDat];
      console.log(" data: ", data);
      const index = data.findIndex((item) => item.soGhe === action.ghe);
      data.splice(index, 1);
      return { danhSachGheDangDat: [...data] };
    }

    default:
      return { ...state };
  }
};
