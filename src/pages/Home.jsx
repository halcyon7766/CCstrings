import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, Info, Copy, Check, RotateCcw } from 'lucide-react';
import {
    MATERIALS,
    COLORS,
    HINOWA_COLORS,
    BOW_LENGTHS,
    THICKNESSES,
    BOW_STRENGTHS,
    TSUKINOWA_COLORS
} from '../data';

// --- SVG Components ---

const SVGDefs = () => (
    <defs>
        {/* 結束部分の細かい横巻きテクスチャ */}
        <pattern id="fineWindingTexture" x="0" y="0" width="10" height="2" patternUnits="userSpaceOnUse">
            <rect width="10" height="2" fill="white" fillOpacity="0" />
            <line x1="0" y1="1.5" x2="10" y2="1.5" stroke="black" strokeOpacity="0.2" strokeWidth="0.5" />
            <line x1="0" y1="0.5" x2="10" y2="0.5" stroke="white" strokeOpacity="0.25" strokeWidth="0.5" />
        </pattern>

        {/* 弦本体・ループの編み込みテクスチャ */}
        <pattern id="braidTexture" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
            <rect width="4" height="4" fill="white" fillOpacity="0" />
            <path d="M0 1 L4 1 M0 3 L4 3" stroke="black" strokeOpacity="0.15" strokeWidth="0.5" />
            <path d="M1 0 L1 4 M3 0 L3 4" stroke="black" strokeOpacity="0.05" strokeWidth="0.5" />
        </pattern>

        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="2" dy="2" result="offsetblur" />
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
                <feMergeNode />
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>

        <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="black" stopOpacity="0.3" />
            <stop offset="20%" stopColor="black" stopOpacity="0.1" />
            <stop offset="40%" stopColor="white" stopOpacity="0.4" />
            <stop offset="60%" stopColor="white" stopOpacity="0.1" />
            <stop offset="80%" stopColor="black" stopOpacity="0.1" />
            <stop offset="100%" stopColor="black" stopOpacity="0.4" />
        </linearGradient>
    </defs>
);

// --- Custom Hooks ---
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};

const StringLoopDetail = ({ loopColor, bodyColor, isMobile }) => {
    return (
        <g>
            <g transform="translate(0, 25)" filter="url(#dropShadow)">

                {/* 1. ループ部分 (上の輪) - 修正：先端の尖りをなくし、完全に丸くする */}
                <path
                    d="M 43,110 C 25,80 15,10 50,10 S 75,80 57,110"
                    fill="none"
                    stroke={loopColor}
                    strokeWidth="10"
                    strokeLinecap="round"
                />

                {/* ループのテクスチャとハイライト */}
                <path
                    d="M 43,110 C 25,80 15,10 50,10 S 75,80 57,110"
                    fill="none"
                    stroke="url(#fineWindingTexture)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    opacity="0.8"
                />
                <path
                    d="M 43,110 C 25,80 15,10 50,10 S 75,80 57,110"
                    fill="none"
                    stroke="url(#highlightGradient)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    style={{ mixBlendMode: 'overlay' }}
                />

                {/* 2. 弦本体 (下に伸びる紐) */}
                <line x1="50" y1="220" x2="50" y2={isMobile ? "330" : "600"} stroke={bodyColor} strokeWidth="8" strokeLinecap="round" />
                <line x1="50" y1="220" x2="50" y2={isMobile ? "330" : "600"} stroke="url(#braidTexture)" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
                <line x1="50" y1="220" x2="50" y2={isMobile ? "330" : "600"} stroke="url(#highlightGradient)" strokeWidth="8" strokeLinecap="round" style={{ mixBlendMode: 'overlay' }} />

                {/* 3. 結束部分 (仕掛け/Neck) - ループからのつながりをより自然に */}
                <g>
                    {/* ベース色 - 上部をループのカーブに合わせて調整 */}
                    <path
                        d="M 41,110
               L 41,120
               L 44,150
               L 46,220
               L 54,220
               L 56,150
               L 59,120
               L 59,110
               Z"
                        fill={loopColor}
                    />
                    {/* 接続部の補正 */}
                    <path
                        d="M 41,110 Q 50,113 59,110 L 59,120 L 41,120 Z"
                        fill={loopColor}
                    />

                    {/* 横巻きテクスチャ */}
                    <path
                        d="M 41,110 L 41,120 L 44,150 L 46,220 L 54,220 L 56,150 L 59,120 L 59,110 Z"
                        fill="url(#fineWindingTexture)"
                        opacity="0.8"
                    />

                    {/* 立体感ハイライト */}
                    <path
                        d="M 41,110 L 41,120 L 44,150 L 46,220 L 54,220 L 56,150 L 59,120 L 59,110 Z"
                        fill="url(#highlightGradient)"
                        style={{ mixBlendMode: 'overlay' }}
                    />

                    {/* 輪郭線 */}
                    <path
                        d="M 41,110 L 41,120 L 44,150 L 46,220 M 59,110 L 59,120 L 56,150 L 54,220"
                        stroke="black"
                        strokeOpacity="0.1"
                        strokeWidth="0.5"
                        fill="none"
                    />

                    {/* 結束下部の影 */}
                    <path
                        d="M 46,218 Q 50,221 54,218"
                        stroke="black"
                        strokeOpacity="0.2"
                        strokeWidth="1"
                        fill="none"
                    />
                </g>
            </g>
        </g>
    );
};

