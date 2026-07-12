// ============================================================
// API Response Helpers — Couple Style Universe
// Consistent structured response factory functions
// ============================================================

import { NextResponse } from 'next/server';
import type { PaginationMeta, ApiResponse, ValidationError } from '@/types';

// ──────────────────────────────────────────────────────────
// Success Responses
// ──────────────────────────────────────────────────────────

export function successResponse<T>(
  data: T,
  message: string = 'Success',
  status: number = 200
): NextResponse<ApiResponse<T>> {
  return NextResponse.json({ success: true, message, data }, { status });
}

export function createdResponse<T>(
  data: T,
  message: string = 'Created successfully'
): NextResponse<ApiResponse<T>> {
  return successResponse(data, message, 201);
}

export function paginatedResponse<T>(
  data: T[],
  pagination: PaginationMeta,
  message: string = 'Fetched successfully'
): NextResponse<ApiResponse<T[]>> {
  return NextResponse.json({ success: true, message, data, pagination }, { status: 200 });
}

// ──────────────────────────────────────────────────────────
// Error Responses
// ──────────────────────────────────────────────────────────

export function errorResponse(
  message: string,
  status: number = 500,
  errors?: ValidationError[]
): NextResponse<ApiResponse<never>> {
  return NextResponse.json(
    { success: false, message, ...(errors ? { errors } : {}) },
    { status }
  );
}

export function notFoundResponse(
  resource: string = 'Resource'
): NextResponse<ApiResponse<never>> {
  return errorResponse(`${resource} not found`, 404);
}

export function validationErrorResponse(
  errors: ValidationError[]
): NextResponse<ApiResponse<never>> {
  return errorResponse('Validation failed', 422, errors);
}

export function conflictResponse(
  message: string = 'Resource already exists'
): NextResponse<ApiResponse<never>> {
  return errorResponse(message, 409);
}

export function unauthorizedResponse(
  message: string = 'Unauthorized'
): NextResponse<ApiResponse<never>> {
  return errorResponse(message, 401);
}

// ──────────────────────────────────────────────────────────
// Pagination Builder
// ──────────────────────────────────────────────────────────

export function buildPagination(
  total: number,
  page: number,
  limit: number
): PaginationMeta {
  const totalPages = Math.ceil(total / limit);
  return {
    page,
    limit,
    total,
    totalPages,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  };
}
