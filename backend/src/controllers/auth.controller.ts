import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../prisma";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/jwt";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const exists = await prisma.user.findUnique({ where: { email } });
  if (exists) return res.status(400).json({ message: "User exists" });

  const hashed = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: { email, password: hashed },
  });

  res.status(201).json({ message: "User created" });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const accessToken = generateAccessToken(user.id);
  const refreshToken = generateRefreshToken(user.id);

  res.cookie("refreshToken", refreshToken, {
  httpOnly: true,
  secure: true,        // MUST be true in production
  sameSite: "none",    // REQUIRED for cross-site cookies
});


  res.json({ accessToken });
};

export const refresh = async (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ message: "No token" });

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET!
    ) as any;

    const accessToken = generateAccessToken(decoded.id);
    res.json({ accessToken });
  } catch {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("refreshToken");
  res.json({ message: "Logged out" });
};
