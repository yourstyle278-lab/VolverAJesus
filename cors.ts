// Headers CORS compartidos por todas las Edge Functions del proyecto.
// Se incluyen en TODAS las respuestas (éxito, error, y el preflight OPTIONS) —
// omitirlos en una respuesta de error es la causa más común de errores
// confusos del lado del navegador ("Failed to fetch" sin más detalle).
export const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};
