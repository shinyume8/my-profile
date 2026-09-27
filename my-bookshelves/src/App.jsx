function Header() {
  const title = "わたしの本棚";

  return (
    <header className="bg-slate-800 text-white p-4 text-center">
      <h1 className="text-xl font-bold">{title}</h1>
    </header>
  );
}

function BookCard({ title, author, rating, comment }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-gray-500 text-sm mb-1">著者: {author}</p>
      <p className="text-yellow-500 mb-2">{rating}</p>
      <p className="text-gray-700 text-sm">{comment}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-2xl mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold text-gray-800 border-b pb-2">
          書籍紹介ページ
        </h1>
        <p className="text-gray-600">おすすめの書籍一覧です。</p>

        <BookCard
          title="人間失格"
          author="太宰治"
          rating="★★★★☆"
          comment="太宰治の代表作"
        />

        <BookCard
          title="刺青"
          author="谷崎潤一郎"
          rating="★★★★★"
          comment="美しい文体で描かれる狂気"
        />
      </main>
    </div>
  );
}
