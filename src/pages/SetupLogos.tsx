import React, { useState } from 'react';
import { Upload, Sun, Moon, Check, AlertTriangle, Loader2 } from 'lucide-react';

export default function SetupLogos() {
  const [lightFile, setLightFile] = useState<File | null>(null);
  const [darkFile, setDarkFile] = useState<File | null>(null);
  const [status, setStatus] = useState<{[key: string]: 'idle' | 'uploading' | 'success' | 'error'}>({
    light: 'idle',
    dark: 'idle'
  });

  const upload = async (file: File, type: 'light' | 'dark') => {
    setStatus(prev => ({ ...prev, [type]: 'uploading' }));
    const formData = new FormData();
    formData.append('logo', file);
    formData.append('type', type);

    try {
      const res = await fetch('/api/admin/upload-logo', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus(prev => ({ ...prev, [type]: 'success' }));
        // Refresh logo visual
        const logos = document.querySelectorAll<HTMLImageElement>('#logo');
        logos.forEach(img => {
          if (img.src.includes(`/logos/logo-${type}.png`)) img.src = `${img.src.split('?')[0]}?t=${Date.now()}`;
        });
      } else {
        throw new Error();
      }
    } catch {
      setStatus(prev => ({ ...prev, [type]: 'error' }));
    }
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-6 pt-24">
      <div className="max-w-2xl w-full grid md:grid-cols-2 gap-8">
        {/* Light Mode Logo */}
        <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-2xl space-y-6">
          <div className="flex items-center gap-3 text-black mb-2">
            <Sun size={20} />
            <h2 className="font-black uppercase tracking-widest text-xs">Light Theme Logo</h2>
          </div>
          <div className="aspect-square bg-black/5 rounded-2xl border-2 border-dashed border-black/10 flex items-center justify-center relative overflow-hidden group">
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer z-10" 
              onChange={(e) => setLightFile(e.target.files?.[0] || null)}
            />
            {lightFile ? (
              <img src={URL.createObjectURL(lightFile)} className="max-h-[80%] object-contain" alt="Preview" />
            ) : (
              <Upload className="text-black/20 group-hover:text-black/40 transition-colors" size={32} />
            )}
          </div>
          <button
            onClick={() => lightFile && upload(lightFile, 'light')}
            disabled={!lightFile || status.light === 'uploading'}
            className="w-full py-4 bg-black text-white rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-black/90 disabled:opacity-50 transition-all"
          >
            {status.light === 'uploading' ? <Loader2 className="animate-spin" size={14} /> : status.light === 'success' ? <Check size={14} /> : 'Upload Light Logo'}
          </button>
        </div>

        {/* Dark Mode Logo */}
        <div className="bg-card-bg rounded-3xl p-8 border border-white/5 shadow-2xl space-y-6">
          <div className="flex items-center gap-3 text-white mb-2">
            <Moon size={20} />
            <h2 className="font-black uppercase tracking-widest text-xs">Dark Theme Logo</h2>
          </div>
          <div className="aspect-square bg-white/5 rounded-2xl border-2 border-dashed border-white/10 flex items-center justify-center relative overflow-hidden group">
            <input 
              type="file" 
              className="absolute inset-0 opacity-0 cursor-pointer z-10" 
              onChange={(e) => setDarkFile(e.target.files?.[0] || null)}
            />
            {darkFile ? (
              <img src={URL.createObjectURL(darkFile)} className="max-h-[80%] object-contain" alt="Preview" />
            ) : (
              <Upload className="text-white/20 group-hover:text-white/40 transition-colors" size={32} />
            )}
          </div>
          <button
            onClick={() => darkFile && upload(darkFile, 'dark')}
            disabled={!darkFile || status.dark === 'uploading'}
            className="w-full py-4 bg-white text-bg rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-white/90 disabled:opacity-50 transition-all"
          >
            {status.dark === 'uploading' ? <Loader2 className="animate-spin" size={14} /> : status.dark === 'success' ? <Check size={14} /> : 'Upload Dark Logo'}
          </button>
        </div>
      </div>
    </div>
  );
}
