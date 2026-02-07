import { useState } from 'react';
import { ChevronDown, ChevronRight, Info } from 'lucide-react';

interface ClassifierItem {
  id: string;
  code: string;
  name: string;
  resourceType: string;
  measureUnit: string;
  status: string;
  hasChildren?: boolean;
  level: number;
}

const mockData: ClassifierItem[] = [
  {
    id: '1',
    code: '01.01.01-001',
    name: 'Грунт: песок',
    resourceType: 'Грунт, песок, гравий',
    measureUnit: 'тонна',
    status: 'Активно',
    level: 0,
  },
  {
    id: '2',
    code: '01.01.01-002',
    name: 'Грунт: глина',
    resourceType: 'Грунт, песок, гравий',
    measureUnit: 'тонна',
    status: 'Активно',
    level: 0,
  },
  // Add more items as needed
];

export default function ConstructionClassifier() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            QURILISH RESURSLARI KLASSIFIKATORI
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow">
          {/* Sidebar and Table Container */}
          <div className="flex">
            {/* Left Sidebar */}
            <div className="w-64 border-r bg-gray-50 p-4">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-700 mb-4">
                  Qidiruv
                </div>
                <input
                  type="text"
                  placeholder="Qidiruv so'zi kiriting"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Resurs kodi yoki nomi yozing"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Tree Navigation */}
                <div className="mt-6 space-y-1">
                  <TreeItem
                    label="Klassifikator 01 - Материалы для строительства и ремонта зданий"
                    level={0}
                  />
                  <TreeItem
                    label="Klassifikator 02 - Бетоны, товарные бетонные смеси, Грунты, Камни"
                    level={0}
                  />
                  <TreeItem
                    label="Klassifikator 03 - Грунт, Песок, Гравий"
                    level={0}
                  />
                </div>
              </div>
            </div>

            {/* Main Table */}
            <div className="flex-1 overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      №
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Resurs kodi 1
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Resurs nomi 2
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      O'lchov birligi
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Holati
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Amallar
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {mockData.map((item, index) => (
                    <tr
                      key={item.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 text-sm text-blue-600">
                        {item.code}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {item.resourceType}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900">
                        {item.measureUnit}
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {item.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button className="text-blue-600 hover:text-blue-800">
                          <Info className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex items-center justify-between px-4 py-3 border-t bg-white">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Sahifa:</span>
                  <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">
                    1
                  </button>
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded">
                    2
                  </button>
                  <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 text-sm border rounded hover:bg-gray-50">
                    Keyingi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TreeItem({ label, level }: { label: string; level: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div style={{ paddingLeft: `${level * 12}px` }}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 py-1 w-full text-left"
      >
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 flex-shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
        )}
        <span className="text-xs">{label}</span>
      </button>
    </div>
  );
}
