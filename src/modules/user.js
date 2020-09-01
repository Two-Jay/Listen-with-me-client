import { createAction, handleActions } from 'redux-actions';
const axios = require('axios');

const BASE_URL = process.env.BASE_URL;

const initialState = {
  status: {
    isSignIn: false,
    isLoading: false,
  },
  info: {
    email: '',
    nickname: '',
    profileURL: '',
    description: '',
    audienceAmount: 0,
    likeAmount: 0,
  },
};

// action type
//.. signin
const SIGNIN_REQUEST = 'user/SIGNIN_REQUEST';
const SIGNIN_SUCCESS = 'user/SIGNIN_SUCCESS';
const SIGNIN_FAILURE = 'user/SIGNIN_FAILURE';

//.. audience
const AUDIENCE_AMOUNT_REQUEST = 'user/info/AUDIENCE_AMOUNT_REQUEST';
const AUDIENCE_AMOUNT_SUCCESS = 'user/info/AUDIENCE_AMOUNT_SUCCESS';
const AUDIENCE_AMOUNT_FAILURE = 'user/info/AUDIENCE_AMOUNT_FAILURE';

//.. like amount
const LIKE_AMOUNT_REQUEST = 'user/info/LIKE_AMOUNT_REQUEST';
const LIKE_AMOUNT_SUCCESS = 'user/info/LIKE_AMOUNT_SUCCESS';
const LIKE_AMOUNT_FAILURE = 'user/info/LIKE_AMOUNT_FAILURE';

//.. profile picture
const UPDATE_PROFILE_PICTURE_REQUEST =
  'user/info/UPDATE_PROFILE_PICTURE_REQUEST';
const UPDATE_PROFILE_PICTURE_SUCCESS =
  'user/info/UPDATE_PROFILE_PICTURE_SUCCESS';
const UPDATE_PROFILE_PICTURE_FAILURE =
  'user/info/UPDATE_PROFILE_PICTURE_FAILURE';

//.. nickname
const UPDATE_NICKNAME_REQUEST = 'user/info/UPDATE_NICKNAME_REQUEST';
const UPDATE_NICKNAME_SUCCESS = 'user/info/UPDATE_NICKNAME_SUCCESS';
const UPDATE_NICKNAME_FAILURE = 'user/info/UPDATE_NICKNAME_FAILURE';

//.. description
const UPDATE_DESCRIPTION_REQUEST = 'user/info/UPDATE_DESCRIPTION_REQUEST';
const UPDATE_DESCRIPTION_SUCCESS = 'user/info/UPDATE_DESCRIPTION_SUCCESS';
const UPDATE_DESCRIPTION_FAILURE = 'user/info/UPDATE_DESCRIPTION_FAILURE';

// action creator (sync)
//.. signin
const signInRequest = createAction(SIGNIN_REQUEST);
const signInSuccess = createAction(SIGNIN_SUCCESS, data => data);
const signInFailure = createAction(SIGNIN_FAILURE);

//.. audience
const audienceAmountRequest = createAction(AUDIENCE_AMOUNT_REQUEST);
const audienceAmountSuccess = createAction(
  AUDIENCE_AMOUNT_SUCCESS,
  amount => amount
);
const audienceAmountFailure = createAction(AUDIENCE_AMOUNT_FAILURE);

//.. like amount
const likeAmountRequest = createAction(LIKE_AMOUNT_REQUEST);
const likeAmountSuccess = createAction(LIKE_AMOUNT_SUCCESS, amount => amount);
const likeAmountFailure = createAction(LIKE_AMOUNT_FAILURE);

//.. profile picture
const updateProfilePictureRequest = createAction(
  UPDATE_PROFILE_PICTURE_REQUEST
);
const updateProfilePictureSuccess = createAction(
  UPDATE_PROFILE_PICTURE_SUCCESS,
  picture => picture
);
const updateProfilePictureFailure = createAction(
  UPDATE_PROFILE_PICTURE_FAILURE
);

//.. nickname
const updateNicknameRequest = createAction(UPDATE_NICKNAME_REQUEST);
const updateNicknameSuccess = createAction(
  UPDATE_NICKNAME_SUCCESS,
  nickname => nickname
);
const updateNicknameFailure = createAction(UPDATE_NICKNAME_FAILURE);

