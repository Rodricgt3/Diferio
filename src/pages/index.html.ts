import snapshot from '../../Lewius Gordon — Art Director & Designer (10_16_2026 8：40：45 AM).html?raw';
import type { APIRoute } from 'astro';

export const prerender = true;

// Serve the exact SingleFile capture. Nothing from the reconstruction is injected.
export const GET: APIRoute = async () => {
  return new Response(snapshot, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
};
