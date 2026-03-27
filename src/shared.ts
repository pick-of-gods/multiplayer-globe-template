// Messages that we'll send to the client

// Representing a person's position
export type Position = {
  lat: number;
  lng: number;
  id: string;
};

export type OutgoingMessage =
  | {
      type: "add-marker";
      position: Position;
    }
  | {
      type: "remove-marker";
      id: string;
    }
  // Phase 17 Bi-Directional Tail (<-|->)
  | {
      type: "direct_perception";
      payload: any;
    }
  | {
      type: "entity_spawn";
      id: string;
      x: number;
      y: number;
      z: number;
      animation_id: number;
      asset_url: string;
    }
  | {
      type: "volitional_request";
      target: string;
    }
  | {
      type: "state-sync";
      state: {
        id: string;
        nodes: Record<string, any>;
        lastSync: number;
      };
    }
  | {
      type: "update-node";
      nodeId: string;
      data: any;
    };
