import { useState } from "react";

interface TableData {
  name: string;
  value: string;
}

const TabComponent = () => {
  // State to track active tab and data for the table
  const [activeTab, setActiveTab] = useState<"forex" | "futures">("forex");
  const [tableData, setTableData] = useState<TableData[]>([]);

  // Data for Forex and Futures buttons
  const forexData = [
    { title: "Profit Target", name: "5 000", value: "$1000" },
    { name: "10 000", value: "$2000" },
    { name: "20 000", value: "$3000" },
    { name: "50 000", value: "$4000" },
    { name: "100 000", value: "$5000" },
  ];

  const futuresData = [
    { title: "Profit Target", name: "5 000", value: "$1500" },
    { name: "10 000", value: "$2500" },
    { name: "20 000", value: "$3500" },
    { name: "50 000", value: "$4500" },
    { name: "100 000", value: "$5500" },
  ];

  // Handle button clicks to update the table data
  const handleButtonClick = (data: TableData[]) => {
    setTableData(data);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-2 font-semibold text-lg rounded-tl-lg shadow-md transition-colors ${
            activeTab === "forex"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => {
            setActiveTab("forex");
            setTableData([]);
          }}
        >
          Forex
        </button>
        <button
          className={`px-6 py-2 font-semibold text-lg rounded-tr-lg shadow-md transition-colors ${
            activeTab === "futures"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => {
            setActiveTab("futures");
            setTableData([]);
          }}
        >
          Futures
        </button>
      </div>

      {/* Tab content */}
      <div className="mb-6">
        {activeTab === "forex" ? (
          <div className="flex flex-wrap justify-center gap-2">
            {forexData.map((item, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick([item])}
                className="py-2 px-5 rounded-full shadow-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-2">
            {futuresData.map((item, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick([item])}
                className="py-2 px-5 rounded-full shadow-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Value</th>
            </tr>
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length > 0 ? (
              tableData.map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="py-3 px-4">{item.title}</td>
                  <td className="py-3 px-4">{item.name}</td>
                  <td className="py-3 px-4">{item.value}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} className="py-4 text-center text-gray-500">
                  Select an option to view details
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabComponent;
