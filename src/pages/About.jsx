import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
            <Link to="/" className="inline-flex items-center text-stone-500 hover:text-stone-800 mb-6 transition-colors">
                <ChevronLeft size={20} />
                <span className="font-medium">ホームに戻る</span>
            </Link>

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 lg:p-10 space-y-8 text-stone-700">
                <section>
                    <h1 className="text-2xl font-bold mb-6 text-stone-900 border-b border-stone-100 pb-4">
                        つるしみゅについて
                    </h1>
                    <p className="leading-relaxed mb-4">
                        「つるしみゅ」は、弓道で使用される弦（つる）のカラーオーダーをシミュレーションするためのツールです。
                        日の輪（上部の輪）、月の輪（下部の輪）、そして弦本体の色を自由に組み合わせることで、
                        自分だけのオリジナルの弦をイメージすることができます。
                    </p>
                    <p className="leading-relaxed">
                        多くの弓具店では弦のカラーオーダーを受け付けていますが、
                        実際の仕上がりを想像するのは難しいものです。
                        このツールを使えば、画面上でリアルな仕上がりを確認しながら、納得のいく組み合わせを見つけることができます。
                    </p>
                </section>

                <section>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-stone-100 pb-2">
                        <span className="text-stone-900">機能と使い方</span>
                    </h3>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                        <li><strong>素材の選択:</strong> 響、光牙、快天など、代表的な弦の素材から選択できます。</li>
                        <li><strong>太さの選択:</strong> 弓力や好みに合わせて、弦の太さを変更できます。</li>
                        <li><strong>直感的なカラー変更:</strong> 日の輪、月の輪、弦本体の色をタップするだけで瞬時に変更できます。</li>
                        <li><strong>360度プレビュー:</strong> 回転ボタンを使って、弦を180度反転させ、裏側のデザインも確認できます。</li>
                        <li><strong>構成のコピー:</strong> 決定した組み合わせは「構成をコピー」ボタンでテキストとして保存し、そのまま注文メールなどに貼り付けることができます。</li>
                    </ul>
                </section>

                <section className="text-sm text-stone-500 border-t border-stone-100 pt-8 mt-8">
                    <h4 className="font-bold mb-2">免責事項・プライバシーポリシー</h4>
                    <p>
                        本シミュレーターは色の組み合わせをイメージするためのものであり、
                        実際の製品の色味や質感と完全に一致することを保証するものではありません。
                        お使いのディスプレイ環境によっても見え方が異なる場合があります。<br />
                        当サイトでは、Google AdSenseを含む第三者配信の広告サービスを利用しており、
                        ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
                        Cookieを無効にする設定や詳細については、<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" className="underline hover:text-stone-700">Googleのポリシーと規約</a>をご確認ください。
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
