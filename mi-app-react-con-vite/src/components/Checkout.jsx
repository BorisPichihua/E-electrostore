import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();

  // Estado para los detalles de envío y el pago
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('');

  // Función para manejar los cambios en el formulario de detalles de envío
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Función para manejar el cambio del método de pago
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Detalles de Envío:', shippingDetails);
    console.log('Método de Pago:', paymentMethod);
    navigate('/carrito'); // Redirige al componente Carrito
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Detalles de Envío</h3>
        <div>
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={shippingDetails.name}
            onChange={handleShippingChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Dirección:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={shippingDetails.address}
            onChange={handleShippingChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">Ciudad:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={shippingDetails.city}
            onChange={handleShippingChange}
            required
          />
        </div>
        <div>
          <label htmlFor="zipCode">Código postal:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={shippingDetails.zipCode}
            onChange={handleShippingChange}
            required
          />
        </div>
        <div>
          <label htmlFor="country">País:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={shippingDetails.country}
            onChange={handleShippingChange}
            required
          />
        </div>

        <h3>Medios de Pago</h3>
        <div>
          <label>
            <input
              type="radio"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={handlePaymentChange}
            />
            Tarjeta de Crédito/Débito
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={handlePaymentChange}
            />
            PayPal
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="bankTransfer"
              checked={paymentMethod === 'bankTransfer'}
              onChange={handlePaymentChange}
            />
            Transferencia Bancaria
          </label>
        </div>

        <button type="submit">Proceder con la compra</button>
      </form>
    </div>
  );
}

export default Checkout;
