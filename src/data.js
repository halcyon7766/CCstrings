// カラーパレット
export const COLORS = [
    { id: 'white', name: '白', hex: '#F3F4F6', border: '#D1D5DB' },
    { id: 'pink', name: 'ピンク', hex: '#F9A8D4', border: 'transparent' },
    { id: 'gold', name: '金', hex: '#D97706', border: 'transparent' },
    { id: 'yellow_ochre', name: '山吹', hex: '#EAB308', border: 'transparent' },
    { id: 'khaki', name: 'カーキ', hex: '#A3A375', border: 'transparent' },
    { id: 'brown', name: '茶', hex: '#5D4037', border: 'transparent' },
    { id: 'grey', name: 'グレー', hex: '#4B5563', border: 'transparent' },
    { id: 'black', name: '黒', hex: '#1F2937', border: 'transparent' },
    { id: 'blue', name: '青', hex: '#2563EB', border: 'transparent' },
    { id: 'cyan', name: '水色', hex: '#06B6D4', border: 'transparent' },
    { id: 'navy', name: '紺', hex: '#1E3A8A', border: 'transparent' },
    { id: 'royal', name: 'ロイヤルブルー', hex: '#3B82F6', border: 'transparent' },
    { id: 'purple', name: '藤', hex: '#A855F7', border: 'transparent' },
    { id: 'dark_green', name: '深緑', hex: '#064E3B', border: 'transparent' },
    { id: 'moss', name: '苔', hex: '#3F6212', border: 'transparent' },
    { id: 'teal', name: '青緑', hex: '#0F766E', border: 'transparent' },
    { id: 'slate', name: '鉄御納戸', hex: '#475569', border: 'transparent' },
    { id: 'wine', name: 'エンジ', hex: '#881337', border: 'transparent' },
    { id: 'red', name: '赤', hex: '#DC2626', border: 'transparent' },
];

export const HINOWA_COLORS = [
    { id: 'red', name: '赤', hex: '#DC2626', border: 'transparent' },
];

// すべての色IDのリスト（デフォルト用）
const ALL_COLOR_IDS = COLORS.map(c => c.id);

// 弦の素材リスト
// availableColors: この素材で選択可能な色のIDリスト
// 必要に応じてIDを削除・追加することで制御可能
export const MATERIALS = [
    { id: 'mercury2', name: 'マーキュリー2', availableColors: ALL_COLOR_IDS },
    { id: 'x99', name: 'x99', availableColors: ['white', 'black', 'brown'] },
    { id: 'carrera_v75', name: 'カレーラv75', availableColors: ALL_COLOR_IDS },
    { id: 'carrera_one320', name: 'カレーラOne320', availableColors: ALL_COLOR_IDS },
    { id: '8125', name: '8125', availableColors: ALL_COLOR_IDS },
    { id: '452xtra', name: '452Xtra', availableColors: ALL_COLOR_IDS },
    { id: '652', name: '652', availableColors: ALL_COLOR_IDS },
    { id: 'fastflight', name: 'ファストフライト', availableColors: ALL_COLOR_IDS },
    { id: 'dynagen', name: 'ダイナゲン', availableColors: ALL_COLOR_IDS },
    { id: 'majesty777', name: 'マジェスティ777', availableColors: ALL_COLOR_IDS },
];

// 弓の長さリスト
export const BOW_LENGTHS = [
    '三寸詰',
    '並',
    '伸',
    '四寸伸'
];

// 弦の太さリスト
export const THICKNESSES = [
    { id: 'thin', name: '細' },
    { id: 'medium', name: '中' },
    { id: 'thick', name: '太' },
];

// 弓の強さリスト (6kg - 40kg)
export const BOW_STRENGTHS = Array.from({ length: 35 }, (_, i) => i + 6);
