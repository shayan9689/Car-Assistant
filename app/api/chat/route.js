import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    // 1️⃣ Read user message from request
    const body = await req.json();
    const userMessage = body.message;

    // 2️⃣ Validate user message
    if (!userMessage) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    // 3️⃣ Optional: Reject non-car messages
    if (
      !userMessage.toLowerCase().includes("car") &&
      !userMessage.toLowerCase().includes("engine") &&
      !userMessage.toLowerCase().includes("model") &&
      !userMessage.toLowerCase().includes("ev") &&
      !userMessage.toLowerCase().includes("hybrid")
    ) {
      return NextResponse.json({
        success: true,
        reply: "I specialize in cars. Can you please ask me a car-related question?",
      });
    }

    // 4️⃣ Check if user is asking for comparison
    const isComparison =
      userMessage.toLowerCase().includes(" vs ") ||
      userMessage.toLowerCase().includes("compare");

    // 5️⃣ Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are a global automotive expert chatbot. You know all car brands, models, years, trims, engines, fuel types, EVs, hybrids, SUVs, sedans, trucks, and luxury vehicles worldwide. You can answer questions about:

- Engine specifications, fuel economy, and performance
- Vehicle trims, optional packages, and colors
- Pricing in different countries (give approximate ranges)
- Comparisons between models or years (e.g., Corolla 2023 vs 2024)
- Maintenance, reliability, and resale value
- EVs and hybrid technology

Always respond professionally, concisely, and factually. Do not answer unrelated questions. If you don’t know, say politely you cannot provide the information.
        `,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    });

    // 6️⃣ Return the response
    return NextResponse.json({
      success: true,
      reply: completion.choices[0].message.content,
      comparison: isComparison,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
