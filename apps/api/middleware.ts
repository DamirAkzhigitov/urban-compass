import { NextRequest, NextResponse } from 'next/server';

const allowedOrigins = (process.env?.ALLOWED_ORIGIN || '').split(',');

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Credentials': 'true',
};

export function middleware(request: NextRequest) {
  const customHeader = request.headers.get('X-DA-Auth');

  // Если заголовок отсутствует или не соответствует ожидаемому значению
  if (!customHeader || customHeader !== 'true') {
    // Возвращаем ответ с ошибкой
    return new NextResponse(
      JSON.stringify({ message: 'Missing or invalid header' }),
      {
        status: 403, // Forbidden
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }

  const origin = request.headers.get('origin') ?? '';
  const isAllowedOrigin = allowedOrigins.includes(origin);
  const isPreflight = request.method === 'OPTIONS';

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    };
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: '/:path*',
};
