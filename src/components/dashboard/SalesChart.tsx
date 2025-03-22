import React from 'react';
import Card from '../ui/Card';

interface SalesChartProps {
  data: { date: string; amount: number }[];
}

const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  // In a real implementation, you would use a charting library like Chart.js or Recharts
  // For this example, we'll create a simple visual representation
  
  const maxAmount = Math.max(...data.map(item => item.amount), 1);
  
  return (
    <Card title="Sales Last 7 Days" className="h-full">
      <div className="h-64 flex items-end space-x-2">
        {data.map((item, index) => {
          const height = (item.amount / maxAmount) * 100;
          const date = new Date(item.date);
          const day = date.toLocaleDateString('en-US', { weekday: 'short' });
          
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className="w-full bg-primary-200 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
              <div className="mt-2 text-xs text-gray-500">{day}</div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex justify-between">
        <div className="text-sm text-gray-500">
          Total: ${data.reduce((sum, item) => sum + item.amount, 0).toFixed(2)}
        </div>
      </div>
    </Card>
  );
};

export default SalesChart;
