import Link from 'next/link';

export default function DocumentsPage() {
  const documents = [
    {
      id: 1,
      title: 'Building Committee Bylaws',
      category: 'Regulations',
      date: '2024-01-01',
      size: '156 KB',
      downloadUrl: '/documents/bylaws.pdf'
    },
    {
      id: 2,
      title: 'Property Service Contract Template',
      category: 'Contracts',
      date: '2024-02-15',
      size: '234 KB',
      downloadUrl: '/documents/contract.pdf'
    },
    {
      id: 3,
      title: '2024 Property Management Fee Standards',
      category: 'Fee Standards',
      date: '2024-03-01',
      size: '89 KB',
      downloadUrl: '/documents/fees.pdf'
    },
    {
      id: 4,
      title: 'Renovation Management Regulations',
      category: 'Regulations',
      date: '2024-03-15',
      size: '178 KB',
      downloadUrl: '/documents/renovation.pdf'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Document Downloads</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-800">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg font-medium text-gray-900">Available Documents</h2>
            <p className="mt-1 text-sm text-gray-500">
              List of all available property management documents for download
            </p>
          </div>
          <div className="border-t border-gray-200">
            <ul role="list" className="divide-y divide-gray-200">
              {documents.map((doc) => (
                <li key={doc.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-sm font-medium text-gray-900">{doc.title}</h3>
                          <div className="mt-1 flex items-center text-sm text-gray-500">
                            <span>{doc.category}</span>
                            <span className="mx-2">•</span>
                            <span>{doc.date}</span>
                            <span className="mx-2">•</span>
                            <span>{doc.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href={doc.downloadUrl}
                        className="font-medium text-blue-600 hover:text-blue-500"
                        download
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
} 