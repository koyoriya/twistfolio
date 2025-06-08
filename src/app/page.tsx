import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image"
import { allArticles } from 'contentlayer/generated';
import dayjs from 'dayjs';

export default function HomePage() {
  return (
    <main className="p-6 space-y-8 max-w-3xl mx-auto">
      {/* アイキャッチ */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">こより屋</h1>
        <div className="mt-4">
          <Image
            src="/images/cover.png"
            alt="アイキャッチ画像"
            className="mx-auto rounded-2xl shadow-md max-h-60 object-cover"
            width="200"
            height="200"
          />
        </div>
      </section>

      {/* プロフィール */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">プロフィール</h2>
        <div className="space-y-2">
          <p><strong>メール：</strong> f.koyoriya[at]gmail.com</p>
          <p><strong>資格：</strong>普通自動車免許、三陸特</p>
          <p><strong>学歴・職歴：</strong>某社プログラマ → 時々業務を受託しながら大学生</p>
        </div>
      </section>

      {/* 最新ブログ記事 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">最新のブログ記事</h2>
        <div className="grid grid-cols-1 gap-4">
          {allArticles.sort((a, b) => dayjs(b.publishedAt).diff(dayjs(a.publishedAt))).map((post) => (
            <Card key={post.id}>
              <CardContent className="p-4">
                <h3 className="text-lg font-medium mb-1">{post.title}</h3>
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                  記事を読む →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