// --- Sub Components ---

const ColorSwatch = ({ color, isSelected, onClick, disabled = false }) => (
    <button
        type="button"
        onClick={() => !disabled && onClick(color)}
        className={`
      w-8 h-8 rounded-full transition-all duration-200 relative shadow-sm
      ${isSelected ? 'ring-2 ring-offset-2 ring-stone-800 scale-110 z-10' : 'hover:scale-110'}
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    `}
        style={{ backgroundColor: color.hex, border: `1px solid ${color.border}` }}
        title={color.name}
        aria-label={`${color.name}を選択`}
    >
        {isSelected && (
            <span className="absolute inset-0 flex items-center justify-center">
                <span className={`w-1.5 h-1.5 rounded-full ${['white', 'yellow_ochre', 'pink'].includes(color.id) ? 'bg-stone-800' : 'bg-white'}`}></span>
            </span>
        )}
    </button>
);

const AdUnit = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error("AdSense error", e);
        }
    }, []);

    return (
        <div className="my-4 min-h-[100px] bg-stone-50 rounded-xl overflow-hidden text-center">
            <div className="text-[10px] text-stone-300 py-1 uppercase tracking-widest">Sponsored</div>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9880919415099202"
                data-ad-slot="7354574938"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
    );
};

export default function Home() {
    const [material, setMaterial] = useState(MATERIALS[0]);
    const [thickness, setThickness] = useState(THICKNESSES[1]); // デフォルト: 中
    const [bodyColor, setBodyColor] = useState(COLORS[0]); // 白
    const [hinowaColor] = useState(HINOWA_COLORS[0]); // 赤
    const [tsukinowaColor, setTsukinowaColor] = useState(TSUKINOWA_COLORS.find(c => c.id === 'blue') || TSUKINOWA_COLORS[0]); // 青

    const [hinowaRot, setHinowaRot] = useState(false);
    const [tsukinowaRot, setTsukinowaRot] = useState(false);

    // 入力ステート
    const [bowBrand, setBowBrand] = useState('');
    const [bowLength, setBowLength] = useState('並');
    const [bowStrength, setBowStrength] = useState(15);
    const [bowTipDiameter, setBowTipDiameter] = useState(''); // 弓弭の外径
    const [bowDate, setBowDate] = useState(''); // 購入・製造時期

    const [copied, setCopied] = useState(false);
    const isMobile = useIsMobile(); // モバイル判定

    // 素材に基づいて選択可能な色をフィルタリング
    const availableBodyColors = useMemo(() => {
        if (!material.availableColors) return COLORS; // フォールバック
        return COLORS.filter(color => material.availableColors.includes(color.id));
    }, [material]);



    const handleCopyConfig = () => {
        const config = [
            `【${material.name} / ${thickness.name}】`, // タイトルに構成を含める
            `弦の色: ${bodyColor.name}`,
            `日の輪: ${hinowaColor.name}`,
            `月の輪: ${tsukinowaColor.name}`,
            `----------------`,
            `弓: ${bowBrand || '未入力'} (${bowLength} / ${bowStrength}kg)`
        ];

        if (bowTipDiameter) {
            config.push(`弭径: ${bowTipDiameter}mm`);
        }
        if (bowDate) {
            config.push(`時期: ${bowDate}`);
        }

        navigator.clipboard.writeText(config.join('\n'));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full relative">
            <div className="flex-grow max-w-6xl mx-auto w-full px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">

                {/* Left Column: Preview Area */}
                <div className={`
             lg:col-span-7 bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden sticky top-20 lg:top-24 z-30 flex flex-col
             ${isMobile ? 'h-[320px]' : 'h-[45vh] lg:h-[calc(100vh-8rem)]'}
           `}>


                    <div className="w-full h-full flex items-center justify-center bg-stone-50/50 relative">
                        {/* HTML Labels for Layout Flexibility */}
                        {isMobile ? (
                            <>
                                <div className="absolute top-[0px] left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center gap-2 z-10">
                                    <span className="text-xs font-bold text-stone-500 tracking-widest">日の輪（上部）</span>
                                    <button onClick={() => setHinowaRot(!hinowaRot)} className="p-1 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors">
                                        <RotateCcw size={12} className="text-stone-600" />
                                    </button>
                                </div>
                                <div className="absolute top-[140px] left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center gap-2 z-10">
                                    <span className="text-xs font-bold text-stone-500 tracking-widest">月の輪（下部）</span>
                                    <button onClick={() => setTsukinowaRot(!tsukinowaRot)} className="p-1 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors">
                                        <RotateCcw size={12} className="text-stone-600" />
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="absolute top-[30px] left-[25%] transform -translate-x-1/2 flex items-center gap-2 z-10">
                                    <span className="text-xs font-bold text-stone-500 tracking-widest">日の輪（上部）</span>
                                    <button onClick={() => setHinowaRot(!hinowaRot)} className="p-1.5 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors shadow-sm">
                                        <RotateCcw size={14} className="text-stone-600" />
                                    </button>
                                </div>
                                <div className="absolute top-[30px] right-[25%] transform translate-x-1/2 flex items-center gap-2 z-10">
                                    <span className="text-xs font-bold text-stone-500 tracking-widest">月の輪（下部）</span>
                                    <button onClick={() => setTsukinowaRot(!tsukinowaRot)} className="p-1.5 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors shadow-sm">
                                        <RotateCcw size={14} className="text-stone-600" />
                                    </button>
                                </div>
                            </>
                        )}

                        <svg
                            viewBox={isMobile ? "0 0 360 260" : "0 0 400 950"}
                            className="w-full h-full max-h-[90%] drop-shadow-2xl transition-all duration-500"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <SVGDefs />
                            {/* Background Circle - Adjust for orientation */}
                            {isMobile ? (
                                <circle cx="225" cy="180" r="140" fill="white" opacity="0.5" />
                            ) : (
                                <circle cx="200" cy="250" r="180" fill="white" opacity="0.5" />
                            )}

                            <g transform={`${isMobile ? "translate(-15, 100) rotate(-90)" : "translate(25, 20) scale(1.5)"} ${hinowaRot ? (isMobile ? 'rotate(180, 50, 200)' : 'rotate(180, 50, 300)') : ''}`}>
                                <StringLoopDetail loopColor={hinowaColor.hex} bodyColor={bodyColor.hex} isMobile={isMobile} />
                            </g>
                            <g transform={`${isMobile ? "translate(-15, 230) rotate(-90)" : "translate(225, 20) scale(1.5)"} ${tsukinowaRot ? (isMobile ? 'rotate(180, 50, 200)' : 'rotate(180, 50, 300)') : ''}`}>
                                <StringLoopDetail loopColor={tsukinowaColor.hex} bodyColor={bodyColor.hex} isMobile={isMobile} />
                            </g>
                        </svg>
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-stone-400 bg-white/80 px-2 py-1 rounded">※ 質感はイメージです</div>
                </div>

                {/* Right Column: Controls */}
                <div className="lg:col-span-5 flex flex-col relative h-[45vh] lg:h-[calc(100vh-8rem)] bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden">

                    {/* Scrollable Content Area */}
                    <div className="flex-grow space-y-6 overflow-y-auto lg:pr-2 pb-32 lg:pb-0 scrollbar-hide">

                        {/* 1. 素材選択 */}
                        <section className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                            <h2 className="text-lg font-bold mb-3 text-stone-800 flex items-center gap-2">
                                <span className="w-1 h-6 bg-stone-800 rounded-full"></span>
                                素材
                            </h2>
                            <div className="relative group">
                                <select
                                    value={material.id}
                                    onChange={(e) => {
                                        const newMaterial = MATERIALS.find(m => m.id === e.target.value);
                                        setMaterial(newMaterial);
                                        // Check if current body color is compatible with new material
                                        if (newMaterial.availableColors && !newMaterial.availableColors.includes(bodyColor.id)) {
                                            const firstAvailableColor = COLORS.find(c => newMaterial.availableColors.includes(c.id));
                                            if (firstAvailableColor) {
                                                setBodyColor(firstAvailableColor);
                                            }
                                        }
                                    }}
                                    className="w-full appearance-none bg-stone-50 border border-stone-200 rounded-lg py-3 px-4 pr-10 text-stone-700 font-medium focus:outline-none focus:ring-2 focus:ring-stone-400 cursor-pointer transition-all hover:bg-stone-100"
                                >
                                    {MATERIALS.map(m => (
                                        <option key={m.id} value={m.id}>{m.name}</option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 pointer-events-none group-hover:text-stone-600 transition-colors" size={20} />
                            </div>
                            <p className="mt-3 text-xs text-stone-500 flex items-start gap-1.5 leading-relaxed">
                                <Info size={14} className="mt-0.5 flex-shrink-0" />
                                <span>素材によって弦の伸びや打感が変化します。</span>
                            </p>
                        </section>

                        {/* 1.5. 太さ選択 */}
                        <section className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
                            <h2 className="text-lg font-bold mb-3 text-stone-800 flex items-center gap-2">
                                <span className="w-1 h-6 bg-stone-800 rounded-full"></span>
                                弦の太さ
                            </h2>
                            <div className="flex gap-2">
                                {THICKNESSES.map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setThickness(t)}
                                        className={`
                      flex-1 py-3 px-4 rounded-lg font-bold transition-all border
                      ${thickness.id === t.id
                                                ? 'bg-stone-800 text-white border-stone-800 shadow-md transform scale-[1.02]'
                                                : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100 hover:border-stone-300'}
                    `}
                                    >
                                        {t.name}
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* 2. カラー設定エリア */}
                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-6">

                            {/* 弦の色 */}
                            <section>
                                <div className="flex justify-between items-baseline mb-3">
                                    <h2 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-stone-800 rounded-full"></span>
                                        弦の色
                                    </h2>
                                    <span className="text-sm font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded">{bodyColor.name}</span>
                                </div>
                                {/* フィルタリングされた色リストを表示 */}
                                <div className="flex flex-wrap gap-2.5">
                                    {availableBodyColors.map((color) => (
                                        <ColorSwatch
                                            key={`body-${color.id}`}
                                            color={color}
                                            isSelected={bodyColor.id === color.id}
                                            onClick={setBodyColor}
                                        />
                                    ))}
                                </div>
                            </section>

                            <hr className="border-stone-100" />

                            {/* 日の輪の色 */}
                            <section>
                                <div className="flex justify-between items-baseline mb-3">
                                    <h2 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-red-600 rounded-full"></span>
                                        日の輪（上部）
                                    </h2>
                                    <span className="text-xs text-red-600 font-bold bg-red-50 px-2 py-1 rounded border border-red-100">赤のみ</span>
                                </div>
                                <div className="flex flex-wrap gap-2.5">
                                    <ColorSwatch
                                        color={HINOWA_COLORS[0]}
                                        isSelected={true}
                                        onClick={() => { }}
                                    />
                                </div>
                            </section>

                            <hr className="border-stone-100" />

                            {/* 月の輪の色 */}
                            <section>
                                <div className="flex justify-between items-baseline mb-3">
                                    <h2 className="text-lg font-bold text-stone-800 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                                        月の輪（下部）
                                    </h2>
                                    <span className="text-sm font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded">{tsukinowaColor.name}</span>
                                </div>
                                <div className="flex flex-wrap gap-2.5">
                                    {TSUKINOWA_COLORS.map((color) => (
                                        <ColorSwatch
                                            key={`tsuki-${color.id}`}
                                            color={color}
                                            isSelected={tsukinowaColor.id === color.id}
                                            onClick={setTsukinowaColor}
                                        />
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* 3. 弓の情報入力エリア */}
                        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-5">
                            <h2 className="text-lg font-bold text-stone-800 flex items-center gap-2 mb-4">
                                <span className="w-1 h-6 bg-stone-800 rounded-full"></span>
                                弓の詳細情報
                            </h2>

                            {/* 弓の銘柄 */}
                            <div>
                                <label className="block text-sm font-bold text-stone-700 mb-1.5">弓の銘柄</label>
                                <input
                                    type="text"
                                    value={bowBrand}
                                    onChange={(e) => setBowBrand(e.target.value)}
                                    placeholder="例：直心Ⅱカーボン、粋など"
                                    className="w-full bg-stone-50 border border-stone-200 rounded-lg py-3 px-4 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 placeholder-stone-400 transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {/* 弓の長さ */}
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-1.5">弓の長さ</label>
                                    <div className="relative">
                                        <select
                                            value={bowLength}
                                            onChange={(e) => setBowLength(e.target.value)}
                                            className="w-full appearance-none bg-stone-50 border border-stone-200 rounded-lg py-3 px-4 pr-8 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 cursor-pointer"
                                        >
                                            {BOW_LENGTHS.map((len) => (
                                                <option key={len} value={len}>{len}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 pointer-events-none" size={16} />
                                    </div>
                                </div>

                                {/* 弓の強さ */}
                                <div>
                                    <label className="block text-sm font-bold text-stone-700 mb-1.5">弓の強さ</label>
                                    <div className="relative">
                                        <select
                                            value={bowStrength}
                                            onChange={(e) => setBowStrength(Number(e.target.value))}
                                            className="w-full appearance-none bg-stone-50 border border-stone-200 rounded-lg py-3 px-4 pr-8 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 cursor-pointer"
                                        >
                                            {BOW_STRENGTHS.map((strength) => (
                                                <option key={strength} value={strength}>{strength}kg</option>
                                            ))}
                                        </select>
                                        <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-stone-500 pointer-events-none text-sm">kg</span>
                                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-stone-400 pointer-events-none" size={16} />
                                    </div>
                                </div>
                            </div>

                            {/* 弓弭の外径 */}
                            <div>
                                <label className="block text-sm font-bold text-stone-700 mb-1.5 flex justify-between">
                                    <span>弓弭の外径 (mm)</span>
                                    <span className="text-xs font-normal text-stone-400 bg-stone-100 px-2 py-0.5 rounded">任意</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        step="1"
                                        value={bowTipDiameter}
                                        onChange={(e) => setBowTipDiameter(e.target.value)}
                                        placeholder="例：68"
                                        className="w-full bg-stone-50 border border-stone-200 rounded-lg py-3 px-4 pr-10 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 placeholder-stone-400 transition-colors"
                                    />
                                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-stone-500 pointer-events-none text-sm font-medium">mm</span>
                                </div>
                                <p className="mt-1.5 text-xs text-stone-400">※ 正確な数値がわかる場合に入力してください</p>
                            </div>

                            {/* 購入・製造時期 */}
                            <div>
                                <label className="block text-sm font-bold text-stone-700 mb-1.5 flex justify-between">
                                    <span>購入・製造時期</span>
                                    <span className="text-xs font-normal text-stone-400 bg-stone-100 px-2 py-0.5 rounded">任意</span>
                                </label>
                                <input
                                    type="text"
                                    value={bowDate}
                                    onChange={(e) => setBowDate(e.target.value)}
                                    placeholder="例：2023年4月、平成30年頃など"
                                    className="w-full bg-stone-50 border border-stone-200 rounded-lg py-3 px-4 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400 placeholder-stone-400 transition-colors"
                                />
                            </div>
                        </div>

                        <AdUnit />

                        {/* Contact / Footer */}
                        <div className="text-center pt-4 pb-2 text-stone-500 text-sm">
                            <p className="mb-2">Produced by <a href="https://x.com/7n038" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">@7n038</a></p>
                            <p className="text-xs leading-relaxed">
                                このサイトに関するご相談・お問い合わせは<br />
                                上記X(旧Twitter)までお気軽にご連絡ください。
                            </p>
                        </div>

                    </div>

                    {/* Footer Action */}
                    <div className="mt-4 pt-4 pb-0 border-t border-stone-100 bg-white/95 backdrop-blur-sm sticky bottom-0 z-20 px-5 -mx-5">
                        <button
                            className={`w-full font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 transition-all transform active:scale-[0.99] shadow-md mb-2
                ${copied ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-stone-900 hover:bg-stone-800 text-white'}
              `}
                            onClick={handleCopyConfig}
                        >
                            {copied ? <Check size={20} /> : <Copy size={20} />}
                            {copied ? 'コピーしました！' : '構成をコピー'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
