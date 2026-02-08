const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const bucket = process.env.SUPABASE_BUCKET || 'uploads';

if (!supabaseUrl || !supabaseKey) {
  console.warn('WARNING: Supabase credentials not set. File uploads will fail.');
}

const supabase = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : null;

/**
 * Upload a file to Supabase Storage
 * @param {Buffer} fileBuffer - The file data
 * @param {string} fileName - The destination file name (e.g., "student-ids/sid-123.jpg")
 * @param {string} mimeType - The MIME type of the file
 * @returns {string} The public URL of the uploaded file
 */
async function uploadFile(fileBuffer, fileName, mimeType) {
  if (!supabase) {
    throw new Error('Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_KEY.');
  }

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, fileBuffer, {
      contentType: mimeType,
      upsert: true,
    });

  if (error) {
    console.error('Supabase upload error:', error);
    throw new Error(`File upload failed: ${error.message}`);
  }

  // Get public URL
  const { data: urlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileName);

  return urlData.publicUrl;
}

module.exports = { uploadFile, supabase };
