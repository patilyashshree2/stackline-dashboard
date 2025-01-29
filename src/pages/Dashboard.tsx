import React from 'react';
import Header from '../components/Header';
import ProductOverview from '../components/ProductOverview';
import SalesChart from '../components/SalesChart';
import SalesTable from '../components/SalesTable';

const Dashboard: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />
            <div className="container mx-auto p-4">
                <ProductOverview />
                <SalesChart />
                <SalesTable />
            </div>
        </div>
    );
};

export default Dashboard;
