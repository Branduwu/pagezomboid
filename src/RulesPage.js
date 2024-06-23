import React from 'react';
import './RulesPage.css';
import imagenFondoReglas from './assets/imagenfondoreglas.jpg';

const RulesPage = () => {
  return (
    <div className="rules-page" style={{ backgroundImage: `url(${imagenFondoReglas})` }}>
      <div className="rules-content">
        <h1>Reglas de Facción</h1>
        <p>Para poder tener su nombre de facción como rol, canal de voz y texto en discord tienen que ser mas de 3 personas activas y 4 integrantes como mínimo.</p>
        <h2>Límite de integrantes:</h2>
        <ul>
          <li>Mínimo: 2 Jugadores.</li>
          <li>Máximo: 7 Jugadores.</li>
        </ul>
        <p>Puedes publicar tu facción en ⁠⁠Sin acceso aunque estés nada más tú, esto es, claramente, para que la gente sepa que tu facción existe y se pueda unir.</p>
        <p>No se permite que más de una facción esté viviendo en el mismo refugio, se pueden aliar si tienen un enemigo en común o se llevan bien entre ustedes, pero no se pueden "mudar juntos".</p>
        <h2>FACCION PVP:</h2>
        <p>Debe establecerse en ZONA PVP.</p>
        <h2>FACCION PVE:</h2>
        <p>Debe establecerse en ZONA PVE. Si los refugios tienen más de 30 coches, se les dará un aviso para que los muevan o los desmantelen. Después de 24 horas si el número sigue mayor a 30, llamaremos a la grúa y se llevarán coches al azar, hasta que queden 30. Esos coches remolcados se dejarán en las tiendas más cercanas por si algún superviviente u otra facción los necesita.</p>
        <h2>Reglas de Facción de Project Zomboid</h2>
        <h2>Requisitos para Crear una Facción:</h2>
        <p>Para poder tener el nombre de tu facción como rol canales de voz y texto en Discord, debe haber más de 5 personas activas y un mínimo de 5 integrantes. Puedes publicar tu facción en ⁠『🏴』facciones⭑pz ⁠aunque solo seas tú. Esto permite que otros jugadores sepan de la existencia de tu facción y puedan unirse.</p>
        <h2>Límite de Integrantes y Vehículos:</h2>
        <ul>
          <li>Mínimo: 2 jugadores.</li>
          <li>Máximo: 10 jugadores.</li>
          <li>Máximo 30 vehículos.</li>
        </ul>
        <h2>Publicación de Facciones:</h2>
        <p>Aunque estés solo, puedes anunciar tu facción en ⁠⁠『🏴』facciones⭑pz para que otros jugadores la conozcan y puedan unirse.</p>
        <h2>Facciones PVP:</h2>
        <p>Las facciones orientadas al PVP (Jugador contra Jugador) deben establecerse en la Zona PVP.</p>
        <h2>Facciones PVE:</h2>
        <p>Las facciones orientadas al PVE (Jugador contra Entorno) deben establecerse en la Zona PVE.</p>
        <h2>Conducta y Alianzas:</h2>
        <p>Se espera que las facciones mantengan una conducta respetuosa tanto dentro como fuera del juego. Las alianzas entre facciones deben ser declaradas en el canal correspondiente para evitar malentendidos.</p>
        <h2>Conflictos entre Facciones:</h2>
        <p>Los conflictos deben resolverse de manera justa y respetuosa. Cualquier disputa que no pueda resolverse entre las facciones involucradas puede ser llevada a los moderadores para una mediación.</p>
        <h2>Eventos y Competencias:</h2>
        <p>Las facciones pueden participar en eventos y competencias organizados por el servidor. Las reglas específicas de cada evento serán anunciadas con anticipación y deben ser seguidas al pie de la letra.</p>
        <h2>Inactividad:</h2>
        <p>Si una facción cae por debajo de los requisitos mínimos de actividad, perderá su rol y canales en Discord hasta que vuelva a cumplir con los requisitos.</p>
      </div>
      <div className="back-button">
        <a href="/">Regresar al Home</a>
      </div>
    </div>
  );
};

export default RulesPage;
