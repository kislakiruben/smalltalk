export interface IParticipant {
  custom_participant_id?: string;
  id: string;
}

export interface IMeeting {
  id: string;
  title: string;
}

export interface ISession {
  user?: object;
}
