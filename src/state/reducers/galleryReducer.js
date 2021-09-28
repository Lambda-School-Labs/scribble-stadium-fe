import { submissions } from '../actions';

const initialState = {
  ID: 0,
  ChildID: 0,
  StoryId: 0,
  Sprint: 0,
  EpisodeStartDate: '',
  ModerationStatus: '',
  HasRead: false,
  HasWritten: false,
  Complexity: 0,
  LowConfidence: false,
  CreatedAt: '',
  UpdatedAt: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case submissions.SET_WEEKLY_SUBMISSIONS:
      return {
        ...state,
        ID: action.payload.ID,
        ChildID: action.payload.ChildID,
        StoryId: action.payload.StoryId,
        EpisodeStartDate: action.payload.EpisodeStartDate,
        ModerationStatus: action.payload.ModerationStatus,
        HasRead: action.payload.HasRead,
        HasWritten: action.payload.HasWritten,
        Complexity: action.payload.Complexity,
        LowConfidence: action.payload.LowConfidence,
        CreatedAt: action.payload.CreatedAt,
        UpdatedAt: action.payload.UpdatedAt,
      };

    default:
      return state;
  }
};

// const initialState = {
//   WritingUrl: '',
//   PageNum: 0,
//   DrawingUrl: '',
//   children_id: 0,
// };

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case submissions.SET_WEEKLY_SUBMISSIONS:
//       return {
//         ...state,
//         WritingUrl: action.payload.WritingUrl,
//         PageNum: action.payload.PageNum,
//         DrawingUrl: action.payload.DrawingUrl,
//         children_id: action.payload.children_id,
//       };

//     default:
//       return state;
//   }
// };
