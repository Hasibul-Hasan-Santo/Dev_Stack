import type { Datatype } from "./Datatype";

interface Sidebartypes {
    selectedTech: Datatype[];
    onRemove: (id: string) => void;
    onClearAll: () => void;
}

export default function Sidebar({ selectedTech, onRemove, onClearAll }: Sidebartypes) {
    return (
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm sticky top-6">
            <h3 className="font-bold text-gray-900 text-lg mb-1">Your Stack</h3>
            <p className="text-xs text-gray-400 mb-4">
                {selectedTech.length} Technology Selected
            </p>

            <div className="space-y-3 mb-4">
                {selectedTech.length === 0 ? (
                    <p className="text-sm text-gray-400 text-center py-4">
                        No Technology selected yet.
                    </p>
                ) : (
                    selectedTech.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-2.5 rounded-xl border border-gray-100 bg-gray-50/50"
                        >
                            <div className="flex items-center gap-2.5">
                                <img
                                    src={item.icon}
                                    alt={item.name}
                                    className="w-6 h-6 object-contain"
                                />
                                <span className="text-sm font-semibold text-gray-800">
                                    {item.name}
                                </span>
                            </div>
                            <button
                                onClick={() => onRemove(item.id)}
                                className="text-gray-400 hover:text-red-500 font-bold px-1.5 py-0.5 text-xs"
                            >
                                ✕
                            </button>
                        </div>
                    ))
                )}
            </div>

            {selectedTech.length > 0 && (
                <button
                    onClick={onClearAll}
                    className="w-full py-2 px-4 rounded-xl text-sm font-medium text-red-600 bg-red-50 border border-red-100 hover:bg-red-100 transition-colors"
                >
                    Remove All
                </button>
            )}
        </div>
    );
}