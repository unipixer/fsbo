import React from 'react';
import { FileText, User, Calendar, MapPin, DollarSign, CheckCircle } from 'lucide-react';

const VehiclePackets: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-5 bg-gray-100">
      {/* Page Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="text-[22px] font-bold text-gray-900 leading-tight">Vehicle Packets</h1>
          <p className="text-gray-500 text-xs mt-0.5">
            Complete vehicle information packets
          </p>
        </div>
      </div>

      {/* Vehicle Packet */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">2019 Ford F-150</h3>
            <p className="text-sm text-gray-500">VIN: 1FTEW1E54KFA12345</p>
          </div>
          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Complete</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <User size={16} color="#6b7280" />
            <div>
              <div className="text-xs text-gray-500">Buyer</div>
              <div className="text-sm font-medium text-gray-900">James Wilson</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} color="#6b7280" />
            <div>
              <div className="text-xs text-gray-500">Request Date</div>
              <div className="text-sm font-medium text-gray-900">May 10, 2025</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign size={16} color="#6b7280" />
            <div>
              <div className="text-xs text-gray-500">Price</div>
              <div className="text-sm font-medium text-gray-900">$14,500</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} color="#6b7280" />
            <div>
              <div className="text-xs text-gray-500">Location</div>
              <div className="text-sm font-medium text-gray-900">Dallas, TX</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Vehicle Details</h4>
          <div className="grid grid-cols-4 gap-3">
            <div>
              <div className="text-xs text-gray-500">Year</div>
              <div className="text-sm font-medium text-gray-900">2019</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Make</div>
              <div className="text-sm font-medium text-gray-900">Ford</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Model</div>
              <div className="text-sm font-medium text-gray-900">F-150</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Mileage</div>
              <div className="text-sm font-medium text-gray-900">45,000</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Trim</div>
              <div className="text-sm font-medium text-gray-900">XLT</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Engine</div>
              <div className="text-sm font-medium text-gray-900">3.5L V6</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Transmission</div>
              <div className="text-sm font-medium text-gray-900">Automatic</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Drivetrain</div>
              <div className="text-sm font-medium text-gray-900">4WD</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Seller Information</h4>
          <div className="text-sm text-gray-900">John Smith</div>
          <div className="text-sm text-gray-500">Dallas, TX</div>
        </div>

        <div className="border-t border-gray-200 pt-4 mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Buyer Notes</h4>
          <p className="text-sm text-gray-600">Seller mentioned regular maintenance. No accidents reported. Clean title available.</p>
        </div>
      </div>
    </div>
  );
};

export default VehiclePackets;
