import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <h1 className="text-6xl font-bold text-stone-200 mb-4">404</h1>
            <p className="text-xl font-bold text-stone-800 mb-2">ページが見つかりません</p>
            <p className="text-stone-500 mb-8">お探しのページは削除されたか、URLが間違っている可能性があります。</p>
            <Link to="/" className="px-6 py-3 bg-stone-900 text-white rounded-xl hover:bg-stone-800 transition-colors font-bold shadow-md">
                ホームに戻る
            </Link>
        </div>
    );
};

export default NotFound;
