import { createSelector } from 'reselect';

export const selectUserMe = (state) => state.currentUser;

// import { createSelector } from 'reselect';
// import { getCurrentTabInfo } from './tabs';

// export const getSelectedImageList = (state) => state.imageList.selectedImageList;
// export const getSearchConditions = (state) => state.imageList.searchConditions;
// export const getCurrentTabSearchConditions = createSelector(
//   getSearchConditions,
//   getCurrentTabInfo,
//   (searchConditions, tab) => {
//     const { query } = tab;
//     return { ...searchConditions, ...query };
//   }
// );

// export const selectedImages = (state) => state.imageList.images.images;
// export const selectedImagesTotalNum = (state) => state.imageList.images.total;
// export const selectedImagesLoading = (state) => state.imageList.loading;
// export const selectUnapprovedImageList = (state) => state.imageList.unapprovedImages;

