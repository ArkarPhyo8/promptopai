import Prompts from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  await connectToDB();
  try {
    const prompt = await Prompts.find({}).populate("creator");

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
