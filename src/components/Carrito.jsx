import React, { useState } from 'react';
import '../index.css';

function Carrito() {
    return (
      <div className="payment-container">
        <form className="payment-form">
          <div className="input-group">
            <label htmlFor="card-number">
              <i className="icon icon-card"></i> Número de Tarjeta
            </label>
            <input type="text" id="card-number" placeholder="Número de Tarjeta" />
          </div>
  
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="expiry-date">
                <i className="icon icon-calendar"></i> MM/AA
              </label>
              <input type="text" id="expiry-date" placeholder="MM/AA" />
            </div>
  
            <div className="input-group">
              <label htmlFor="cvv">
                <i className="icon icon-cvv"></i> CVV
              </label>
              <input type="text" id="cvv" placeholder="CVV" />
            </div>
          </div>
  
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="first-name">
                <i className="icon icon-user"></i> Nombre
              </label>
              <input type="text" id="first-name" placeholder="Nombre" />
            </div>
  
            <div className="input-group">
              <label htmlFor="last-name">
                <i className="icon icon-user"></i> Apellido
              </label>
              <input type="text" id="last-name" placeholder="Apellido" />
            </div>
          </div>
  
          <div className="input-group">
            <label htmlFor="email">
              <i className="icon icon-email"></i> Email
            </label>
            <input type="email" id="email" placeholder="Email" />
          </div>
  
          <div className="input-group checkbox-group">
            <input type="checkbox" id="remember-card" />
            <label htmlFor="remember-card">
              <i className="icon icon-info"></i> Recordar Tarjeta
            </label>
          </div>
  
          <button type="submit" className="submit-button">Pagar</button>
  
          <div className="security-info">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZcZbxIfAZf2EBPsxQockOt9UCczvO5yBTOA&s" alt="PCI Security Standards" />
            <img src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-1992.png" alt="Visa" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99dCCJ9huFhTfsjoIrE4Au-Z97RxHmbzmZA&s" alt="Mastercard" />
            <img src="https://logos-world.net/wp-content/uploads/2020/11/American-Express-Logo.png" alt="American Express" />
          </div>
        </form>
      </div>
    );
  }
  
  export default Carrito;