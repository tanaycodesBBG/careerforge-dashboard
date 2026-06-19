export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Only POST requests allowed",
    });
  }

  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({
        error: "Resume text is required",
      });
    }

    const prompt = `
You are an expert ATS resume reviewer.

Analyze this resume and return ONLY valid JSON in this exact format:

{
  "score": number between 0 and 100,
  "strength": "one short strength",
  "weakness": "one short weakness",
  "feedback": "clear improvement suggestion"
}

Resume:
${resumeText}
`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "";

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(cleanedText);

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Resume analysis failed",
    });
  }
}