import React from 'react';

const OrdersList = ({ orders, onDelete } ) => {

  console.log("las ordenes son: ",orders); // Verifica cómo se llama el ID en el objeto order

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        {/* Título */}
        <h2 className="text-2xl font-bold mb-4">Tus pedidos</h2>

        {/* Si no hay pedidos */}
        {orders.length === 0 ? (
          <p className="text-gray-500">No tienes pedidos programados.</p>
        ) : (
          <div>
            {/* Listado de pedidos */}
            {orders.map((order, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:pb-0"
              >
                {/* Información del pedido */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-lg">{order.deliveryDestination.label}</p>
                    <p className="text-gray-500">Fecha: {order.pickupDateTime}</p>
                  </div>
                  <p className="font-semibold text-indigo-600">
                    {order.price} COP
                  </p>
                </div>

                {/* Mapa o dirección */}
                <div className="mt-2 text-sm text-gray-600">
                  Ruta: {order.route}
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Estado: {order.status}
                </div>
                 {/* Botón eliminar solo si el estado es 'creado' o 'pendiente' */}
                 {["Pendiente"].includes(order.status) && (
                  
                    <button
                      onClick={() => onDelete(order._id)}
                      className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Eliminar pedido
                    </button>
                    )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersList;