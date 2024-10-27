// src/types/UserData.ts
export interface UserData {
  data: {
    user: {
      userId: string;
      userName: string;
      streamerType: string;
      registered: string;
      role: string;
      tier: number;
    };
    overlays: {
      game: string;
      tool: string;
      background: string;
      event: string;
    };
    streamdeck: {
      token: string;
    };
    selected: {
      game: string;
      tools: string[];
      background: string;
      event: string;
    };
    preAccess: {
      games: string[];
      tools: string[];
      background: string[];
      events: string[];
    };
    favs: {
      games: string[];
      tools: string[];
      backgrounds: string[];
      events: string[];
    };
    twitch: {
      user: {
        id: string;
        name: string;
        userType: string;
        broadcasterType: string;
        views: number;
        description: string;
        pb: string;
        offlineImg: string;
        isBanned: boolean;
        bannedSince: number;
      };
      stream: {
        id: string;
        status: string;
        title: string;
        viewer: number;
        language: string;
        preview: string;
        game: {
          id: string;
          name: string;
        };
        uptime: {
          startedAt: string;
          startedAtUnix: number;
          converted: string;
        };
        lastStream: {
          uptime: string;
          title: string;
          vod: string;
          startedAt: string;
        };
        tags: string[];
        stats: number;
      };
    };
  };
}
