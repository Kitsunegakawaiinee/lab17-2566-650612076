import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "korawit Piboon",
    studentId: "650612076",
  });
};
