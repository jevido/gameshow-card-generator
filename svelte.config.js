import adapter from "@sveltejs/adapter-auto";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
	alias: {
		$: path.resolve("./src/components/")
	  },
  },
  preprocess: true,

};

export default config;
