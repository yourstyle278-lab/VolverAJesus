// La Senda Antigua — configuración de "¿Qué Haría Jesús?"
//
// Este archivo vive SEPARADO del HTML principal a propósito: cada vez que
// se genera una nueva versión de la app (v21, v22...), este archivo no se
// toca. Complétalo UNA sola vez; las próximas versiones lo cargan tal
// como está, así no hay que volver a pegar estos valores cada vez.
//
// Reemplaza TU_PROJECT_REF por el ID de tu proyecto de Supabase
// (Project Settings -> General -> Reference ID), y
// PEGA_AQUI_TU_ANON_KEY_DE_SUPABASE por tu clave "anon" / "publishable"
// (Project Settings -> API Keys).
//
// La ANON KEY es segura de tener aquí: está diseñada para ser pública en
// el cliente. La key de Groq NUNCA va en este archivo ni en ningún otro
// archivo del cliente; vive solo como secret dentro de Supabase (ver
// supabase/functions/que-haria-jesus/index.ts).
let SUPABASE_FUNCTION_URL = 'https://oevuyzlteojlmcwfioae.supabase.co/functions/v1/que-haria-jesus';
let SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ldnV5emx0ZW9qbG1jd2Zpb2FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1MjE0MTMsImV4cCI6MjEwNTA5NzQxM30.j68iNr2AeM5WkFZ17Ff1BB_rf75qmCc7f42ret5IFmg';
