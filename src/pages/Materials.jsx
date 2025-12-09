import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const Materials = () => {
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
                        素材ガイド
                    </h1>
                    <p className="mb-6 leading-relaxed">
                        つるしみゅで選択可能な各素材の特徴をご紹介します。
                        弦の種類によって、矢の飛び方、弦音（つるね）、耐久性などが異なります。
                        ご自身の弓や射法、好みに合わせてお選びください。
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-100">
                            <h4 className="font-bold mb-2 text-stone-900 text-lg">響（ひびき）</h4>
                            <p className="text-sm leading-relaxed">
                                高い反発力と鋭い弦音が特徴。最も広く使われているスタンダードな合成弦です。
                                耐久性も高く、練習から試合まで幅広く対応します。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-100">
                            <h4 className="font-bold mb-2 text-stone-900 text-lg">光牙（こうが）</h4>
                            <p className="text-sm leading-relaxed">
                                繊維の密度が高く、硬めの引き心地が特徴です。
                                矢飛びの良さに定評があり、より鋭い離れを求める射手に好まれます。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-100">
                            <h4 className="font-bold mb-2 text-stone-900 text-lg">快天（かいてん）</h4>
                            <p className="text-sm leading-relaxed">
                                柔軟性があり、扱いやすい弦です。
                                弦音が柔らかく、手への衝撃も比較的少ないため、初心者から中級者にもおすすめです。
                            </p>
                        </div>
                        <div className="bg-stone-50 p-5 rounded-lg border border-stone-100">
                            <h4 className="font-bold mb-2 text-stone-900 text-lg">吟（ぎん）</h4>
                            <p className="text-sm leading-relaxed">
                                最高級の合成繊維を使用。
                                麻弦に近い打感を追求しており、冴えた弦音と鋭い矢飛びを両立させています。
                            </p>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-stone-500">
                        ※素材の特性は一般的な傾向であり、実際の使用感には個人差があります。
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Materials;
