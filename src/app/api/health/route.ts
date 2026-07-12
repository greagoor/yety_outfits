// ============================================================
// GET /api/health — system health check
// ============================================================

import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(): Promise<NextResponse> {
  const start = Date.now();

  try {
    // Lightweight DB ping
    await prisma.$queryRaw`SELECT 1`;
    const dbLatency = Date.now() - start;

    return NextResponse.json({
      success: true,
      message: 'Couple Style Universe is alive ✨',
      data: {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV ?? 'unknown',
        database: {
          status: 'connected',
          latency_ms: dbLatency,
        },
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'Database connection failed',
        data: {
          status: 'unhealthy',
          timestamp: new Date().toISOString(),
          database: { status: 'disconnected' },
        },
      },
      { status: 503 }
    );
  }
}