//.. description
const updateDescriptionRequest = createAction(UPDATE_DESCRIPTION_REQUEST);
const updateDescriptionSuccess = createAction(
  UPDATE_DESCRIPTION_SUCCESS,
  nickname => nickname
);
const updateDescriptionFailure = createAction(UPDATE_DESCRIPTION_FAILURE);

// action creator (async)
const signIn = signInData => {
  return (dispatch, getState) => {
    dispatch(signInRequest());
    setTimeout(() => {
      dispatch(
        signInSuccess({
          email: 'snaag.dev@gmail.com',
          nickname: 'snaag',
          profileURL:
            'https://www.catster.com/wp-content/uploads/2018/01/Orange-tabby-cat-sleeping-with-eyes-closed.jpg',
          description: 'hihihi',
        })
      );
    }, 1000);
  };
  // return async (dispatch, getState) => {
  //   dispatch(signInRequest());
  //   try {
  //     const { status, data } = await axios
  //       .get(`${BASE_URL}/signin`, signInData)
  //       .then(response => response)
  //       .catch(error => error.response);

  //     if (status === 200) {
  //       const { email, nickname, profileURL, profileDescription } = data;
  //       dispatch(
  //         signInSuccess({
  //           email,
  //           nickname,
  //           profileURL,
  //           description: profileDescription,
  //         })
  //       );
  //     } else {
  //       const { message } = data;
  //       console.log(message);
  //       if (status === 401) dispatch(signInFailure());
  //       else dispatch(signInFailure());
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
};

