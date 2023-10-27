import Prompts from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  console.log(params.id);
  await connectToDB();
  try {
    const prompt = await Prompts.find({ creator: params.id }).populate(
      "creator"
    );

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
