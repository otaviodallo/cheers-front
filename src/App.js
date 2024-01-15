import React, { useState, useEffect } from 'react';
import './App.css'
import Logo from './img/mcph.png'
import LogoAfter from './img/after f.jpeg'
import LogoBailinho from './img/bailinho.png'
import LogoBetween from './img/between.png'
import Blackout from './img/blackout.jpeg'
import Muvuca from './img/muvuca.jpeg'
import Open from './img/open.png'
import Sexta12 from './img/sexta12.png'
import Tcc from './img/tcc.jpg'
import VaiPassarMal from './img/vaipassarmal.jpg'
import VibeMaringa from './img/vibe maringa.jpeg'
import CheersPego from './img/CHEERSPEGO.png'
import Furacao2000 from './img/FURACAO2000.jpeg'
import Limonada from './img/LIMONADA LONDRINA.png'
import MegaCalourada from './img/MEGACALOURADA.png'
import PucInRio from './img/pucinrio.jpg'
import Beat from './img/BEAT.png'
import OuroLouco from './img/OUROLOUCO.png'
import Sunset from './img/SUNSET.png'
import Travis from './img/travis.jpg'
import Drake from './img/drake.jpg'
import BarDaCalourada from './img/calouradabar.jpg'
import BarDosGuri from './img/bardosgurio.jpg'
import Cheers from './img/cheers.png'
import cart from './img/carrinho-de-compras.png'
import jacaré from './img/JACARE-9-FOTO-DIVULGACAO-1.webp'

const EventList = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'OURO LOUCO 2024', date: '2024-01-15', image: OuroLouco },
    { id: 2, title: 'SEXTA FEIRA 12', date: '2024-01-16', image: Sexta12 },
    { id: 3, title: 'PUC IN RIO', date: '2024-03-25', image: PucInRio },
    { id: 4, title: 'AI SE EU CHEERS PEGO', date: '2024-01-15', image: CheersPego },
    { id: 5, title: 'MEGA CALOURADA', date: '2024-02-20', image: MegaCalourada },
    { id: 6, title: 'VIBE', date: '2024-03-25', image: VibeMaringa },
    { id: 7, title: 'CALOURADA', date: '2024-01-15', image: MegaCalourada },
    { id: 8, title: 'MC PH NA SHED', date: '2024-02-20', image: Logo },
    { id: 9, title: 'FURACAO 2000', date: '2024-03-25', image: Furacao2000 },
    { id: 10, title: 'SUNSET BAR', date: '2024-01-15', image: Sunset },
    { id: 11, title: 'LIMONADA', date: '2024-02-20', image: Limonada },
    { id: 12, title: 'É OS GURI BAR', date: '2024-03-25', image: BarDosGuri },
    { id: 13, title: 'BAR DA CALOURADA', date: '2024-01-15', image: BarDaCalourada },
    { id: 14, title: 'BEAT', date: '2024-02-20', image: Beat },
    { id: 15, title: 'BETWEEN FRIENDS', date: '2024-03-25', image: LogoBetween },
    { id: 17, title: 'AFTER FORMATURA', date: '2024-02-20', image: LogoAfter },
    { id: 18, title: 'VAIPASSARMAL', date: '2024-03-25', image: VaiPassarMal },
    { id: 20, title: 'TCC IN ROMA', date: '2024-02-20', image: Tcc },
    { id: 22, title: 'BAILINHO', date: '2024-01-15', image: LogoBailinho },
    { id: 23, title: 'TRAVIS SCOTT NA SHED', date: '2024-02-20', image: Travis },
    { id: 24, title: 'DRAKE +55', date: '2024-01-10', image: Drake },
    { id: 25, title: 'OPENSHED', date: '2024-01-13', image: Open },
    { id: 26, title: 'MUVUCA', date: '2024-01-14', image: Muvuca },
    { id: 27, title: 'BLACKOUT', date: '2024-01-11', image: Blackout },
    { id: 28, title: 'MC JACARÉ NA ROTA', date: '2024-01-11', image: jacaré },
  ]);

  const [searchTitle, setSearchTitle] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [filteredByDate, setFilteredByDate] = useState([]);

  const eventosFiltrados = events.filter((event) =>
    event.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  const formatarData = (dateString) => {
    const options = { day: 'numeric', month: 'long' };
    const formattedDate = new Date(dateString).toLocaleDateString('pt-BR', options);
    return formattedDate;
  };

  const DataFormatadaParaComparação = (dateString) => {
    const dateObject = new Date(dateString + 'T00:00:00');
    return dateObject;
  };
  
  const handleFiltroPorData= (date) => {
    const filtroDataFormatado = DataFormatadaParaComparação(date);
    filtroDataFormatado.setDate(filtroDataFormatado.getDate() + 1);
    const filtradoPorData = events.filter((event) => {
      const eventDate = DataFormatadaParaComparação(event.date);
      return eventDate.getTime() === filtroDataFormatado.getTime();
    });
  
    setFilteredByDate(filtradoPorData);
  };

  return (
    <div className="event-list-container">
      <div className='header-decoration'>
        <div>
          <p className='header-decoration-text'>Evento bombando hoje!</p>
          <button className='header-decoration-button'>Saber Mais</button>
        </div>
      </div>
      <div className='main-header'>
        <h1><img src={Cheers} /></h1>
        <ul className='header-pc'>
          <li>Venda na Cheers</li>
          <li>Indique Parceiros</li>
          <li>Central de Ajuda</li>
          <li>Páginas</li>
          <li>Eventos</li>
          <li><img src={cart} /></li>
        </ul>
      </div>
      <div className='event-filters'>
        <div className='title-events'>
          <input
            type="text"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className='input-title'
            placeholder='Pesquise por Eventos'
          />
        </div>
        <div className='data-events'>
          <label>Ver eventos por data:</label>
          <input
            type="date"
            value={filterDate}
            className='input-date'
            onChange={(e) => {
              setFilterDate(e.target.value);
              handleFiltroPorData(e.target.value);
            }}
          />
        </div>
      </div>
      <ul className="event-list">
        {filterDate ? (
          filteredByDate.map((event) => (
            <li key={event.id} className="event-item">
              <img src={event.image} alt={event.title} />
              <div className='event-infos'>
                <div className='event-info-title'>{event.title}</div>
                <div className='event-info-date'>{formatarData(event.date)}</div>
              </div>
            </li>
          ))
        ) : (
          eventosFiltrados.map((event) => (
            <li key={event.id} className="event-item">
              <img src={event.image} alt={event.title} />
              <div className='event-infos'>
                <div className='event-info-title'>{event.title}</div>
                <div className='event-info-date'>{formatarData(event.date)}</div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default EventList;