const getLikeAmount = authentication => {
  return (dispatch, getState) => {
    dispatch(likeAmountRequest());
    setTimeout(() => {
      dispatch(likeAmountSuccess({ likeAmount: 1000 }));
    }, 1000);

    // 위에 return async로 고쳐주기 !!!!!!!
    // (return async (dispatch, getState) => {})
    // try {
    //   const { status, data } = await axios
    //     .get(`${BASE_URL}/profile/audience`, {
    //       headers: {
    //         Authentication: authentication,
    //       },
    //     })
    //     .then(response => response)
    //     .catch(error => error.response);

    //   if (status === 200) {
    //     const { audienceAmount } = data;
    //     dispatch(audienceAmountSuccess({ audienceAmount }));
    //   } else {
    //     const { message } = data;
    //     console.log(message);
    //     if (status === 400) dispatch(audienceAmountFailure());
    //     else dispatch(audienceAmountFailure());
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

const getAudienceAmount = authentication => {
  return (dispatch, getState) => {
    dispatch(audienceAmountRequest());
    setTimeout(() => {
      dispatch(audienceAmountSuccess({ audienceAmount: 1000 }));
    }, 1000);

    // 위에 return async로 고쳐주기 !!!!!!!
    // (return async (dispatch, getState) => {})
    // try {
    //   const { status, data } = await axios
    //     .get(`${BASE_URL}/profile/audience`, {
    //       headers: {
    //         Authentication: authentication,
    //       },
    //     })
    //     .then(response => response)
    //     .catch(error => error.response);

    //   if (status === 200) {
    //     const { audienceAmount } = data;
    //     dispatch(audienceAmountSuccess({ audienceAmount }));
    //   } else {
    //     const { message } = data;
    //     console.log(message);
    //     if (status === 400) dispatch(audienceAmountFailure());
    //     else dispatch(audienceAmountFailure());
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
};

const updateNickname = (nickname, authentication) => {
  // return async (dispatch, getState) => {
  //   dispatch(updateNicknameRequest());
  //   try {
  //     const { status, data } = await axios
  //       .patch(`${BASE_URL}/profile/image`, {
  //         headers: {
  //           Authentication: authentication,
  //         },
  //         nickname,
  //       })
  //       .then(response => response)
  //       .catch(error => error.response);

  //     if (status === 200) dispatch(updateNicknameSuccess());
  //     else {
  //       console.log(status, data.message);
  //       dispatch(updateNicknameFailure());
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (dispatch, getState) => {
    dispatch(updateNicknameRequest());
    setTimeout(() => {
      dispatch(updateNicknameSuccess(nickname));
    }, 1000);
  };
};
const updateProfilePicture = (picture, authentication) => {
  return (dispatch, getState) => {
    dispatch(updateProfilePictureRequest());
    setTimeout(() => {
      dispatch(updateProfilePictureSuccess(picture));
    }, 1000);
  };
};
const updateDescription = (description, authentication) => {
  // return async (dispatch, getState) => {
  //   dispatch(updateDescriptionRequest());
  //   try {
  //     const { status, data } = await axios
  //       .patch(`${BASE_URL}/profile/description`, {
  //         headers: {
  //           Authentication: authentication,
  //         },
  //         description,
  //       })
  //       .then(response => response)
  //       .catch(error => error.response);

  //     if (status === 200) dispatch(updateDescriptionSuccess());
  //     else {
  //       console.log(status, data.message);
  //       dispatch(updateDescriptionFailure());
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (dispatch, getState) => {
    dispatch(updateDescriptionRequest());
    setTimeout(() => {
      dispatch(updateDescriptionSuccess(description));
    }, 1000);
  };
};

export {
  signIn,
  getLikeAmount,
  getAudienceAmount,
  updateProfilePicture,
  updateDescription,
  updateNickname,
};

// reducer
const userReducer = handleActions(
  {
    [SIGNIN_REQUEST]: prevState => ({
      ...prevState,
      status: {
        isSignIn: false,
        isLoading: true,
      },
    }),
    [SIGNIN_SUCCESS]: (prevState, action) => ({
      ...prevState,
      status: {
        isSignIn: true,
        isLoading: false,
      },
      info: {
        ...prevState.info,
        email: action.payload.email,
        nickname: action.payload.nickname,
        profileURL: action.payload.profileURL,
        description: action.payload.description,
      },
    }),
    [SIGNIN_FAILURE]: prevState => ({
      ...prevState,
      status: {
        isSignIn: false,
        isLoading: false,
      },
    }),
    [AUDIENCE_AMOUNT_REQUEST]: prevState => ({
      ...prevState,
    }),
    [AUDIENCE_AMOUNT_SUCCESS]: (prevState, action) => ({
      ...prevState,
      info: {
        ...prevState.info,
        audienceAmount: action.payload.audienceAmount,
      },
    }),
    [AUDIENCE_AMOUNT_FAILURE]: prevState => ({
      ...prevState,
    }),
    // like amount
    [LIKE_AMOUNT_REQUEST]: prevState => ({
      ...prevState,
    }),
    [LIKE_AMOUNT_SUCCESS]: (prevState, action) => ({
      ...prevState,
      info: {
        ...prevState.info,
        likeAmount: action.payload.likeAmount,
      },
    }),
    [LIKE_AMOUNT_FAILURE]: prevState => ({
      ...prevState,
    }),
    // nickname
    [UPDATE_NICKNAME_REQUEST]: prevState => ({
      ...prevState,
    }),
    [UPDATE_NICKNAME_SUCCESS]: (prevState, action) => ({
      ...prevState,
      info: {
        ...prevState.info,
        nickname: action.payload,
      },
    }),
    [UPDATE_NICKNAME_FAILURE]: prevState => ({
      ...prevState,
    }),
    // profile picture
    [UPDATE_PROFILE_PICTURE_REQUEST]: prevState => ({
      ...prevState,
    }),
    [UPDATE_PROFILE_PICTURE_SUCCESS]: (prevState, action) => {
      console.log(action);
      return {
        ...prevState,
        info: {
          ...prevState.info,
          profileURL: action.payload,
        },
      };
    },
    [UPDATE_PROFILE_PICTURE_FAILURE]: prevState => ({
      ...prevState,
    }),
    // description
    [UPDATE_DESCRIPTION_REQUEST]: prevState => ({
      ...prevState,
    }),
    [UPDATE_DESCRIPTION_SUCCESS]: (prevState, action) => ({
      ...prevState,
      info: {
        ...prevState.info,
        description: action.payload,
      },
    }),
    [UPDATE_DESCRIPTION_FAILURE]: prevState => ({
      ...prevState,
    }),
  },
  initialState
);

export default userReducer;
