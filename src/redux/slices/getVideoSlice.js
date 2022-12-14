import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import popularVideoService from "../../service/popularVideoService";
import categoryVideoService from "../../service/categoryVideoService";
import getVideoDetailsByIdService from "../../service/getVideoByIdService";
import getVideoChannelDetailsService from "../../service/getVideoChannelDetailsService";
import getSubscribeStatusService from "../../service/getSubscribeStatusService";
import getCommentListService from "../../service/getCommentListService";
import getRelatedVideoService from "../../service/getRelatedVideoService"

export const getPopularVideo =  createAsyncThunk('popularVideo/getPopularVideo', async ( _, {rejectWithValue}) => {
    try {
      const result = await popularVideoService.getAll()
      return result.items
    } catch (e) {
      return rejectWithValue(e)
    }
})
export const getCategoryVideo =  createAsyncThunk('categoryVideo/getCategoryVideo', async ( value, {rejectWithValue}) => {
  try {
    const result = await categoryVideoService.getAll(value)
    return result.items
  } catch (e) {
    return rejectWithValue(e)
  }
})
export const getVideoDetailsById =  createAsyncThunk('videoDetails/getVideoDetailsById', async ( id, {rejectWithValue}) => {
  try {
    const result = await getVideoDetailsByIdService.getVideo(id)
    return result.items[0]
  } catch (e) {
    return rejectWithValue(e)
  }
})
export const getVideoChannelDetails =  createAsyncThunk('videoChannelDetails/getVideoChannelDetails', async ( channelId, {rejectWithValue}) => {
  try {
    const result = await getVideoChannelDetailsService.getVideo(channelId)
    return result.items[0]
  } catch (e) {
    return rejectWithValue(e)
  }
})
export const getSubscribeStatus =  createAsyncThunk('subscribeStatus/getSubscribeStatus', async ( channelId, {rejectWithValue}) => {
  try {
    const result = await getSubscribeStatusService.getStatus(channelId)
    return result.items
  } catch (e) {
    return rejectWithValue(e)
  }
})
export const getCommentList =  createAsyncThunk('comments/getCommentList', async ( videoId, {rejectWithValue}) => {
  try {
    const result = await getCommentListService.getComments(videoId)
    return result.items
  } catch (e) {
    return rejectWithValue(e)
  }
})
export const getRelatedVideo =  createAsyncThunk('relatedVideo/getRelatedVideo', async ( videoId, {rejectWithValue}) => {
  try {
    const result = await getRelatedVideoService.getVideo(videoId)
    return result.items
  } catch (e) {
    return rejectWithValue(e)
  }
})
const getVideoSlice = createSlice({
    name: 'video',
    initialState: {
      videoList: [],
      isLoading: false,
      error: '',
      nextPageToken: null,
      activeCategory: 'All',
      selectedVideo: null,
      currentChannel: {},
      subscribeStatus: [],
      commentList:[],
      relatedVideo:[],
    },
    extraReducers: {
        [getPopularVideo.pending]: (state, action) => {
            state.isLoading = true
        },
        [getPopularVideo.fulfilled]: (state, action) => {
            state.videoList = action.payload
            state.nextPageToken = action.nextPageToken
            state.isLoading = false
            state.activeCategory = action.payload.activeCategory
        },
        [getPopularVideo.rejected]: (state, action) => {
            state.error = action.payload.message
        },
        [getCategoryVideo.pending]: (state, action) => {
          state.isLoading = true
        },
        [getCategoryVideo.fulfilled]: (state, action) => {
          state.videoList = action.payload
          state.isLoading = false
          state.nextPageToken = action.nextPageToken
          state.activeCategory = action.payload.activeCategory
        },
        [getCategoryVideo.rejected]: (state, action) => {
            state.error = action.payload.message
        },
        [getVideoDetailsById.pending]: (state, action) => {
          state.isLoading = true
        },
        [getVideoDetailsById.fulfilled]: (state, action) => {
            state.selectedVideo = action.payload
            state.isLoading = false
        },
        [getVideoDetailsById.rejected]: (state, action) => {
            state.error = action.payload.message
        },
        [getVideoChannelDetails.pending]: (state, action) => {
          state.isLoading = true
        },
        [getVideoChannelDetails.fulfilled]: (state, action) => {
            state.currentChannel = action.payload
            state.isLoading = false
        },
        [getVideoChannelDetails.rejected]: (state, action) => {
            state.error = action.payload.message
        },
        [getSubscribeStatus.pending]: (state, action) => {
          state.isLoading = true
        },
        [getSubscribeStatus.fulfilled]: (state, action) => {
            state.subscribeStatus = action.payload
            state.isLoading = false
        },
        [getSubscribeStatus.rejected]: (state, action) => {
            state.error = action.payload.message
        },
        [getCommentList.pending]: (state, action) => {
          state.isLoading = true
        },
        [getCommentList.fulfilled]: (state, action) => {
            state.commentList = action.payload
            state.isLoading = false
        },
        [getCommentList.rejected]: (state, action) => {
            state.error = action.payload.message
        },
        [getRelatedVideo.pending]: (state, action) => {
          state.isLoading = true
        },
        [getRelatedVideo.fulfilled]: (state, action) => {
            state.relatedVideo = action.payload
            state.isLoading = false
        },
        [getRelatedVideo.rejected]: (state, action) => {
            state.error = action.payload.message
        },


    }
  })

export const videoListReducer = getVideoSlice.reducer
