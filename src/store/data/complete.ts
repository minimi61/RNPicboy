export interface Iparticipant {
  nickname: string;
  profileImg: string;
}

export interface ICompleteSample {
  id: string;
  gifUrl: string;
  likeCount: number;
  topic: string;
  nickname: string;
  profileImg: string;
  reportCount: number;
  date: string;
  viewCount: number;
  status: number;
  liked: boolean;
  reported: boolean;
  participantResponseDtoList: Iparticipant[];
  participantCount: number;
  commentCount: string;
}

export interface ICommentData {
  comment: string;
  commentId: number;
  modifiedAtAt: string;
  nickname: string;
  profileImg: string | null;
  username: string;
}
