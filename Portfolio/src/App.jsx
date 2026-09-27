import { useState, useEffect } from 'react';

export default function App() {
  // フリーの高品質画像URLを使ったスライドデータ
  const slides = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80", 
      alt: "深紅のバラ", 
      title: "Flowers" 
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", 
      alt: "バンドメンバー", 
      title: "Music" 
    },
    { 
      id: 3, 
      src: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80", 
      alt: "開かれた本", 
      title: "Books" 
    },
    { 
      id: 4, 
      src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80", 
      alt: "アート作品", 
      title: "Art" 
    },
    { 
      id: 5, 
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80", 
      alt: "テーブルの料理", 
      title: "Gourmet" 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans flex flex-col selection:bg-purple-200">
      
      {/* 濃いグレー背景のヘッダー */}
      <header className="bg-zinc-900 text-white py-12 px-4 shadow-md">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-3">
          <span className="text-purple-300 tracking-widest text-sm font-mono">2026.9.27</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Portfolio</h1>
          <p className="text-purple-200 text-lg font-medium tracking-wide">
            私のすきなもの
          </p>
        </div>
      </header>

      {/* メインエリア */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-16 space-y-20">
        
        {/* Introduction */}
        <section className="bg-white rounded-2xl p-8 shadow-sm border border-purple-100/60 text-center space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900 border-b border-purple-100 pb-3 inline-block px-6">
            Introduction
          </h2>
          <p className="text-zinc-600 text-lg leading-relaxed pt-2">
            私の好きなものを広めたい
          </p>
        </section>

        {/* Favorite (スライドショー) */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-purple-100 pb-3">
            <h2 className="text-2xl font-bold text-zinc-900">Favorite</h2>
            <span className="text-sm font-mono text-purple-600 font-medium">
              {currentIndex + 1} / {slides.length}
            </span>
          </div>

          <div className="relative group w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden bg-zinc-900 shadow-lg border border-purple-100">
            
            <div className="relative w-full h-full overflow-hidden cursor-pointer">
              <img
                src={slides[currentIndex].src}
                alt={slides[currentIndex].alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white space-y-2">
                <span className="text-2xl font-bold tracking-wider">{slides[currentIndex].title}</span>
                <span className="text-xs bg-purple-600/80 backdrop-blur-sm px-4 py-1.5 rounded-full tracking-widest uppercase font-semibold">
                  詳細を見る
                </span>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-purple-600/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-80 group-hover:opacity-100"
              aria-label="前の写真"
            >
              ❮
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-purple-600/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-80 group-hover:opacity-100"
              aria-label="次の写真"
            >
              ❯
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-purple-300 w-6" : "bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 濃いグレー背景のフッター */}
      <footer className="bg-zinc-900 text-white py-8 text-center border-t border-zinc-800">
        <p className="text-xs text-purple-200/70 tracking-widest font-mono">
          © 2026.9.27 My Favorite Portfolio. All rights reserved.
        </p>
      </footer>
    </div>
  );
}