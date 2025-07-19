import { Xtream } from "@iptv/xtream-api";
import { Logger } from "./logger.ts";

const logger = new Logger();
const xtream = new Xtream({
  url: process.env.URL as string,
  username: process.env.USERNAME as string,
  password: process.env.PASSWORD as string,
  preferredFormat: "m3u8", // optional preferred format for channel URLs
});

try {
  logger.log("START");
  // UNCOMMENT AND CHECK LOGS OR CONSOLE

  logger.log({ profile: await xtream.getProfile() });
  // logger.log({ server_info: await xtream.getServerInfo() });
  // logger.log({ channel_categories: await xtream.getChannelCategories() });
  // logger.log({ movies_categories: await xtream.getMovieCategories() });
  // logger.log({ show_categories: await xtream.getShowCategories() });
  // logger.log({ channels: await xtream.getChannels() });
  // logger.log({ movies: await xtream.getMovies() });
} catch (error) {
  console.log({ error });
}
