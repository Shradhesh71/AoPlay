import { messageResult } from "./utlis";

export async function pacman(powerup: string) {
  try {
    // const gameProcess = "40yZY0aeTTOmkGqqRPH-jAT26acBfyClVgodD_9fTu4";
    const { Messages, Spawns, Output, Error } = await messageResult(
      "40yZY0aeTTOmkGqqRPH-jAT26acBfyClVgodD_9fTu4",
      [
        {
          name: "Action",
          value: "Marketplace-Pacman",
        },
        {
          name: "powerup",
          value: powerup,
        },
      ]
    );

    console.log("Marketplace Update", { Messages, Output, Error });
    console.log("Data: ", Messages[0].Data);
    if (Error) {
      console.error("Error updating score:", Error);
    } else {
      console.log("Score updated successfully.");
    }
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
}

export async function odyssey(powerup: string) {
  try {
    console.log("odyssey powerup:", powerup);
    const gameProcess = "40yZY0aeTTOmkGqqRPH-jAT26acBfyClVgodD_9fTu4";
    const { Messages, Spawns, Output, Error } = await messageResult(
      gameProcess,
      [
        {
          name: "Action",
          value: "Marketplace-Odyssey",
        },
        {
          name: "powerup",
          value: powerup,
        },
      ]
    );

    console.log("Marketplace Update", { Messages, Output, Error });
    console.log("Data: ", Messages[0].Data);
    if (Error) {
      console.error("Error updating score:", Error);
    } else {
      console.log("Score updated successfully.");
    }
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
}
